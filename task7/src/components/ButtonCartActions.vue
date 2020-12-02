<template>

<button
  class="btn"
  :class="buttonClass"
  @click="buttonAction()"
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
  data() {
    return {
      buttonClass: '',
      buttonCaption: ''
    }
  },
  created() {
    this.assignButtonProperties();
  },
  computed: {
    ...mapGetters('cart', [
      'itemById'
    ]),
    productInCart() {
      return this.itemById(this.product.id) !== undefined;
    }
  },
  methods: {
    ...mapActions('cart', {
      addToCart: 'addItem',
      removeFromCart: 'removeItem',
    }),
    buttonAction() {
      if (this.productInCart) {
        this.removeFromCart(this.product);
      } else {
        this.addToCart(this.product);
      }
      this.assignButtonProperties();
    },
    assignButtonProperties() {
      if (this.productInCart) {
        this.buttonClass = 'btn-warning';
        this.buttonCaption = 'Remove from Cart';
      } else {
        this.buttonClass = 'btn-primary';
        this.buttonCaption = 'Add to Cart';
      }
    }
  },
};
</script>

<style scoped>
</style>
