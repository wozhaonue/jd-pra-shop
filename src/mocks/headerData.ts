/**
 * 活动标签数据接口
 */
export interface ActivityTag {
  id: string;
  name: string;
  isHot?: boolean; // 是否带有小气泡（如：可叠国补）
}

// 顶部活动标签硬编码数据
export const activityTags: ActivityTag[] = [
  { id: '1', name: '国家补贴' },
  { id: '2', name: '京补合约' },
  { id: '3', name: '以旧换新', isHot: true },
  { id: '4', name: '百亿补贴' },
  { id: '5', name: '特价秒杀' },
];