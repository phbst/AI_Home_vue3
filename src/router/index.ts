
import { createRouter,createMemoryHistory } from "vue-router";
import { createWebHistory ,createWebHashHistory} from "vue-router";
import Login from "@/pages/Login.vue";
import Home from "@/pages/Home.vue";

import Blogs from "@/views/Blogs.vue";
import Chat from "@/views/Chat.vue";
import Start from "@/views/Start.vue";
import Projects from "@/views/Projects.vue";

import ChatNavigation from "@/views/ChatNavigation.vue";
import Chatgpt from "@/views/Chatgpt.vue";
import KImi from "@/views/KImi.vue";
import GLM4 from "@/views/GLM4.vue";
import CogView from "@/views/CogView.vue";




const router=createRouter({
    history:createWebHashHistory(),
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
                component:Chat,
                children:[
                    {
                        name:'chatnavigation2',
                        path:'chatnavigation',
                        component:ChatNavigation
                    },
                    {
                        name:'chatgpt',
                        path:'chatgpt',
                        component:Chatgpt
                    },
                    {
                        name:'kimi',
                        path:'kimi',
                        component:KImi
                    },
                    {
                        name:'glm4',
                        path:'glm4',
                        component:GLM4
                    },
                    {
                        name:'cogview',
                        path:'cogview',
                        component:CogView
                    },
                    {
                        name:'chatnavigation1',
                        path:'',
                        component:ChatNavigation
                    },
                ]
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