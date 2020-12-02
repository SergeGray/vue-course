import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

import ProductList from '../views/ProductList';
import Product from '../views/Product';
import Cart from '../views/Cart';
import E404 from '../views/E404';

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
    name: 'product',
    path: '/products/:id',
    component: Product
  },
  {
    name: 'cart',
    path: '/cart',
    component: Cart
  },
  {
    name: 'E404',
    path: '*',
    component: E404
  }
];

export const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});
