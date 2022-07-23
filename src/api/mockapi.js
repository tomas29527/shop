import axios from "axios";
import nprogress from 'nprogress'
import 'nprogress/nprogress.css'
import errorCode from '@/utils/errorCode'

const requests = axios.create({
    baseURL: '/mock',
    timeout: 5000
})
//请求拦截器----
requests.interceptors.request.use((config) => {
    nprogress.start()
    return config
})
//响应拦截
requests.interceptors.response.use((resp) => {
    nprogress.done()
    // 未设置状态码则默认成功状态
    const code = resp.data.code || 200;
    // 获取错误信息
    const msg = errorCode[code] || resp.data.msg || errorCode['default']
    if (code != 200) {
        alert(msg)
        return Promise.reject('error')
    }
    return resp.data
}, (err) => {
    console.log("失败:", err.message)
    return Promise.reject(err)
})

export default requests