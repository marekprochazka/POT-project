export default {
    getAccessToken: (state:any) => {
      return state.accessToken
    },
    isLoggedIn: (state:any) => {
      return state.accessToken != null
    }
  }