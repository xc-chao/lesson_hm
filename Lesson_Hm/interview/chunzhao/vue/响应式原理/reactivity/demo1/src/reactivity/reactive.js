// 依赖地图 Map es6 新增的数据结构 HashMap o(1) key 取 value
// get set has...  json 和map的区别，json 只能用字符串做key map可以用对象做key
// Weak

export const reactiveMap = new WeakMap();

// target 普通对象
export const reactive = (target) => {
    // 返回代理对象
    return createReactiveObject(target, reactiveMap, reactiveHandlers)
}

function createReactiveObject(target, proxyMap, proxyHandlers) {
    if(typeof target !== 'object') {
        console.warn('target 必须是一个对象')
        return target;
    }
    const existingProxy = proxyMap.get(target);
    // 如果已经代理过了 直接返回
    if(existingProxy) {
        return existingProxy; 
    }
    // 如果没有代理过 就代理
    const proxy = new Proxy(target, proxyHandlers);
    proxyMap.set(target, proxy);
    return proxy;
}