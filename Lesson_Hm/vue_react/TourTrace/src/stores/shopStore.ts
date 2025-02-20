import { ref } from "vue";
import { defineStore } from "pinia";

// 数据状态放到store
// shop store 
export const useShopStore = defineStore('shop', () => {
  // 静态数据
  const topBarState = ref([
    {
      title: "酒店",
      icon: "hotel-o",
    },
    {
        title: "跟团游",
        icon: "flag-o",
    },
    {
        title: "当地游",
        icon: "location-o",
    },
    {
        title: "门票",
        icon: "coupon-o",
    },
    {
        title: "自由行",
        icon: "guide-o",
    }
  ])

  const recommendItemState = ref([
    {
      title: "一日游",
      items: [
          {
              type: '1',
              title: "北京环球度假村",
              image: "https://img2.baidu.com/it/u=1113459974,3289451682&fm=253&fmt=auto&app=120&f=JPEG?w=1200&h=800",
              price: "368",
              place: "北京市通州区北京环球度假区",
              market: "6750"
          },
          {   type: '1',
              title: "故宫博物馆",
              image: "https://img1.baidu.com/it/u=452281417,1383465479&fm=253&fmt=auto&app=138&f=JPEG?w=800&h=1422",
              price: "198",
              place: "北京市东城区景山前街4号",
              market: "518"
          },
          {   type: '1',
              title: "八达岭长城",
              image: "https://img0.baidu.com/it/u=732099277,1833689378&fm=253&fmt=auto&app=138&f=JPEG?w=668&h=500",
              price: "35",
              place: "北京市延庆区G6京藏高速58号出口",
              market: "456"
          },
          {   
              type: '1',
              title: "颐和园",
              image: "https://img0.baidu.com/it/u=3396923623,2585856524&fm=253&fmt=auto&app=138&f=PNG?w=755&h=500",
              price: "155",
              place: "北京市海淀区新建宫门路19号",
              market: "999"
          },
          {   
              type: '2',
              title: "西湖",
              image: "https://img1.baidu.com/it/u=3237643364,3711617777&fm=253&fmt=auto&app=138&f=JPEG?w=751&h=500",
              price: "155",
              place: "杭州市西湖区西湖景区",
              market: "4562"
          },
          {
              type: '2',
              title: "灵隐寺",
              image: "https://img1.baidu.com/it/u=419085932,2334402533&fm=253&fmt=auto&app=138&f=JPEG?w=750&h=500",
              price: "156",
              place: "杭州市西湖区灵隐路法云弄1号",
              market: "1235"
          },
          {
              type: '2',
              title: "宋城",
              image: "https://img2.baidu.com/it/u=2926288581,2360683484&fm=253&fmt=auto&app=138&f=JPEG?w=891&h=500",
              price: "125",
              place: "杭州市西湖区之江路148号",
              market: "3432"
          },
          {
              type:'3',
              title: "鼓浪屿",
              image: "https://img0.baidu.com/it/u=2689973438,2426345669&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=750",
              place: "厦门市思明区鼓浪屿",
              price: "457",
              market: "8689"
          },
          {
              type: '3',
              title: "园林植物园",
              image: "https://img1.baidu.com/it/u=4052232422,2798240992&fm=253&fmt=auto&app=138&f=JPEG?w=749&h=500",
              place: "福建省厦门市思明区虎园路25号",
              price: "554",
              market: "3444"
          },
          {
              type: '3',
              title: "环岛路",
              image: "https://img2.baidu.com/it/u=55652160,3378823647&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=310",
              place: "厦门市思明区环岛路",
              price: "450",
              market: "1243"
          }
      ]
  },
  {
      title: "玩乐",
      items: [
      ]
  },
  {
      title: "当地参观",
      items: []
  },
  {
      title: "酒店度假",
      items: []
  },
  {
      title: "用车",
      items: []
  }
  ])

  return {
    topBarState,
    recommendItemState
  }
})