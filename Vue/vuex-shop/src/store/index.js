import Vue from 'vue'
import Vuex from 'vuex';
import products from './module/products'
import cart from './module/cart';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    products,
    cart
  }
})
