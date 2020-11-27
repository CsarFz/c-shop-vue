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
                    <a
                      href="#"
                      class="link-cShop"
                      data-toggle="modal"
                      data-backdrop="static"
                      data-target="#passwordForget"
                      >¿Olvidaste tu contraseña?</a
                    >
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

    <!-- Modal -->
    <Modal
      :header="false"
      :footer="false"
      id="passwordForget"
      data-backdrop="static"
      data-keyboard="false"
    >
      <template></template>
      <template>
        <div class="modal-body p-5">
          <h4 class="text-center mb-3">Recuperar contraseña</h4>
          <div class="row text-center">
            <div class="col-12">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor
                sequi maiores repudiandae error vitae tempore rem aliquam ab?
                Qui itaque eaque doloremque nemo consequuntur voluptatum,
                delectus deserunt fugit sint nam.
              </p>
            </div>
            <div class="col-12">
              <input
                type="email"
                class="form-control form-control-lg primary-input"
                id="emailPassword"
                placeholder="Correo electrónico"
              />
            </div>
            <div class="col-12 mt-3">
              <div class="row">
                <div class="col-12 col-md-6 mb-3">
                  <button class="btn btn-cshop w-100 mw-100" type="submit">
                    Enviar
                  </button>
                </div>
                <div class="col-12 col-md-6">
                  <button class="btn btn-danger w-100" data-dismiss="modal">
                    Cancelar
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </template>
      <template></template>
    </Modal>
  </section>
</template>

<script>
import axios from "axios";
import Modal from "../components/Modal";

export default {
  name: "Login",
  components: {
    Modal: Modal,
  },
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
            if (response.data.response === "success") {
              this.$toasted.success("Ha iniciado sesión", {
                duration: 3000,
                keepOnHover: true,
                icon: "check",
              });
              this.$store.dispatch("setUser", data);
              this.$store.dispatch("getUser", { username: this.email });
              this.$router.push("/");
            } else {
              this.errors = [];
              this.errors.push("Usuario o contraseña incorrectos.");
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