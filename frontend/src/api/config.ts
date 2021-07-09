import store from '../store'

export const apiHeaders = store.getters.getAccessToken ? {
    headers: {
        'Content-Type': 'application/json;charset=UTF-8',
        'Authorization': `Bearer ${store.getters.getAccessToken}`

    }
} : {
    headers: {
        'Content-Type': 'application/json;charset=UTF-8',


    }
}

// export const apiHeaders = {
//     headers:{'Content-Type':'application/json;charset=UTF-8',
//
//     }
// }