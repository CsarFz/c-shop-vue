<template>
  <section>
    <div class="container my-5 py-5">
      <div class="row justify-content-center">
        <div class="col-12 col-md-6">
          <div class="card mb-3" style="max-width: 580px">
            <div class="card-header">
              <div class="d-flex align-items-center justify-content-between">
                <div>
                  <h4 class="text-bold m-0">#1</h4>
                </div>
                <div class="d-flex">
                  <p class="m-0">
                  <router-link :to="`/orders/1`" class="link-cShop">
                    Ver detalles
                  </router-link>
                  </p>
                </div>
              </div>
            </div>
            <div class="row no-gutters">
              <div class="col-md-4 m-auto text-center">
                <img
                  src="https://picsum.photos/400/400/?image=20"
                  class="img-fluid rounded-lg"
                  width="150"
                  alt="Product"
                />
              </div>
              <div class="col-md-8">
                <div class="card-body">
                  <h5 class="card-title">Card title</h5>
                  <p class="card-text">
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content. This content is a little bit
                    longer.
                  </p>
                  <p class="card-text">
                    <small class="text-muted">Last updated 3 mins ago</small>
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