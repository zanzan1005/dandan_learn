<template>
  <div class="hello">
    <i-menu></i-menu>
    <i-button size="large" @click.native="handleClick">按钮</i-button>
  </div>
</template>

<script>
import button from './com/button'
import menu from './com/menu'
export default {
  name: 'HelloWorld',
   provide () {
    return {
      name: this.obj
    }
  },
  data () {
    return {
      obj: {
        name: '蜗牛'
      }
    }
  },
  components: {
    'i-button': button,
    'i-menu': menu
  },
  methods: {
    handleClick (val) {
      // console.log(val)
    }
  }
}
</script>

<style scoped>

</style>