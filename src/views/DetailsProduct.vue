<template>
  <section class="product-section">
    <div class="container">
      <div class="back-link">
        <router-link to="/">
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
          <!-- <div
            class="product-thumbs"
            tabIndex="1"
            style="overflow: hidden; outline: none"
          >
            <div class="product-thumbs-track">
              <div class="pt active" data-imgbigurl="https://picsum.photos/600">
                <img src="https://picsum.photos/600" class="img-fluid" alt="" />
              </div>
              <div class="pt" data-imgbigurl="img/single-product/2.jpg">
                <img src="img/single-product/thumb-2.jpg" alt="" />
              </div>
              <div class="pt" data-imgbigurl="img/single-product/3.jpg">
                <img src="img/single-product/thumb-3.jpg" alt="" />
              </div>
              <div class="pt" data-imgbigurl="img/single-product/4.jpg">
                <img src="img/single-product/thumb-4.jpg" alt="" />
              </div>
            </div>
          </div> -->
        </div>
        <div class="col-lg-6 product-details">
          <h2 class="p-title">{{ product.name }}</h2>
          <h3 class="p-price">$ {{ product.price }}</h3>
          <h4 class="p-stock">
            Disponible:
            <span>{{ product.stock > 0 ? "En stock" : "Sin stock" }}</span>
          </h4>
          <!-- <div class="p-rating">
            <i class="far fa-star"></i>
            <i class="far fa-star"></i>
            <i class="far fa-star"></i>
            <i class="far fa-star"></i>
            <i class="far fa-star fa-fade"></i>
          </div> -->

          <!-- <div class="p-review">
            <a href="">3 reviews</a>|<a href="">Add your review</a>
          </div> -->

          <!-- <div class="quantity">
            <p>Cantidad</p>
            <div class="pro-qty">
              <input type="text" value="1" v-model="quantity" maxLength="1" />
            </div>
          </div> -->
          <a
            href="#"
            role="button"
            class="btn btn-cshop text-uppercase px-5 my-5"
            @click.prevent="addToCart()"
          >
            <i class="fas fa-shopping-cart pr-2"></i>Añadir al carrito
          </a>
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
                    {{ product.description }}
                  </p>
                </div>
              </div>
            </div>
            <!-- <div class="panel">
              <div class="panel-header" id="headingTwo">
                <button
                  class="panel-link"
                  data-toggle="collapse"
                  data-target="#collapse2"
                  aria-expanded="false"
                  aria-controls="collapse2"
                >
                  Información adicional
                </button>
              </div>
              <div
                id="collapse2"
                class="collapse"
                aria-labelledby="headingTwo"
                data-parent="#accordion"
              >
                <div class="panel-body">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Proin pharetra tempor so dales. Phasellus sagittis auctor
                    gravida. Integer bibendum sodales arcu id te mpus. Ut
                    consectetur lacus leo, non scelerisque nulla euismod nec.
                  </p>
                </div>
              </div>
            </div> -->
            <!-- <div class="panel">
              <div class="panel-header" id="headingThree">
                <button
                  class="panel-link"
                  data-toggle="collapse"
                  data-target="#collapse3"
                  aria-expanded="false"
                  aria-controls="collapse3"
                >
                  Envío y devolución
                </button>
              </div>
              <div
                id="collapse3"
                class="collapse"
                aria-labelledby="headingThree"
                data-parent="#accordion"
              >
                <div class="panel-body">
                  <h4>Devoluciones en 7 días</h4>
                  <p>
                    Pagar cuando reciba disponiible<br />Entrega a domicilio
                    <span>3 - 4 días</span>
                  </p>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Proin pharetra tempor so dales. Phasellus sagittis auctor
                    gravida. Integer bibendum sodales arcu id te mpus. Ut
                    consectetur lacus leo, non scelerisque nulla euismod nec.
                  </p>
                </div>
              </div>
            </div> -->
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: ["id"],
  data() {
    return {
      quantity: 1,
    };
  },
  computed: {
    product() {
      return this.$store.state.product;
    },
  },
  mounted() {
    this.$store.dispatch("getProduct", this.id);
  },
  methods: {
    addToCart() {
      this.$store.dispatch("addProductToCart", {
        product: this.product,
        username: this.$store.state.user.data.username,
        quantity: 1,
      });
    },
  },
};
</script>

<style lang="scss">
@import "../assets/scss/views/details";
</style>