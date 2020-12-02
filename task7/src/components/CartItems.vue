<template>
  <table class="table table-bordered table-hover">
    <thead>
      <tr>
        <th>Title</th>
        <th>Price</th>
        <th>Amount</th>
        <th>Total Price</th>
        <th v-if="!checkedOut"></th>
      </tr>
    </thead>

    <tbody>
      <tr v-for="(item, index) in items" :key="index">
        <td>{{ itemData(item.id).title }}</td>
        <td>{{ itemData(item.id).price }}</td>
        <td v-if="!checkedOut">
          <input
            type="number"
            :value="itemData(item.id).amount"
            @change="setItemAmount($event, item)"
          />
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
        <td v-else>
          {{ itemData(item.id).amount }}
        </td>
        <td>{{ itemData(item.id).itemTotalPrice }}</td>
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
  </table>
</template>

<script>
  import { mapGetters, mapActions } from 'vuex';

  export default {
    props: {
      checkedOut: Boolean
    },
    computed: {
      ...mapGetters('cart', {
        items: 'items',
        cartItemById: 'itemById'
      }),
      ...mapGetters('products', {
        shopProductById: 'productById'
      }),
      itemData() {
        return (id) => {
          let shopData = this.shopProductById(id);
          let cartData = this.cartItemById(id);
          return {
            title: shopData.title,
            price: shopData.price,
            amount: cartData.count,
            itemTotalPrice: shopData.price * cartData.count
          };
        }
      },
      totalPrice() {
        return this.items.reduce((total, item) => {
          return total += this.itemData(item.id).itemTotalPrice;
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
  }
</script>

<style scoped>
</style>
