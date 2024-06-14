function applyMiddleware(store, ...fns) {// 剩余参数
    fns.forEach(fn => {
        fn(store)
    })
}

export default applyMiddleware