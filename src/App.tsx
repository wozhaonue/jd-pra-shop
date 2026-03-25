/** @format */
import { useState, useMemo, useEffect } from "react";
import {
  mockBrands,
  mockProducts,
  type Product,
} from "./mocks/mockData";
import { Header } from "./components/Header";
import { ContentLayout } from "./components/ContentLayout";
import { Sidebar } from "./components/Sidebar";
import { ProductCard } from "./components/ProductCard";

function App() {
  // 核心状态 1：当前选中的品牌 ID。null 代表全选
  const [currentBrandId, setCurrentBrandId] = useState<
    string | null
  >(null);

  // 核心状态 2：当前应该渲染在列表中的商品数组
  const [visibleProducts, setVisibleProducts] = useState<
    Product[]
  >([]);

  // 衍生状态：根据选中的品牌，计算出过滤后的全量商品数组
  const filteredProducts = useMemo(() => {
    if (!currentBrandId) return mockProducts;

    // 从 mockBrands 找出对应的品牌名称
    const brandName = mockBrands.find(
      (b) => b.id === currentBrandId,
    )?.name;
    if (!brandName) return mockProducts;

    return mockProducts.filter(
      (p) => p.brand === brandName,
    );
  }, [currentBrandId]);

  // 分页相关常量
  const PAGE_SIZE = 8;

  // 当过滤后的数据发生变化（如切换品牌）时，重置可见商品列表为第一页数据
  useEffect(() => {
    setVisibleProducts(
      filteredProducts.slice(0, PAGE_SIZE),
    );
  }, [filteredProducts]);

  // 渲染商品列表
  const renderProductList = () => (
    <div className="bg-white min-h-full">
      {visibleProducts.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );

  return (
    <div className="flex flex-col h-screen bg-bg-page">
      {/* 顶部组件 */}
      <Header />

      {/* 主体左右分栏布局 */}
      <ContentLayout
        sidebar={
          <Sidebar
            brands={mockBrands}
            activeBrandId={currentBrandId}
            onBrandSelect={setCurrentBrandId}
          />
        }
        content={renderProductList()}
      />
    </div>
  );
}

export default App;
