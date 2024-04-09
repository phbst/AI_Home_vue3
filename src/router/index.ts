import { createRouter,createMemoryHistory } from "vue-router";
import Home from "@/pages/Home.vue";
import Login from "@/pages/Login.vue";

const router=createRouter({
    history:createMemoryHistory(),
    routes:[
        {
            name:'login',
            path:'/login',
            component:Login
        },
        {
            name:'home',
            path:'/home',
            component:Home
        }
    ]
})


export default router