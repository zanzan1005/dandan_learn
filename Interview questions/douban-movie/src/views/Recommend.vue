<template>
  <div class="recommend">
    <!-- 首页整个页面都支持better-scroll滚动 -->
    <ScrollView>
      <ListBlock :movies="playingMovies" :title="`正在热映(${playingCount})`"></ListBlock>
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
      playingCount: 0
    }
  },
  components: {
    ListBlock
  },
  created() {
    this.getMovies()
  },
  methods: {
    getMovies() {
      axios.get('https://www.easy-mock.com/mock/5cbf00d8330edc5317b8164b/haha/douban-movie').then(res => {
        console.log(res)
        if (res.code === 1001) {
          const { comming,playing } = res.result
          this.playingMovies = playing.movies
          this.playingCount = playing.count
        }
      })
    }
  }
}
</script>

<style scoped>

</style>