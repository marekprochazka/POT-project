import axios from "axios";
import store from '../store'
import {apiHeaders} from "./config";
import {ACTION_TYPES as AT} from "@/store/_action-types";

const axiosBase = axios.create({
    ...apiHeaders
})

axiosBase.interceptors.response.use(undefined, (err) => {
    if (err.config && err.response && err.response.status === 401) {
        store.dispatch(AT.refreshToken)
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