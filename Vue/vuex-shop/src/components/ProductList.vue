<template>
  <ul>
    <li v-for="product in products" :key="product.id">{{product.title}}<br>
    <button @click="addProductToCart(product)">Add to cart</button>
    </li>
  </ul>
</template>

<script>
import {mapState,mapActions} from 'vuex';
export default {
  computed: mapState({
    products: state => state.products.all   
  }),
  created() {
    this.$store.dispatch()
  },
  methods: mapActions('cart',[
    'addProductToCart'
  ]),
}
</script>
