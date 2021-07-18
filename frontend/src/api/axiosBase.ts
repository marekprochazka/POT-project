import axios from "axios";
import store from '../store'
import {ACTION_TYPES as AT} from "@/store/_action-types";
import router from "@/router";

const axiosBase = axios.create({
    headers: {'Content-Type': 'application/json;charset=UTF-8'}
})

axiosBase.interceptors.response.use(undefined, (err) => {
    if (err.config && err.response && err.response.status === 401) {
        store.dispatch(AT.refreshToken)
            .then(() =>{
                router.push({name:'login'}) // TODO msg timeout
                // TODO logout action
            })
            .catch((err) => {
                console.log(err)
            })
    }
})

export {axiosBase}