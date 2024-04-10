<template>
    <div class="form">
        <div style="display: flex;">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024" data-v-ea893728=""><path fill="currentColor" d="M288 320a224 224 0 1 0 448 0 224 224 0 1 0-448 0m544 608H160a32 32 0 0 1-32-32v-96a160 160 0 0 1 160-160h448a160 160 0 0 1 160 160v96a32 32 0 0 1-32 32z"></path></svg>
            <el-input v-model="username" placeholder="Username" clearable  />
        </div>

        <div style="height: 25px;">
            <p v-show="usernametip">*用户名不符合输入规范*允许数字与字母,且长度不少于8位</p>
        </div>
        <div style="display: flex;">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024" data-v-ea893728=""><path fill="currentColor" d="M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896m0 192a58.432 58.432 0 0 0-58.24 63.744l23.36 256.384a35.072 35.072 0 0 0 69.76 0l23.296-256.384A58.432 58.432 0 0 0 512 256m0 512a51.2 51.2 0 1 0 0-102.4 51.2 51.2 0 0 0 0 102.4"></path></svg>
            <el-input v-model="password" placeholder="Password" show-password />
        </div>
        


        <div style="height: 25px;">
            <p v-show="passwordtip">*密码不符合输入规范*允许数字与字母,且长度不少于8位</p>
        </div>
        <div>

            <el-checkbox v-model="checked" label="已阅读并同意AI HOME 服务条款 和 隐私政策" size="large" style="float: left; margin-bottom: 10px;" />
        </div>
        <el-button type="danger" style="margin-bottom: 20px;;margin: 0 0 20px;" round @click="login">Login</el-button>
        
        <!-- <el-button type="danger" style="margin-bottom: 20px;margin: 0 0 20px;" round>Sign Up</el-button> -->

    </div>
</template>

<script lang='ts' setup name='LoginForm'>
//导入
import { reactive, ref, toRefs, onBeforeMount, onMounted } from 'vue'
import { ElMessage, ElMessageBox } from 'element-plus'
import type { Action } from 'element-plus'
import type { RefSymbol } from '@vue/reactivity';

//数据
let username = ref('')
let password = ref('')

let usernametip = ref(false)
let passwordtip = ref(false)

let checked = ref(false)
//方法
function checkusername(data:any) {

  const isAlphanumeric = /^[a-zA-Z0-9]*$/.test(data)
  const isLongEnough = data.length >= 8;
  
  if(isAlphanumeric&&isLongEnough){
    usernametip.value=false
  }
  else{
    usernametip.value=true
  }
}
function checkpassword(data:any) {
  const isAlphanumeric = /^[a-zA-Z0-9]*$/.test(data)
  const isLongEnough = data.length >= 8;

  if(isAlphanumeric&&isLongEnough){
    passwordtip.value=false
  }
  else{
    passwordtip.value=true
  }
}

function login() {
    checkpassword(password.value)
    checkusername(username.value)
    console.log('调用login方法')
    if(!usernametip.value&&!passwordtip.value){
      window.location.href = "/home";
    }
    
}



</script>

<style scoped>
.form {
    display: flex;
    flex-direction: column;

}
.el-input{
    width: 380px;
    height: 40px;
    /* margin-top: 20px; */
    /* background-color: rgba(255, 255, 255, 0.2);  */
    
}
p{
font-size: 12px;
margin: 0;
 float: left;
 color: red;
}
svg {
  width: 28px;
  height: 28px;
  
}
</style>