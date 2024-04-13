<template>
    <el-container class="main">

        <el-header>
            <el-input v-model="search" style="width: 60%; margin-right: 20%;margin-bottom: 10px;" size="large"
                placeholder="Search the Blogs、Projects、Helps" :prefix-icon="Search" />
            <el-icon>
                <Bell />
            </el-icon>
            <el-icon>
                <Setting />
            </el-icon>
            <el-button type="primary" round @click="upgrade_vip" class="upgrade-button">Upgrade Plan</el-button>
        </el-header>
        <el-main>
            <Showcards />
        </el-main>
        <!-- <el-footer>Footer</el-footer> -->
    </el-container>
</template>

<script lang='ts' setup name='Start'>
//导入
import { reactive, ref, toRefs, onBeforeMount, onMounted } from 'vue'
import { Search } from '@element-plus/icons-vue'
import emitter from "@/utils/emitter";
import Showcards from '@/components/Home-components/Showcards.vue';

//数据

const search = ref('')


//方法

function upgrade_vip() {

}
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
    padding-top: 20px;
    padding-left: 50px;
    /* background-color: #b3c0d1; */
    /* text-align: center; */
    /* line-height: 60px; */
}

.el-main {
    /* background-color: #e9eef3; */
    color: #333;
    text-align: center;
    padding-left: 50px;
    padding-right: 50px;

}



:deep(.el-input__wrapper) {
    border-radius: 20px;
}

.el-icon {
    padding-left: 20px;
    padding-right: 20x;
    font-size: 20px;
    padding-top: 10px;

}

.upgrade-button {
    margin-bottom: 10px;
    margin-left: 2%;
    background-color: #6e6ee3;
}

.upgrade-button:hover {
    margin-bottom: 10px;
    margin-left: 2%;
    background-color: #5d5cde;
}
</style>