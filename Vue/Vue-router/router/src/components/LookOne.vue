<template>
  <div class="Look-one">{{msg}}
    <div class="go-two" @click='goTwo'>去look2</div>
  </div>
</template>

<script>
export default {
  name: 'LookOne',
  data () {
    return {
      msg : '瞅啥呢你？1'
    }
  },
  methods: {
    goTwo () {
      this.$router.push({name:'LookTwo',param:{id:123456}})
    }
  },
  beforeRouteEnter (to, from, next) {
    console.log(from,to);
    next();
  }
}
</script>

