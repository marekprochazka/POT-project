import { URLS, ISignInData } from './config'
import axios from "axios";
import reverse from "django-reverse"


export const postSignIn = async (data:ISignInData) => {
    console.log(URLS.SIGNIN)
    console.log(reverse(URLS.SIGNIN))
    return await axios.post(reverse(URLS.SIGNIN), JSON.stringify(data), {headers: {'Content-Type':'application/json;charset=UTF-8'}})
}