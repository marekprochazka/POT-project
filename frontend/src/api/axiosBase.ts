import axios from "axios";
import router from "@/router";
import {authHeaders} from "@/api/config";

const axiosBase = axios.create({
    headers: {
        'Content-Type': 'application/json;charset=UTF-8'
    }
})

axiosBase.interceptors.response.use(undefined, (err) => {
    if (err.config && err.response && err.response.status === 401) {
        router.push({name: 'login'}) // TODO msg timeout
        // TODO logout action
    }
    return Promise.reject(err)
})

export {axiosBase}