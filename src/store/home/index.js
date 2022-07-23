import {reqBannerList, reqCategoryList, reqFloorList} from '@/api'

export default {
    namespace: true,
    state: {
        categoryList: [],
        homeBannerList:[],
        homeFloorList:[]
    },
    mutations: {
        getCategoryListMu(state, data) {
            state.categoryList = data
        },
        getHomeBannerListMu(state,data){
            state.homeBannerList=data
        },
        getHomeFloorListMu(state,data){
            state.homeFloorList=data
        }
    },
    actions: {
        async getCategoryList({commit}) {
            let result = await reqCategoryList()
            commit('getCategoryListMu', result.data)
        },
        //获取首页banner图
        async getHomeBannerList({commit}){
            let result = await reqBannerList()
            commit('getHomeBannerListMu', result.data)
        },
        //获取首页Floor数据
        async getHomeFloorList({commit}){
            let result = await reqFloorList()
            commit('getHomeFloorListMu',result.data)
        }
    },
    getters: {}
}