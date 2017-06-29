import Vue from "vue"
import Vuex from "vuex"

Vue.use(Vuex)
//创建store
const store = new Vuex.Store({
    state:{
        listData:[],
        total:999999
    },
    mutations:{ //=>reducer
        changeProductData(state,{list,total}){
            //在mutations里面修改数据
            state.listData = list
            state.total = total
        }
    },
    actions:{ //异步的action
        getProductData({commit}){
            //在actions里面获取数据
            // console.log(Vue.http)
            Vue.http.get("/api/recommend/home?page=1&num=20")
            .then(res=>{
                // console.log(res.data.data);//成功以后把数据给mutation
                commit("changeProductData",res.data.data)
            })

        }
    }
})
export default store
