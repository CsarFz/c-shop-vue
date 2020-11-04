<template>
  <section class="product-section">
    <div class="container">
      <div class="back-link">
        <a href="#" @click="$router.go(-1)">
          <i class="fas fa-chevron-left"></i> Regresar</a
        >
      </div>
      <div class="row">
        <div class="col-lg-6">
          <div class="product-pic-zoom">
            <img
              class="product-big-img img-fluid border-20 shadow"
              src="https://picsum.photos/600"
              alt=""
            />
          </div>
        </div>
        <div class="col-lg-6 product-details">
          <h2 class="p-title">Videojuego</h2>
          <h3 class="p-price">${{ $route.params.id }}.00</h3>
          <h4 class="p-stock">Disponible: <span>En stock</span></h4>

          <a href="/cart" class="btn btn-cshop text-uppercase px-5"
            ><i class="fas fa-shopping-cart pr-2"></i>Volver a comprar</a
          >
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
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Proin pharetra tempor so dales. Phasellus sagittis auctor
                    gravida. Integer bibendum sodales arcu id te mpus. Ut
                    consectetur lacus leo, non scelerisque nulla euismod nec.
                  </p>
                </div>
              </div>
            </div>
            <div class="panel">
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
            </div>
            <div class="panel">
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
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style>
</style>