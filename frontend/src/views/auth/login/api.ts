import { URLS, ILoginData } from './config'
import axios from "axios";
import reverse from "django-reverse"
import {apiHeaders} from "@/api/config";

export const postLogin = async (data:ILoginData) => {
    console.log(URLS.LOGIN)
    console.log(reverse(URLS.LOGIN))
    console.log({...apiHeaders})
    return await axios.post(reverse(URLS.LOGIN), JSON.stringify(data), {...apiHeaders})
}