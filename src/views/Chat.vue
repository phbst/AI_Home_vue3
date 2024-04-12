<template>
    <el-container class="main">
        
        <el-header>Header</el-header>
        <el-main>Main</el-main>
        <el-footer>Footer</el-footer>
    </el-container>
</template>

<script lang='ts' setup name='chat'>
//导入
import { reactive, ref, toRefs, onBeforeMount, onMounted } from 'vue'


//数据


//方法


</script>

<style scoped>
.main{
    background-color: #f3f5fc;height: 100%;
}
.el-container{
  height: 100%;
  }
  .el-header,
  .el-footer {
  /* background-color: #b3c0d1; */
  text-align: center;
  line-height: 60px;
  }

  .el-main{
  /* background-color: #e9eef3; */
  color: #333;
  text-align: center;
  
  }
</style>