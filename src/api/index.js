import requests from "@/api/request";

//获取首页三级分类
export const reqCategoryList = () => {
    return requests({
        url: '/product/getBaseCategoryList',
        method: 'get'
    })
}
