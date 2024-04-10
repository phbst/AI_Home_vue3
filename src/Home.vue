<template>
<h2>家</h2>
<div>
    <RouterLink to="/projects">project</RouterLink>
    <RouterLink to="/chat">chat</RouterLink>
    <RouterLink to="/blogs">blogs</RouterLink>
</div>
<div>
    <RouterView/>
</div>
<button @click="change()">切换</button>
</template>

<script lang='ts' setup name=''>
//导入
import { reactive,ref,toRefs,onBeforeMount,onMounted} from 'vue'
import { RouterView ,RouterLink} from 'vue-router'

//数据


//方法

function change(){
    window.location.href = "/";
}
</script>

<style scoped>


</style>