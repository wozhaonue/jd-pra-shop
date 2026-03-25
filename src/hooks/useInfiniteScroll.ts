import { useEffect, useRef, useCallback } from "react";

/**
 * 无限滚动 Hook 的配置选项接口
 */
interface UseInfiniteScrollOptions {
  /** 触底时触发的加载更多回调函数 */
  onLoadMore: () => void;
  /** 是否还有更多数据可以加载 */
  hasMore: boolean;
  /** 当前是否正在加载中，用于防止重复触发 */
  loading: boolean;
  /** 交叉观察器的根边距，用于提前触发加载（例如："100px" 表示距离底部 100px 时触发） */
  rootMargin?: string;
  /** 交叉比例阈值，0 表示只要目标元素有一点出现就触发 */
  threshold?: number;
}

/**
 * 自定义 Hook：实现基于 IntersectionObserver 的无限滚动触底加载功能
 * 
 * @param options - 配置选项
 * @returns 包含三个属性的对象：
 *  - loadMoreRef: 绑定到列表底部用于检测触底的元素的 ref
 *  - scrollContainerRef: 绑定到滚动容器的 ref
 *  - resetScroll: 用于将滚动容器重置到顶部的函数
 */
export function useInfiniteScroll({
  onLoadMore,
  hasMore,
  loading,
  rootMargin = "100px",
  threshold = 0,
}: UseInfiniteScrollOptions) {
  // 保存 IntersectionObserver 实例的引用
  const observerRef = useRef<IntersectionObserver | null>(null);
  // 指向底部触底探测元素的引用
  const loadMoreRef = useRef<HTMLDivElement | null>(null);
  // 指向滚动容器元素的引用
  const scrollContainerRef = useRef<HTMLDivElement | null>(null);

  // 使用 ref 缓存回调和状态，避免闭包陷阱和重复创建 observer
  const loadingRef = useRef(loading);
  const hasMoreRef = useRef(hasMore);
  const onLoadMoreRef = useRef(onLoadMore);

  // 每次渲染时更新最新的状态
  useEffect(() => {
    loadingRef.current = loading;
    hasMoreRef.current = hasMore;
    onLoadMoreRef.current = onLoadMore;
  }, [loading, hasMore, onLoadMore]);

  /**
   * IntersectionObserver 的回调函数
   * 当触底探测元素进入视口时触发
   */
  const handleObserver = useCallback((entries: IntersectionObserverEntry[]) => {
    const target = entries[0];
    // 如果目标元素可见，且还有更多数据，且当前不在加载中，则触发加载更多
    if (
      target.isIntersecting &&
      hasMoreRef.current &&
      !loadingRef.current
    ) {
      onLoadMoreRef.current();
    }
  }, []); // 依赖为空，保持引用不变

  // 初始化和管理 IntersectionObserver
  useEffect(() => {
    const element = loadMoreRef.current;
    if (!element) return;

    // 创建新的观察器实例
    observerRef.current = new IntersectionObserver(handleObserver, {
      root: null, // 默认使用浏览器视口作为容器，如果有特定滚动容器，可以将其设为 root
      rootMargin,
      threshold,
    });

    // 开始观察触底元素
    observerRef.current.observe(element);

    // 清理函数：组件卸载或依赖变化时断开观察器
    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, [handleObserver, rootMargin, threshold]);

  /**
   * 重置滚动位置的函数
   * 用于在切换分类或品牌时，将列表滚动条强制回到最顶部
   */
  const resetScroll = useCallback(() => {
    if (scrollContainerRef.current) {
      // 尝试重置父级容器的滚动条（因为实际滚动可能发生在父级 DOM 上）
      const parent = scrollContainerRef.current.parentElement;
      if (parent) {
        parent.scrollTo(0, 0);
      }
      // 同时也重置当前容器的滚动条
      scrollContainerRef.current.scrollTo(0, 0);
    }
  }, []);

  return { loadMoreRef, scrollContainerRef, resetScroll };
}

