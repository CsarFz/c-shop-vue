<template>
  <section>
    <div class="container my-5 py-5">
      <div class="back-link">
        <router-link to="/">
          <i class="fas fa-chevron-left"></i> Regresar
        </router-link>
      </div>
      <div class="row justify-content-center" v-if="orders.length">
        <div
          class="col-12 col-md-6"
          v-for="item in orders"
          :key="item.id_history"
        >
          <div class="card mb-3" style="max-width: 580px">
            <div class="card-header">
              <div class="d-flex align-items-center justify-content-between">
                <div>
                  <h4 class="text-bold m-0"># {{ item.id }}</h4>
                </div>
                <div class="d-flex">
                  <p class="m-0">
                    <router-link :to="`/orders/${item.id}`" class="link-cShop">
                      Ver detalles
                    </router-link>
                  </p>
                </div>
              </div>
            </div>
            <div class="row no-gutters">
              <div class="col-md-4 m-auto text-center">
                <img
                  :src="item.image"
                  class="img-fluid rounded-lg mt-3 mt-md-0"
                  width="120"
                  alt="Product"
                />
              </div>
              <div class="col-md-8">
                <div class="card-body">
                  <h5 class="card-title">{{ item.name }}</h5>
                  <p class="card-text three-lines">
                    {{ item.description }}
                  </p>
                  <p class="card-text">
                    <strong>Precio:</strong>
                    {{
                      `${new Intl.NumberFormat("en-US", {
                        style: "currency",
                        currency: "USD",
                        minimumFractionDigits: 2,
                      }).format(item.price)}`
                    }}
                  </p>
                  <p class="card-text">
                    <small class="text-muted">
                      {{
                        `${new Date(item.date_purchase).getDate()} de ${
                          months[new Date(item.date_purchase).getMonth()]
                        } de ${new Date(item.date_purchase).getFullYear()}`
                      }}
                    </small>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="row py-5" v-else>
        <div class="col-12 text-center py-5">
          <h2>No tiene ninguna compra hecha en C-Shop</h2>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      orders: [],
      months: [
        "Enero",
        "Febrero",
        "Marzo",
        "Abril",
        "Mayo",
        "Junio",
        "Julio",
        "Agosto",
        "Septiembre",
        "Octubre",
        "Noviembre",
        "Diciembre",
      ],
    };
  },
  async beforeCreate() {
    const token = this.$store.getters.token;

    await this.$store.dispatch("setLoadingStatus", true);
    await axios
      .post(
        "https://8rj68a68ml.execute-api.us-east-1.amazonaws.com/default/gethistory",
        { token }
      )
      .then((response) => {
        this.$store.dispatch("setLoadingStatus", false);
        this.orders = response.data;
      });
  },
};
</script>

<style>
</style>