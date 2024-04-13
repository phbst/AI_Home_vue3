<template>
    <el-main style="padding: 20px;">
        <el-skeleton>
            <template #template>
                <div class="picture-area">
                    <el-skeleton-item variant="image" class="picture-area-image" />
                </div>

                <div class="toolsarea1">
                    <el-skeleton-item variant="text" style="height: 20px;width: 200px;border: 1px black solid" />
                    <div class="tools" style="">
                        <SmallcardSkeleton/>
                        <strong>dawd</strong>
                    </div>

                </div>
                <div class="toolsarea2">
                    <el-skeleton-item variant="text" style="height: 20px;width: 200px;border: 1px black solid" />
                    <div class="tools">
                        <SmallcardSkeleton v-for="i in 5"/>
                    </div>
                </div>
                <div class="toolsarea3">
                    <el-skeleton-item variant="text" style="height: 20px;width: 200px;border: 1px black solid" />
                    <div class="tools">
                        <SmallcardSkeleton v-for="i in 5"/>
                    </div>
                </div>
            </template>


        </el-skeleton>
    </el-main>


    <!-- <el-scrollbar>
        <div style="border-radius: 10px;;width: 100%;margin-bottom: 10px;">
        </div>
        <div style="margin-left: 20px;margin-right: 20px;margin-bottom: 10px;padding-top: 10px;">
        </div>
        <div style="margin-left: 20px;margin-right: 20px;margin-bottom: 10px;padding-top: 10px;">
        </div>
        <div style="margin-left: 20px;margin-right: 20px;margin-bottom: 10px;padding-top: 10px;">
        </div>
    </el-scrollbar> -->

</template>
<script lang='ts' setup name=''>
//导入
import { reactive, ref, toRefs, onBeforeMount, onMounted } from 'vue'

import SmallcardSkeleton from './SmallcardSkeleton.vue';
//数据


//方法


</script>

<style scoped>
.main {
    background-color: #f3f5fc;
    height: 100%;
}

.el-container {
    height: 100%;
}
.el-skeleton{
    width: 100% ; display: flex;flex-direction: column;
}
.picture-area{
    border-radius: 10px;;width: 100%;margin-bottom: 10px;
}
.picture-area-image{
    width: 100%; height: 174px;border: 1px black solid;border-radius: 10px;
}
.toolsarea1{
    margin-left: 20px;margin-right: 20px;margin-bottom: 10px;padding-top: 10px;display: flex;flex-direction: column;
}
.toolsarea2{
    margin-left: 20px;margin-right: 20px;margin-bottom: 10px;padding-top: 10px;display: flex;flex-direction: column;
}
.toolsarea3{
    margin-left: 20px;margin-right: 20px;margin-bottom: 10px;padding-top: 10px;display: flex;flex-direction: column;
}
/* .tools{
    display: flex;flex-direction:row;flex-wrap: wrap;background-color: aqua    ;
} */
</style>