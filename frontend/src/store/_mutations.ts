import {ILoginData, IState} from "@/store/interface";
import {MUTATION_TYPES as MT} from "@/store/_mutation-types";


export default {
    [MT.USER_SET](state: IState, data: ILoginData): void {
        localStorage.setItem('access_token', data.accessToken)
        localStorage.setItem('username', data.username)
        state.accessToken = data.accessToken
        state.username = data.username
    },
    [MT.ACCESS_SET](state: IState, access: string): void {
        state.accessToken = access
        localStorage.setItem('access_token', access)
    },
    [MT.NAV_TOGGLE](state: IState): void {
        state.isNavOpen = !state.isNavOpen
    }
}