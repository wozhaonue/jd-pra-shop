/** @format */

import { useEffect, useState, type RefObject } from "react";
import { ArrowUp } from "lucide-react";
import { cn } from "../../utils/cn";

interface BackToTopProps {
  /** 目标滚动容器内部的元素的 ref，我们会通过它找到真正的父级滚动容器 */
  targetRef: RefObject<HTMLDivElement | null>;
}

export function BackToTop({ targetRef }: BackToTopProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = targetRef.current;
    if (!element) return;

    // 真正的滚动容器是 ContentLayout 中的 main 标签
    const scrollContainer = element.parentElement;
    if (!scrollContainer) return;

    const handleScroll = () => {
      // 当滚动距离超过视口高度的一半时显示
      if (scrollContainer.scrollTop > window.innerHeight / 2) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    scrollContainer.addEventListener("scroll", handleScroll);
    // 初始检查一次
    handleScroll();

    return () => {
      scrollContainer.removeEventListener("scroll", handleScroll);
    };
  }, [targetRef]);

  const scrollToTop = () => {
    const scrollContainer = targetRef.current?.parentElement;
    if (scrollContainer) {
      scrollContainer.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  };

  return (
    <button
      onClick={scrollToTop}
      className={cn(
        "fixed bottom-20 right-4 w-10 h-10 bg-white rounded-full shadow-md flex items-center justify-center border border-gray-100 z-50 transition-all duration-300",
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"
      )}
      aria-label="回到顶部"
    >
      <ArrowUp size={20} className="text-gray-600" />
    </button>
  );
}
