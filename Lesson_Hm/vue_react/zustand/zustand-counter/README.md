# zustand

极其简单的状态管理库
## 与redux的区别？
- 没有action
- 没有reducer
  不需要创建 子仓库，直接使用useCounterStore((state) => state.count);来获取相应的属性、方法。
  不需要使用 connect 高阶组件 来连接store。
  export default connect(
    mapStateToProps, // 映射state到props
    mapDispatchToProps // 映射dispatch到props
  )(当前组件) 
  不需要使用 hooks编程的 useSelector 和 useDispatch。
  