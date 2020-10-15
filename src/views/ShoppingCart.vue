<template>
  <section class="cart-section spad">
    <div class="container">
      <div class="row">
        <div class="col-lg-8">
          <div class="cart-table">
            <h3>Carrito</h3>
            <div class="cart-table-warp table-responsive">
              <table>
                <thead>
                  <tr>
                    <th class="product-th">Producto</th>
                    <th class="quy-th">Cantidad</th>
                    <th class="total-th">Precio</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td class="product-col">
                      <img
                        src="https://picsum.photos/id/237/200"
                        class="img-fluid border-20"
                        alt=""
                      />
                      <div class="pc-title">
                        <h4>Videojuego</h4>
                        <p>$135.00</p>
                      </div>
                    </td>
                    <td class="quy-col">
                      <div class="quantity">
                        <div class="pro-qty">
                          <input type="text" value="1" />
                        </div>
                      </div>
                    </td>
                    <td class="total-col"><h4>$135.00</h4></td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div class="total-cost">
              <h6>Total <span>$135.00</span></h6>
            </div>
          </div>
        </div>
        <div class="col-lg-4 card-right">
          <form class="promo-code-form mt-3 mt-lg-0">
            <input type="text" placeholder="Enter promo code" />
            <button type="submit" class="text-bold">Enviar</button>
          </form>
          <router-link to="/checkout" class="btn btn-cshop">Realizar compra</router-link>
          <router-link to="/products" class="btn btn-continue btn-cshop"
            >Continuar comprando</router-link
          >
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style lang="scss">
@import "../assets/scss/views/cart";
</style>