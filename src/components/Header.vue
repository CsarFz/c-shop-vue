<template>
  <header class="header-section">
    <div class="header-top bg-white">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-lg-2 text-center">
            <router-link to="/" class="site-logo">
              <h2>C-Shop</h2>
            </router-link>
          </div>
          <div class="col-xl-6 col-lg-5">
            <div class="header-search-form d-flex justify-content-center">
              <!-- <router-link to="/search" class="btn">
                Ir a buscar productos <i class="fas fa-search fa-xs"></i>
              </router-link> -->
            </div>
          </div>
          <div class="col-xl-4 col-lg-5">
            <div class="user-panel">
              <div class="up-item py-3" v-if="!$store.getters.isLoggedIn">
                <i class="fas fa-user mr-2 fa-lg"></i>
                <router-link to="/login">Iniciar Sesión</router-link> o
                <router-link to="/signup">Crear Cuenta</router-link>
              </div>
              <div class="up-item" v-else>
                <ul class="main-menu">
                  <li>
                    <a href="#">
                      <i class="fas fa-user mr-2 fa-lg"></i> Perfil
                    </a>
                    <ul class="sub-menu shadow">
                      <li>
                        <router-link to="/profile">Mi perfil</router-link>
                      </li>
                      <li>
                        <router-link to="/orders">Mis compras</router-link>
                      </li>
                      <li>
                        <a href="#" @click.prevent="logout">Cerrar Sesión</a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
              <div class="up-item">
                <div class="shopping-card">
                  <i class="fas fa-shopping-cart fa-lg"></i>
                  <span>{{ cartCountItem }}</span>
                </div>
                <router-link to="/cart" class="ml-2">Carrito</router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <nav class="main-navbar d-none d-md-block">
      <div class="container">
        <ul class="main-menu">
          <li><router-link to="/">Inicio</router-link></li>
          <li>
            <router-link to="/search">
              Buscar productos <i class="fas fa-search fa-xs"></i>
            </router-link>
          </li>
          <!-- <li><a href="#">- <span class="new">New</span></a></li> -->
          <!-- <li><router-link to="/products">Productos</router-link></li> -->
        </ul>
      </div>
    </nav>
    <!-- Mobile -->
    <nav class="d-md-none main-navbar navbar navbar-expand-lg navbar-dark">
      <p class="navbar-brand m-0">Menú</p>
      <button
        type="button"
        aria-label="Toggle navigation"
        class="navbar-toggler collapsed"
        data-toggle="collapse"
        data-target="#navbarToggle"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="navbar-collapse collapse" id="navbarToggle">
        <div class="mr-auto d-block navbar-nav">
          <div class="nav-item">
            <router-link to="/" class="nav-link">Inicio</router-link>
            <router-link to="/search" class="nav-link">
              Buscar productos <i class="fas fa-search fa-xs"></i>
            </router-link>
          </div>
          <!-- <div class="nav-item">
            <div class="navbar-nav">
              <router-link to="/products" class="nav-link"
                >Productos</router-link
              >
            </div>
          </div> -->
        </div>
      </div>
    </nav>
  </header>
</template>

<script>
import axios from "axios";
export default {
  name: "Header",
  data() {
    return {
      query: null,
    };
  },
  computed: {
    cartCountItem() {
      return this.$store.getters.cartCountItem;
    },
  },
  methods: {
    async logout() {
      const store = this.$store;
      const token = this.$store.getters.token;

      await store.dispatch("setLoadingStatus", true);
      await axios
        .post(
          "https://8rj68a68ml.execute-api.us-east-1.amazonaws.com/default/logout",
          { token }
        )
        .then((response) => {
          const logout = response.data.logout;
          if (logout) {
            this.$router.push("/").catch(() => {});
            store.dispatch("setLoadingStatus", false);
            this.$swal("¡Éxito!", "Se cerró sesión satisfactoriamente.", "success");
            store.dispatch("setUser", null);
          } else {
            this.$swal("Error", "No se cerró sesión satisfactoriamente.", "error");
            store.dispatch("setLoadingStatus", false);
          }
        });
    },
    search() {
      try {
        this.$router.push(`/search/?q=${this.query}`).catch(() => {});
      } catch (e) {
        console.log(e);
      }
    },
  },
};
</script>

<style lang="scss">
@import "../assets/scss/components/header";
</style>