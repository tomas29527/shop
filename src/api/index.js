import requests from "@/api/ajax";
import mockRequests from "@/api/mockapi";
//获取首页三级分类
export const reqCategoryList = () => {
    return requests({
        url: '/product/getBaseCategoryList',
        method: 'get'
    })
}

//获取首页banner
export const reqBannerList = () => {
    return mockRequests({
        url: '/banner',
        method: 'get'
    })
}
//获取floor数据
export const reqFloorList=()=>{
    return mockRequests({
        url: '/floor',
        method: 'get'
    })
}