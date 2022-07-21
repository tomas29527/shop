import {reqCategoryList} from '@/api'

export default {
    namespace: true,
    state: {
        categoryList: []
    },
    mutations: {
        getCategoryListMu(state, data) {
            state.categoryList = data
        }
    },
    actions: {
        async getCategoryList({commit}) {
            let result = await reqCategoryList()
            console.log(result)
            commit('getCategoryListMu', result.data)
        }
    },
    getters: {}
}