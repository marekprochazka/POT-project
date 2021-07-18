import {IPlanCreate, URLS} from '../config'
import reverse from "django-reverse"
import {axiosBase} from "@/api/axiosBase";
import {authHeaders} from "@/api/config";

export const postPlanCreate = async (data: IPlanCreate): Promise<unknown> => {
    return await axiosBase.post(reverse(URLS.PLANCREATE), JSON.stringify(data),{headers: {...authHeaders()}})
}