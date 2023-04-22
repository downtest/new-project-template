import {createRouter, createWebHistory} from "vue-router";
import App from "../src/App";

const NotFound = { template: '<div>404</div>' }
const routes = [
    {path: '/main', name: 'profile', component: App, meta: {title: 'Main Page'}},
]

const router = createRouter({
    history: createWebHistory(),
    linkActiveClass: 'link__active',
    routes, // short for `routes: routes`
})

// router.beforeEach((to, from) => {
//     document.title =  to.meta.title;
// })

export default router;
