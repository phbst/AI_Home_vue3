
import { createRouter,createMemoryHistory } from "vue-router";
import { createWebHistory } from "vue-router";
import Login from "@/pages/Login.vue";
import Home from "@/pages/Home.vue";

import Blogs from "@/views/Blogs.vue";
import Chat from "@/views/Chat.vue";
import Start from "@/views/Start.vue";
import Projects from "@/views/Projects.vue";

const router=createRouter({
    history:createWebHistory(),
    routes:[
        {
            name:'login1',
            path:'/login',
            component:Login
        },
       {
        name:'login2',
        path:'/',
        component:Login
       },
       {
        name:'home',
        path:'/home',
        component:Home,
        children:[
            {
                name:'start1',
                path:'',
                component:Start
            },
                {
                name:'projects',
                path:'projects',
                component:Projects
               },
               {
                name:'chat',
                path:'chat',
                component:Chat
               },
               {
                name:'start2',
                path:'start',
                component:Start
               },
               {
                name:'blogs',
                path:'blogs',
                component:Blogs
               },
        ]
       },

       
    ]
})


export default router