/** @format */
import { useState } from "react";
import { mockBrands, mockProducts } from "./mocks/mockData";
import { Header } from "./components/Header";
import { ContentLayout } from "./components/ContentLayout";
import { Sidebar } from "./components/Sidebar";
import { ProductCard } from "./components/ProductCard";

function App() {
  // 临时状态：当前选中的品牌 ID
  const [currentBrandId, setCurrentBrandId] = useState<
    string | null
  >(null);

  // 渲染商品列表 (临时直接渲染全部 mockProducts，不加过滤和分页)
  const renderProductList = () => (
    <div className="p-2 bg-bg-page min-h-full">
      {mockProducts.map((product) => (
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
