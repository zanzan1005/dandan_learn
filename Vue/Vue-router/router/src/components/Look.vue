<template>
  <div class="Look">
    {{msg}}
    {{$route.params.id}}
    <router-view>
      <p></p>
    </router-view>
  </div>
</template>

<script>
export default {
  name: 'Look',
  data () {
    return {
      msg : '莫挨老子'
    }
  }
}
</script>
