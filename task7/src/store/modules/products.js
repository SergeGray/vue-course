export default {
  namespaced: true,
  state: {
    products: [
      {
        id: 1,
        title: 'Crappy phone',
        price: 1000
      },
      {
        id: 2,
        title: 'Decent phone',
        price: 5000
      },
      {
        id: 3,
        title: 'Epic phone',
        price: 50000
      }
    ]
  },
  getters: {
    products(state) {
      return state.products;
    },
    productById(state) {
      return (id) => state.products.find((product) => {
        return product.id === parseInt(id);
      });
    }
  }
};
