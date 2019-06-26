<template>
<div class="container">
   <router-link
      v-if="$route.path !== '/time-entries/log-time'"
      to="/time-entries/log-time"
      class="btn btn-primary">
      创建
    </router-link>
    <hr>
    <h4 class="none"><strong>还没有任何计划</strong></h4>
</div>
 

  
</template>

<script>
export default {

}
</script>

<style>
.btn{
  margin-left: 300px;
}
.none{
  margin-left: 300px;
}

</style>
