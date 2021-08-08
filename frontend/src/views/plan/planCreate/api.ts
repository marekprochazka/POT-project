import {IPlanCreate, URLS, IPlanCreateResponse} from '../config'
import reverse from "django-reverse"
import {axiosBase} from "@/api/axiosBase";
import {authHeaders} from "@/api/config";
import {AxiosResponse} from "axios";

// TODO response interface
export const postPlanCreate = async (data: IPlanCreate): Promise<AxiosResponse<IPlanCreateResponse>> => {
    return await axiosBase.post(reverse(URLS.PLANCREATE), JSON.stringify(data),{headers: {...authHeaders()}})
}