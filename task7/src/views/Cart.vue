<template>
  <div>
    <h1>Cart</h1>
    <hr />
    <div
      v-if="items.length === 0"
      class="alert alert-warning"
    >
      Your cart is empty
    </div>

    <div v-else>
      <table class="table table-bordered table-hover">
        <thead>
          <tr>
            <th>Title</th>
            <th>Price</th>
            <th>Amount</th>
            <th>Total Price</th>
            <th></th>
          </tr>
        </thead>

        <tbody>
          <tr 
            v-for="(item, index) in items"
            :key="index"
          >
            <td>{{ itemData(item.id).title }}</td>
            <td>{{ itemData(item.id).price }}</td>
            <td>
              <input
                type="number"
                :value="itemData(item.id).amount"
                @change="setItemAmount($event, item)"
              >
              <button
                class="btn btn-primary"
                @click="increaseItemCount(item)"
              >+</button>
              <button
                class="btn btn-warning"
                @click="decreaseItemCount(item)"
              >-</button>
            </td>
            <td>{{ itemData(item.id).itemTotalPrice }}</td>
            <td>
              <button
                class="btn btn-danger"
                @click="removeItem(item)"
              >X</button>
            </td>
          </tr>
          <tr>
            <td colspan="3"></td>
            <td>{{ totalPrice }}</td>
            <td></td>
          </tr>
        </tbody>
      </table>

      <button class="btn btn-success">Order Now</button>
    </div>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex';
  import { mapActions } from 'vuex';

  export default {
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
          }
        }
      },
      empty() {
        return this.items.length === 0;
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
