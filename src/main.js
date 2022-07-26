import Vue from 'vue'
import App from './App.vue'
import router from '@/router'
import store from "@/store";

import TypeNav from '@/components/TypeNav'
import Carousel from '@/components/Carousel'
import Pagination from '@/components/Pagination'
//导入swiper样式
import "swiper/css/swiper.css";
//导入mockserver
import '@/mock/mockServe'
Vue.config.productionTip = false
//全局组件
Vue.component(TypeNav.name, TypeNav) //导航组件
Vue.component(Carousel.name, Carousel) //轮播图
Vue.component(Pagination.name, Pagination) //分页组件
new Vue({
    render: h => h(App),
    //注册全局事件总线
    beforeCreate() {
        Vue.prototype.$bus=this;
    },
    router,
    store,
}).$mount('#app')
