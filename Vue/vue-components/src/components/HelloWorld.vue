<template>
  <div class="hello">
    <i-button size="large">按钮</i-button>
  </div>
</template>

<script>
import button from '@/components/com/button'
export default {
  name: 'HelloWorld',
  data () {
    return {
      name: 'helloWorld'
    }
  },
  components: {
    "i-button": button
  }
}
</script>

<style scoped>

</style>
