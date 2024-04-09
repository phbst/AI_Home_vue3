<template>
  <el-container class="body">
    <el-header style="background: transparent;">
      <LoginHeader/>
    </el-header>
    <el-main>
      <LoginBody/>
    </el-main>
  </el-container>
</template>

<script lang='ts' setup name='Login'>
//导入
import { reactive,ref,toRefs,onBeforeMount,onMounted} from 'vue'
import LoginBody from '@/components/LoginBody.vue';
import LoginHeader from '@/components/LoginHeader.vue';
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
body * {
  -webkit-user-select: none; /* Safari */
  -moz-user-select: none;    /* Firefox */
  -ms-user-select: none;     /* IE10+/Edge */
  user-select: none;         /* 标准语法 */
}
</style>

