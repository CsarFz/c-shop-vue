<template>
  <div id="app">
    <Loading v-if="$store.getters.loading" />
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
import Loading from "./components/Loading";

export default {
  components: {
    Header,
    Footer,
    Loading,
  },
};
</script>

<style lang="scss">
@import "assets/scss/app";
</style>
