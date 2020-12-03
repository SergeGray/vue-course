export default {
  namespaced: true,
  state: {
    items: [
      {
        url: '/products',
        title: 'Products List'
      },
      {
        url: '/cart',
        title: 'Your Cart'
      },
      {
        url: '/checkout',
        title: 'Checkout'
      }
    ]
  },
  getters: {
    items(state) {
      return state.items;
    }
  }
};
