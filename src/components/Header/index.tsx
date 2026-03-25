/** @format */

import { useState } from "react";
import { activityTags } from "../../mocks/headerData";
import { cn } from "../../utils/cn";

export function Header() {
  const [activeTagId, setActiveTagId] = useState<string>(
    activityTags[0].id,
  );

  return (
    <header className="bg-white px-3 pt-3 pb-2 sticky top-0 z-50 shadow-sm">
      {/* 顶部标题栏 */}
      <div className="flex justify-between items-end mb-3">
        <h1 className="text-2xl font-bold text-text-main">
          补贴专区
        </h1>
        <span className="text-brand-red text-sm mb-1">
          * 国家补贴
        </span>
      </div>

      {/* 活动标签栏 (横向滚动) */}
      <div className="overflow-x-auto no-scrollbar pb-3">
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
                onClick={() => setActiveTagId(tag.id)}
                className={cn(
                  "relative px-4 py-1.5 rounded-full text-sm font-medium transition-colors",
                  isActive
                    ? isNationalSubsidy
                      ? "bg-brand-green text-white border border-transparent"
                      : "bg-brand-red text-white border border-transparent"
                    : "bg-white text-brand-red border border-brand-red",
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
