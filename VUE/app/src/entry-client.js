import { createApp } from "./main";
// 创建vue、router实例
const { app, router, store } = createApp();
// 当使⽤ template 时，context.state 将作为 window.__INITIAL_STATE__ 状态⾃动嵌⼊到最终的 HTML 
// 在客户端挂载到应⽤程序之前，store 就应该获取到状态：
if (window.__INITIAL_STATE__) {
    store.replaceState(window.__INITIAL_STATE__);
}
// 路由就绪，执⾏挂载
router.onReady(() => {
    app.$mount("#app");
});