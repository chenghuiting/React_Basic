// 通过一个类对axios进行二次封装,类的方式可以把多个东西封装到一起，具有更强的内聚性；

import axios from "axios";
import { BASE_URL, TIMEOUT } from "./config";

class HYRequest {
    constructor(baseURL, timeout) {
        // 创建一个axios实例并赋值给instance；
        this.instance = axios.create({
            baseURL,
            timeout,//超时时间
        })

        // axios响应拦截
        this.instance.interceptors.response.use((res) => {
            return res.data //每次拿到数据后把data返回出去
        }, err => {
            return err
        })
    }

    request(config) {
        return this.instance.request(config)
    }

    get(config) {
        return this.request({ ...config, method: "get" })
    }

    post(config) {
        return this.request({ ...config, method: "post" })
    }
}

// 导出一个类实例，传入BASE_URL, TIMEOUT
export default new HYRequest(BASE_URL, TIMEOUT)