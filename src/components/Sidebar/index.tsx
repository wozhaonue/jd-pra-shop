/** @format */

import { cn } from "../../utils/cn";
import { type Brand } from "../../mocks/mockData";

interface SidebarProps {
  brands: Brand[];
  activeBrandId: string | null;
  onBrandSelect: (brandId: string) => void;
}

export function Sidebar({
  brands,
  activeBrandId,
  onBrandSelect,
}: SidebarProps) {
  return (
    <div className="flex flex-col w-full bg-white">
      {brands.map((brand) => {
        const isActive = activeBrandId === brand.id;

        return (
          <button
            key={brand.id}
            onClick={() => onBrandSelect(brand.id)}
            className={cn(
              "h-14 w-full flex items-center justify-center transition-colors relative",
              isActive
                ? "text-[#E93B3B] font-bold text-base"
                : "bg-transparent text-text-sub font-normal text-sm",
            )}
          >
            {brand.name}
            {isActive && (
              <span className="absolute bottom-2 left-1/2 -translate-x-1/2 w-4 h-[3px] bg-[#E93B3B] rounded-full" />
            )}
          </button>
        );
      })}
    </div>
  );
}
