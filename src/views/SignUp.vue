<template>
  <section id="formSignUp">
    <div class="container my-5 py-5">
      <div class="row d-flex justify-content-center">
        <div class="col-md-12">
          <div class="card pt-5 pb-3 border-20 shadow border-0">
            <div class="card-body">
              <h2 class="card-title text-center">Regístrate</h2>
              <div class="form-group text-center">
                <p v-if="errors.name.length" class="text-danger">
                  {{ errors.name }}
                </p>
                <p v-if="errors.lastName.length" class="text-danger">
                  {{ errors.lastName }}
                </p>
                <p v-if="errors.phone.length" class="text-danger">
                  {{ errors.phone }}
                </p>
                <p v-if="errors.email.length" class="text-danger">
                  {{ errors.email }}
                </p>
                <p v-if="errors.password.length" class="text-danger">
                  {{ errors.password }}
                </p>
                <p v-if="errors.confirmPassword.length" class="text-danger">
                  {{ errors.confirmPassword }}
                </p>
              </div>
              <form class="px-lg-5 px-2 mt-4">
                <div class="row">
                  <div class="col-12 col-md-4 px-lg-3 pb-3">
                    <input
                      type="text"
                      class="form-control form-control-lg primary-input"
                      name="name"
                      placeholder="Nombre(s)"
                      v-model="name"
                      @keyup="handleChange"
                      required
                    />
                  </div>
                  <div class="col-12 col-md-8 px-lg-3 pb-3">
                    <input
                      type="text"
                      class="form-control form-control-lg primary-input"
                      name="lastName"
                      placeholder="Apellido(s)"
                      v-model="lastName"
                      @keyup="handleChange"
                      required
                    />
                  </div>
                  <div class="col-12 col-md-6 px-lg-3 pb-3">
                    <input
                      type="tel"
                      class="form-control form-control-lg primary-input"
                      name="phone"
                      placeholder="Teléfono"
                      maxLength="10"
                      v-model="phone"
                      @keyup="handleChange"
                      required
                    />
                  </div>
                  <div class="col-12 col-md-6 px-lg-3 pb-3">
                    <input
                      type="email"
                      class="form-control form-control-lg primary-input"
                      name="email"
                      placeholder="Correo electrónico"
                      v-model="email"
                      @keyup="handleChange"
                      required
                    />
                  </div>
                  <div class="col-12 col-md-6 px-lg-3 pb-3">
                    <input
                      type="password"
                      class="form-control form-control-lg primary-input"
                      name="password"
                      placeholder="Contraseña"
                      v-model="password"
                      @keyup="handleChange"
                      required
                    />
                  </div>
                  <div class="col-12 col-md-6 px-lg-3 pb-3">
                    <input
                      type="password"
                      class="form-control form-control-lg primary-input"
                      name="confirmPassword"
                      placeholder="Confirmar contraseña"
                      v-model="confirmPassword"
                      @keyup="handleChange"
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
      errors: {
        name: "",
        lastName: "",
        motherLastName: "",
        phone: "",
        email: "",
        password: "",
        confirmPassword: "",
      },
      name: null,
      lastName: null,
      phone: null,
      email: null,
      password: null,
      confirmPassword: null,
    };
  },
  methods: {
    handleChange(e) {
      e.preventDefault();
      const { name, value } = e.target;

      switch (name) {
        case "name":
          this.errors.name =
            value.length < 5 ? "Mínimo 5 caracteres requeridos." : "";
          break;
        case "lastName":
          this.errors.lastName =
            value.length < 5 ? "Mínimo 5 caracteres requeridos" : "";
          break;
        case "phone":
          this.errors.phone = !this.validPhone(value)
            ? "El teléfono es invalido, debe tener 10 caracteres y ser numérico."
            : "";
          break;
        case "email":
          this.errors.email = !this.validEmail(value)
            ? "El correo electrónico debe ser válido."
            : "";
          break;
        case "password":
          this.errors.password = !this.validPassword(value)
            ? "La contraseña debe tener entre 8 y 15 caracteres que contengan al menos una letra minúscula, una letra mayúscula, un dígito numérico y un carácter especial."
            : "";
          break;
        case "confirmPassword":
          this.errors.confirmPassword =
            this.password !== value ? "La contraseña no coincide." : "";
          break;
        default:
          break;
      }
    },
    signUp() {
      const values = {
        name: this.name,
        lastName: this.lastName,
        phone: this.phone,
        email: this.email,
        password: this.password,
        confirmPassword: this.confirmPassword,
      };
      const data = {
        username: this.email,
        name: this.name,
        lastName: this.lastName,
        phone: this.phone,
        email: this.email,
        password: this.password,
      };

      if (this.formValid(this.errors, values)) {
        axios
          .post(
            "https://e7wcxdtzba.execute-api.us-east-1.amazonaws.com/default/register",
            data
          )
          .then((response) => {
            if (response.data.result == "success") {
              this.$toasted.success("Su cuenta ha sido creada exitosamente.", {
                duration: 3000,
                keepOnHover: true,
                icon: "check",
              });
              this.$router.push("/");
            } else {
              this.showToast("Error en el servidor.")
            }
          })
          .catch((e) => {
            console.log(e);
          });
      } else {
        this.showToast("Hay campos vacíos.");
      }
    },
    showToast(message) {
      this.$toasted.error(message, {
        position: "bottom-center",
        duration: 3500,
        keepOnHover: true,
        icon: "times",
      });
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
    formValid(errors, values) {
      let validErrors;
      let validValues;

      Object.values(errors).forEach((error) => {
        error !== "" ? (validErrors = false) : (validErrors = true);
      });

      Object.values(values).forEach((value) => {
        value !== "" && value === null
          ? (validValues = false)
          : (validValues = true);
      });

      if (validErrors && validValues) {
        return true;
      } else {
        return;
      }
    },
  },
};
</script>

<style>
</style>