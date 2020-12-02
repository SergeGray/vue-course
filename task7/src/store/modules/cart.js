export default {
  namespaced: true,
  state: {
    items: []
  },
  getters: {
    items(state) {
      return state.items;
    },
    itemById(state) {
      return (id) => state.items.find((item) => item.id === parseInt(id));
    },
    totalCount(state) {
      return state.items.reduce((total, { count }) => total += count, 0);
    }
  },
  mutations: {
    ADD_ITEM(state, payload) {
      state.items.push(payload);
    },
    SET_ITEM_COUNT(state, payload) {
      let item = state.items.find((item) => item.id === payload.id);

      item.count = payload.newCount;
    },
    REMOVE_ITEM(state, payload) {
      state.items.splice(payload.index, 1);
    },
  },
  actions: {
    addItem({ getters, commit }, product) {
      let itemInCart = getters.itemById(product.id);

      if (itemInCart === undefined) {
        commit('ADD_ITEM', {
          id: product.id,
          count: parseInt(product.count) || 1
        });
      }
    },
    removeItem({ getters, commit }, product) {
      let itemInCart = getters.itemById(product.id);

      if (itemInCart !== undefined) {
        commit('REMOVE_ITEM', {
          index: getters.items.indexOf(itemInCart)
        });
      }
    },
    increaseItemCount({ getters, commit }, product) {
      let itemInCart = getters.itemById(product.id);

      if (itemInCart !== undefined) {
        commit('SET_ITEM_COUNT', {
          id: product.id,
          newCount: itemInCart.count + 1
        });
      }
    },
    decreaseItemCount({ getters, commit }, product) {
      let itemInCart = getters.itemById(product.id);

      if (itemInCart !== undefined && itemInCart.count > 1) {
        commit('SET_ITEM_COUNT', {
          id: product.id,
          newCount: itemInCart.count - 1
        });
      }
    },
    setItemCount({ commit }, product) {
      product.newCount = parseInt(product.newCount);

      if (product.newCount < 1 || isNaN(product.newCount)) {
        product.newCount = 1;
      }

      commit('SET_ITEM_COUNT', {
        id: product.id,
        newCount: product.newCount
      });
    },
  }
};
