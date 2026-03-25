import { type Product } from '../../mocks/mockData';

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="flex bg-white rounded-lg p-3 mb-3 border-b border-gray-100 last:border-b-0">
      {/* 左侧商品图 */}
      <div className="w-[100px] h-[100px] shrink-0 mr-3 relative bg-[#f9f9f9] rounded-md overflow-hidden">
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
            className="w-full h-full object-contain mix-blend-multiply"
          />
        )}
      </div>

      {/* 右侧商品信息 */}
      <div className="flex-1 flex flex-col justify-between min-w-0">
        <div>
          {/* 标题与自营标签 */}
          <h3 className="text-[15px] font-medium text-text-main leading-snug line-clamp-2">
            <span className="inline-block bg-brand-red text-white text-[10px] px-1 py-0.5 rounded-[2px] mr-1 font-bold leading-none align-middle">
              自营
            </span>
            {product.name}
          </h3>

          {/* 服务标签 (如：国家补贴) */}
          <div className="flex flex-wrap gap-1 mt-1.5">
            {product.featureTags?.map((tag, index) => (
              <span
                key={index}
                className="text-[10px] text-brand-green border border-brand-green px-1 py-0.5 rounded-sm leading-none"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* 底部价格与按钮区域 */}
        <div className="flex items-end justify-between mt-2">
          {/* 价格 */}
          <div className="text-brand-red font-bold flex items-baseline">
            <span className="text-xs mr-0.5">¥</span>
            <span className="text-lg leading-none">{product.price}</span>
          </div>

          {/* 购买按钮 */}
          <button className="bg-brand-red text-white text-[11px] font-bold px-2.5 py-1 rounded-full flex items-center gap-0.5">
            {/* 使用一个简单的圆形来模拟京东的狗头图标占位 */}
            <div className="w-3 h-3 bg-white/20 rounded-full flex items-center justify-center">
              <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
            </div>
            抢  
          </button>
        </div>
      </div>
    </div>
  );
}