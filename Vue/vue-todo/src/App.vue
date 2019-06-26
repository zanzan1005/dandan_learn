<template>
<div class="wrapper">
<nav class="navbar navbar-default navbar-fixed-top">
  <div class="container">
    <div class="plan-board">
       <a class="navbar-brand" href="#">
         <i class="glyphicon glyphicon-time">计划板</i>
         </a>
    </div>
    <div class="index">
      <ul class="nav navbar-nav">
          <li><router-link to="/home">首页</router-link></li>
          <li><router-link to="/time-entries">计划列表</router-link></li>
        </ul>
    </div>
  </div>
</nav>
<v-time></v-time>
<div class="home">
  <router-view></router-view>
</div>
<div class="time-entries">
  <router-view></router-view>
</div>

</div>

</template>

<script>
import time from '@/components/time'
export default {
  name: 'App',
  components: {
    'v-time': time
  }
}
</script>

<style>

</style>
