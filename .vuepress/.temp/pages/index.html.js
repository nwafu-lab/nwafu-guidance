export const data = JSON.parse("{\"key\":\"v-8daa1a0e\",\"path\":\"/\",\"title\":\"首页\",\"lang\":\"zh-CN\",\"frontmatter\":{\"home\":true,\"heroImage\":\"https://pic.mikupan.com/vCxPSU.png\",\"heroAlt\":\"西北农林科技大学校徽\",\"tagline\":\"此指南针对新生编写，为新生入学提供帮助\",\"title\":\"首页\",\"actions\":[{\"text\":\"开始\",\"link\":\"/\",\"type\":\"primary\"},{\"text\":\"Github\",\"link\":\"https://github.com/nwafu-lab/nwafu-guidance\",\"type\":\"secondary\"}]},\"headers\":[],\"git\":{\"updatedTime\":null,\"contributors\":[]},\"filePathRelative\":\"index.md\"}")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
