// 实现打印日志的中间件
// 对每次派发的action进行拦截，进行日志打印
function log(store) {
    const next = store.dispatch

    function logAndDispatch(action) {
        console.log('当前派发的action', action);
        // 真正派发的代码：使用之前dispatch进行派发；
        next(action)

        console.log('派发之后的结果', store.getState());

    }
    /*
     monkey patch 猴补丁=》篡改现有的代码，对整体的执行程序进行修改； 
     意味着执行 store.dispatch()时，实际上是在执行logAndDispatch函数；   
    */
    store.dispatch = logAndDispatch
}
// log(store)

export default log