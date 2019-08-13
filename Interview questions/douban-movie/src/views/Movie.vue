<template>
  <transition name="fade">
  <div class="player-wrapper" @touchmove.prevent>
        <div ref="player" class="player"/>
        <i class="iconfont icon-left" @click="$router.back()"/>
      </div>
      <div class="info-wrapper">
        <scrollView>

        </scrollView>
      </div>
  </transition>
</template>

<script>
import axios from 'axios'
export default {
  name: 'Movie',
  data () {
    return {

    }
  },
  created() {
    this.getDetail()
  },
  methods: {
    //拿到电影的id
    getDetail () {
      const { id } = this.$route.params
      axios.get(`/api/api/movie/get_detail/${id}`)
      console.log(res)
    }
  }
}
</script>

<style lang="stylus" scoped>
  
</style>