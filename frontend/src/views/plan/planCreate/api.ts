import { IPlanCreate, URLS } from '../config'
import axios from "axios";
import reverse from "django-reverse"
import {apiHeaders} from "@/api/config";
import {axiosBase} from "@/api/axiosBase";

export const postPlanCreate = async (data:IPlanCreate): Promise<unknown> => {
    return await axiosBase.post(reverse(URLS.PLANCREATE), JSON.stringify(data), )
}