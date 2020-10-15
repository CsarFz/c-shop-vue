<template>
  <div id="app">
    <Header />
    <transition name="view">
      <router-view />
    </transition>
    <Footer />
  </div>
</template>

<script>
import Header from "./components/Header";
import Footer from "./components/Footer";

export default {
  components: {
    Header,
    Footer,
  },
};
</script>

<style lang="scss">
@import "assets/scss/app";
</style>
