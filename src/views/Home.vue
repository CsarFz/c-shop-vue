<template>
  <div class="home">
    <a href="/#" id="backToTop" class="shadow-lg"> </a>

    <section class="product-filter-section py-5" id="products">
      <div class="container">
        <div class="section-title text-center">
          <h2>PRODUCTOS C-SHOP</h2>
        </div>

        <!-- <ul class="product-filter-menu text-center">
          <li><a href="#">XBOX</a></li>
          <li><a href="#">PS4</a></li>
          <li><a href="#">Switch</a></li>
          <li><a href="#">PC</a></li>
          <li><a href="#">HARDWARE</a></li>
        </ul> -->

        <ul
          class="nav nav-pills mb-3 product-filter-menu d-flex justify-content-center"
          id="pills-tab"
          role="tablist"
        >
          <li class="nav-item" role="presentation">
            <a
              class="nav-link active"
              id="pills-xbox-tab"
              data-toggle="pill"
              href="#pills-xbox"
              role="tab"
              aria-controls="pills-xbox"
              aria-selected="true"
              >Xbox</a
            >
          </li>
          <li class="nav-item" role="presentation">
            <a
              class="nav-link"
              id="pills-ps4-tab"
              data-toggle="pill"
              href="#pills-ps4"
              role="tab"
              aria-controls="pills-ps4"
              aria-selected="false"
              >PS4</a
            >
          </li>
          <li class="nav-item" role="presentation">
            <a
              class="nav-link"
              id="pills-switch-tab"
              data-toggle="pill"
              href="#pills-switch"
              role="tab"
              aria-controls="pills-switch"
              aria-selected="false"
              >Switch</a
            >
          </li>
          <li class="nav-item" role="presentation">
            <a
              class="nav-link"
              id="pills-pc-tab"
              data-toggle="pill"
              href="#pills-pc"
              role="tab"
              aria-controls="pills-pc"
              aria-selected="false"
              >PC</a
            >
          </li>
        </ul>

        <div class="tab-content" id="pills-tabContent">
          <div
            class="tab-pane fade show active"
            id="pills-xbox"
            role="tabpanel"
            aria-labelledby="pills-xbox-tab"
          >
            <div class="row align-items-center">
              <div class="col-12 text-center" v-if="productsXbox.length == 0">
                <h3>No hay resultados</h3>
              </div>
              <ProductCard
                v-for="product in productsXbox"
                :key="product.id"
                :product="product"
                v-else
              />
            </div>
          </div>
          <div
            class="tab-pane fade"
            id="pills-ps4"
            role="tabpanel"
            aria-labelledby="pills-ps4-tab"
          >
            <div class="row align-items-center">
              <div class="col-12 text-center" v-if="productsPS4.length == 0">
                <h3>No hay resultados</h3>
              </div>
              <ProductCard
                v-for="product in productsPS4"
                :key="product.id"
                :product="product"
                v-else
              />
            </div>
          </div>
          <div
            class="tab-pane fade"
            id="pills-switch"
            role="tabpanel"
            aria-labelledby="pills-switch-tab"
          >
            <div class="row justify-content-center">
              <div class="col-12 text-center" v-if="productsSwitch.length == 0">
                <h3>No hay resultados</h3>
              </div>
              <ProductCard
                v-for="product in productsSwitch"
                :key="product.id"
                :product="product"
                v-else
              />
            </div>
          </div>
          <div
            class="tab-pane fade"
            id="pills-pc"
            role="tabpanel"
            aria-labelledby="pills-pc-tab"
          >
            <div class="row justify-content-center">
              <div class="col-12 text-center" v-if="productsPC.length == 0">
                <h3>No hay resultados</h3>
              </div>
              <ProductCard
                v-for="product in productsPC"
                :key="product.id"
                :product="product"
                v-else
              />
            </div>
          </div>
        </div>

        <!-- <div class="text-center pt-5">
          <button class="btn btn-more">MÁS</button>
        </div> -->
      </div>
    </section>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from "@/components/HelloWorld.vue";
import ProductCard from "../components/ProductCard";
import axios from "axios";

export default {
  name: "Home",
  components: { ProductCard },
  data() {
    return {
      swiperOption: {
        slidesPerView: 1,
        loop: true,
        autoplay: {
          enabled: true,
          delay: 5000,
          disableOnInteraction: false,
        },
        pagination: {
          el: ".swiper-pagination",
          dynamicBullets: true,
          clickable: true,
          renderBullet(index, className) {
            return `<span class="${className} swiper-pagination-bullet-custom">${
              index + 1
            }</span>`;
          },
        },
      },
      productsXbox: [],
      productsPS4: [],
      productsSwitch: [],
      productsPC: [],
    };
  },
  mounted() {
    axios
      .post(
        "https://8rj68a68ml.execute-api.us-east-1.amazonaws.com/default/products"
      )
      .then((response) => {
        const products = response.data;

        this.productsXbox =
          products !== undefined
            ? products.filter(({ category }) => category === "xbox")
            : [];
        this.productsPS4 =
          products !== undefined
            ? products.filter(({ category }) => category === "ps4")
            : [];
        this.productsSwitch =
          products !== undefined
            ? products.filter(({ category }) => category === "switch")
            : [];
        this.productsPC =
          products !== undefined
            ? products.filter(({ category }) => category === "pc")
            : [];
      });

    const data = this.$store.state.user.data;
    if (data) {
      this.$store.dispatch("getCart", { username: data.username });
    }
  },
};
</script>

<style lang="scss">
@import "../assets/scss/views/home";
</style>
