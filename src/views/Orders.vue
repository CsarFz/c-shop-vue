<template>
  <section>
    <div class="container my-5 py-5">
      <div class="row justify-content-center" v-if="orders">
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
                  class="img-fluid rounded-lg"
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
      <div class="row" v-else>
        <div class="col-12">
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
      orders: null,
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
  beforeCreate() {
    const username = this.$store.state.user.data.username;

    axios
      .post(
        "https://8rj68a68ml.execute-api.us-east-1.amazonaws.com/default/gethistory",
        { username: username }
      )
      .then((response) => {
        this.orders = response.data;
        console.log(this.orders);
      });
  },
};
</script>

<style>
</style>