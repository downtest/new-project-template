import { createStore } from 'vuex'
import user from './modules/user'

const debug = process.env.NODE_ENV !== 'production'

const store = createStore({
    modules: {
        user,
    },
    strict: debug,
    plugins: [],
})

// store.axios = axios.create({
//     // baseURL: process.env.VUE_APP_BACKEND_HOST,
//     withCredentials: false,
//     headers: {
//         'X-User-Token': window.localStorage.getItem('ls_todos_user_token') || store.getters['user/token'],
//     },
// })

export default store
