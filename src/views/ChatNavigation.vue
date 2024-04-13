<template>
    <Chatskeleton v-if="loading"/>
    <el-container class="main" v-else>
        <el-main>
            <el-scrollbar>
                <!-- <el-card
                    style=" height:250px;margin-left: 20px;margin-right: 20px;margin-bottom: 20px;background-color: white;border-radius: 10px;">
                   
                </el-card> -->
                <div style="border-radius: 10px;;width: 100%;margin-bottom: 10px;" class="test">
                    <el-image :src='navigationimageshow' fit="contain" style="border-radius: 10px;" />
                </div>



                <div style="margin-left: 20px;margin-right: 20px;margin-bottom: 10px;padding-top: 10px;">
                    <strong >本站可用AI工具</strong><br>
                    <div style="display: flex;flex-direction: row;flex-wrap: wrap ;margin-top: 10px;">
                        <smallcard v-for="i in intoolslist" :list="i" />
                    </div>
                </div>



                <div style="margin-left: 20px;margin-right: 20px;margin-bottom: 10px;padding-top: 10px;">
                    <strong>站外语言模型</strong><br>
                    <div style="display: flex;flex-direction: row;flex-wrap: wrap">
                        <smallcard v-for="i in outlanguagetoolslist" :list="i" />
                    </div>
                </div>


                <div style="margin-left: 20px;margin-right: 20px;margin-bottom: 10px;padding-top: 10px;">
                    <strong>站外绘图模型</strong><br>
                    <div style="display: flex;flex-direction: row;flex-wrap: wrap">
                        <smallcard v-for="i in outpicturetoolslist" :list="i" />
                    </div>
                </div>
            </el-scrollbar>
        </el-main>
    </el-container>
</template>

<script lang='ts' setup name='chatnavigation'>
//导入
import { reactive, ref, toRefs, onBeforeMount, onMounted } from 'vue'
import smallcard from '@/components/Home-components/Smallcard.vue';
import Chatskeleton from '@/components/Home-components/Chatskeleton.vue';
//数据
let loading=ref(false)
let navigationimageshow = '/images/chatnavigationshow3.jpg'
let intoolslist = ([
    {
        name: 'ChatGPT',
        image: '/images/nav-ai-ChatGPT.png',
        description: '地表最强AI聊天机器人',
        words: ['国外', '语言模型', 'EN'],
        path:'chatgpt'

    },
    {
        name: 'ChatGLM4',
        image: '/images/zhipu.png',
        description: '由智谱发布,国产模型佼佼者,追赶国际水平',
        words: ['国内', '语言模型', 'CN'],
        path:'glm4'

    },
    {
        name: 'KIMI AI',
        image: '/images/kimi.png',
        description: '长文本领域实现突破,有联网功能',
        words: ['国内', '语言模型', 'EN'],
        path:'kimi'

    },
    {
        name: 'CogView',
        image: '/images/CogView.png',
        description: '智谱发布的图像大模型，适用多种图像生成任务',
        words: ['国内', '图像模型', 'EN'],
        path:'cogview'
    }
])



let outlanguagetoolslist = reactive([
    {
        name: 'NewBing',
        image: '/images/nav-ai-newbing.png',
        description: 'Bing版ChatGPT聊天机器人，微软新搜索引擎',
        words: ['国外', '语言模型', 'EN'],
        link: 'https://www.bing.com/new'
    },
    {
        name: 'Google Bard',
        image: '/images/nav-ai-bard.png',
        description: '媲美ChatGPT，最新的谷歌AI对话模型',
        words: ['国外', '语言模型', 'EN'],
        link: 'https://bard.google.com'
    },
    {
        name: 'Anthropic',
        image: '/images/nav-ai-Anthropi.png',
        description: 'Anthropic发布的与ChatGPT竞争的聊天机器人',
        words: ['国外', '语言模型', 'EN'],
        link: 'https://www.anthropic.com'
    },
    // {
    //     name: ' ColossalChat',
    //     image: '/images/nav-ai-colossalai.png',
    //     description: ' ColossalChat ',
    //     words: ['国外', '语言模型', 'EN'],
    //     link: 'https://chat.colossalai.org/'
    // },
    {
        name: ' 通义千问 ',
        image: '/images/nav-ai-tongyi.png',
        description: '阿里巴巴的AI对话机器人',
        words: ['国内', '语言模型', 'CN'],
        link: 'https://tongyi.aliyun.com/'
    },
    {
        name: ' 文心一言',
        image: '/images/nav-ai-wxyy.png',
        description: '百度全新知识增强大语言模型！国产聊天机器人',
        words: ['国内', '图像模型', 'CN'],
        link: 'https://yiyan.baidu.com/'
    },
])

let outpicturetoolslist=reactive([
    {
        name: ' Midjourney  ',
        image: '/images/nav-ai-Midjourney.png',
        description: '目前最强的AI绘画工具',
        words: ['国外', '图像模型', 'EN'],
        link:'https://www.midjourney.com/'
    },
    {
        name: ' Stable Diffusion ',
        image: '/images/nav-ai-stable.png',
        description: '最强开源AI绘画工具',
        words: ['国外', '图像模型', 'EN'],
        link:'https://www.uisdc.com/stable-diffusion'

    },
    {
        name: ' DALL·E2 ',
        image: '/images/nav-ai-DALLE2.png',
        description: 'OpenAI出品的绘画工具',
        words: ['国外', '图像模型', 'EN'],
        link:'https://openai.com/research/dall-e'

    },
    {
        name: ' 文心一格 ',
        image: '/images/nav-ai-wxyg.png',
        description: '百度出品的AI绘画工具',
        words: ['国内', '图像模型', 'CN'],
        link:'https://yige.baidu.com/'

    },
    {
        name: ' NijiJourney ',
        image: '/images/nav-ai-NijiJourney.png',
        description: 'MJ出品！面向二次元风格，内容细致拿捏专业到位',
        words: ['国外', '图像模型', 'EN'],
        link:'https://nijijourney.com/zh/'

    },
])
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

.el-header,
.el-footer {
    /* background-color: #b3c0d1; */
    /* text-align: center;
  line-height: 60px; */

}

.el-main {
    /* background-color: #e9eef3; */
    /* color: #333;
  text-align: center; */

}
</style>