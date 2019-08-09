<template>
  <div id="app">
    <h1>Shopping Cart</h1>
    <hr>
    <h2></h2>
  </div>
</template>

<script>
import ShoppingCart from './components/ShoppingCart';
import ProductList from './components/ProductList';
export default {
  name: 'App',
  components: {
    ProductList,
    ShoppingCart
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
