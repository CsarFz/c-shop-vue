<template>
  <section class="checkout-section spad">
    <div class="container">
      <div class="row">
        <div class="col-lg-8 order-2 order-lg-1 mt-3 mt-md-0">
          <div class="checkout-form">
            <div class="cf-title">Dirección de envío</div>
            <div class="row">
              <div class="col-md-7">
                <p>* Información de envío</p>
              </div>
              <div class="col-md-5">
                <div class="cf-radio-btns address-rb">
                  <div class="cfr-item">
                    <input
                      type="radio"
                      name="pm"
                      id="one"
                      @change="showAddressCards"
                    />
                    <label for="one">Usar una dirección guardada</label>
                  </div>
                  <div class="cfr-item">
                    <input
                      type="radio"
                      name="pm"
                      id="two"
                      @change="showFormAddress"
                    />
                    <label for="two">Usar una dirección diferente</label>
                  </div>
                </div>
              </div>
            </div>
            <div class="row address-inputs" v-if="showForm">
              <div class="col-12 text-center">
                <p v-if="errors.length">
                  <ul class="list-unstyled">
                    <li :key="index" v-for="(error, index) in errors" class="text-danger">{{ error }}</li>
                  </ul>
                </p>
              </div>
              <div class="col-md-12">
                <input
                  type="text"
                  placeholder="Dirección e.g. número de casa, calle."
                  v-model="address"
                  class="primary-input"
                />
                <select
                  class="form-control primary-input mb-3"
                  aria-hidden="true"
                  v-model="country"
                >
                  <option value="">Seleccionar país</option>
                  <option value="MX" selected>México</option>
                </select>
              </div>
              <div class="col-md-6">
                <input
                  type="text"
                  placeholder="Estado"
                  v-model="state"
                  class="primary-input"
                />
              </div>
              <div class="col-md-6">
                <input
                  type="text"
                  placeholder="Ciudad"
                  v-model="city"
                  class="primary-input"
                />
              </div>
              <div class="col-md-6">
                <input
                  type="text"
                  placeholder="Colonia"
                  v-model="suburb"
                  class="primary-input"
                />
              </div>
              <div class="col-md-6">
                <input
                  type="text"
                  placeholder="Código Postal"
                  v-model="zipCode"
                  class="primary-input"
                />
              </div>
              <div class="col-md-12">
                <input
                  type="text"
                  placeholder="Instrucciones de entrega"
                  v-model="instructions"
                  class="primary-input"
                />
              </div>
            </div>
            <div class="row addresses-inputs" v-if="showAddresses">
              <div class="col-12" v-if="addresses.length">
                <div class="row">
                  <div class="col-md-6" v-for="item in addresses" :key="item.id">
                    <div class="bg-white card addresses-item mb-3 shadow-sm">
                      <input type="radio" :name="`radio-${item.id}`" :value="item" v-model="addressSelected" :id="`radio-${item.id}`" class="d-none">
                      <label class="m-0" :for="`radio-${item.id}`">
                        <div class="gold-members p-4">
                          <div class="media">
                            <div class="mr-4">
                              <i class="icofont-ui-home icofont-3x"></i>
                            </div>
                            <div class="media-body">
                              <span class="badge badge-danger"> Default - {{ item.nickname }} </span>
                              <h6 class="mb-3 mt-1 text-dark">{{ item.address }}</h6>
                              <p class="text-secondary m-0">
                                Ciudad: <span class="text-dark">{{ item.city }}</span>
                              </p>
                              <p class="text-secondary m-0">
                                Colonia: <span class="text-dark">{{ item.suburb }}</span>
                              </p>
                              <p class="text-secondary">
                                Código Postal: <span class="text-dark">{{ item.zipCode }}</span>
                              </p>
                            </div>
                          </div>
                        </div>
                      </label>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-12 text-center" v-else>
                <h3>No tiene ninguna dirección guardada.</h3>
              </div>
            </div>
            <div class="cf-title">Información de entrega</div>
            <div class="row shipping-btns mx-auto">
              <div class="col-12 text-center">
                <p v-if="errorsDelivery.length">
                  <ul class="list-unstyled">
                    <li :key="index" v-for="(error, index) in errorsDelivery" class="text-danger">{{ error }}</li>
                  </ul>
                </p>
              </div>
              <div class="col-6">
                <h4>Estándar (3 a 4 días)</h4>
              </div>
              <div class="col-6">
                <div class="cf-radio-btns">
                  <div class="cfr-item">
                    <input
                      type="radio"
                      name="shipping"
                      id="ship-1"
                      value="0"
                      v-model="picked"
                      checked
                    />
                    <label for="ship-1">Gratis</label>
                  </div>
                </div>
              </div>
              <div class="col-6">
                <h4>Entrega al día siguiente</h4>
              </div>
              <div class="col-6">
                <div class="cf-radio-btns">
                  <div class="cfr-item">
                    <input
                      type="radio"
                      name="shipping"
                      id="ship-2"
                      value="74"
                      v-model="picked"
                    />
                    <label for="ship-2">$74.00</label>
                  </div>
                </div>
              </div>
            </div>
            <div class="cf-title">Pago</div>
            <ul class="payment-list">
              <!-- <li>
                Paypal<a href="#"><img src="img/paypal.png" alt="" /></a>
              </li>
              <li>
                Tarjeta Crédito / Débito <a href="#"
                  ><img src="img/mastercart.png" alt=""
                /></a>
              </li> -->
              <li>Paga cuando recibas el paquete</li>
            </ul>
            <button
            v-if="cart.length"
              v-b-modal.checkout
              class="btn site-btn-animated submit-order-btn text-bold"
            >
              Realizar pedido
            </button>
          </div>
        </div>
        <div class="col-lg-4 order-1 order-lg-2">
          <div class="checkout-cart">
            <h3>Tu carrito</h3>
            <ul class="product-list">
              <li v-for="item in cart" :key="item.product.id">
                <div class="pl-thumb">
                  <img :src="item.product.image" height="150" alt="" />
                </div>
                <h6>{{ item.product.name }}</h6>
                <p>$ {{ item.product.price }}</p>
              </li>
            </ul>
            <ul class="price-list">
              <li>
                Subtotal<span>{{
                      `${new Intl.NumberFormat("en-US", {
                        style: "currency",
                        currency: "USD",
                        minimumFractionDigits: 2,
                      }).format(total)}`
                    }}</span>
              </li>
              <li v-if="picked !== ''">
                Envío<span>{{
                  picked != "0" && picked != "" ? `$${picked}.00` : "Gratis"
                }}</span>
              </li>
              <li class="total" v-if="picked !== ''">
                Total<span
                  >
                  {{
                    picked != "0" && picked != ""
                      ? `${new Intl.NumberFormat("en-US", {
                        style: "currency",
                        currency: "USD",
                        minimumFractionDigits: 2,
                      }).format(total + parseInt(picked))}` 
                      : `${new Intl.NumberFormat("en-US", {
                        style: "currency",
                        currency: "USD",
                        minimumFractionDigits: 2,
                      }).format(total)}`
                  }}</span
                >
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <b-modal
      id="checkout"
      centered
      hide-header
      hide-footer
      no-close-on-backdrop
      no-close-on-esc
    >
      <div class="p-4">
        <div class="row text-center">
          <div class="col-12">
            <h3>Checkout</h3>
            <p>¿Está seguro de realizar la compra?</p>
          </div>
          <div class="col-12">
            <button
              id="payment"
              class="btn btn-cshop my-2 px-4 mr-0 mr-sm-3"
              type="submit"
              @click.prevent="checkout()"
            >
              Comprar
            </button>
            <button class="btn btn-danger" ref="btnHide" @click="hideModal">
              Cancelar
            </button>
          </div>
        </div>
      </div>
    </b-modal>

    <b-modal
      ref="success"
      centered
      hide-header
      hide-footer
      no-close-on-backdrop
      no-close-on-esc
    >
      <div class="p-4">
        <div class="row text-center justify-content-center">
          <div class="col-12">
            <h3>¡Compra exitosa!</h3>
            <p>Gracias por comprar en C-Shop.</p>
          </div>
          <div class="col-6">
            <router-link
              id="success"
              class="btn btn-cshop my-2 px-4 mr-0 mr-sm-3"
              to="/orders"
            >
              Aceptar
            </router-link>
          </div>
        </div>
      </div>
    </b-modal>
  </section>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      errors: [],
      errorsDelivery: [],
      addresses: [],
      picked: "",
      showForm: false,
      showAddresses: false,
      addressSelected: null,
      country: "",
      state: null,
      city: null,
      address: null,
      suburb: null,
      zipCode: null,
      instructions: null,
    };
  },
  computed: {
    cart() {
      return this.$store.state.cart;
    },
    total() {
      return this.$store.getters.cartTotalPrice;
    },
  },
  async mounted() {
    const username = this.$store.state.user.data.username;
    await this.$store.dispatch("getCart", { username: username });

    await axios
      .post(
        "https://8rj68a68ml.execute-api.us-east-1.amazonaws.com/default/getaddress",
        { username }
      )
      .then((response) => {
        this.addresses = response.data;
      });
  },
  methods: {
    checkout() {
      const cart = {
        products: this.cart,
        total: this.total + parseInt(this.picked),
        username: this.$store.state.user.data.username,
        date_purchase: new Date().valueOf(),
      };
      const address = {
        address: this.address,
        country: this.country,
        state: this.state,
        city: this.city,
        suburb: this.suburb,
        zipCode: this.zipCode,
        instructions: this.instructions,
        nickname: "home",
        username: this.$store.state.user.data.username,
      };

      if (this.showForm) {
        if (this.checkForm()) {
          this.$store.dispatch("checkout", { cart, address });
          this.showModal();
          this.hideModal();
        } else {
          this.showToastError("Hay errores en el formulario.");
          this.hideModal();
        }
      } else if (this.showAddresses) {
        if (this.addressSelected) {
          this.$store.dispatch("checkoutUser",  cart);
          this.showModal();
          this.hideModal();
        } else {
          this.showToastError("Seleccione una dirección guardada.");
          this.hideModal();
        }
      } else {
        this.showToastError("Elija una opción de dirección de entrega.");
        this.hideModal();
      }
    },
    showFormAddress() {
      this.showForm = true;
      this.showAddresses = false;
    },
    showAddressCards() {
      this.showAddresses = true;
      this.showForm = false;
    },
    showModal() {
      this.$refs["success"].show();
    },
    hideModal() {
      this.$root.$emit("bv::hide::modal", "checkout", "#btnHide");
    },
    zipCodeValidation(zipCode) {
      const re = /^\d{5}[-\s]?(?:\d{4})?$/gm;
      return re.test(zipCode);
    },
    showToastError(message) {
      this.$toasted.error(message, {
        duration: 5000,
        keepOnHover: true,
        icon: "times",
      });
    },
    checkForm() {
      this.errors = [];
      this.errorsDelivery = [];

      if (!this.address) {
        this.errors.push("La dirección de calle es requerida.");
      } else if (this.address.length < 10) {
        this.errors.push("La dirección debe contener más de 10 caracteres.");
      }

      if (!this.city) {
        this.errors.push("La ciudad es requerida.");
      } else if (this.city.length < 5) {
        this.errors.push("La ciudad debe contener más de 5 caracteres.");
      }

      if (!this.state) {
        this.errors.push("El estado es requerido.");
      } else if (this.state.length < 5) {
        this.errors.push("El estado debe contener más de 5 caracteres.");
      }

      if (this.country === "") {
        this.errors.push("El país es requerido.");
      }

      if (!this.suburb) {
        this.errors.push("La colonia es requerida.");
      } else if (this.suburb.length < 5) {
        this.errors.push("La colonia debe contener más de 5 caracteres.");
      }

      if (!this.zipCode) {
        this.errors.push("El código postal es requerido.");
      } else if (this.zipCode.length < 5) {
        this.errors.push("El código postal debe de ser de 5 números.");
      } else if (!this.zipCodeValidation(this.zipCode)) {
        this.errors.push("El código postal es incorrecto.");
      }

      if (!this.instructions) {
        this.errors.push("Las instrucciones son requeridas.");
      } else if (this.instructions.length < 10) {
        this.errors.push(
          "Las instrucciones deben contener más de 10 caracteres."
        );
      }

      if (isNaN(parseInt(this.picked))) {
        this.errorsDelivery.push("Elija una opción de entrega.");
      }

      if (!this.errors.length && !this.errorsDelivery.length) {
        return true;
      }
    },
  },
};
</script>

<style lang="scss">
@import "../assets/scss/views/checkout";
</style>