<!-- @format -->

# 项目架构与文件说明

此文件用于记录项目中每个文件的作用。

## `src/` (源代码目录)

- `components/`: 存放所有 React UI 组件
  - `Header/`: 顶部导航与活动标签组件
  - `ContentLayout/`: 主体左右分栏布局容器组件
  - `Sidebar/`: 左侧品牌导航列表组件
  - `ProductCard/`: 单个商品卡片组件
- `hooks/`: 存放自定义 Hooks
  - `useInfiniteScroll.ts`: 封装基于 IntersectionObserver 的无限滚动触底加载逻辑（通过 useRef 缓存闭包状态，保证 observer 稳定不重复创建）
- `mocks/`: 存放本地模拟数据（`mockData.ts`, `headerData.ts`）
- `types/`: 存放 TypeScript 接口定义
- `utils/`: 存放通用工具函数（如 `cn.ts` 样式合并工具）
- `App.tsx`: 应用根组件（集成全量状态管理，使用衍生状态处理分页与可见商品数据，避免副作用竞态）
- `main.tsx`: React 挂载入口
- `index.css`: 全局样式文件（引入了 Tailwind 和自定义变量）

- `requirement_design.md`: 需求与设计总览
- `tech_stack.md`: 技术栈选型理由
- `implementation_plan.md`: 分步实施计划
- `ui_design_rules.md`: UI 视觉层级与样式规则（根据需求截图提取）
- `progress.md`: 开发进度记录
- `architecture.md`: 当前文件，记录项目文件结构与说明
