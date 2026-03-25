<!-- @format -->

# 进度记录

此文件用于记录已完成的开发步骤。

## 阶段 1：项目初始化与基础配置

- [x] 步骤 1.1：创建项目骨架 (Vite + React + TypeScript 骨架已存在并验证可运行)
- [x] 步骤 1.2：配置 Tailwind CSS (使用 Tailwind v4 Vite 插件，并验证样式生效)
- [x] 步骤 1.3：配置移动端优先的基础样式 (定义了核心颜色变量，限制 `#root` 最大宽度 480px 并居中)
- [x] 步骤 1.4：搭建目录结构与移入 Mock 数据 (创建了 `components`, `hooks` 等空目录，并将 `mockData.ts` 移入 `mocks` 文件夹并成功导入)

## 阶段 2：静态 UI 组件开发

- [x] 步骤 2.1：开发 Header 组件 (实现了顶部标题、“补贴”等字样，以及带黄气泡的横向可滚动活动标签栏)
- [x] 步骤 2.2：开发主体布局容器 ContentLayout (使用 Flexbox 实现了左侧固定宽度侧边栏与右侧自适应内容区的左右分栏，且两者支持独立垂直滚动)
- [x] 步骤 2.3：开发左侧 Sidebar 组件 (接收 Mock 品牌数据渲染垂直列表，实现选中项白底加粗与未选中项灰底的样式区分)
- [x] 步骤 2.4：开发单个 ProductCard 组件 (实现商品图文左右布局，包含自营徽章、绿底边框服务标签、红字价格与操作按钮，并对接了 Mock 数据)
- [x] **细节完善**：基于用户反馈进行了多次 UI 样式迭代（包括 Header 模糊渐变背景、活动标签样式、Sidebar 激活状态样式、ProductCard 图片占比调整、标签动态样式及模拟真实数据等），去除了商品区的默认滚动条。

## 阶段 3：核心逻辑与状态管理接入

- [x] 步骤 3.1：在根组件建立全局状态 (`currentBrandId` 和 `visibleProducts`)
- [x] 步骤 3.2：实现品牌筛选联动 (通过 `useMemo` 计算 `filteredProducts`)
- [x] 步骤 3.3：实现商品列表的初始分页渲染 (通过 `useEffect` 截取前 8 条数据)

## 阶段 4：无限滚动与性能优化

- [x] 步骤 4.1：实现 IntersectionObserver 触底加载 (无限滚动)
  - 编写了 `useInfiniteScroll` 自定义 Hook 处理 IntersectionObserver 逻辑
  - 在 App.tsx 中增加了分页状态 (`page`)、加载状态 (`loading`) 和是否还有更多数据的衍生状态 (`hasMore`)
  - 列表底部增加了用于触发加载更多和展示状态的元素
- [x] 步骤 4.2：修复无限滚动与筛选的边界问题
  - 修复 `useInfiniteScroll` 中因依赖项变化导致 observer 重新创建并立即触发加载的问题（引入 `useRef` 缓存最新状态）
  - 修复 `App.tsx` 中切换品牌时因 `useEffect` 状态竞态导致渲染出过多商品的问题（重构 `visibleProducts` 为衍生状态，移除多余的副作用）
