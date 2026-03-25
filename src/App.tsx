/** @format */

import { mockBrands, mockProducts } from "./mocks/mockData";

function App() {
  console.log("加载到的品牌数据:", mockBrands);
  console.log("加载到的商品数据:", mockProducts);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-bg-page">
      <div className="bg-brand-red text-white p-4 m-4 rounded-lg shadow-md text-center font-bold">
        目录结构搭建 & Mock 数据移入成功！
      </div>
      <p className="text-text-sub text-sm">
        请查看浏览器控制台 (Console) 验证 Mock
        数据是否打印。
      </p>
    </div>
  );
}

export default App;
