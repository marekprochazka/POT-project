import { URLS, ISignInData } from './config'
import reverse from "django-reverse"
import {axiosBase} from "@/api/axiosBase";

export const postSignIn = async (data:ISignInData): Promise<unknown> => {
    return await axiosBase.post(reverse(URLS.SIGNIN), JSON.stringify(data))
}