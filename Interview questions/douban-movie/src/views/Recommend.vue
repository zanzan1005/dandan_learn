<template>
  <div class="recommend">
    <!-- 首页整个页面都支持better-scroll滚动 -->
    <ScrollView>
      <ListBlock :movies="playingMovies" :title="`正在热映(${playingCount})`" @more="goMore" @select="selectItem"></ListBlock>
      <div class="space" style="background-color: #f6f6f6">
        <ListBlock :movies="comingMovies" :title="`即将上映(${comingCount})`" @more="goMore" @select="selectItem"></ListBlock>
      </div>
    </ScrollView>
  </div>
</template>

<script>
import axios from 'axios'
import ListBlock from '@/components/ListBlock.vue'
export default {
  data (){
    return {
      playingMovies: [],
      playingCount: 0,
      comingMovies: [],
      comingCount: 0
    }
  },
  components: {
    ListBlock
  },
  mounted() {
    this.getMovie()
  },
  methods: {
    goMore() {},
    selectItem (id){
      console.log(id)
      this.$router.push(`/movie/${id}`)
    },
    getMovie() {
      axios.get('/api/api/movie/get_hot').then(res => {
        console.log(res)
        if (res.code === 1001) {
          const { comming,playing } = res.result
          this.playingMovies = playing.movies
          this.playingCount = playing.count
          this.comingMovies = coming.movies
          this.comingCount = coming.count
          console.log()
        }
      })
    }
  }
}
</script>

<style lang="stylus" scoped>
.recommend 
  width 100%
</style>