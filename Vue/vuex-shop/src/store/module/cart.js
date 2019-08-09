const state = {
  items: []
};
const mutations = {
  pushProductToCart(state,{id}) {
    state.items.push({
      id,
      quantity: 1
    })
  },
  incrementItemQuantity(state, { id }) {
    const cartItem  = state.items.find(item => item.id === product.id)
    cartItem.quantity ++;
  }
};
const getters = {};
const actions = {
  addProductToCart({state,commit},product) {
    if (product.inventory > 0) {
      //把商品添加进inventory 
      //检查items 里有没有
      //有 +1
      //没有 push
      const cartItem  = state.items.find(item => item.id === product.id)
      if (!carrItem) {
        commit ('pushProductToCart',{id: product.id})
      } else {
        commit ('inventoryItemQuantity',cartItem);
      }
    }
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  getters,
  actions
}
