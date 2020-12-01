<template>
  <div class="col-lg-3 col-sm-6 my-3">
    <div class="product-item">
      <div class="pi-pic text-center">
        <!-- <div class="tag-sale">Oferta</div> -->
        <router-link :to="{ name: 'product', params: { id: product.id } }">
          <img :src="product.image" class="mw-100" alt="" height="200" />
        </router-link>
        <div class="pi-links">
          <a href="#" role="button" @click.prevent="addToCart" class="add-card">
            <span class="text-bold">Añadir</span>
            <i class="fas fa-shopping-cart"></i>
          </a>
        </div>
      </div>
      <div class="pi-text">
        <h6>
          {{
            `${new Intl.NumberFormat("en-US", {
              style: "currency",
              currency: "USD",
              minimumFractionDigits: 2,
            }).format(product.price)}`
          }}
        </h6>
        <p>{{ product.name }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["product"],
  methods: {
    addToCart() {
      this.$store.dispatch("addProductToCart", {
        product: this.product,
        username: this.$store.state.user.data.username,
        quantity: 1,
        token: this.$store.getters.token
      });
    },
  },
};
</script>

<style>
</style>