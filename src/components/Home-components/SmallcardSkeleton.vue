<template>
    <el-skeleton>
        <template #template>
            <div class="card">
                <el-card style="display: flex; flex-direction: column;">

                    <div style="display: flex; justify-content: flex-start; align-items: center; ">
                        
                        
                        <el-skeleton-item variant="image" class="image" />
                        <el-skeleton-item variant="text" class="title" />
                    </div>

                    <div style="height: 40px;width:100% ;margin-top: 5px;">
                        <el-skeleton-item variant="text" class="text" />
                    </div>
                    <div style="margin-top: 5px;">
                        <el-skeleton-item variant="text" class="text" :rows="1"/>

                    </div>
                </el-card>
            </div>
        </template>
    </el-skeleton>

</template>

<script lang='ts' setup name=''>
//导入
import { reactive, ref, toRefs, onBeforeMount, onMounted } from 'vue'


//数据


//方法


</script>

<style scoped>
.card {
    height: 150px;
    width: 240px;
    margin-left: 5px;
}

.el-card {
    height: 148px;
    width: 200px;
    background-color: white;
    border-radius: 10px;
    margin-top: 10px;
    margin-bottom: 10px;
}
.image{
    border-radius: 50%;
    width: 32px;
    height: 32px;
    margin-right: 8px;
}
.title{
    width: 70px;
    height: 21px;
}
.text{
    width: 150px;
    height: 18px;
}
</style>