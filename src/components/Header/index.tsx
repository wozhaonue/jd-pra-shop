/** @format */

import { activityTags } from "../../mocks/headerData";
import { cn } from "../../utils/cn";
import { Check } from "lucide-react"; // 引入勾选图标

interface HeaderProps {
  activeTagId: string;
  onTagSelect: (tagId: string) => void;
}

export function Header({
  activeTagId,
  onTagSelect,
}: HeaderProps) {
  return (
    <header className="bg-white px-3 pt-3 pb-2 sticky top-0 z-50 overflow-hidden">
      {/* 左上角红色模糊渐变背景：稍微放大一点，并保持柔和过渡 */}
      <div className="absolute top-[-70px] left-[-40px] w-[210px] h-[140px] bg-red-100 rounded-full blur-3xl opacity-80 pointer-events-none z-0" />

      {/* 顶部标题栏 (确保内容在渐变背景之上) */}
      <div className="relative flex justify-between items-end mb-3 z-10">
        <h1 className="text-2xl font-bold text-text-main">
          补贴专区
        </h1>
        <div className="flex items-center text-brand-red text-sm mb-1 font-medium">
          <Check
            size={14}
            strokeWidth={3}
            className="mr-0.5"
          />
          <span>国家补贴 + 京补合约</span>
        </div>
      </div>

      {/* 活动标签栏 (横向滚动) */}
      <div className="relative overflow-x-auto no-scrollbar pb-3 z-10">
        {/* 为了不遮挡绝对定位的气泡，给容器增加上下的 padding */}
        <div className="flex gap-3 whitespace-nowrap pt-2 px-1">
          {activityTags.map((tag) => {
            const isActive = activeTagId === tag.id;
            // 只有“国家补贴”选中时是绿底白字，其他选中时是红底白字
            const isNationalSubsidy =
              tag.name === "国家补贴";

            return (
              <button
                key={tag.id}
                onClick={() => onTagSelect(tag.id)}
                className={cn(
                  "relative px-4 py-1.5 rounded-full text-sm font-bold transition-colors",
                  isActive
                    ? isNationalSubsidy
                      ? "bg-brand-green text-white border border-transparent"
                      : "bg-brand-red text-white border border-transparent"
                    : isNationalSubsidy
                      ? "bg-white text-brand-green border border-brand-green"
                      : "bg-[#FFF4F4] text-brand-red border border-brand-red",
                )}
              >
                {tag.name}
                {/* 气泡挂件 */}
                {tag.isHot && (
                  <span className="absolute -top-2.5 -right-1 bg-[#FFD700] text-[10px] text-brand-red px-1.5 py-0.5 rounded-t-md rounded-br-md rounded-bl-sm font-bold whitespace-nowrap leading-none shadow-sm z-10">
                    可叠国补
                  </span>
                )}
              </button>
            );
          })}
        </div>
      </div>
    </header>
  );
}
