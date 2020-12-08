<template>
  <section id="formSignUp">
    <div class="container my-5 py-5">
      <div class="row d-flex justify-content-center">
        <div class="col-md-12">
          <div class="card pt-5 pb-3 border-20 shadow border-0">
            <div class="card-body">
              <h2 class="card-title text-center">Regístrate</h2>
              <div class="form-group text-center">
                <p v-if="errors.length">
                  <ul class="list-unstyled">
                    <li :key="index" v-for="(error, index) in errors" class="text-danger">{{ error }}</li>
                  </ul>
                </p>
              </div>
              <form class="px-lg-5 px-2 mt-4">
                <div class="row">
                  <div class="col-12 col-md-4 px-lg-3 pb-3">
                    <input
                      id="name"
                      type="text"
                      class="form-control form-control-lg primary-input"
                      name="name"
                      placeholder="Nombre(s)"
                      v-model="name"
                      required
                    />
                  </div>
                  <div class="col-12 col-md-8 px-lg-3 pb-3">
                    <input
                      id="lastName"
                      type="text"
                      class="form-control form-control-lg primary-input"
                      name="lastName"
                      placeholder="Apellido(s)"
                      v-model="lastName"
                      required
                    />
                  </div>
                  <div class="col-12 col-md-6 px-lg-3 pb-3">
                    <input
                      id="phone"
                      type="tel"
                      class="form-control form-control-lg primary-input"
                      autocomplete="off"
                      name="phone"
                      placeholder="Teléfono"
                      maxLength="10"
                      v-model="phone"
                      required
                    />
                  </div>
                  <div class="col-12 col-md-6 px-lg-3 pb-3">
                    <input
                      id="email"
                      type="email"
                      class="form-control form-control-lg primary-input"
                      name="email"
                      placeholder="Usuario (correo electrónico)"
                      v-model="email"
                      required
                    />
                  </div>
                  <div class="col-12 col-md-6 px-lg-3 pb-3">
                    <input
                      id="password"
                      type="password"
                      class="form-control form-control-lg primary-input"
                      name="password"
                      placeholder="Contraseña"
                      v-model="password"
                      required
                    />
                  </div>
                  <div class="col-12 col-md-6 px-lg-3 pb-3">
                    <input
                      id="confirmPassword"
                      type="password"
                      class="form-control form-control-lg primary-input"
                      name="confirmPassword"
                      placeholder="Confirmar contraseña"
                      v-model="confirmPassword"
                      required
                    />
                  </div>
                </div>
                <div class="d-flex justify-content-center">
                  <button
                    id="signup"
                    class="btn btn-cshop my-3"
                    type="submit"
                    @click.prevent="signUp"
                  >
                    Crear cuenta
                  </button>
                </div>
              </form>
              <div class="row">
                <div class="col-md-12 text-center text-muted">
                  <p class="px-4">
                    ¿Ya tienes una cuenta C-Shop?
                    <router-link to="/login" class="link-cShop">
                      Inicia sesión</router-link
                    >
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div
      class="modal fade"
      id="modalSuccess"
      tabIndex="-1"
      role="dialog"
      aria-labelledby="modalSuccessTitle"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-dialog-centered" role="document">
        <div class="modal-content">
          <div class="modal-body">
            <div class="container">
              <div class="row text-center">
                <div class="col-12 pt-4">
                  <h3 class="title-modal">Registro exitoso</h3>
                </div>
                <div class="col-12 py-3">
                  <p class="message">Su cuenta ha sido creada exitosamente</p>
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
  data() {
    return {
      errors: [],
      name: null,
      lastName: null,
      phone: null,
      email: null,
      password: null,
      confirmPassword: null,
    };
  },
  methods: {
    async signUp() {
      const data = {
        username: this.email,
        name: this.name,
        lastName: this.lastName,
        phone: this.phone,
        email: this.email,
        password: this.password,
      };

      if (this.formValid()) {
        await this.$store.dispatch("setLoadingStatus", true);
        await axios
          .post(
            "https://8rj68a68ml.execute-api.us-east-1.amazonaws.com/default/register",
            data
          )
          .then((response) => {
            const data = response.data;

            if (data.success) {
              this.$swal("¡Éxito!", "Su cuenta ha sido creada exitosamente. Inicie sesión para navegar en C-Shop.", "success");
              // this.$store.dispatch("setUser", data);
              this.$store.dispatch("setLoadingStatus", false);
              document.getElementById("email").classList.remove("is-invalid");
              document.getElementById("email").classList.add("is-valid");
              this.$router.push("/login");
            } else if (data.code === "auth/email-already-in-use") {
              this.errors.push(data.message);
              document.getElementById("email").classList.add("is-invalid");
            } else {
              this.$swal("Error", "Error en el servidor.", "error");
            }
          })
          .catch((e) => {
            console.log(e);
          });
      }
    },
    validEmail(email) {
      var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/; // eslint-disable-line
      return re.test(email);
    },
    validPassword(password) {
      const re = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/; // eslint-disable-line
      return re.test(password);
    },
    validPhone(phone) {
      const re = /^[\+]?[(]?[0-9]{2}[)]?[-\s\.]?[0-9]{4}[-\s\.]?[0-9]{4}$/i; // eslint-disable-line
      return re.test(phone);
    },
    formValid() {
      this.errors = [];

      if (!this.name) {
        this.errors.push("El nombre es requerido.");
        document.getElementById("name").classList.add("is-invalid");
      } else if (this.name.length < 5) {
        this.errors.push("El nombre debe de tener mínimo 5 caracteres.");
        document.getElementById("name").classList.add("is-invalid");
      } else {
         document.getElementById("name").classList.remove("is-invalid");
         document.getElementById("name").classList.add("is-valid");
      }

      if (!this.lastName) {
        this.errors.push("Los apellidos son requeridos.");
        document.getElementById("lastName").classList.add("is-invalid");
      } else if (this.lastName.length < 5) {
        this.errors.push("Los apellidos deben de tener mínimo 5 caracteres.");
        document.getElementById("lastName").classList.add("is-invalid");
      } else {
        document.getElementById("lastName").classList.remove("is-invalid");
        document.getElementById("lastName").classList.add("is-valid");
      }

      if (!this.phone) {
        this.errors.push("El teléfono es requerido.");
        document.getElementById("phone").classList.add("is-invalid");
      } else if (!this.validPhone(this.phone)) {
        this.errors.push(
          "El teléfono es inválido, debe tener 10 caracteres y ser numérico."
        );
        document.getElementById("phone").classList.add("is-invalid");
      } else {
        document.getElementById("phone").classList.remove("is-invalid");
        document.getElementById("phone").classList.add("is-valid");
      }

      if (!this.email) {
        this.errors.push("El correo electrónico es requerido.");
        document.getElementById("email").classList.add("is-invalid");
      } else if (!this.validEmail(this.email)) {
        this.errors.push(
          "El correo electrónico es inválido, debe ser ejemplo@ejemplo.com"
        );
        document.getElementById("email").classList.add("is-invalid");
      } else {
        document.getElementById("email").classList.remove("is-invalid");
        document.getElementById("email").classList.add("is-valid");
      }

      if (!this.password) {
        this.errors.push("La contraseña es requerida.");
        document.getElementById("password").classList.add("is-invalid");
      } else if (!this.validPassword(this.password)) {
        this.errors.push(
          "La contraseña debe tener entre 8 y 15 caracteres que contengan al menos una letra minúscula, una letra mayúscula, un dígito numérico y un carácter especial."
        );
        document.getElementById("password").classList.add("is-invalid");
      } else {
        document.getElementById("password").classList.remove("is-invalid");
        document.getElementById("password").classList.add("is-valid");
      }

      if (!this.confirmPassword) {
        this.errors.push("La confirmación de contraseña es requerida.");
        document.getElementById("confirmPassword").classList.add("is-invalid");
      } else if (this.confirmPassword != this.password) {
        this.errors.push("Las contraseñas no coinciden.");
        document.getElementById("confirmPassword").classList.add("is-invalid");
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