<template>
  <div style="height: 100vh;">
    <el-container>
      <el-aside width="200px">
        <Aside/>
      </el-aside>

      
      <el-container>
        <RouterView />
    </el-container>
  </el-container>
  </div>
</template>



<script lang='ts' setup name=''>
//导入
import { reactive, ref, toRefs, onBeforeMount, onMounted } from 'vue'
import { RouterLink, RouterView } from 'vue-router';

import Aside from '@/components/Home-components/Aside.vue';
import Start from '@/views/Start.vue';



//方法


</script>

<style scoped>
.el-container {
  height: 100%;
}

.el-header,
.el-footer {
  background-color: #b3c0d1;
  text-align: center;
  line-height: 60px;
}

.el-aside {
  background-color: white;
  color: #333;


  width: 200px;
}

.el-main {
  background-color: #f3f5fc;
  /* background-color: #e9eef3; */
  color: #333;
  text-align: center;

}
</style>