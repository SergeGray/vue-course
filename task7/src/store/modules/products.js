export default {
  namespaced: true,
  state: {
    items: [
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
    items(state) {
      return state.items;
    },
    itemById(state) {
      return (id) => {
        state.items.find((item) => item.id === id);
      };
    }
  },
  mutations: {

  },
  actions: {

  }
};
