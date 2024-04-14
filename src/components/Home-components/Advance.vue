<template>
    <div class="advance"> 
        <el-image :src="info.image" style="height: 48px;width: 48px;"/>
        <pre style="font-size: 20px;">{{info.message  }}</pre>
    </div>
    
</template>

<script lang='ts' setup name=''>
//导入
import { reactive,ref,toRefs,onBeforeMount,onMounted} from 'vue'


//数据


//方法
defineProps(['info'])

</script>

<style scoped>
.advance{
    margin-top: 30%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

</style>