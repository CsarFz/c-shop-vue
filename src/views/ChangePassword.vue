<template>
  <section id="formResetPassword">
    <div class="container mt-5 pb-4">
      <div class="row d-flex justify-content-center">
        <div class="col-md-7 mt-5">
          <div class="card pt-5 pb-3 bordersCards shadow noBorders">
            <div class="card-body">
              <h2 class="card-title text-center">Cambia tu contraseña</h2>
              <div class="form-group text-center">
                <p v-if="errors.length">
                  <ul class="list-unstyled">
                    <li :key="index" v-for="(error, index) in errors" class="text-danger">{{ error }}</li>
                  </ul>
                </p>
              </div>
              <p class="text-center">
                Ingrese su usuario (dirección de correo electrónico asociado con
                su cuenta) y la nueva contraseña a la que desea cambiar.
              </p>
              <form class="px-5 mt-4">
                <div class="form-group row">
                  <div class="col-sm-12 px-5 my-2">
                    <input
                      type="text"
                      v-model="email"
                      class="form-control form-control-lg primary-input"
                      id="inputEmail3"
                      placeholder="Usuario"
                    />
                  </div>
                  <div class="col-sm-12 px-5 my-2">
                    <input
                      type="password"
                      v-model="password"
                      class="form-control form-control-lg primary-input"
                      id="inputEmail4"
                      placeholder="Contraseña"
                    />
                  </div>
                </div>
                <div class="form-group d-flex justify-content-center">
                  <button
                    id="changePassword"
                    class="btn btn-cshop my-3 px-4"
                    v-b-modal.change-password
                    type="button"
                  >
                    Cambiar
                  </button>
                </div>
              </form>
              <div class="row">
                <div class="col-md-12 text-center text-muted">
                  <p>
                    Regresar a
                    <router-link to="/login" class="textPrimary">
                      Iniciar Sesión</router-link
                    >
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <b-modal
      id="change-password"
      centered
      hide-header
      hide-footer
      no-close-on-backdrop
      no-close-on-esc
    >
      <div class="p-4">
        <div class="row text-center">
          <div class="col-12">
            <h3>Cambiar contraseña</h3>
            <p>¿Está seguro de cambiar la constraseña?</p>
          </div>
          <div class="col-12">
            <button
              id="change"
              class="btn btn-cshop my-2 px-4 mr-0 mr-sm-3"
              type="submit"
              @click.prevent="changePassword()"
            >
              Cambiar
            </button>
            <button class="btn btn-danger" ref="btnHide" @click="hideModal">
              Cancelar
            </button>
          </div>
        </div>
      </div>
    </b-modal>
  </section>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      errors: [],
      email: null,
      password: null,
    };
  },
  methods: {
    async changePassword() {
      const data = {
        username: this.email,
        password: this.password,
      };

      if (this.formValid()) {
        await axios
          .post(
            "https://8rj68a68ml.execute-api.us-east-1.amazonaws.com/default/changepassword",
            data
          )
          .then((response) => {
            const data = response.data;

            if (data.success) {
              this.$swal("¡Éxito!", "Su contraseña se ha cambiado correctamente", "success");
              this.hideModal();
              this.$router.push("/login");
            } else {
              this.$swal("Error", data.message, "error");
              this.hideModal();
            }
          });
      }
    },
    formValid() {
      this.errors = [];

      if (!this.email) {
        this.errors.push("El usuario es requerido.");
        this.hideModal();
      }

      if (!this.password) {
        this.errors.push("La contraseña es requerida.");
        this.hideModal();
      }

      if (!this.errors.length) {
        return true;
      }
    },
    hideModal() {
      this.$root.$emit("bv::hide::modal", "change-password", "#btnHide");
    },
  },
};
</script>

<style>
</style>