import { cn } from '../../utils/cn';

// 假设传入的 Brand 数据结构
interface Brand {
  id: string;
  name: string;
}

interface SidebarProps {
  brands: Brand[];
  activeBrandId: string | null;
  onBrandSelect: (brandId: string) => void;
}

export function Sidebar({ brands, activeBrandId, onBrandSelect }: SidebarProps) {
  return (
    <div className="flex flex-col w-full">
      {brands.map((brand) => {
        const isActive = activeBrandId === brand.id;
        
        return (
          <button
            key={brand.id}
            onClick={() => onBrandSelect(brand.id)}
            className={cn(
              'h-14 w-full flex items-center justify-center text-sm transition-colors relative',
              isActive
                ? 'bg-white text-text-main font-bold'
                : 'bg-transparent text-text-sub font-normal'
            )}
          >
            {brand.name}
          </button>
        );
      })}
    </div>
  );
}