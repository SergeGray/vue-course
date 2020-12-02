<template>
  <div>
    <h1>{{ product.title }}</h1>
    <router-link :to="{ name: 'products' }">Back to products</router-link>
    <hr>
    <div class="alert alert-success">
      {{ product.price }}
    </div>
    <buttons-cart-actions :product="product" />
  </div>
</template>

<script>
  import ButtonsCartActions from '../components/ButtonsCartActions';

  export default {
    components: {
      ButtonsCartActions
    },
    computed: {
      id() {
        return this.$route.params.id;
      },
      product() {
        return this.$store.getters['products/productById'](this.id);
      },
    },
  };
</script>
