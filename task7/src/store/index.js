import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

import products from './modules/products';
import cart from './modules/cart';

export const store = new Vuex.Store({
  modules: {
    products,
    cart
  },
  strict: process.env.NODE_ENV !== 'production'
});
