<template>
    <el-skeleton style="width: 100% ; display: flex;flex-direction: column;"
        animated>
        <template #template>
            <el-skeleton-item variant="image" style="width: 100%; height: 250px; border-radius: 10px; margin-bottom: 20px;" />

            <div style="height: 289px; width: 100%;margin-left: 15px;margin-right: 15px; display: flex;flex-direction: row;margin-bottom: 20px;"
                animated>
                <div style="height: 100%;width: 55%;margin-right: 20px;border-radius: 10px;">
                    <el-skeleton :rows="5"  style="width: 100%;"/>
                </div>
                <div style="height: 100%;width: 25%;margin-right: 20px;border-radius: 10px;">
                    <el-skeleton :rows="5" />
                </div>
                <div style="height: 100%;width: 15%;margin-right: 20px;border-radius: 10px;">
                    <el-skeleton-item variant="image" style="width: 100%; height: 250px; border-radius: 10px; margin-bottom: 20px;" />
                </div>
            </div>

            <div style="width: 100%;margin-left: 15px;margin-right: 15px; " animated>
                <el-skeleton :rows="1" />
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

<style scoped></style>