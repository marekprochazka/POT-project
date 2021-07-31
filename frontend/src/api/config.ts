import store from '../store'

interface IAuthHeader {
    Authorization:string
}

export const authHeaders = ():IAuthHeader  => {
    {
        return {'Authorization': 'Bearer ' + store.state.accessToken}
    }
}

// export const apiHeaders = {
//     headers:{'Content-Type':'application/json;charset=UTF-8',
//
//     }
// }