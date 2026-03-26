/** @format */

import { type Product } from "../../mocks/mockData";

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  // 分割价格的整数和小数部分（如果 mock 数据中带有小数点）
  const priceStr = product.price.toString();
  const [intPrice, decPrice] = priceStr.split(".");

  return (
    <div className="flex bg-white p-3">
      {/* 左侧商品图 */}
      <div className="w-[110px] h-[110px] shrink-0 mr-3 relative bg-[#f9f9f9] rounded-md overflow-hidden flex items-center justify-center">
        {/* 占位图提示 */}
        {!product.imageUrl && (
          <div className="absolute inset-0 flex items-center justify-center text-gray-300 text-xs">
            暂无图片
          </div>
        )}

        {/* 实际图片 */}
        {product.imageUrl && (
          <img
            src={product.imageUrl}
            alt={product.name}
            loading="lazy"
            // 核心修改：改为 w-full h-full 让图片撑满容器，object-contain 保证商品比例正常
            className="w-full h-full object-contain mix-blend-multiply"
          />
        )}
      </div>

      {/* 右侧商品信息 */}
      <div className="flex-1 flex flex-col justify-between min-w-0">
        <div>
          {/* 标题与自营标签 */}
          <h3 className="text-[15px] font-bold text-text-main leading-snug truncate">
            <span className="inline-block bg-brand-red text-white text-[10px] px-1 py-0.5 rounded-[2px] mr-1 font-bold leading-none align-middle relative -top-px">
              自营
            </span>
            {product.name}
          </h3>

          {/* 服务标签 (如：国家补贴) */}
          <div className="flex flex-wrap gap-1 mt-1.5">
            {product.featureTags?.map((tag, index) => {
              const isNationalSubsidy = tag === "国家补贴";
              const displayText =
                isNationalSubsidy && product.subsidyAmount
                  ? `国家补贴·领后减${product.subsidyAmount}元`
                  : tag;

              return (
                <span
                  key={index}
                  className={`text-[10px] px-1 py-0.5 rounded-sm leading-none border ${
                    isNationalSubsidy
                      ? "text-brand-green border-brand-green font-bold"
                      : "text-brand-red border-brand-red"
                  }`}
                >
                  {displayText}
                </span>
              );
            })}
          </div>
        </div>

        {/* 底部价格与按钮区域 */}
        <div className="flex items-stretch justify-between mt-2 h-[34px] w-full bg-[#FFF4F4] rounded-md overflow-hidden relative">
          {/* 价格 */}
          <div className="text-[#FF4142] pl-2 flex items-baseline pt-2 pb-1 relative z-10">
            <span className="text-[12px] font-bold mr-0.5">
              ¥
            </span>
            <span className="text-[20px] font-bold leading-none">
              {intPrice}
            </span>
            {decPrice && (
              <span className="text-[13px] font-bold">
                .{decPrice}
              </span>
            )}
          </div>

          {/* 右侧：向左倾斜的向下箭头 + 抢按钮 */}
          <div className="relative flex items-stretch shrink-0">
            {/* 补缝底色：连接箭头和按钮的渐变背景 */}
            <div
              className="absolute left-0 top-0 bottom-0 w-[30px] bg-linear-to-b from-[#FF5A5A] to-[#FF2A2A] z-0"
              style={{
                clipPath:
                  "polygon(20px 0, 100% 0, 100% 100%, 0 100%)",
              }}
            />

            {/* 独立绘制的左倾向下粗箭头 */}
            <div
              className="w-[28px] h-full bg-linear-to-b from-[#ffbbbb] to-[#f73f3f] relative z-10"
              style={{
                clipPath:
                  "polygon(65% 0%, 95% 0%, 65% 50%, 90% 50%, 0% 100%, 10% 50%, 35% 50%)",
              }}
            />

            {/* 按钮主体 */}
            <button className="bg-linear-to-b from-[#FF5A5A] to-[#FF2A2A] text-white pl-1 pr-3.5 flex items-center justify-center font-bold text-[15px] relative z-10">
              抢
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
