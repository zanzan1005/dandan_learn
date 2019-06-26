import Vue from 'vue';
import Vuex from 'vuex';
import user from './modules/user';
import getters from './getters';
Vue.use(Vuex);

const store = new Vuex.Store({
  getters,
  modules:{
    user: user
  }
})//提供仓库
export default store;