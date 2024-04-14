import { defineStore } from 'pinia'
import { reactive, ref, toRefs, onBeforeMount, onMounted } from 'vue' 

// 定义并暴露一个store
export const useStoreNameStore = defineStore('StoreName', {
  // 动作
  actions: {
    // 定义动作
  },
  // 状态
  state() {
    return {
    }
  },
  // 计算
  getters: {
    // 定义计算属性
  }
})