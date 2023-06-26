import {defaultTheme, defineUserConfig} from 'vuepress';

export default  defineUserConfig({
    lang: 'zh-CN',
    title: '西农新手村',
    description: '西北农林科技大学新手指南，使用指南，此指南针对新生编写，为新生入学提供帮助',
    base: '/nwafu-guidance',
    head: [],
    theme: defaultTheme({
        navbar: [
            {
                text: '首页',
                link: '/'
            },
            {
                text: 'Nwafu-lab',
                link: 'https://github.com/nwafu-lab'
            },
        ],
        repo: 'nwafu-lab/nwafu-guidance',
        sidebar: [
            {
                'text': '前言',
                'link': '/',
            },
        ],
    }),
})
