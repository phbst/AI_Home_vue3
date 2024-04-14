<template>

    <el-container class="body">
        <div class="header">
            <el-image :src="modelimage"
                style="border-radius: 10px;width: 40px;height: 40px; margin-right: 5px;margin-left: 20px;" />
            <strong>ChatGPT-3.5</strong>
            <el-button type="primary" round @click="cheakhistory" class="cheakhistory-button"><el-icon
                    style="margin-right: 5px;">
                    <ChatDotRound />
                </el-icon>历史会话</el-button>

        </div>
        <div class="main">Main</div>
        <div class="footer">
            <el-input v-model="input" style="width: 600px;height: 40px;font-size: 17px;border: 0 ;border: none;"
                :autosize="{ minRows: 1, maxRows: 2 }" type="textarea" placeholder="Please input" />
        </div>
    </el-container>

</template>

<script lang='ts' setup name='chatgpt'>
//导入
import { reactive, ref, toRefs, onBeforeMount, onMounted } from 'vue'


//数据
let modelimage = '/images/chatgpt35.jpeg'
let input = ref('')
//方法
function cheakhistory() {

}

</script>

<style scoped>
.el-container {
    height: 100%;
    width: 100%;
    background-color: #f3f5fc;
    display: flex;
    flex-direction: column;
}

.header {
    background-color: #f3f5fc;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    height: 55px;
}

.footer {
    background-color: #f3f5fc;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 90px;
    background-color: #f3f5fc;
}

.el-aside {
    background-color: white;
    color: #333;


    width: 200px;
}

.main {
    background-color: #f3f5fc;
    /* background-color: #e9eef3; */
    text-align: center;
    flex-grow: 1;

}

.cheakhistory-button {
    background-color: #4f7ef5;
    margin-left: 1000px;
}

.cheakhistory-button:hover {
    background-color: #2e67fa;
}

/*
:deep(.el-textarea__inner) {
  -ms-overflow-style: none;  
  scrollbar-width: none;  
}

:deep(.el-textarea__inner::-webkit-scrollbar ){
  display: none; 
} */
:deep(.el-textarea__inner::-webkit-scrollbar) {
    width: 6px;
    height: 6px;
}

:deep(.el-textarea__inner::-webkit-scrollbar-thumb) {
    border-radius: 3px;
    -moz-border-radius: 3px;
    /* For Firefox */
    -webkit-border-radius: 3px;
    /* For Safari and Chrome */
    background-color: #c3c3c3;
}

:deep(.el-textarea__inner::-webkit-scrollbar-track) {
    background-color: transparent;
}
:deep(.el-textarea__inner) {
  border: none;
}

</style>