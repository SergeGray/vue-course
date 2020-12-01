import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

import ProductList from '../views/ProductList';
import Cart from '../views/Cart';

const routes = [
  {
    name: 'root',
    path: '',
    redirect: { name: 'products' }
  },
  {
    name: 'products',
    path: '/products',
    component: ProductList
  },
  {
    name: 'cart',
    path: '/cart',
    component: Cart
  }
];

export const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});
