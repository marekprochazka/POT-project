import axios from "axios";
import store from '../store'
import {apiHeaders} from "./config";

const axiosBase = axios.create({
    headers: { 'Content-Type': 'application/json;charset=UTF-8',
        'Authorization': `Bearer ${store.getters.getAccessToken}`}
})

axiosBase.interceptors.response.use(undefined, (err) => {
    if (err.config && err.response && err.response.status === 401) {
        store.dispatch('refreshToken')
            .then(access =>{
                err._retry = true
                console.log('err')
                console.log(err)
                console.log('access')
                console.log(access)
                err.config.headers = {...apiHeaders}
                return axios.request(err.config)
            })
            .catch((err) => {
                console.log(err)
            })
    }
})

export {axiosBase}