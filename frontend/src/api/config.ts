import store from '../store'

export const authHeaders =() => {
    {
          return {'Authorization': 'Bearer ' + store.state.accessToken}

    }
}

// export const apiHeaders = {
//     headers:{'Content-Type':'application/json;charset=UTF-8',
//
//     }
// }