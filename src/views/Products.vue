<template>
  <div>
    <div class="page-top-info">
      <div class="container">
        <h4>Productos</h4>
        <div class="site-pagination">
          <a href="/" class="mx-1">Inicio</a>/
          <a href="/" class="mx-1">Productos</a>/
        </div>
      </div>
    </div>
    <section class="category-section spad">
      <div class="container">
        <div class="row">
          <div class="col-lg-3 order-2 order-lg-1">
            <div class="filter-widget">
              <h2 class="fw-title">Categorías</h2>
              <ul class="category-menu">
                <li>
                  <router-link to="#">PS4</router-link>
                  <ul class="sub-menu">
                    <li>
                      <a href="/">Videojuegos <span>(2)</span></a>
                    </li>
                    <li>
                      <a href="/">Accesorios<span>(6)</span></a>
                    </li>
                    <li>
                      <a href="/">Hardware<span>(3)</span></a>
                    </li>
                  </ul>
                </li>
                <li>
                  <router-link to="#">Xbox One</router-link>
                  <ul class="sub-menu">
                    <li>
                      <a href="/">Videojuegos <span>(3)</span></a>
                    </li>
                    <li>
                      <a href="/">Accesorios<span>(8)</span></a>
                    </li>
                    <li>
                      <a href="/">Hardware<span>(3)</span></a>
                    </li>
                  </ul>
                </li>
                <li><router-link to="#">Computación</router-link></li>
              </ul>
            </div>
          </div>
          <div class="col-lg-9 order-1 order-lg-2 mb-5 mb-lg-0">
            <div class="row">
              <div class="col-lg-4 col-sm-6">
                <div class="product-item">
                  <div class="pi-pic">
                    <div class="tag-sale">Oferta</div>
                    <router-link to="/products/2">
                      <img
                        src="https://dummyimage.com/600x400/000/fff"
                        class="img-fluid"
                        alt=""
                      />
                    </router-link>
                    <div class="pi-links">
                      <router-link to="#" class="add-card"
                        ><span>Añadir</span><i class="fas fa-shopping-cart"></i
                      ></router-link>
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
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
@import "../assets/scss/views/products";
</style>