<template>
  <section id="profile">
    <div class="container my-5">
      <div class="back-link">
        <router-link to="/">
          <i class="fas fa-chevron-left"></i> Regresar
        </router-link>
      </div>
      <div class="row">
        <div class="col-12" v-if="permission">
          <div class="row justify-content-end">
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
            <div class="col-12 text-center py-5" v-else>
              <h3>
                No hay resultados de la búsqueda para
                <span class="text-primary-cshop">{{ query }}</span>
              </h3>
            </div>
          </div>
        </div>
        <div class="col-12 text-center py-5" v-else>
          <h1 class="text-primary-cshop">Error 403</h1>
          <h2>No tiene permisos para buscar productos.</h2>
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
      permission: false,
    };
  },
  async beforeCreate() {
    await this.$store.dispatch("setLoadingStatus", true);
    const token = this.$store.getters.token;

    await axios
      .post(
        "https://8rj68a68ml.execute-api.us-east-1.amazonaws.com/default/search",
        { query: "", token }
      )
      .then((response) => {
        const data = response.data;
        if (data.code === "403") {
          this.permission = false;
          this.$store.dispatch("setLoadingStatus", false);
        } else {
          this.products = data;
          this.permission = true;
          this.$store.dispatch("setLoadingStatus", false);
        }
      });
  },
  methods: {
    async search() {
      await this.$store.dispatch("setLoadingStatus", true);
      const query_ = this.query.trim();
      const token = this.$store.getters.token;

      await axios
        .post(
          "https://8rj68a68ml.execute-api.us-east-1.amazonaws.com/default/search",
          { query: query_, token }
        )
        .then((response) => {
          const data = response.data;
          if (data.code === "403") {
            this.permission = false;
            this.$store.dispatch("setLoadingStatus", false);
          } else {
            this.products = data;
            this.permission = true;
            this.$store.dispatch("setLoadingStatus", false);
          }
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