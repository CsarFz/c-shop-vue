<template>
  <section class="product-section">
    <div class="container">
      <div class="back-link">
        <router-link to="/orders">
          <i class="fas fa-chevron-left"></i> Regresar
        </router-link>
      </div>
      <div class="row">
        <div class="col-lg-6">
          <div class="product-pic-zoom">
            <img
              class="product-big-img img-fluid border-20 shadow"
              :src="product.image"
              alt=""
            />
          </div>
        </div>
        <div class="col-lg-6 product-details">
          <h2 class="p-title">{{ product.name }}</h2>
          <h3 class="p-price">$ {{ product.price }}</h3>
          <h4 class="p-stock">
            Disponible:
            <span>{{ product.stock > 0 ? "En stock" : "Sin stock" }}</span>
          </h4>

          <!-- <a href="/cart" class="btn btn-cshop text-uppercase px-5 mt-4"
            ><i class="fas fa-shopping-cart pr-2"></i>Volver a comprar</a
          > -->
          <div id="accordion" class="accordion-area">
            <div class="panel">
              <div class="panel-header" id="headingOne">
                <button
                  class="panel-link active"
                  data-toggle="collapse"
                  data-target="#collapse1"
                  aria-expanded="true"
                  aria-controls="collapse1"
                >
                  Detalles
                </button>
              </div>
              <div
                id="collapse1"
                class="collapse show"
                aria-labelledby="headingOne"
                data-parent="#accordion"
              >
                <div class="panel-body">
                  <p>
                   {{product.description }}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: ["id"],
  computed: {
    product() {
      return this.$store.state.product;
    },
  },
  mounted() {
    this.$store.dispatch("getProduct", this.id);
  },
};
</script>

<style>
</style>