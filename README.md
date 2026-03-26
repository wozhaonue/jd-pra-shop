<!-- @format -->

# 移动端商品展示与筛选页面 (JD Practice)

本项目是一个基于 **React + TypeScript + Vite + Tailwind CSS** 开发的移动端风格商品展示与筛选页面。它模拟了电商平台（如京东）的“补贴专区”页面，实现了复杂的双层联动筛选、无限滚动加载以及精细的 UI 交互。

## 🌟 主要功能实现

- **移动端优先的响应式布局**：页面最大宽度限制为 480px 并居中显示，完美模拟手机端原生应用体验。
- **双层联动组合筛选**：
  - 顶部支持横向滑动的“活动标签”筛选（如：国家补贴、以旧换新、百亿补贴等）。
  - 左侧支持独立的品牌侧边栏筛选（如：Apple、华为、小米等）。
  - 两者可任意组合，且切换条件时会自动重置商品列表状态并平滑滚动回顶部。
- **高性能无限滚动加载**：
  - 基于原生的 `IntersectionObserver` 实现了商品列表的触底加载。
  - 使用 `useRef` 精心处理了闭包陷阱和状态竞态问题，确保了极佳的滚动体验，无重复请求。
- **动态衍生状态管理**：采用 `useMemo` 替代多余的 `useEffect`，精准处理分页数据与商品列表的渲染，避免了无效的组件重渲染。
- **悬浮回到顶部组件**：监听实际滚动容器，当向下滑动超过半屏时平滑淡出回到顶部按钮，点击后优雅返回页面顶部。
- **高度还原的 UI 组件**：包括带有模糊渐变背景的 Header、活动气泡标签、自营与补贴徽章、不规则倾斜按钮等。

## 🛠️ 技术栈

- **框架**：React 19 + TypeScript
- **构建工具**：Vite
- **样式方案**：Tailwind CSS v4
- **图标库**：lucide-react

---

## 🚀 如何在本地运行

请按照以下步骤将项目克隆到本地并启动开发服务器：

### 1. 克隆仓库

```bash
git clone https://github.com/wozhaonue/jd-pra-shop.git
```

> **注意**：如果遇到 Github 连接超时（port 443）问题，你可以尝试：
>
> 1. 配置 Git 代理（如果你有本地代理工具）：`git config --global http.proxy http://127.0.0.1:你的端口`
> 2. 使用 SSH 方式克隆：`git clone git@github.com:wozhaonue/jd-pra-shop.git`

### 2. 进入项目目录

```bash
cd jd-pra-shop
# 如果你本地的文件夹名字是 pratice，则输入 cd pratice
```

### 3. 安装依赖

推荐使用 `npm` 进行安装。如果你是直接克隆本仓库，只需运行一次：

```bash
npm install
```

> **补充说明（如果你是自行从零搭建项目）**：
> 本项目除了 Vite React 默认依赖外，还在开发过程中额外安装了以下核心依赖库：
>
> ```bash
> # 1. 安装 Tailwind CSS v4 及其相关依赖
> npm install -D tailwindcss @tailwindcss/vite postcss autoprefixer
>
> # 2. 安装图标库和样式合并工具（用于优雅地处理 Tailwind 类名合并）
> npm install lucide-react clsx tailwind-merge
>
> # 3. 安装 Node.js 类型定义（用于配置 vite.config.ts 时的智能提示）
> npm install -D @types/node
> ```

### 4. 启动开发服务器

```bash
npm run dev
```

启动成功后，终端会输出一个本地访问地址（通常是 `http://localhost:5173/`）。在浏览器中打开该地址，并建议**按 `F12` 开启浏览器的移动端调试模式**以获得最佳预览体验。

### 5. 构建生产版本（可选）

```bash
npm run build
```

执行此命令会进行严格的 TypeScript 类型检查并打包出可用于生产环境的静态文件（输出至 `dist` 目录）。
