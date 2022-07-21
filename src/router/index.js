import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

//需要重写VueRouter.prototype原型对象身上的push|replace方法
//先把VueRouter.prototype身上的push|replace方法进行保存一份
let originPush = VueRouter.prototype.push
let originReplace = VueRouter.prototype.replace;
VueRouter.prototype.push = function (location, resolve, reject) {
    if (resolve && reject) {
        originPush.call(this, location, resolve, reject)
    } else {
        originPush.call(this, location, () => {
        }, () => {
        })
    }
}
//重写VueRouter.prototype身上的replace方法了
VueRouter.prototype.replace = function (location, resolve, reject) {
    if (resolve && reject) {
        originReplace.call(this, location, resolve, reject);
    } else {
        originReplace.call(
            this,
            location,
            () => {
            },
            () => {
            }
        );
    }
};
const vueRouter = new VueRouter({
    routes: [
        {
            path: '/',
            redirect: '/home'
        }, {
            path: '/home',
            component: () => import('@/pages/Home')
        }, {
            path: '/search',
            component: () => import('@/pages/Search')
        }, {
            path: '/login',
            component: () => import('@/pages/Login')
        }, {
            path: '/register',
            component: () => import('@/pages/Register')
        }]
})

export default vueRouter