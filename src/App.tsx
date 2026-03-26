/** @format */
import { useState, useMemo, useCallback } from "react";
import { mockBrands, mockProducts } from "./mocks/mockData";
import { Header } from "./components/Header";
import { ContentLayout } from "./components/ContentLayout";
import { Sidebar } from "./components/Sidebar";
import { ProductCard } from "./components/ProductCard";
import { useInfiniteScroll } from "./hooks/useInfiniteScroll";
import { activityTags } from "./mocks/headerData";

function App() {
  // 核心状态 1：当前选中的品牌 ID。null 代表全选
  const [currentBrandId, setCurrentBrandId] = useState<
    string | null
  >(null);

  // 核心状态 2：当前选中的活动标签 ID
  const [activeTagId, setActiveTagId] = useState<string>(
    activityTags[0].id,
  );

  // 分页相关常量
  const PAGE_SIZE = 8;
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  // 衍生状态：根据选中的标签和品牌，计算出过滤后的全量商品数组
  const filteredProducts = useMemo(() => {
    let products = mockProducts;

    // 1. 标签筛选
    const activeTagName = activityTags.find(
      (t) => t.id === activeTagId,
    )?.name;
    if (activeTagName) {
      products = products.filter((p) =>
        p.featureTags?.includes(activeTagName),
      );
    }

    // 2. 品牌筛选
    if (currentBrandId) {
      const brandName = mockBrands.find(
        (b) => b.id === currentBrandId,
      )?.name;
      if (brandName) {
        // 通过商品名称筛选：特殊处理 Apple 对应 iPhone 的情况，其余直接使用品牌名进行模糊匹配
        const searchKeyword =
          brandName === "Apple" ? "iPhone" : brandName;
        products = products.filter((p) =>
          p.name.includes(searchKeyword),
        );
      }
    }

    return products;
  }, [currentBrandId, activeTagId]);

  // 衍生状态：当前应该渲染在列表中的商品数组
  const visibleProducts = useMemo(() => {
    return filteredProducts.slice(0, page * PAGE_SIZE);
  }, [filteredProducts, page]);

  // 衍生状态：是否还有更多数据
  const hasMore =
    visibleProducts.length < filteredProducts.length;

  // 加载更多函数
  const loadMore = useCallback(() => {
    if (loading || !hasMore) return;
    setLoading(true);
    // 模拟网络请求延迟
    setTimeout(() => {
      setPage((prev) => prev + 1);
      setLoading(false);
    }, 500);
  }, [loading, hasMore]);

  const { loadMoreRef, scrollContainerRef, resetScroll } =
    useInfiniteScroll({
      onLoadMore: loadMore,
      hasMore,
      loading,
      rootMargin: "200px",
    });

  // 处理标签切换
  const handleTagSelect = useCallback(
    (tagId: string) => {
      setActiveTagId(tagId);
      setPage(1);
      resetScroll();
    },
    [resetScroll],
  );

  // 处理品牌切换
  const handleBrandSelect = useCallback(
    (brandId: string | null) => {
      setCurrentBrandId(brandId);
      setPage(1);
      resetScroll();
    },
    [resetScroll],
  );

  // 渲染商品列表
  const renderProductList = () => (
    <div
      ref={scrollContainerRef}
      className="bg-white min-h-full pb-4"
    >
      {visibleProducts.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}

      {/* 底部加载指示器 / 触底元素 */}
      <div
        ref={loadMoreRef}
        className="h-10 flex items-center justify-center text-gray-400 text-sm"
      >
        {loading ? (
          <span>加载中...</span>
        ) : hasMore ? (
          <span>下拉加载更多</span>
        ) : (
          <span>没有更多商品了</span>
        )}
      </div>
    </div>
  );

  return (
    <div className="flex flex-col h-screen bg-bg-page">
      {/* 顶部组件 */}
      <Header
        activeTagId={activeTagId}
        onTagSelect={handleTagSelect}
      />

      {/* 主体左右分栏布局 */}
      <ContentLayout
        sidebar={
          <Sidebar
            brands={mockBrands}
            activeBrandId={currentBrandId}
            onBrandSelect={handleBrandSelect}
          />
        }
        content={renderProductList()}
      />
    </div>
  );
}

export default App;
