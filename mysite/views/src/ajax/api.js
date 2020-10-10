import axios from 'axios'

const _instance = axios.create();

export default {
    install: function (Vue) {
        Object.defineProperty(Vue.prototype, '$ajax', {
            value: this,
            writable: false
        }),

        _instance.interceptors.response.use(
            res => {
                let data = res.data || res;
                return data;
            }
        )
    },
    addGoodArticle: function (params) {
        return _instance({
            url: '/api/manage/addGoodArticle',
            baseURL: 'http://localhost:3000',
            params: params,
            method: 'POST'
        })
    }
}