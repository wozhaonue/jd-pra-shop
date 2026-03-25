/** @format */

import type { ReactNode } from "react";

interface ContentLayoutProps {
  sidebar: ReactNode;
  content: ReactNode;
}

export function ContentLayout({
  sidebar,
  content,
}: ContentLayoutProps) {
  return (
    <div className="flex flex-1 overflow-hidden">
      {/* 左侧侧边栏区域：固定宽度，独立垂直滚动 */}
      <aside className="w-[85px] bg-[#F5F5F5] overflow-y-auto no-scrollbar shrink-0">
        {sidebar}
      </aside>

      {/* 右侧商品列表区域：占据剩余空间，独立垂直滚动 */}
      <main className="flex-1 bg-white overflow-y-auto relative">
        {content}
      </main>
    </div>
  );
}
