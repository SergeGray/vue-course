<template>

<tbody>
  <tr v-for="(item, index) in items" :key="index">
    <td>{{ itemTitle(item.id) }}</td>
    <td>{{ itemPrice(item.id) }}</td>
    <td v-if="!checkedOut">

      <input
        type="number"
        :value="itemCount(item.id)"
        @change="setItemAmount($event, item)"
      >

      <button
        class="btn btn-primary"
        @click="increaseItemCount({ id: item.id })"
      >
        +
      </button>

      <button
        class="btn btn-warning"
        @click="decreaseItemCount({ id: item.id })"
      >
        -
      </button>
    </td>

    <td v-else>{{ itemCount(item.id) }}</td>

    <td>{{ itemTotalPrice(item.id) }}</td>

    <td v-if="!checkedOut">
      <button
        class="btn btn-danger"
        @click="removeItem(item)"
      >
        X
      </button>
    </td>
  </tr>

  <tr>
    <td colspan="3"></td>
    <td>{{ totalPrice }}</td>
    <td v-if="!checkedOut"></td>
  </tr>
</tbody>

</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  props: {
    checkedOut: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    ...mapGetters('cart', {
      items: 'items',
      cartItemById: 'itemById'
    }),
    ...mapGetters('products', {
      shopProductById: 'productById'
    }),
    itemTitle() {
      return (id) => this.shopProductById(id).title;
    },
    itemPrice() {
      return (id) => this.shopProductById(id).price;
    },
    itemCount() {
      return (id) => this.cartItemById(id).count;
    },
    itemTotalPrice() {
      return (id) => this.itemPrice(id) * this.itemCount(id);
    },
    totalPrice() {
      return this.items.reduce((total, item) => {
        return total += this.itemTotalPrice(item.id);
      }, 0);
    }
  },
  methods: {
    ...mapActions('cart', [
      'increaseItemCount',
      'decreaseItemCount',
      'setItemCount',
      'removeItem'
    ]),
    setItemAmount(event, item) {
      this.setItemCount({
        id: item.id,
        newCount: event.target.value
      });
    }
  }
};
</script>

<style scoped>
</style>
