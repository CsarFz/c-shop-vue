<template>
  <div
    class="elevation position-absolute bg-white d-flex flex-column justify-content-center vh-100 vw-100"
  >
    <label class="vw-100 small text-center">Cargando...</label>
    <div class="text-center">
        <b-spinner style="width: 5rem; height: 5rem;" variant="primary-cshop" label="Large Spinner"></b-spinner>
    </div>
  </div>
</template>

<script>
export default {
  name: "Loading",
};
</script>

<style scoped>
.elevation {
  z-index: 150;
}
</style>