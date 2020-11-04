<template>
  <div class="col-lg-3 col-sm-6 my-3">
    <div class="product-item">
      <div class="pi-pic">
        <div class="tag-sale">Oferta</div>
        <router-link :to="{ name: 'product', params: { id: product.id } }">
          <img :src="product.image" class="w-100" alt="" height="350"/>
        </router-link>
        <div class="pi-links">
          <a href="#" class="add-card"
            ><span class="text-bold">Añadir</span
            ><i class="fas fa-shopping-cart"></i
          ></a>
        </div>
      </div>
      <div class="pi-text">
        <h6>${{ product.price }}</h6>
        <p>{{product.title}}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["product"],
};
</script>

<style>
</style>