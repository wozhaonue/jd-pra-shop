import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

/**
 * 样式合并工具函数
 * 用于解决 Tailwind CSS 类名冲突问题，并支持条件类名。
 * 结合了 clsx (支持对象、数组等多种条件类名语法) 和 tailwind-merge (智能合并冲突的 Tailwind 类，后定义的类优先级更高)。
 *
 * @param inputs - 接受任意数量的类名字符串、数组或对象
 * @returns 合并后且解决冲突的字符串类名
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}