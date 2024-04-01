<template>
    <div class="person">
        <h2>姓名：{{ name }}</h2>
        <h2>年龄：{{ age }}</h2>
        <h2>地址：{{ address }}</h2>
        <button @click="changename">修改名字</button>
        <button @click="changeage">修改年龄</button>
        <button @click="showtel">查看联系方式</button>
    </div>

</template>

<!-- <script lang="ts">
export default {
    name: 'Person',
    // beforeCreate(){
    //     console.log('beforecreate')
    // },

    //vue2, 可以与vue3混用
    // data(){       //this能用
    //     return {
    //         name:'phb',
    //         age:18,
    //         tel:'12143242'
    //     }
    // },
    // methods:{
    //     changeage(){
    //         this.age+=1
    //     },
    //     changename(){
    //         this.name='zry'
    //     },
    //     showtel(){
    //         alert(this.tel)
    //     }
    // },

    //vue3
    // setup(){               //this不能用,可以理解为优先解释vue3语法，所以setup不可以用vue2里的变量。但data可以使用setup里的变量
    //     console.log('setup')
    //     let name='phb'    //此时的变量不是响应式
    //     let age=18
    //     let tel='12201989'
    //     let address='湖南科技大学'
    //     function changeage(){
    //         age+=1          //非响应式，页面的渲染内容不变，但实际上是改了的
    //     }
    //     function changename(){
    //         name='zry'
    //     }
    //     function showtel(){
    //         alert(tel)
    //     }
    //     // return ()=>'hello !' setup的返回值也可以是一个渲染函数
    //     return {name,age,tel,address,showtel,changename,changeage}
    // }
}
</script> -->

<script lang="ts" setup name="Person">
    import {ref} from 'vue'

    let name = ref('phb')    //创建ref（‘基本类型数据’）响应式对象，在ts/js中必须使用value，在template里不需要
    let age = ref(18)
    let tel = '12201989'
    let address = '湖南科技大学'
    function changeage() {
        age.value += 1          
    }
    function changename() {
        name.value = 'zry'
    }
    function showtel() {
        alert(tel)
    }
</script>

<style scoped>
.person {
    background-color: skyblue;
    box-shadow: 0 0 10px;
    border-radius: 10px;
    padding: 20px;
}

button {
    margin: 0 10px;
}
</style>
