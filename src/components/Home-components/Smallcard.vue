<template>
    <div class="card" >
        <el-card @click="chatwithai" style="display: flex; flex-direction: column;">
            
            <div style="display: flex; justify-content: flex-start; align-items: center; ">
                <el-avatar :size="32" :src="list.image" style="margin-right: 8px;"/>
                <span style="font-weight: bold;">{{ list.name }}</span>
            </div>
            
            <div style="height: 40px;width:100% ;margin-top: 5px;">
                <span style="font-size: 12px;font-weight: 300">{{ list.description }}</span>
            </div>
            <div style="margin-top: 5px;" >
                <span style="margin-right: 5px;background-color: #F1F7FC;color: #9CA7AE ;font-size: 12px;font-weight: 500;" v-for="word in list.words">
                    {{ word }}
                </span>

            </div>
        </el-card>
    </div>
    
</template>

<script lang='ts' setup name=''>
//导入
import { reactive,ref,toRefs,onBeforeMount,onMounted} from 'vue'
import { useRouter } from 'vue-router';

//数据
let data=defineProps(['list'])
let router=useRouter()
//方法
function chatwithai(){
  if(data.list.link&&!data.list.path){
    window.open(data.list.link)
  }
  else{
    router.push({name:data.list.path})
  }
}


</script>

<style scoped>
.card{
    height: 150px;
    width: 240px;
    margin-left: 5px;
}
.el-card{
    height: 148px;
    width: 200px;
    background-color: white;
    border-radius: 10px;
    margin-top: 10px;
    margin-bottom: 10px;
}
.el-card:hover{
    height: 148px;
    width: 200px;
    background-color: white;
    border-radius: 10px;
    margin-top: 3px;
    margin-bottom:17 px;
}
</style>