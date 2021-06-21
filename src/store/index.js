// 1:导入
import Vue from 'vue'
import Vuex from 'vuex'

// 2:安装插件
Vue.use(Vuex)

// 3:实例化
const store = new Vuex.Store({
  state:{
    text:1
  },
  mutations:{},
  actions:{},
  getters:{},
  modules:{}
})

// 4:导出
export default store
