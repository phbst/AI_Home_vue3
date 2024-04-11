<template>
    <div class="body">
        <el-card class="card" shadow="always">
            <div>
                <el-image style="width: 240px; height: 60px ; margin-bottom: 20px;" src="/images/login-form-logo.png" fit="fill" />
            </div>
            
            <el-tabs v-model="activeName" class="demo-tabs" @tab-click="handleClick">
                <el-tab-pane label="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Login&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" name="first" style="padding: 0 20px">
                    <br>
                    <LoginForm/>
                </el-tab-pane>
                <el-tab-pane label="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Sign Up&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" name="second">
                   <br>
                    <SignUpFrom/>
                </el-tab-pane>
            </el-tabs>
            

        </el-card>
    </div>
    
</template>

<script lang='ts' setup name='LoginBody'>
//导入
import { reactive,ref,toRefs,onBeforeMount,onMounted} from 'vue'
import LoginForm from './LoginForm.vue';
import SignUpFrom from './SignUpFrom.vue';
import type { TabsPaneContext } from 'element-plus'
//数据


const activeName = ref('first')


//方法
const handleClick = (tab: TabsPaneContext, event: Event) => {
}

</script>

<style scoped>
.body{
    height: 100%;
    width: 100%;
    margin-top: 0px;
}
.card{
    background-color: rgba(255, 255, 255, 0.2); 
    /*半透明白色背景，0.8是透明度 */
    width: 440px;
    height: 560px;
    margin-left: 840px;
    box-shadow: 0 0 20px;
    border-radius: 20px;
    padding-top: 20px;
    margin-top: 20px;
    position:fixed;
}


</style>