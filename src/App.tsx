/** @format */

import { mockBrands, mockProducts } from "./mocks/mockData";
import { Header } from "./components/Header";

function App() {
  console.log("加载到的品牌数据:", mockBrands);
  console.log("加载到的商品数据:", mockProducts);

  return (
    <div className="flex flex-col min-h-screen bg-bg-page">
      {/* 顶部组件 */}
      <Header />

      {/* 主体内容区占位 */}
      <main className="flex-1 flex flex-col items-center justify-center">
        <div className="bg-brand-red text-white p-4 m-4 rounded-lg shadow-md text-center font-bold">
          阶段 2：Header 组件开发成功！
        </div>
        <p className="text-text-sub text-sm">
          请尝试左右滑动上方的活动标签。
        </p>
      </main>
    </div>
  );
}

export default App;
