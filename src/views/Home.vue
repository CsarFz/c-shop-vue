<template>
  <div class="home">
    <a href="/#" id="backToTop" class="shadow-lg"> </a>
    <section class="hero-section">
      <swiper id="main" :options="swiperOption">
        <swiper-slide>
          <img
            src="https://picsum.photos/1920/200"
            class="mw-100 mx-auto d-flex"
            height="200"
            alt="Slide"
          />
        </swiper-slide>
        <swiper-slide>
          <img
            src="https://picsum.photos/1920/200"
            class="mw-100 mx-auto d-flex"
            height="200"
            alt="Slide"
          />
        </swiper-slide>
        <div
          class="swiper-pagination swiper-pagination-bullets"
          slot="pagination"
        ></div>
      </swiper>
    </section>

    <section class="product-filter-section" id="products">
      <div class="container">
        <div class="section-title text-center">
          <h2>PRODUCTOS</h2>
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
        <!-- <div class="row">
          <div class="col-12 text-center">
            <Loader
              type="RevolvingDot"
              color="#E9155F"
              height="{100}"
              width="{100}"
            />
          </div>
        </div> -->

        <div class="tab-content" id="pills-tabContent">
          <div
            class="tab-pane fade show active"
            id="pills-xbox"
            role="tabpanel"
            aria-labelledby="pills-xbox-tab"
          >
            <div class="row justify-content-center">
              <!-- { products.filter(({category}) => category === 'electronics')
              .map(({id, title, image, price, category}) => { return ( -->
              <div class="col-lg-3 col-sm-6" key="{`product-${id}`}">
                <div class="product-item">
                  <div class="pi-pic">
                    <!-- {category === 'electronics' ? -->
                    <div class="tag-sale">Oferta</div>
                    <!-- : ''} -->
                    <router-link to="/products/2">
                      <img
                        src="https://dummyimage.com/600x600/000/fff"
                        class="img-fluid"
                        height="300"
                        alt=""
                      />
                    </router-link>
                    <div class="pi-links">
                      <a href="/#" class="add-card"
                        ><span class="text-bold">Añadir</span><i class="fas fa-shopping-cart"></i
                      ></a>
                    </div>
                  </div>
                  <div class="pi-text">
                    <h6>$ {price}</h6>
                    <p>{title}</p>
                  </div>
                </div>
              </div>
              <!-- ) }) } -->
            </div>
          </div>
          <div
            class="tab-pane fade"
            id="pills-ps4"
            role="tabpanel"
            aria-labelledby="pills-ps4-tab"
          >
            <div class="row justify-content-center">
              <div class="col-lg-3 col-sm-6">
                <div class="product-item">
                  <div class="pi-pic">
                    <div class="tag-sale">Oferta</div>
                    <router-link to="/products/2">
                      <img
                        src="https://dummyimage.com/600x600/000/fff"
                        class="img-fluid"
                        alt=""
                      />
                    </router-link>
                    <div class="pi-links">
                      <a href="/#" class="add-card"
                        ><span class="text-bold">Añadir</span><i class="fas fa-shopping-cart"></i
                      ></a>
                    </div>
                  </div>
                  <div class="pi-text">
                    <h6>$135.00</h6>
                    <p>Videojuego</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            class="tab-pane fade"
            id="pills-switch"
            role="tabpanel"
            aria-labelledby="pills-switch-tab"
          >
            <div class="row justify-content-center">
              <div class="col-lg-3 col-sm-6">
                <div class="product-item">
                  <div class="pi-pic">
                    <div class="tag-sale">Oferta</div>
                    <router-link to="/products/2">
                      <img
                        src="https://dummyimage.com/600x600/000/fff"
                        class="img-fluid"
                        alt=""
                      />
                    </router-link>
                    <div class="pi-links">
                      <a href="#" class="add-card"
                        ><span class="text-bold">Añadir</span><i class="fas fa-shopping-cart"></i
                      ></a>
                    </div>
                  </div>
                  <div class="pi-text">
                    <h6>$135.00</h6>
                    <p>Videojuego</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            class="tab-pane fade"
            id="pills-pc"
            role="tabpanel"
            aria-labelledby="pills-pc-tab"
          >
            <div class="row justify-content-center">
              <div class="col-12 text-center">
                <h3>No hay resultados</h3>
              </div>
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
import { Swiper, SwiperSlide } from "vue-awesome-swiper";
import {
  Swiper as SwiperClass,
  Pagination,
  Mousewheel,
  Autoplay,
} from "swiper/core";
import "swiper/swiper-bundle.min.css";

SwiperClass.use([Pagination, Mousewheel, Autoplay]);

export default {
  name: "Home",
  components: {
    Swiper,
    SwiperSlide,
  },
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
    };
  },
};
</script>

<style lang="scss">
@import "../assets/scss/views/home";
</style>
