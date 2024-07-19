// 通过key，直接从localStorage中获取一个数据；

import { useEffect, useState } from "react";

function useLocalStorage(key) {
    // const [data, setData] = useState(JSON.parse(localStorage.getItem(key)))
    const [data, setData] = useState(() => {
        // 1、从localStorage中获取数据，并且数据创建组件的state；
        const item = localStorage.getItem(key)
        if (!item) return ''
        return JSON.parse(item)
    })

    // 2、监听data改变，一旦发生改变就就存储data最新值；
    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(data))
    }, [data, key])

    // 3、将data/setData的操作返回给组件，让组件可以使用和修改值；
    return [data, setData]
}

export default useLocalStorage