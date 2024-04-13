<template >
  <div class="main"> 
    <el-container class="body">
      <el-header style="background: transparent;">
        <LoginHeader/>
      </el-header>
      <el-main>
        <LoginBody/>
      </el-main>
    </el-container>
  </div>
    
  </template>
  
  <script lang='ts' setup name='Login'>
  //导入
  import { reactive,ref,toRefs,onBeforeMount,onMounted} from 'vue'
  import LoginBody from '@/components/Login-components/LoginBody.vue';
  import LoginHeader from '@/components/Login-components/LoginHeader.vue';
  //数据
  
  
  //方法

  </script>
  
  <style scoped>
  .el-container{
  height: 100%;
  }
  .el-header,
  .el-footer {
  background-color: #b3c0d1;
  text-align: center;
  line-height: 60px;
  }
  .el-aside{
  background-color: #d3dce6;
  color: #333;
  text-align: center;
  line-height: 400px;
  width: 200px;
  }
  .el-main{
  /* background-color: #e9eef3; */
  color: #333;
  text-align: center;
  
  }
  body{
    height:100%;
    margin: 0px;
    padding: 0px;

  }
  .main{
    height:100%;
    margin: 0px;
    padding: 0px;
    background-image: url('/images/login-background3.jpg');
    background-size: cover;
  }
  
  </style>
  
  