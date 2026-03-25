export interface Product {
  id: string;
  name: string;
  brand: string;
  imageUrl: string;
  price: number;
  titleTags?: string[];
  featureTags?: string[];
  buttonText?: string;
}

export interface Brand {
  id: string;
  name: string;
}

// 侧边栏品牌数据
export const mockBrands: Brand[] = [
  { id: 'b1', name: 'Apple' },
  { id: 'b2', name: '一加' },
  { id: 'b3', name: 'iQOO' },
  { id: 'b4', name: '三星' },
  { id: 'b5', name: '华为' },
  { id: 'b6', name: '荣耀' },
  { id: 'b7', name: 'vivo' },
  { id: 'b8', name: '联想moto' },
  { id: 'b9', name: '小米' },
];

// 商品列表 Mock 数据（20条数据，保证初始能够滚动）
export const mockProducts: Product[] = [
  {
    id: 'p1',
    name: 'vivo iQOO Z10 Turbo+ 12GB+256GB 云海白 天玑',
    brand: 'iQOO',
    imageUrl: 'https://img14.360buyimg.com/n0/jfs/t1/216262/13/44813/112678/6720f182F1eb16260/d1ff889b7ebdb654.jpg',
    price: 2499,
    titleTags: ['自营'],
    featureTags: ['国家补贴'],
    buttonText: '打开京东'
  },
  {
    id: 'p2',
    name: '小米REDMI Note14 全刚品质 5110mAh大电量',
    brand: '小米',
    imageUrl: 'https://img14.360buyimg.com/n0/jfs/t1/116032/38/41551/66068/656d3b4eF2ed87b2b/8c3abfc64e8b3e8e.jpg',
    price: 879,
    titleTags: ['自营'],
    featureTags: ['国家补贴'],
    buttonText: '抢'
  },
  {
    id: 'p3',
    name: 'Apple/苹果 iPhone 15 (A3092) 128GB 黑色 支持',
    brand: 'Apple',
    imageUrl: 'https://img14.360buyimg.com/n0/jfs/t1/151242/13/36605/76846/64f84c47F53e8d2e6/95d038753d0e340a.jpg',
    price: 4299,
    titleTags: ['自营'],
    featureTags: ['国家补贴'],
    buttonText: '抢'
  },
  {
    id: 'p4',
    name: '小米 (MI) REDMI Note15 Pro+ 第四代骁龙7s',
    brand: '小米',
    imageUrl: 'https://img14.360buyimg.com/n0/jfs/t1/230154/22/16542/65545/6618d223F67e51c86/465fb537b0c9fce5.jpg',
    price: 1899,
    titleTags: ['自营'],
    featureTags: ['国家补贴', '以旧换新'],
    buttonText: '抢'
  },
  {
    id: 'p5',
    name: '华为 HUAWEI Mate 60 Pro 12GB+512GB 雅川青',
    brand: '华为',
    imageUrl: 'https://img14.360buyimg.com/n0/jfs/t1/123010/8/41443/80860/65654920F026a7925/7f941cc0ddb4cf1a.jpg',
    price: 6999,
    titleTags: ['自营'],
    featureTags: ['百亿补贴'],
    buttonText: '打开京东'
  },
  {
    id: 'p6',
    name: '一加 OnePlus 12 16GB+512GB 留白 哈苏全焦段',
    brand: '一加',
    imageUrl: 'https://img14.360buyimg.com/n0/jfs/t1/200055/1/40964/63604/656e87b0Fdb33f3cd/8627b0f6ebdd86c1.jpg',
    price: 4799,
    titleTags: ['自营'],
    featureTags: ['国家补贴', '以旧换新'],
    buttonText: '抢'
  },
  {
    id: 'p7',
    name: '三星 SAMSUNG Galaxy S24 Ultra 12GB+256GB 钛灰',
    brand: '三星',
    imageUrl: 'https://img14.360buyimg.com/n0/jfs/t1/181676/12/40417/97138/65c19d4bF5128038b/016c9051515250ff.jpg',
    price: 9699,
    titleTags: ['自营'],
    featureTags: ['京补合约'],
    buttonText: '打开京东'
  },
  {
    id: 'p8',
    name: '荣耀100 12GB+256GB 莫奈紫 索尼IMX906单反级',
    brand: '荣耀',
    imageUrl: 'https://img14.360buyimg.com/n0/jfs/t1/142071/24/40375/71120/6580fe4eF33eb30f5/240c5e3178c7fb4c.jpg',
    price: 2499,
    titleTags: ['自营'],
    featureTags: ['国家补贴'],
    buttonText: '抢'
  },
  {
    id: 'p9',
    name: 'vivo X100 Pro 16GB+512GB 星迹蓝 蔡司APO超级长焦',
    brand: 'vivo',
    imageUrl: 'https://img14.360buyimg.com/n0/jfs/t1/244365/16/8135/95760/6551b9e0Fdf30761e/f72db318f683a48e.jpg',
    price: 5499,
    titleTags: ['自营'],
    featureTags: ['国家补贴', '以旧换新'],
    buttonText: '抢'
  },
  {
    id: 'p10',
    name: 'Apple/苹果 iPhone 15 Pro Max (A3108) 256GB 原色',
    brand: 'Apple',
    imageUrl: 'https://img14.360buyimg.com/n0/jfs/t1/119532/14/38641/107086/64f84d0bF527920dc/15b225c567a5b3a3.jpg',
    price: 9999,
    titleTags: ['自营'],
    featureTags: ['百亿补贴'],
    buttonText: '打开京东'
  },
  {
    id: 'p11',
    name: '联想moto X50 Ultra AI手机 12GB+256GB 香柏木',
    brand: '联想moto',
    imageUrl: 'https://img14.360buyimg.com/n0/jfs/t1/224255/12/22703/105152/6646b9a8F946a48b8/1ccfb4059082da23.jpg',
    price: 3999,
    titleTags: ['自营'],
    featureTags: ['国家补贴'],
    buttonText: '抢'
  },
  {
    id: 'p12',
    name: '华为 HUAWEI Pura 70 Pro 12GB+512GB 罗兰紫',
    brand: '华为',
    imageUrl: 'https://img14.360buyimg.com/n0/jfs/t1/241618/3/17852/121853/661d4a03F8021c5b8/63972c3d59e35b71.jpg',
    price: 7499,
    titleTags: ['自营'],
    featureTags: ['以旧换新'],
    buttonText: '打开京东'
  },
  {
    id: 'p13',
    name: '一加 Ace 3V 12GB+256GB 幻紫银 骁龙7+ Gen3',
    brand: '一加',
    imageUrl: 'https://img14.360buyimg.com/n0/jfs/t1/246831/34/13936/128416/65fbc13fF54b2a3a5/9beab2ab6eb78c9d.jpg',
    price: 1999,
    titleTags: ['自营'],
    featureTags: ['国家补贴'],
    buttonText: '抢'
  },
  {
    id: 'p14',
    name: '三星 SAMSUNG Galaxy Z Fold5 12GB+512GB 冰萃蓝',
    brand: '三星',
    imageUrl: 'https://img14.360buyimg.com/n0/jfs/t1/109852/15/38153/81383/64bf50cfF20ff9d9b/2b66236b289c0953.jpg',
    price: 12999,
    titleTags: ['自营'],
    featureTags: ['京补合约', '百亿补贴'],
    buttonText: '打开京东'
  },
  {
    id: 'p15',
    name: '荣耀Magic6 Pro 16GB+512GB 绒黑色 骁龙8Gen3',
    brand: '荣耀',
    imageUrl: 'https://img14.360buyimg.com/n0/jfs/t1/240538/26/11833/144760/659e4e61F7a548231/e14187bb1722e17e.jpg',
    price: 6199,
    titleTags: ['自营'],
    featureTags: ['国家补贴', '以旧换新'],
    buttonText: '抢'
  },
  {
    id: 'p16',
    name: 'iQOO Neo9 16GB+512GB 航海蓝 骁龙8Gen2',
    brand: 'iQOO',
    imageUrl: 'https://img14.360buyimg.com/n0/jfs/t1/148011/26/39415/78627/6580f55bFf0f4b321/7221087bdf51a3f6.jpg',
    price: 2999,
    titleTags: ['自营'],
    featureTags: ['国家补贴'],
    buttonText: '抢'
  },
  {
    id: 'p17',
    name: '小米14 Ultra 16GB+512GB 龙晶蓝 徕卡光学',
    brand: '小米',
    imageUrl: 'https://img14.360buyimg.com/n0/jfs/t1/231644/32/13675/62657/65d5df23F52e737c0/781078a9c279435a.jpg',
    price: 6999,
    titleTags: ['自营'],
    featureTags: ['国家补贴', '百亿补贴'],
    buttonText: '打开京东'
  },
  {
    id: 'p18',
    name: 'Apple/苹果 iPhone 14 (A2884) 128GB 星光色',
    brand: 'Apple',
    imageUrl: 'https://img14.360buyimg.com/n0/jfs/t1/128639/27/29324/90823/631835bcE497dff8e/3175c5e87a2a1147.jpg',
    price: 4699,
    titleTags: ['自营'],
    featureTags: ['以旧换新'],
    buttonText: '抢'
  },
  {
    id: 'p19',
    name: 'vivo S18 12GB+256GB 花似锦 影棚级柔光环',
    brand: 'vivo',
    imageUrl: 'https://img14.360buyimg.com/n0/jfs/t1/139045/40/41347/65591/65756703F9ff70ec2/292bbf5579d4ff8f.jpg',
    price: 2299,
    titleTags: ['自营'],
    featureTags: ['国家补贴'],
    buttonText: '抢'
  },
  {
    id: 'p20',
    name: '联想moto razr 40 Ultra 12GB+512GB 锋雅黑 折叠屏',
    brand: '联想moto',
    imageUrl: 'https://img14.360buyimg.com/n0/jfs/t1/111467/26/36423/51553/647895e5F3170a4c2/4a0dc67e5bb6dfce.jpg',
    price: 5699,
    titleTags: ['自营'],
    featureTags: ['国家补贴', '百亿补贴'],
    buttonText: '打开京东'
  }
];
