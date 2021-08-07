import {axiosBase} from "@/api/axiosBase";
import {IPlan} from "@/views/plan/config";
import {AxiosResponse} from "axios";
import reverse from "django-reverse";
import {URLS} from "@/views/plan/config";
import {authHeaders} from "@/api/config";

export const fetchPlanDetail = async (planId: string): Promise<AxiosResponse<IPlan>> => {
    return await axiosBase.get(reverse(URLS.PLANDETAIL, planId), {headers: {...authHeaders()}})
}