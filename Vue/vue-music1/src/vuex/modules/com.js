import api from '../../api'
import * as types from '../types' 
//把所有东西从../types里面引入作为变量types

const state = {
  showSidebar: true,
  fullScreen: true
}//vuex 的数据源

const mutations = {
  [types.COM_SHOW_SIDE_BAR] (state,status) {
    state.showSidebar = status
  },//function
  [types.SET_FULL_SCREEN] (state,status) {
    state.fullScreen = status
  }
}//更改 Vuex 的 store 中的状态的唯一方法是提交 mutation
  

const actions = {
  setShowSidebar ({commit} , status) {
    commit(types.COM_SHOW_SIDE_BAR,status)
  },
  selectPlaySong ({commit},status) {
    // let playList = state.playList.slice()
    commit(types.SET_FULL_SCREEN,status)
  }

}

const getters = {
  showSidebar:state => state.showSidebar,
  fullScreen :state => state.fullScreen
}//不能进行其他操作，除了取出数据源


export default {
  state,
  mutations,
  actions,
  getters
}