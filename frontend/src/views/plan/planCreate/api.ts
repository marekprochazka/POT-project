import {IPlanCreate, URLS} from '../config'
import reverse from "django-reverse"
import {axiosBase} from "@/api/axiosBase";
import store from "@/store"

export const postPlanCreate = async (data: IPlanCreate): Promise<unknown> => {
    console.log(store.state.accessToken)
    return await axiosBase.post(reverse(URLS.PLANCREATE), JSON.stringify(data))
}