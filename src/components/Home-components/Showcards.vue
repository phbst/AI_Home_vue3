<template>
    <el-scrollbar>
        <div class="movedcards">
            <el-carousel :interval="4000" type="card" height="200px">
                <el-carousel-item v-for="item in 6" :key="item">
                    <h3 text="2xl" justify="center">{{ item }}</h3>
                </el-carousel-item>
            </el-carousel>
        </div>
        <div class="popular">
            <el-card style="width: 45%;margin-right: 20px; border-radius: 10px;display: flex;flex-direction: column;">
                <strong>Popular websize</strong>

            </el-card>

            <el-card style="width: 35%;margin-right: 20px;border-radius: 10px;display: flex;flex-direction: column;">
                <strong>Popular Language Model</strong>
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


//方法


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

.el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
    background-color: #d3dce6;
}
.is-selected {
  color: #1989fa;
}
.calendar{
    margin-top: 20px;
    border-radius: px;
    background-color: white;
}
.el-calendar{
    padding: 2px;
}
.popular{
    display: flex;
    flex-direction: row;
}
</style>