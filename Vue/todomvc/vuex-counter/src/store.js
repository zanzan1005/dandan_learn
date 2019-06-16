//CEO
import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);
//CEO

const state = {
  count: 0
}
//改变 唯一可以修改状态
//财务
const mutations = {
  increment ( state ) {
    state.count++;
  },
  increment ( state ) {
    state.count--;
  },
}

//动作 部门 不能修改 state
const actions = {
  increment: ({ commit })  => commit('increment'),
  decrement: ({ commit }) => commit('increment'),
}
export default new Vuex.Store({
  state,
  mutations,
  actions
})