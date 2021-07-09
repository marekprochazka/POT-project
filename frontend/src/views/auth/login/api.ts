import { URLS, ILoginData } from './config'
import axios from "axios";
import reverse from "django-reverse"


export const postLogin = async (data:ILoginData) => {
    console.log(URLS.LOGIN)
    console.log(reverse(URLS.LOGIN))
    return await axios.post(reverse(URLS.LOGIN), JSON.stringify(data), {headers: {'Content-Type':'application/json;charset=UTF-8'}})
}