import axios from "axios";
import reverse from "django-reverse";
import {MUTATION_TYPES as MT} from "@/store/_mutation-types";
import {ACTION_TYPES as AT} from "@/store/_action-types";
import {URLS} from './urls'
import {ILoginActionData} from "@/store/interface";
import router from "@/router";
/* eslint-disable */

export default {
    [AT.login](context: any, data: ILoginActionData): Promise<any> {
        return new Promise((resolve, reject) => {
            axios.post(reverse(URLS.LOGIN), JSON.stringify(data), {headers: {'Content-Type': 'application/json;charset=UTF-8'}})
                .then(value => {
                    context.commit(MT.USER_SET, {
                        accessToken: value.data.access,
                        // refreshToken: value.data.refresh,
                        username: data.username
                    })
                    router.push({name: 'homepage'})
                    resolve('resolved')
                }).catch(err => reject(err))
        })
    },
    [AT.logout](context:any): void {
        context.commit(MT.USER_REMOVE)
    }
}