import {reqSearchList}  from '@/api'
export default {
    namespace: true,
    state: {
        searchList:{}
    },
    mutations: {
        getSearchListMu(state,data){
            state.searchList=data
        }
    },
    actions: {
       async getSearchList({commit},params){
          let result = await reqSearchList(params)
           commit('getSearchListMu',result.data)
        }
    },
    getters: {
        attrsList(state){
            return state.searchList.attrsList || []
        },
        goodsList(state){
            return state.searchList.goodsList || []
        },
        trademarkList(state){
            return state.searchList.trademarkList || []
        }
    }
}