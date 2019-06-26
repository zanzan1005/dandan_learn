<template>
<div class="header">
  <v-zu></v-zu>
  <router-view></router-view>
</div>
</template>

<script>
import zu from '@/components/zu'
export default {
  name: 'time-entries',
  components: {
    'v-zu': zu
  }
}
</script>

<style>

</style>
