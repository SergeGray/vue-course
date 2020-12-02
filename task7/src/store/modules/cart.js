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
      return (id) => state.items.find((item) => {
        return item.id === parseInt(id)
      });
    },
    totalCount(state) {
      return state.items.reduce((total, { count }) => total += count, 0);
    }
  },
  mutations: {
    ADD_ITEM(state, payload) {
      let item = {
        id: payload.id,
        count: payload.count || 1
      }

      state.items.push(item);
    },
    SET_ITEM_COUNT(state, payload) {
      let item = state.items.find((item) => item.id === payload.id);

      item.count = payload.newCount;
    },
    REMOVE_ITEM(state, payload) {
      let indexToRemove = state.items.findIndex(
        (item) => item.id === payload.id
      )

      state.items.splice(indexToRemove, 1);
    },
  },
  actions: {
    addItem({ getters, commit }, payload) {
      let itemInCart = getters.itemById(payload.id);

      if (itemInCart === undefined) {
        commit('ADD_ITEM', payload);
      }
    },
    removeItem({ getters, commit }, payload) {
      let itemInCart = getters.itemById(payload.id);

      if (itemInCart !== undefined) {
        commit('REMOVE_ITEM', payload);
      }
    },
    increaseItemCount({ getters, commit }, payload) {
      let itemInCart = getters.itemById(payload.id);

      if (itemInCart !== undefined) {
        payload.newCount = itemInCart.count + 1;
        commit('SET_ITEM_COUNT', payload);
      }
    },
    decreaseItemCount({ getters, commit }, payload) {
      let itemInCart = getters.itemById(payload.id);

      if (itemInCart !== undefined && itemInCart.count > 1) {
        payload.newCount = itemInCart.count - 1;
        commit('SET_ITEM_COUNT', payload);
      }
    },
    setItemCount(state, payload) {
      payload.newCount = parseInt(payload.newCount);

      if (payload.newCount < 1 || isNaN(payload.newCount)) {
        payload.newCount = 1;
      }

      state.commit('SET_ITEM_COUNT', payload);
    },
  }
};