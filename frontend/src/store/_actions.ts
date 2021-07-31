import reverse from "django-reverse";
import {MUTATION_TYPES as MT} from "@/store/_mutation-types";
import {ACTION_TYPES as AT} from "@/store/_action-types";
import {URLS} from './urls'
import {ILoginActionData, ISignInData} from "@/store/interface";
import router from "@/router";
import {axiosBase} from "@/api/axiosBase";

/* eslint-disable */

export default {
    [AT.login](context: any, data: ILoginActionData): Promise<any> {
        return new Promise((resolve, reject) => {
            axiosBase.post(reverse(URLS.LOGIN), JSON.stringify(data),)
                .then(value => {
                    context.commit(MT.USER_SET, {
                        accessToken: value.data.access,
                        username: data.username
                    })
                    router.push({name: 'homepage'})
                    resolve('resolved')
                }).catch(err => reject(err))
        })
    },
    [AT.logout](context:any): void {
        context.commit(MT.USER_REMOVE)
    },
    [AT.signIn](context:any, data:ISignInData): Promise<any> {
        return new Promise((resolve,reject)=> {
            axiosBase.post(reverse(URLS.SIGNIN), JSON.stringify(data))
                .then((response) => {
                    console.log(response)
                    context.dispatch(AT.login,{username:data.username, password:data.password})
                    resolve('resolved')
                }).catch(err => reject(err))
        })
    }
}