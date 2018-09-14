import axios from 'axios'
import { Message } from 'iview'

const timeOut = 50000
const baseUrl = 'api/web/'
const postHead = 'application/x-www-form-urlencoded'
axios.defaults.timeout = `${timeOut}`
axios.defaults.baseURL = `${baseUrl}`
axios.defaults.headers.post['Content-type'] = `${postHead}`

/**
 * http拦截器
 * http request 
 */
axios.interceptors.request.use(
    config => {
        return config
    },
    err => {
        return Promise.reject(err)
    }
)

/**
 * http拦截器
 * http response
 */
axios.interceptors.response.use(
    response => {
        if (response) {

        }
        return response;
    },
    error => {
        if (error.response) {
            switch(error.response.status) {
                case 401:       //未登陆，拦截去登录
                window.location.href = '去登录';
                break;
                case 502:      //服务器出错
                Message.error('服务器未响应，请稍后再试！');
                break;
            }
        }
        return Promise.reject(error)
    }
)
export default axios
