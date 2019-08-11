<template>
  <div class="header">
    <div class="title">
      <router-link to="/">
        豆瓣
      </router-link>
    </div>
    <div class="lists">
      <ul>
        <li>
          <router-link to="/">电影</router-link>
        </li>
        <li>
          <router-link to="/">图书</router-link>
        </li>
        <li>
          <router-link to="/">广播</router-link>
        </li>
        <li>
          <router-link to="/">小组</router-link>
        </li>
      </ul>
    </div>
    <span class="search-icon" @click="showSearchBtn"></span>
  </div>
</template>

<script>
export default {
  name: 'header',
  data () {
    return {

    }
  },
  methods: {
    showSearchBtn () {}
  }
}
</script>

<style lang="stylus" scoped>

  
</style>
