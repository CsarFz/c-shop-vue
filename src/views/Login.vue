<template>
  <section id="formLogin">
    <div class="container my-5 py-5">
      <div class="row d-flex justify-content-center">
        <div class="col-md-7">
          <div class="card pt-5 pb-3 border-20 shadow border-0">
            <div class="card-body">
              <h2 class="card-title text-center">Iniciar sesión</h2>
              <div class="form-group text-center">
                <p v-if="errors.length">
                  <ul class="list-unstyled">
                    <li :key="index" v-for="(error, index) in errors" class="text-danger">{{ error }}</li>
                  </ul>
                </p>
              </div>
              <div class="form-group row">
                <div class="col-sm-12 px-lg-5 pb-3">
                  <input
                    type="email"
                    class="form-control form-control-lg primary-input"
                    id="email"
                    name="email"
                    v-model="email"
                    placeholder="Correo electrónico"
                  />
                </div>
                <div class="col-sm-12 px-lg-5">
                  <input
                    type="password"
                    class="form-control form-control-lg primary-input"
                    id="password"
                    name="password"
                    v-model="password"
                    placeholder="Contraseña"
                  />
                </div>
              </div>
              <div class="form-group d-flex justify-content-center">
                <button
                  id="login"
                  class="btn btn-cshop my-3"
                  @click.prevent="login"
                >
                  Iniciar sesión
                </button>
              </div>

              <div class="row">
                <div class="col-md-12 text-center text-muted">
                  <p>
                    <router-link
                      to="/change-password"
                      class="link-cShop"
                    >
                    ¿Olvidaste tu contraseña?
                    </router-link>
                  </p>
                  <p class="px-4">
                    ¿No tienes una cuenta C-Shop?
                    <router-link to="/signup" class="link-cShop">
                      Regístrate</router-link
                    >
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
import axios from "axios";

export default {
  name: "Login",
  data() {
    return {
      errors: [],
      email: null,
      password: null,
    };
  },
  methods: {
    async login() {
      const data = {
        username: this.email,
        password: this.password,
      };
      const tokenToEncode = { username: data.username };

      if (this.formValid()) {
        await this.$store.dispatch("setLoadingStatus", true);
        await axios
          .post(
            "https://8rj68a68ml.execute-api.us-east-1.amazonaws.com/default/token",
            tokenToEncode
          )
          .then((response) => {
            data.token = response.data.token;
          });

        axios
          .post(
            "https://8rj68a68ml.execute-api.us-east-1.amazonaws.com/default/login",
            data
          )
          .then((response) => {
            const success = response.data.success;
            if (success) {
              this.$store.dispatch("setLoadingStatus", false);
              this.$swal("¡Éxito!", "Ha iniciado sesión. ¡Disfrute C-Shop!", "success");
              this.$store.dispatch("setUser", data);
              this.$store.dispatch("getUser", { username: this.email });
              this.$router.push("/");
            } else {
              this.errors = [];
              this.errors.push("Usuario o contraseña incorrectos.");
              this.$store.dispatch("setLoadingStatus", false);
            }
          })
          .catch((e) => {
            console.log(e);
          });
      }
    },
    formValid() {
      this.errors = [];

      if (!this.email) {
        this.errors.push("El correo electrónico es obligatorio.");
      }

      if (!this.password) {
        this.errors.push("La contraseña es obligatoria.");
      }

      if (!this.errors.length) {
        return true;
      }
    },
  },
};
</script>

<style>
</style>