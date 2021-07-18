export interface ILoginData {
    accessToken: string,
    username: string
}

export interface IState {
    accessToken: string | null,
    username: string | null,
    isNavOpen: boolean
}

export interface ILoginActionData {
    username: string,
    password: string
}