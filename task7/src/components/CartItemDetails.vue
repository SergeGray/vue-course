<template>

<tr>
  <td>{{ itemTitle }}</td>
  <td>{{ itemPrice }}</td>

  <td v-if="!checkedOut">

    <input
      type="number"
      :value="itemCount"
      @change="setItemAmount"
    >

    <button
      class="btn btn-primary"
      @click="increaseItemCount(item)"
    >
      +
    </button>

    <button
      class="btn btn-warning"
      @click="decreaseItemCount(item)"
    >
      -
    </button>
  </td>

  <td v-else>{{ itemCount }}</td>

  <td>{{ itemTotalPrice }}</td>

  <td v-if="!checkedOut">
    <button
      class="btn btn-danger"
      @click="removeItem(item)"
    >
      X
    </button>
  </td>
</tr>

</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  props: {
    checkedOut: {
      type: Boolean,
      default: false
    },
    item: {
      type: Object,
      required: true
    }
  },
  computed: {
    ...mapGetters('cart', {
      cartItemById: 'itemById'
    }),
    ...mapGetters('products', {
      shopProductById: 'productById'
    }),
    itemTitle() {
      return this.shopProductById(this.item.id).title;
    },
    itemPrice() {
      return this.shopProductById(this.item.id).price;
    },
    itemCount() {
      return this.cartItemById(this.item.id).count;
    },
    itemTotalPrice() {
      return this.itemPrice * this.itemCount;
    }
  },
  methods: {
    ...mapActions('cart', [
      'increaseItemCount',
      'decreaseItemCount',
      'setItemCount',
      'removeItem'
    ]),
    setItemAmount(event) {
      this.setItemCount({
        id: this.item.id,
        newCount: event.target.value
      });
    }
  }
};
</script>

<style scoped>
</style>
