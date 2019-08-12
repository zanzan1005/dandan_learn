<template>
  <div class="scroll-wrapper" ref="wrapper">
    <div>
      <slot></slot>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
export default {
  props: {
    data: {
      type: Array,
      default: () => []
    },
    pullUpLoad: {
      type: [Boolean,Object],
      defaut: false
    }
  },
  watch: {
    data (newVal,oldVal) {
      setTimeout(() => {

      },20)
    }
  },
  
  mounted () {
    setTimeout(() => {
      this.initScroll()
    },20)
  },
  methods: {
    initPullUpLoad() {
      this.scroll.on('pullingUp', () => {
        this.$emit('pulling-up')
      })
    },
    refresh() {
      this.scroll && this.scroll.refresh()
    },
    forceUpdate() {
      if (this.pullUpLoad) {
        this.refresh()
        this.scroll.finishPullUp()
      }
    },
    initScroll() {
      if (!this.$refs.wrapper) {
        return
      }
      this.scroll = new BScroll(this.$refs.wrapper,{
        click: true,
        bounce: false,//不让弹
        pullupLoad: this.pullupLoad
      })
      if (this.pullUpLoad) {
        this.initPullUpLoad()
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
.scroll-wrapper 
  height 100%
  overflow hidden
</style>