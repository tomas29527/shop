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
//获取搜索模块数据 地址:/api/list  请求方式:post  参数:需要带参数
export const reqSearchList=(params={})=>{
    return requests({
        url: '/list',
        method: 'post',
        data:params
    })
}
//获取商品详细信息
export const reqGoodsInfo=(skuId)=>{
    return requests({
        url: `/item/${skuId}`,
        method: 'get',
    })
}