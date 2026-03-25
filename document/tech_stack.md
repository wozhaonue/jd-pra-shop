<!-- @format -->

# 移动端商品展示与筛选页面 - 技术栈选型文档

基于《需求设计文档》，为了实现一个“最简单且最健壮”的移动端 React 页面，我们需要在开发效率、运行性能和代码可维护性之间取得平衡。以下是推荐的技术栈及选型理由。

## 1. 核心框架与构建工具

### 1.1 前端框架: React 18+ (Functional Components + Hooks)

- **选型理由**:
  - **最健壮**: React 是目前生态最完善、社区支持最强大的前端框架。18+ 版本的并发特性（Concurrent Features）和自动批处理（Automatic Batching）能提升复杂页面（如长列表滚动）的渲染性能。
  - **最简单**: 全面使用 Hooks（`useState`, `useEffect`, `useMemo`, `useCallback`, `useRef`）可以避免类组件繁琐的生命周期和 `this` 指向问题，代码更加扁平易读。

### 1.2 构建工具: Vite

- **选型理由**:
  - **最简单**: 相比于传统的 Webpack，Vite 提供了开箱即用的配置，几乎不需要手动编写复杂的构建脚本。
  - **最健壮/高效**: 基于 ESBuild 的预构建和基于原生 ESM 的热更新（HMR），使得本地开发启动速度极快，极大地提升了开发体验。

### 1.3 开发语言: TypeScript

- **选型理由**:
  - **最健壮**: 在涉及数据过滤（品牌筛选）、Mock 数据（Product/Brand 接口）时，TypeScript 能在编译阶段捕获大量潜在的类型错误（如字段拼写错误、空指针异常），极大地提升了代码的健壮性和可维护性。

---

## 2. 样式与移动端适配方案

### 2.1 CSS 方案: Tailwind CSS (首选) 或 CSS Modules

- **选型理由 (Tailwind CSS)**:
  - **最简单**: Utility-first 的理念允许你直接在 JSX 中编写样式，无需在 `.tsx` 和 `.css` 文件之间频繁切换，非常适合快速还原 UI 稿。
  - **最健壮**: 生产环境自动剔除未使用的 CSS（PurgeCSS），打包体积极小，且彻底杜绝了 CSS 全局污染和类名冲突问题。
- _(备选) CSS Modules_: 如果不习惯 Tailwind 的原子类，使用 CSS Modules 也是健壮的选择，它同样能解决类名冲突，但编写效率略低于 Tailwind。

### 2.2 移动端适配方案: `vw/vh` (视口单位) + Flexbox 布局

- **选型理由**:
  - **最简单**: 抛弃传统的 `rem` + `PostCSS-pxtorem` 复杂配置。现代浏览器对 `vw/vh` 支持极好。对于高度动态的电商卡片流，使用 Flexbox 进行左右分栏和卡片内部排版是最直观、最健壮的方案。

---

## 3. 状态管理

### 3.1 本地组件状态: React 原生 Hooks (`useState` + `useMemo`)

- **选型理由**:
  - **最简单**: 这个需求虽然有“全量数据”、“当前选中品牌”、“过滤后的数据”、“当前渲染数据”等状态，但它们**都局限在一个页面内**，没有跨页面的状态共享需求。
  - **最健壮**: 引入 Redux 或 Zustand 会增加不必要的样板代码和复杂性。使用 `useState` 管理“当前选中品牌”和“当前渲染的商品列表”，使用 `useMemo` 派生出“过滤后的商品列表”，是最清晰、无副作用的做法。

---

## 4. 核心功能解决方案 (针对需求痛点)

### 4.1 无限滚动 (Infinite Scroll): `Intersection Observer API`

- **选型理由**:
  - 需求中提到“下拉到最底部实现滚动刷新”。
  - **最健壮**: 传统的监听 `scroll` 事件计算 `scrollTop` 容易引发性能问题（频繁触发重绘）。现代浏览器原生的 `IntersectionObserver` 可以异步监听目标元素（例如列表底部的一个隐藏 `div`）是否进入视口，性能开销极小。
  - **最简单**: 可以封装一个简单的自定义 Hook（如 `useIntersectionObserver`）或直接在组件中使用。

### 4.2 图片懒加载 (Lazy Loading): 原生 `<img loading="lazy" />`

- **选型理由**:
  - 商品列表包含大量图片。
  - **最简单/健壮**: 现代浏览器原生支持 `loading="lazy"` 属性，无需引入第三方库（如 `react-lazyload`），即可实现视口外图片延迟加载，显著提升首屏加载速度。

---

## 5. 目录结构规范建议

保持扁平且职责明确的目录结构：

```text
src/
├── assets/         # 静态资源 (如图标)
├── components/     # 可复用的 UI 组件
│   ├── Header/
│   ├── Sidebar/
│   ├── ProductList/
│   ├── ProductCard/
│   └── BackToTop/
├── hooks/          # 自定义 Hooks (如 useInfiniteScroll)
├── mocks/          # 模拟数据 (存放 mockData.ts)
├── types/          # TypeScript 类型定义 (如果需要独立抽离)
├── App.tsx         # 页面主入口 (组装各个组件，管理核心状态)
└── main.tsx        # React 挂载点
```

## 6. 总结

为了实现这个需求，**最简单且最健壮的“黄金组合”是**：
`Vite` + `React 18` + `TypeScript` + `Tailwind CSS` + `原生 IntersectionObserver (无限滚动)` + `原生 React Hooks (状态管理)`。

这套方案没有任何冗余的第三方重型依赖，完全依靠现代前端的内置能力和高效的构建工具，能够以最少的代码量实现高性能的移动端页面。
