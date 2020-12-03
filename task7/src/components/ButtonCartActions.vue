<template>

<button
  class="btn"
  :class="buttonClass"
  @click="buttonAction(product)"
>
  {{ buttonCaption }}
</button>

</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  props: {
    product: {
      type: Object,
      required: true
    }
  },
  computed: {
    ...mapGetters('cart', [
      'itemById'
    ]),
    productInCart() {
      return this.itemById(this.product.id) !== undefined;
    },
    buttonClass() {
      return this.productInCart ? 'btn-warning' : 'btn-primary';
    },
    buttonCaption() {
      return this.productInCart ? 'Remove from Cart' : 'Add to Cart';
    },
    buttonAction() {
      return this.productInCart ? this.removeFromCart : this.addToCart;
    }
  },
  methods: {
    ...mapActions('cart', {
      addToCart: 'addItem',
      removeFromCart: 'removeItem',
    })
  },
};
</script>

<style scoped>
</style>
