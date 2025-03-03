import { create } from 'zustand'
// create 用于创建状态管理的 store
// set 用于更新状态的函数

const useCounterStore = create((set) => ({
  count: 0,
  // 返回全新的状态
  increment: () => set((state) => ({ count: state.count + 1 })),
  decrement: () => set((state) => ({ count: state.count - 1 })),
}))
export default useCounterStore;