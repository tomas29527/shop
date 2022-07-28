export default [
    {
        path: '/',
        redirect: '/home'
    }, {
        path: '/home',
        component: () => import('@/pages/Home'),
        meta: {isHideFooter: true}
    }, {
        name: 'search',
        path: '/search/:keyword?',
        component: () => import('@/pages/Search'),
        meta: {isHideFooter: true}
    }, {
        path: '/login',
        component: () => import('@/pages/Login'),
    }, {
        path: '/register',
        component: () => import('@/pages/Register'),
    },
    {
        path: '/detail/:skuId',
        component: () => import('@/pages/Detail'),
    }]