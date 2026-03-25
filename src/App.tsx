/** @format */
import { useState } from "react";
import { mockBrands, mockProducts } from "./mocks/mockData";
import { Header } from "./components/Header";
import { ContentLayout } from "./components/ContentLayout";
import { Sidebar } from "./components/Sidebar";

function App() {
  // 临时状态：当前选中的品牌 ID
  const [currentBrandId, setCurrentBrandId] = useState<
    string | null
  >(null);

  const renderContentPlaceholder = () => (
    <div className="p-3">
      {Array.from({ length: 20 }).map((_, i) => (
        <div
          key={i}
          className="h-32 mb-3 bg-gray-100 rounded-lg flex items-center justify-center text-gray-400"
        >
          商品卡片占位 {i + 1}
        </div>
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
        content={renderContentPlaceholder()}
      />
    </div>
  );
}

export default App;
