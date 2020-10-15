<template>
  <section class="checkout-section spad">
    <div class="container">
      <div class="row">
        <div class="col-lg-8 order-2 order-lg-1 mt-3 mt-md-0">
          <form class="checkout-form">
            <div class="cf-title">Dirección de envío</div>
            <div class="row">
              <div class="col-md-7">
                <p>* Información de envío</p>
              </div>
              <div class="col-md-5">
                <div class="cf-radio-btns address-rb">
                  <div class="cfr-item">
                    <input type="radio" name="pm" id="one" />
                    <label for="one">Usa mi dirección habitual</label>
                  </div>
                  <div class="cfr-item">
                    <input type="radio" name="pm" id="two" />
                    <label for="two">Usa una dirección diferente</label>
                  </div>
                </div>
              </div>
            </div>
            <div class="row address-inputs">
              <div class="col-md-12">
                <input type="text" placeholder="Dirección" class="primary-input" />
                <input type="text" placeholder="Dirección 2" class="primary-input" />
                <input type="text" placeholder="País" class="primary-input" />
              </div>
              <div class="col-md-6">
                <input type="text" placeholder="Número exterior" class="primary-input" />
              </div>
              <div class="col-md-6">
                <input type="text" placeholder="Código Postal" class="primary-input" />
              </div>
            </div>
            <div class="cf-title">Información de entrega</div>
            <div class="row shipping-btns mx-auto">
              <div class="col-6">
                <h4>Estándar (3 a 4 días)</h4>
              </div>
              <div class="col-6">
                <div class="cf-radio-btns">
                  <div class="cfr-item">
                    <input type="radio" name="shipping" id="ship-1" />
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
                    <input type="radio" name="shipping" id="ship-2" />
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
            <button type="submit" class="btn site-btn-animated submit-order-btn text-bold">
              Realizar pedido
            </button>
          </form>
        </div>
        <div class="col-lg-4 order-1 order-lg-2">
          <div class="checkout-cart">
            <h3>Tu carrito</h3>
            <ul class="product-list">
              <li>
                <div class="pl-thumb">
                  <img src="https://picsum.photos/id/1042/3456/5184" class="img-fluid" alt="" />
                </div>
                <h6>Videojuego</h6>
                <p>$135.00</p>
              </li>
              <li>
                <div class="pl-thumb">
                  <img src="https://picsum.photos/id/1042/3456/5184" class="img-fluid" alt="" />
                </div>
                <h6>Videojuego</h6>
                <p>$135.00</p>
              </li>
            </ul>
            <ul class="price-list">
              <li>Total<span>$99.90</span></li>
              <li>Envío<span>Gratis</span></li>
              <li class="total">Total<span>$99.90</span></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style lang="scss">
@import "../assets/scss/views/checkout";
</style>