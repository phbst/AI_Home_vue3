<template>
    <div class="body">
        <el-avatar :size="75" shape='circle' :src=imageurl  style="margin-top: 45px;margin-bottom: 20px;" :lazy="true"/>
        
        <div class="info">
            <strong>Lyubov Kurach</strong>
            <p>2279118516@qq.com</p>
        </div>
        <el-avatar :size="25" shape='square' :src=vipimage_activate :v-show="vip_show"/>
        <el-avatar :size="25" shape='square' :src=vipimage v-show="!vip_show"/>
        <el-divider>
            <el-icon><star-filled /></el-icon>
        </el-divider>


        <el-menu default-active="2" class="el-menu-vertical-demo" >

            <el-menu-item index="1">
                <el-icon><HomeFilled /></el-icon>
                <template #title ><RouterLink to="/home/start"><strong>首 页(Home)</strong></RouterLink></template>
                
            </el-menu-item>

            <el-menu-item index="2">
                <el-icon><Comment /></el-icon>
                <template #title ><RouterLink to="/home/chat"><strong>AI工具(AI tools)</strong></RouterLink></template>
            </el-menu-item>

            <el-menu-item index="3">
                <el-icon><Management /></el-icon>
                <template #title><RouterLink to="/home/blogs"><strong>技术博客(blogs)</strong></RouterLink></template>
            </el-menu-item>

            <el-menu-item index="4">
                <el-icon><Menu /></el-icon>
                <template #title><RouterLink to="/home/projects"><strong>项目仓库(projects)</strong></RouterLink></template>
            </el-menu-item>

        </el-menu>
        


        <el-divider>
            <el-icon><star-filled /></el-icon>
        </el-divider>
        
        <el-button type="primary" round @click="logout" class="logout-button">退出登录(Logout)</el-button>
            

    </div>

    



</template>

<script lang='ts' setup name='Aside'>
//导入
import { reactive, ref, toRefs, onBeforeMount, onMounted } from 'vue'
import { StarFilled } from '@element-plus/icons-vue'
import { RouterLink,RouterView } from 'vue-router';
import { useRouter } from 'vue-router';

//数据
let router=useRouter()
let vip_show=ref(true)

let imageurl = "/images/touxiang.jpg"
let vipimage = "/images/vip-card.png"
let vipimage_activate="/images/vip-card-activate.png"
//方法

const isCollapse = ref(false)
const handleOpen = (key: string, keyPath: string[]) => {
    router.push({name:key})
    
    
}
const handleClose = (key: string, keyPath: string[]) => {
    console.log(key, keyPath,'handleclose')
}
function logout(){
    router.push({name:'login1'})
}

</script>

<style scoped>
.body {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;
    
}

.el-avatar {
    /* margin-top: 45px;
    margin-bottom: 20px; */

}

.info {
    width: 100%;
    text-align: center;
    word-wrap: break-word;
    overflow-wrap: break-word;
}

p {
    font-size: 12px;
    color: grey;
}

.router-link-active {
    text-decoration: none;
    /* color:#409eff; */
    color: #5d5cde;
  }
  a{
    text-decoration: none;
    color: grey;
  }
  .logout-button{
    background-color: #6e6ee3;
    margin-top: 100px;
  }
  .logout-button:hover{
    background-color: #5d5cde;
  }
  
</style>