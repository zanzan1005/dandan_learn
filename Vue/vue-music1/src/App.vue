<template>
  <div id="app">
    <!-- 头部header  封装组件写-->
    <v-header>
      <i slot="left-icon" class="icon">&#xe692;</i>
      <span slot="content">Magic Music</span>
      <router-link to="/user" slot="right-icon">
      <i class="icon">&#xe63c;</i>
      </router-link>
    </v-header>
    <!-- tab -->
    <v-tab>

    </v-tab>
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
    <!-- 缓存页面 -->
    <!-- play 整个播放页面-->
    <!-- sidebar -->
    <v-sidebar>

    </v-sidebar>
    <router-link to=""></router-link>
    <v-play></v-play>
  </div>
</template>

<script>
import header from '@/components/header/header'
import tab from '@/components/tab'
import sidebar from '@/components/sidebar'
import play from '@/components/play'
export default {
  name: 'App',
  components: {
    'v-header': header,
    'v-tab': tab,
    'v-sidebar': sidebar,
    'v-play': play
  }
}
</script>

<style lang="stylus">
@import './assets/css/function'
@font-face
  font-family "icon"
  src url("//at.alicdn.com/t/font_kmywdojzhchj8aor.eot")
  src url("//at.alicdn.com/t/font_kmywdojzhchj8aor.eot?#iefix") format("embedded-opentype"),
    url("//at.alicdn.com/t/font_kmywdojzhchj8aor.woff") format("woff"),
    url("//at.alicdn.com/t/font_kmywdojzhchj8aor.ttf") format("truetype"),
    url("//at.alicdn.com/t/font_kmywdojzhchj8aor.svg#iconfont") format("svg")


.icon 
  font-family "icon" !important
  font-size 18px
  font-style normal
  color #ffffff
html,body 
  line-height 1
  font-family PingFang SC, STHeitiSC-Light, Helvetica-Light, arial, sans-serif
  user-select none//不能复制，无法选中文字
  -webkit-tap-highlight-color transparentify
  background rgba(8,5,58,0.9)
  color #ffffff

</style>
