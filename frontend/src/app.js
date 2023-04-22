import { createApp } from 'vue'
import axios from "axios";
import moment from 'moment';

import App from './App'
import store from '../store';
import router from '../router';


const app = createApp(App)

app.use(store)
// Помещаем ссылку на vuex в window, чтобы иметь доступ к vuex`у из дочернего окна
window.$store = store

app.use(router)
window.$router = router

console.log(process.env,`envs`)

window.$axios = axios.create({
    baseURL: process.env.VUE_APP_API_HOST,
    // timeout: 1000,
    headers: {'X-Custom-Header': 'foobar'}
})

app.config.globalProperties.$moment=moment
// app.config.globalProperties.$firebase=firebase

// effectively adding the router to every component instance
// app.config.globalProperties.$router = router

app.mount('#app')
