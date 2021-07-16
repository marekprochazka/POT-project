export interface ILoginData {
    accessToken: string,
    refreshToken: string,
    username: string
}

export interface IState {
    accessToken: string | null,
    refreshToken: string | null,
    username: string | null,
    isNavOpen: boolean
}