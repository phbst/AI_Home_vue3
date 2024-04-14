<template>
    <Startskeleton v-if="loading" />
    <el-scrollbar v-else>
        <div class="movedcards">
            <el-carousel :interval="4000" type="card" height="250px">
                <el-carousel-item v-for="(item, index) in startstore.movecardsimages" :key="index">
                    <!-- <el-image :src="item" fit="cover"/> -->
                    <img :src="item" style="height: 100%;width: 100%;" />
                </el-carousel-item>
            </el-carousel>
        </div>
        <div class="popular">

            <el-card style="width: 55%;margin-right: 20px; border-radius: 10px;display: flex;flex-direction: column;">
                <h4>Popular websize</h4>
                <div style="display: flex;flex-direction: row;flex-wrap: wrap;">
                    <div v-for="(web, index) in startstore.weblist" :key="index">
                        <el-link @click="startstore.gotonewweb(web.url)"
                            style="font-size:20px;margin-right: 15px;margin-bottom: 20px;">
                            <el-avatar size="small" :src="web.image" />
                            <span style="display: inline-block; width: 150px; margin-left: 10px; ">{{ web.name }}</span>
                        </el-link>
                    </div>
                </div>

            </el-card>

            <el-card style="width: 25%;margin-right: 20px;border-radius: 10px;display: flex;flex-direction: column;">
                <h4>Popular Language Model</h4>
                <div style="display: flex;flex-direction: row;flex-wrap: wrap;">
                    <div v-for="(model, index) in startstore.modellist" :key="index">
                        <el-link @click="startstore.gotonewweb(model.url)"
                            style="font-size:20px;margin-right: 50px;margin-bottom: 20px;">
                            <el-avatar size="small" :src="model.image" />
                            <span style="display: inline-block; width: 200px;  text-align: center;">{{ model.name }}</span>

                        </el-link>
                    </div>
                </div>
            </el-card>

            <el-card style="width: 15%;border-radius: 10px;">

                <svg>
                    <circle class="circle" cx="80" cy="80" r="50" transform="rotate(-90 80 80)"></circle>
                    <text x="80" y="85" fill="#6b778c" text-anchor="middle">
                        <tspan class="text">65</tspan>
                        
                    </text>


                </svg>
                watchs

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
import Startskeleton from './Startskeleton.vue';
import { useStartlinklistStore } from '@/store/useStartlinklistStore';

//数据
let startstore=useStartlinklistStore()
let loading=ref(true)

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

h4 {
    color: #6e6ee3;
}

.circle {
    fill: none;
    stroke: #7C83FD;
    stroke-width: 8;
    stroke-dasharray: 314;
    stroke-dashoffset: 314; /* 初始值设置为周长 */
    animation: circle 3s 1 forwards; /* 动画持续时间3秒，迭代次数1次，动画结束后保持最后一帧的状态 */
    stroke-linecap: round;
    transform: rotate(-90deg);
    transform-origin: center;
    transform-box: fill-box;
}

@keyframes circle {
    0% {
        stroke-dashoffset: 314; /* 动画开始时，环形进度为空 */
    }
    100% {
        stroke-dashoffset: 0; /* 动画结束时，环形进度完全填充 */
    }
}
.circle {
    /* ... 其他样式 ... */
    animation-delay: 0s; /* 设置动画延迟为 0 秒 */
}

.text{
    font-size: 20px;
}
</style>