import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/home'
import timeEntries from '@/components/time-entries'
import logTime from '@/components/log-time'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    },
    {
      path: '/home',
      name: 'home',
      component: home
    },
    {
      path: '/time-entries',
      name: 'timeEntries',
      component: timeEntries
    },
    {
      path: '/log-time',
      name: 'logTime',
      component: logTime
    }
  ]
})
