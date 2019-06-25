<template>
<div class="header">
  <div class="container">
    <div class="plan">
      <i></i>
      <span>计划板</span>
    </div>
    <div class="index">
      <span>首页</span>
      <router-link to="/home"></router-link>
    </div>
    <div class="plan-list">
      <span>计划列表</span>
      <router-link to="/time-entries"></router-link>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
