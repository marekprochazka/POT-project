import {ILoginData, IState} from "@/store/interface";
import {MUTATION_TYPES as MT} from "@/store/_mutation-types";


export default {
    [MT.USER_SET](state: IState, data: ILoginData): void {
        localStorage.setItem('access_token', data.accessToken)
        localStorage.setItem('username', data.username)
        state.accessToken = data.accessToken
        state.username = data.username
    },
    [MT.NAV_TOGGLE](state: IState): void {
        state.isNavOpen = !state.isNavOpen
    },
    [MT.USER_REMOVE](state: IState): void {
        localStorage.removeItem('access_token')
        localStorage.removeItem('username')
        state.accessToken = null
        state.username = null

    }
}