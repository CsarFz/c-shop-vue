<template>
  <section class="cart-section spad">
    <div class="container">
      <div class="row">
        <div class="col-lg-8">
          <div class="cart-table">
            <h3>Carrito</h3>
            <div class="cart-table-warp table-responsive">
              <table>
                <thead>
                  <tr>
                    <th class="product-th">Producto</th>
                    <th class="quy-th">Cantidad</th>
                    <th class="total-th">Precio</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="item in cart" :key="item.product.id">
                    <td class="product-col">
                      <img :src="item.product.image" class="rounded" alt="" />
                      <div class="pc-title">
                        <h4>{{ item.product.name }}</h4>
                      </div>
                    </td>
                    <td class="quy-col">
                      <div class="quantity">
                        <div class="pro-qty text-center align-items-center">
                          <span>{{ item.quantity }}</span>
                        </div>
                      </div>
                    </td>
                    <td class="total-col">
                      <h4>${{ item.product.price }}</h4>
                    </td>
                    <td class="total-col pl-4">
                      <a
                        role="button"
                        href="#"
                        @click.prevent="removeProduct(item.product)"
                      >
                        <i class="far fa-trash-alt text-primary-cshop"></i>
                      </a>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div class="total-cost">
              <h6>
                Total <span>${{ total }}</span>
              </h6>
            </div>
          </div>
        </div>
        <div class="col-lg-4 card-right">
          <!-- <form class="promo-code-form mt-3 mt-lg-0">
            <input type="text" placeholder="Enter promo code" />
            <button type="submit" class="text-bold">Enviar</button>
          </form> -->
          <router-link
            :to="{ name: 'checkout', params: { cart: cart, total: total } }"
            class="btn btn-cshop"
            v-if="total !== 0"
          >
            Realizar compra
          </router-link>
          <router-link to="/products" class="btn btn-continue btn-cshop"
            >Continuar comprando</router-link
          >
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  computed: {
    cart() {
      return this.$store.state.cart;
    },
    total() {
      return this.$store.getters.cartTotalPrice;
    },
  },
  mounted() {
    const username = this.$store.state.user.data.username;
    this.$store.dispatch("getCart", { username: username });
  },
  methods: {
    removeProduct(product) {
      this.$store.dispatch("removeProduct", product);
    },
  },
};
</script>

<style lang="scss">
@import "../assets/scss/views/cart";
</style>