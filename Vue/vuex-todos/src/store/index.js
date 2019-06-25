import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);  //挂载
//单一状态树 一棵树
export default new Vuex.Store({
  state: {
    todos: JSON.parse(window.localStorage.getItem(STORAGE_KEY) || '[]')
  },
  actions,
})//输出一个store实例
//var weekArray = ['周一'、'周二'、'周三'、'周四'、'周五']
//存：localStorage.setItem('weekDay',JSON.stringify(weekArray));
//取： weekArray = JSON.parse(localStorage.getItem('weekDay'));