import { ILoginData, IState } from "@/store/interface";
import {MUTATION_TYPES as MT} from "@/store/_mutation-types";


export default {
    [MT.USER_SET](state: IState, data: ILoginData) {
      localStorage.setItem('access_token',data.accessToken)
      localStorage.setItem('refresh_token',data.refreshToken)
      localStorage.setItem('username',data.username)
      state.accessToken = data.accessToken
      state.refreshToken = data.refreshToken
      state.username = data.username
    },
    [MT.ACCESS_SET](state:any, access:string){
      state.accessToken = access
      localStorage.setItem('access_token',access)
    },
    [MT.NAV_TOGGLE](state:any) {
      state.isNavOpen = !state.isNavOpen
    }
  }