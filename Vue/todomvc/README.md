- el: #root 根挂载结点
- App component + vue-router + vuex 混合一起的应用

new Vue({
  el: '#app',
  render: h => h(App)
})

- vue 的难点是  数据管理
  组件状态，data() {},
  两兄弟组件要共享状态时，登录 
  props  传递过去
  应用状态?

- 当页面上多个组件要共享状态时，
  将共享状态，放置在这些组件的共同的父组件的data来管理
  状态要唯一，放在一个地方（共同的父组件）方便管理
  如果不统一，状态有可能不同步
  父子组件通信，v-on:increment="incrementCount"
  props:传参  this.$emit();

- 麻烦，找父节点有些麻烦，this.$emit()
  当你的应用有很多状态要共享的时候，有很多组件，组件之间的关系也错综复杂
  App 全局数据管理  vuex 应用数据管理
