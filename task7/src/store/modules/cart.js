export default {
  namespaced: true,
  state: {
    products: []
  },
  getters: {
    products(state) {
      return state.products;
    },
    productById(state) {
      return (id) => state.products.find((product) => product.id === id);
    }
  },
  mutations: {
    ADD_PRODUCT(state, payload) {
      let product = {
        id: payload.id,
        count: payload.count || 1
      }

      state.products.push(product);
    },
    SET_PRODUCT_COUNT(state, payload) {
      let product = state.products.find((product) => product.id === payload.id);

      product.count = payload.newCount;
    },
    REMOVE_PRODUCT(state, payload) {
      let indexToRemove = state.products.findIndex(
        (product) => product.id === payload.id
      )

      state.products.splice(indexToRemove, 1);
    },
  },
  actions: {
    addProduct({ getters, commit }, payload) {
      let productInCart = getters.productById(payload.id);

      if (productInCart === undefined) {
        commit('ADD_PRODUCT', payload);
      }
    },
    removeProduct({ getters, commit }, payload) {
      let productInCart = getters.productById(payload.id);

      if (productInCart !== undefined) {
        commit('REMOVE_PRODUCT', payload);
      }
    },
    increaseProductCount({ getters, commit }, payload) {
      let productInCart = getters.productById(payload.id);

      if (productInCart !== undefined) {
        payload.newCount = productInCart.count + 1;
        commit('SET_PRODUCT_COUNT', payload);
      }
    },
    decreaseProductCount({ getters, commit }, payload) {
      let productInCart = getters.productById(payload.id);

      if (productInCart !== undefined && productInCart.count > 1) {
        payload.newCount = productInCart.count - 1;
        commit('SET_PRODUCT_COUNT', payload);
      }
    },
    setProductCount(state, payload) {
      state.commit('SET_PRODUCT_COUNT', payload);
    },
  }
};