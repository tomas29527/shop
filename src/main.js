import Vue from 'vue'
import App from './App.vue'
import router from '@/router'
import TypeNav from '@/components/TypeNav'
import store from "@/store";

Vue.config.productionTip = false
//全局组件
Vue.component(TypeNav.name, TypeNav) //导航组件

new Vue({
    render: h => h(App),
    router,
    store,
}).$mount('#app')
