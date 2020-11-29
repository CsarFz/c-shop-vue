<template>
  <section id="profile">
    <div class="container my-5">
      <div class="back-link">
        <router-link to="/">
          <i class="fas fa-chevron-left"></i> Regresar
        </router-link>
      </div>
      <div class="row justify-content-center">
        <div class="col-12 col-md-6 search">
          <form>
            <input
              type="text"
              placeholder="Buscar..."
              class="primary-input"
              v-model="query"
            />
            <button @click.prevent="search">
              <i class="fas fa-search fa-xs"></i>
            </button>
          </form>
        </div>
        <div
          class="col-12 text-center"
          v-if="products.length > 0 && products !== undefined"
        >
          <div class="row py-4">
            <ProductCard
              v-for="product in products"
              :key="product.id"
              :product="product"
            />
          </div>
        </div>
        <div class="col-12 text-center pt-5" v-else>
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
import axios from "axios";

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
      query: "",
      products: [],
    };
  },
  async beforeCreate() {
    // this.products =
    //   store.state.productsSearch !== undefined
    //     ? store.state.productsSearch
    //     : [];
    axios
      .post(
        "https://8rj68a68ml.execute-api.us-east-1.amazonaws.com/default/products"
      )
      .then((response) => {
        this.products = response.data;
      });
  },
  methods: {
    async search() {
      const query_ = this.query.trim();
      await axios
        .post(
          "https://8rj68a68ml.execute-api.us-east-1.amazonaws.com/default/search",
          {
            query: query_,
          }
        )
        .then((response) => {
          const data = response.data;
          this.products = data;
        });
    },
  },
};
</script>

<style lang="scss" scoped>
.search {
  & input {
    width: 100%;
    border: none;
    padding: 0 19px;
  }

  & button {
    position: absolute;
    height: 100%;
    right: 18px;
    top: 0;
    font-size: 26px;
    border: none;
    cursor: pointer;
    background-color: transparent;
  }
}
</style>