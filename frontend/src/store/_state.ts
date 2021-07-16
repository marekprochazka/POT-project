export default {
    // USER
    accessToken: localStorage.getItem('access_token') || null,
    refreshToken: localStorage.getItem('refresh_token') || null,
    username: localStorage.getItem('username') || null,
    // navbar
    isNavOpen: false
}