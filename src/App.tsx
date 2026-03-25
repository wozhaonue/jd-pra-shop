/** @format */

import { mockBrands, mockProducts } from "./mocks/mockData";
import { Header } from "./components/Header";
import { ContentLayout } from "./components/ContentLayout";

function App() {
  console.log("加载到的品牌数据:", mockBrands);
  console.log("加载到的商品数据:", mockProducts);

  // 临时构造侧边栏和内容区的占位数据以验证滚动
  const renderSidebarPlaceholder = () => (
    <div className="py-2">
      {Array.from({ length: 30 }).map((_, i) => (
        <div
          key={i}
          className="h-12 flex items-center justify-center text-sm text-text-sub border-b border-gray-200"
        >
          品牌 {i + 1}
        </div>
      ))}
    </div>
  );

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
        sidebar={renderSidebarPlaceholder()}
        content={renderContentPlaceholder()}
      />
    </div>
  );
}

export default App;
