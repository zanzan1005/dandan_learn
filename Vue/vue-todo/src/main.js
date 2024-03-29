// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import home from './components/home'
import timeEntries from './components/time-entries'
import logTime from '@/components/log-time'
import 'bootstrap/dist/css/bootstrap.css'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  home,
  timeEntries,
  logTime,
  components: { App },
  template: '<App/>'
})
