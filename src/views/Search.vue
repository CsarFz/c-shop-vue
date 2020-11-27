<template>
  <section id="profile">
    <div class="container my-5 py-5">
      <div class="back-link">
        <router-link to="/">
          <i class="fas fa-chevron-left"></i> Regresar
        </router-link>
      </div>
      <div class="row">
        <div
          class="col-12 text-center"
          v-if="products.length > 0 && products !== undefined"
        >
          <div class="row">
            <div class="col-12">
              <h3>
                Búsqueda de: <span class="text-primary-cshop">{{ query }}</span>
              </h3>
            </div>
            <ProductCard
              v-for="product in products"
              :key="product.id"
              :product="product"
            />
          </div>
        </div>
        <div class="col-12 text-center" v-else>
          <h3>
            No hay resultados de la búsqueda para
            <span class="text-primary-cshop">{{ query }}</span>
          </h3>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import ProductCard from "@/components/ProductCard";

export default {
  components: {
    ProductCard,
  },
  watch: {
    $route(to) {
      this.query = to.query.q;
    },
  },
  data() {
    return {
      query: this.$route.query.q,
      products: [],
    };
  },
  mounted() {
    const store = this.$store;
    store.dispatch("searchProducts", { query: this.query });

    this.products =
      store.state.productsSearch !== undefined
        ? store.state.productsSearch
        : [];
  },
};
</script>

<style>
</style>