import { useState } from 'react';
import { activityTags } from '../../mocks/headerData';
import { cn } from '../../utils/cn';

export function Header() {
  const [activeTagId, setActiveTagId] = useState<string>(activityTags[0].id);

  return (
    <header className="bg-white px-3 pt-3 pb-2 sticky top-0 z-50 shadow-sm">
      {/* 顶部标题栏 */}
      <div className="flex justify-between items-end mb-3">
        <h1 className="text-2xl font-bold text-text-main">补贴专区</h1>
        <span className="text-brand-red text-sm mb-1">* 国家补贴</span>
      </div>

      {/* 活动标签栏 (横向滚动) */}
      <div className="overflow-x-auto no-scrollbar">
        <div className="flex gap-3 whitespace-nowrap pb-1">
          {activityTags.map((tag) => {
            const isActive = activeTagId === tag.id;
            return (
              <button
                key={tag.id}
                onClick={() => setActiveTagId(tag.id)}
                className={cn(
                  'relative px-4 py-1.5 rounded-full text-sm font-medium transition-colors',
                  isActive
                    ? 'bg-brand-green text-white border border-transparent'
                    : 'bg-white text-brand-red border border-brand-red'
                )}
              >
                {tag.name}
                {/* 气泡挂件 */}
                {tag.isHot && (
                  <span className="absolute -top-2 -right-1 bg-yellow-400 text-[10px] text-red-600 px-1.5 rounded-t-md rounded-br-md font-bold whitespace-nowrap">
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