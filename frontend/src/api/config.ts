import store from '../store'

export const apiHeaders = {
    headers: {'Content-Type': 'application/json;charset=UTF-8', 'Authorization': 'Bearer ' + store.state.accessToken}
}

// export const apiHeaders = {
//     headers:{'Content-Type':'application/json;charset=UTF-8',
//
//     }
// }