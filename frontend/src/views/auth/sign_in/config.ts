export const URLS = {
    SIGNIN: 'core_api:sing_in'
}

export interface ISignInData {
    username: string,
    fullname: string,
    password: string,
    confirm: string
}