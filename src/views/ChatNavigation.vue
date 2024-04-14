<template>
    <Chatskeleton v-if="loading"/>
    <el-container class="main" v-else>
        <el-main>
            <el-scrollbar>
                <!-- <el-card
                    style=" height:250px;margin-left: 20px;margin-right: 20px;margin-bottom: 20px;background-color: white;border-radius: 10px;">
                   
                </el-card> -->
                <div style="border-radius: 10px;;width: 100%;margin-bottom: 10px;" class="test">
                    <el-image :src='chatstore.navigationimageshow' fit="contain" style="border-radius: 10px;" />
                </div>



                <div style="margin-left: 20px;margin-right: 20px;margin-bottom: 10px;padding-top: 10px;">
                    <strong >本站可用AI工具</strong><br>
                    <div style="display: flex;flex-direction: row;flex-wrap: wrap ;margin-top: 10px;">
                        <smallcard v-for="i in chatstore.intoolslist" :list="i" />
                    </div>
                </div>



                <div style="margin-left: 20px;margin-right: 20px;margin-bottom: 10px;padding-top: 10px;">
                    <strong>站外语言模型</strong><br>
                    <div style="display: flex;flex-direction: row;flex-wrap: wrap">
                        <smallcard v-for="i in chatstore.outlanguagetoolslist" :list="i" />
                    </div>
                </div>


                <div style="margin-left: 20px;margin-right: 20px;margin-bottom: 10px;padding-top: 10px;">
                    <strong>站外绘图模型</strong><br>
                    <div style="display: flex;flex-direction: row;flex-wrap: wrap">
                        <smallcard v-for="i in chatstore.outpicturetoolslist" :list="i" />
                    </div>
                </div>
            </el-scrollbar>
        </el-main>
    </el-container>
</template>

<script lang='ts' setup name='chatnavigation'>
//导入
import { reactive, ref, toRefs, onBeforeMount, onMounted } from 'vue'
import smallcard from '@/components/Home-components/Smallcard.vue';
import Chatskeleton from '@/components/Home-components/Chatskeleton.vue';
import { useChatlistStore } from '@/store/useChatweblistStore';
//数据
let chatstore=useChatlistStore()
let loading=ref(true)
//方法
//方法
onMounted(() => {
  fetchData().then(() => {
    loading.value = false; 
  });
});

const fetchData = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('加载的数据');
    }, 500); // 假设请求需要2秒钟
  });
};

</script>

<style scoped>
.main {
    background-color: #f3f5fc;
    height: 100%;
}

.el-container {
    height: 100%;
}

.el-header,
.el-footer {
    /* background-color: #b3c0d1; */
    /* text-align: center;
  line-height: 60px; */

}

.el-main {
    /* background-color: #e9eef3; */
    /* color: #333;
  text-align: center; */

}
</style>