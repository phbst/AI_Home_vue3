import { defineStore } from 'pinia'
import { reactive, ref, toRefs, onBeforeMount, onMounted } from 'vue'
// 定义并暴露一个store
export const useStartlinklistStore = defineStore('startlinklist', {
    // 动作
    actions: {
        // 定义动作
        gotonewweb(url: string) {
            window.open(url);
        }
    },
    // 状态
    state() {
        return {
            
            weblist: reactive([
                {

                    name: 'Hugging Face',
                    url: 'https://huggingface.co/',
                    image: '/images/huggingface_logo-noborder.svg'
                },
                {

                    name: 'Github',
                    url: 'https://github.com/',
                    image: '/images/github.png'
                },
                {

                    name: 'ChatGPT',
                    url: 'https://chat.openai.com/',
                    image: '/images/chatgpt.png'
                },
                {

                    name: 'Kimi AI',
                    url: 'https://kimi.moonshot.cn/',
                    image: '/images/kimi.png'
                },
                {
                    name: '机器之心SOTA',
                    url: 'https://sota.jiqizhixin.com/',
                    image: '/images/qiji.png'
                },
                {
                    name: 'AutoDL算力云',
                    url: 'https://www.autodl.com/home',
                    image: '/images/autodl.png'
                },
                {
                    name: '迈速云',
                    url: 'https://www.maisuyun.com/clientarea',
                    image: '/images/maisu.png'
                },
                {
                    name: 'FastLink',
                    url: 'https://v2.fastlink-aff02.com/user#',
                    image: '/images/fastlink.png'
                }
            ]),
            modellist: reactive([
                {
                    name: 'Llama2 Chat 6B',
                    url: 'https://llama.meta.com/llama2/',
                    image: '/images/llama.webp'
                },
                {
                    name: 'ChatGLM3-6B',
                    url: 'https://huggingface.co/THUDM/chatglm3-6b',
                    image: '/images/zhipu.png'
                },
                {
                    name: 'whisper-large-v2',
                    url: 'https://huggingface.co/openai/whisper-large-v2',
                    image: '/images/whisper-large-v2.png'
                },
                {
                    name: 'GPT-SoVITS',
                    url: 'https://github.com/RVC-Boss/GPT-SoVITS',
                    image: '/images/sovits.png'
                }
            ]),
            //200x598
            movecardsimages: reactive([

                '/images/movecard13.jpg',
                '/images/movecard15.webp',
                '/images/movecard6.jpg',
                '/images/movecard9.png',
                '/images/movecard12.webp',
                '/images/movecard14.png',

            ])
        }
    },
    // 计算
    getters: {
        // 定义计算属性
    }
})