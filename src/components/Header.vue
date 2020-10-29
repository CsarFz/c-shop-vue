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
            <form class="header-search-form">
              <input
                type="text"
                placeholder="Buscar..."
                class="primary-input"
              />
              <button><i class="fas fa-search fa-xs"></i></button>
            </form>
          </div>
          <div class="col-xl-4 col-lg-5">
            <div class="user-panel">
              <div class="up-item" v-if="!$store.getters.isLoggedIn">
                <i class="fas fa-user mr-2 fa-lg"></i>
                <router-link to="/login">Iniciar Sesión</router-link> o
                <router-link to="/signup">Crear Cuenta</router-link>
              </div>
              <div class="up-item" v-else>
                <ul class="main-menu">
                  <li>
                    <router-link to="/profile"
                      ><i class="fas fa-user mr-2 fa-lg"></i>
                      Perfil</router-link
                    >
                    <ul class="sub-menu shadow">
                      <li>
                        <router-link to="/profile">Mi perfil</router-link>
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
                  <span>0</span>
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
          <!-- <li><a href="#">- <span class="new">New</span></a></li> -->
          <li><router-link to="/products">Productos</router-link></li>
          <li v-if="$store.getters.isLoggedIn">
            <router-link to="#">Mis compras</router-link>
          </li>
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
          </div>
          <div class="nav-item">
            <div class="navbar-nav">
              <router-link to="/products" class="nav-link"
                >Productos</router-link
              >
            </div>
          </div>
          <div class="nav-item" v-if="$store.getters.isLoggedIn">
            <router-link to="/contact" class="nav-link"
              >Mis compras</router-link
            >
          </div>
        </div>
      </div>
    </nav>
  </header>
</template>

<script>
export default {
  name: "Header",
  methods: {
    logout() {
      this.$store.dispatch("setUser", null);
      this.$router.push("/").catch(() => {});
    },
  },
};
</script>

<style lang="scss">
@import "../assets/scss/components/header";
</style>