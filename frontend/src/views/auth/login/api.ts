import { URLS, ILoginData } from './config'
import reverse from "django-reverse"
import {axiosBase} from "@/api/axiosBase";

export const postLogin = async (data:ILoginData): Promise<unknown> => {
    return await axiosBase.post(reverse(URLS.LOGIN), JSON.stringify(data))
}