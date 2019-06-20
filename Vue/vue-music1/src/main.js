// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import fastclick from 'fastclick'
import VueLazyload from 'vue-lazy-load'
import store from './vuex/store'
import '../static/css/reset.styl'

import def_lazy_img from '../static/img/loading.gif'
Vue.use(VueLazyload, {
  loading: def_lazy_img,
})
//图片未加载成功之前会出现一个转圈圈的加载过程

fastclick.attach(document.body)
//整个body都可以使用
Vue.config.productionTip = false
import {Toast,Loading} from '@/common/plugin'//引入
Vue.use(Toast)//使用
Vue.use(Loading)


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
