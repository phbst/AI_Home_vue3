<template>

    <el-container class="body">
        <div class="header">
            <el-image :src="modelimage"
                style="border-radius: 10px;width: 40px;height: 40px; margin-right: 5px;margin-left: 40px;" />
            <strong>ChatGPT-3.5</strong>
            <el-button type="primary" round @click="cheakhistory" class="cheakhistory-button"><el-icon
                    style="margin-right: 5px;">
                    <ChatDotRound />
                </el-icon>历史会话</el-button>

        </div>
        <div class="main">
            <div style="width: 270px;" />
            <div class="message-content">
                <Advance :info="advance" v-if="!messagelist.length" />
                <div v-else>
                    message
                </div>
            </div>
            <div style="width: 270px;" />
        </div>
        <div class="footer">
            <el-button circle round @click="clearmessages" size="large">
                <el-icon size="30">
                    <DeleteFilled />
                </el-icon></el-button>
            <div class="chatinput">
                <textarea class="area" placeholder="Enter 发送; Shift + Enter 换行" v-model="input"></textarea>
            </div>
            <el-button circle round @click="sendtochatgpt" size="large">
                <el-icon size="30">
                    <Promotion />
                </el-icon></el-button>

        </div>
    </el-container>

</template>

<script lang='ts' setup name='chatgpt'>
//导入
import { reactive, ref, toRefs, onBeforeMount, onMounted } from 'vue'
import Advance from '@/components/Home-components/Advance.vue';
import type { RefSymbol } from '@vue/reactivity';

//数据
let modelimage = '/images/chatgpt35.jpeg'
let input = ref('');


interface Message {
    user: string;
    bot: string;
}

let messagelist = reactive<Message[]>([
])
let advance = reactive({
    image: '/images/chatgpt35 (2).png',
    message: 'How can I help you today?'
})
//方法
function cheakhistory() {

}

function sendtochatgpt() {
    

    messagelist.push({
        user: input.value,
        bot: '',
    });

    console.log(messagelist);


    input.value = '';
    messagelist[messagelist.length - 1].bot = '我已经作出回答';
    console.log(messagelist);

}
function clearmessages() {

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
    height: 80px;
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
    display: flex;
    flex-direction: row;


}

.message-content {
    display: flex;
    flex-direction: column;
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
.chatinput {
    padding: 10px;
}

.area {
    width: 600px;
    height: 36px;
    font-size: 16px;
    border: none;
    border-radius: 15px;
    padding: 10px;
}

:deep(.area::-webkit-scrollbar) {
    width: 6px;
    height: 6px;
}

:deep(.area::-webkit-scrollbar-thumb) {
    border-radius: 3px;
    -moz-border-radius: 3px;
    /* For Firefox */
    -webkit-border-radius: 3px;
    /* For Safari and Chrome */
    background-color: #c3c3c3;
}

:deep(.area::-webkit-scrollbar-track) {
    background-color: transparent;
}

:deep(.el-button--large) {
    --el-button-size: 50px
}
</style>