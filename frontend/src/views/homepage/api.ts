import {axiosBase} from "@/api/axiosBase";
import {authHeaders} from "@/api/config";
import {IPlan, URLS} from './config'
import reverse from "django-reverse";
import {AxiosResponse} from "axios";

export const fetchPlans = async(): Promise<AxiosResponse<Array<IPlan>>> => {
    return await axiosBase.get(reverse(URLS.PLAN_LIST), {headers:{...authHeaders()}})
}