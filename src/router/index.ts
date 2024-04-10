import { createRouter,createMemoryHistory } from "vue-router";
import Blogs from "@/pages/Blogs.vue";
import Chat from "@/pages/Chat.vue";
import Projects from "@/pages/Projects.vue";
const router=createRouter({
    history:createMemoryHistory(),
    routes:[
        {
            name:'blogs',
            path:'/blogs',
            component:Blogs
        },
        {
            name:'chat',
            path:'/chat',
            component:Chat
        },
        {
            name:'projects',
            path:'/projects',
            component:Projects
        }
    ]
})


export default router