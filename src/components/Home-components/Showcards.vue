<template>
    <el-scrollbar>
        <div class="movedcards">
            <el-carousel :interval="4000" type="card" height="250px">
                <el-carousel-item v-for="(item,index) in movecardsimages" :key="index">
                    <!-- <el-image :src="item" fit="cover"/> -->
                    <img :src="item" style="height: 100%;width: 100%;"/>
                </el-carousel-item>
            </el-carousel>
        </div>
        <div class="popular">

            <el-card style="width: 45%;margin-right: 20px; border-radius: 10px;display: flex;flex-direction: column;">
                <h5>Popular websize</h5>
                <div style="display: flex;flex-direction: row;flex-wrap: wrap;">
                    <div v-for="(web, index) in weblist" :key="index" >
                    <el-link @click="gotonewweb(web.url)" style="font-size:20px;margin-right: 50px;margin-bottom: 20px;">
                        <el-avatar size="small" :src="web.image" />
                        {{ web.name }}
                    </el-link>
                </div>
                </div>

            </el-card>

            <el-card style="width: 35%;margin-right: 20px;border-radius: 10px;display: flex;flex-direction: column;">
                <h5>Popular Language Model</h5>
            </el-card>
            <el-card style="width: 15%;border-radius: 10px;display: flex;flex-direction: column;">
            </el-card>
        </div>
        <div class="calendar">
            <el-calendar>
                <template #date-cell="{ data }">
                    <p :class="data.isSelected ? 'is-selected' : ''">
                        {{ data.day.split('-').slice(1).join('-') }}
                        {{ data.isSelected ? '✔️' : '' }}
                    </p>
                </template>
            </el-calendar>
        </div>
    </el-scrollbar>
</template>

<script lang='ts' setup name=''>
//导入
import { reactive, ref, toRefs, onBeforeMount, onMounted } from 'vue'


//数据

let weblist = reactive([
    {

        name: 'Hugging Face',
        url: 'https://huggingface.co/',
        image: '/images/huggingface_logo-noborder.svg'
    },
    {

        name: 'Github',
        url: 'https://github.com/',
        image: '/images/github.png'
    },
    {

        name: 'ChatGPT',
        url: 'https://chat.openai.com/',
        image: '/images/chatgpt.png'
    },
    {

        name: 'Kimi AI',
        url: 'https://kimi.moonshot.cn/',
        image: '/images/kimi.png'
    },
    {
        name:'机器之心 SOTA',
        url:'https://sota.jiqizhixin.com/',
        image:'/images/qiji.png'
    }
])
//200x598
let movecardsimages=reactive([
    
    '/images/movecard13.jpg',
    '/images/movecard15.webp',
    '/images/movecard6.jpg',
    '/images/movecard9.png',
    '/images/movecard12.webp',
    '/images/movecard14.png',

])
//方法

function gotonewweb(url:string){
    window.open(url);
}
</script>

<style scoped>
.el-scrollbar {
    background-color: #f3f5fc;
    /* border-radius: 20px; */
}


.movedcards {

    border-radius: 20px;
    background-color: white;
    padding: 20px;
    margin-bottom: 20px;
}



.el-carousel__item h3 {
    color: #475669;
    opacity: 0.75;
    line-height: 200px;
    margin: 0;
    text-align: center;
}

/* .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
    background-color: #d3dce6;
} */

.is-selected {
    color: #1989fa;
}

.calendar {
    margin-top: 20px;
    border-radius: px;
    background-color: white;
}

.el-calendar {
    padding: 2px;
}

.popular {
    display: flex;
    flex-direction: row;
}
</style>