<template>
  <section id="profile">
    <div class="container my-5 py-5">
      <div class="row">
        <div class="col-md-3">
          <div
            class="sidebar-profile overflow-hidden shadow border-20 bg-white h-100"
          >
            <div class="p-4">
              <div class="text-center">
                <div>
                  <img
                    class="mb-3 rounded-pill shadow-sm mt-1 img-fluid"
                    src="https://picsum.photos/200/200"
                    width="150"
                    alt="gurdeep singh osahan"
                  />
                  <div>
                    <h6 class="mb-2 font-weight-bold">
                      {{ name }} {{ lastName }}
                    </h6>
                    <p class="mb-1">{{ phone }}</p>
                    <p>{{ email }}</p>
                  </div>
                </div>
              </div>
            </div>
            <ul
              class="nav nav-tabs flex-column border-0"
              id="myTab"
              role="tablist"
            >
              <li class="nav-item">
                <a
                  class="nav-link active"
                  id="my-profile-tab"
                  data-toggle="tab"
                  href="#my-profile"
                  role="tab"
                  aria-controls="my-profile"
                  aria-selected="true"
                >
                  <i class="fas fa-user"></i> Mi perfil
                </a>
              </li>
              <li class="nav-item">
                <a
                  class="nav-link"
                  id="my-address-tab"
                  data-toggle="tab"
                  href="#my-address"
                  role="tab"
                  aria-controls="my-address"
                  aria-selected="false"
                >
                  <i class="fas fa-map-marker-alt"></i> Mi dirección
                </a>
              </li>
              <li class="nav-item">
                <a
                  class="nav-link"
                  id="order-list-tab"
                  data-toggle="tab"
                  href="#order-list"
                  role="tab"
                  aria-controls="order-list"
                  aria-selected="false"
                >
                  <i class="fas fa-book"></i> Mis pedidos
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div class="col-md-9">
          <div
            class="profile-right border-20 shadow bg-white p-4 my-3 my-md-0 h-100"
          >
            <div class="tab-content" id="myTabContent">
              <div
                class="tab-pane fade active show"
                id="my-profile"
                role="tabpanel"
                aria-labelledby="my-profile-tab"
              >
                <div class="row">
                  <div class="col-12">
                    <h2 class="card-title float-left text-uppercase">Perfil</h2>
                    <button
                      class="btn btn-edit float-right"
                      id="btn-edit"
                      @click.prevent="editProfile"
                    >
                      <span v-if="!canEdit">
                        Editar <i class="fas fa-edit fa-sm"></i>
                      </span>
                      <span v-else>
                        Cancelar <i class="fas fa-times fa-sm"></i>
                      </span>
                    </button>
                  </div>
                </div>
                <form>
                  <div class="row">
                    <div class="col-sm-6">
                      <div class="form-group">
                        <label class="text-bold text-primary-cshop"
                          >Nombre
                        </label>
                        <input
                          type="text"
                          :readonly="!canEdit"
                          name="name"
                          :class="
                            canEdit ? 'form-control' : 'form-control-plaintext'
                          "
                          id="name"
                          v-model="name"
                        />
                      </div>
                    </div>
                    <div class="col-sm-6">
                      <div class="form-group">
                        <label class="text-bold text-primary-cshop">
                          Apellidos
                        </label>
                        <input
                          type="text"
                          :readonly="!canEdit"
                          name="surnames"
                          :class="
                            canEdit ? 'form-control' : 'form-control-plaintext'
                          "
                          id="surnames"
                          v-model="lastName"
                        />
                      </div>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-sm-6">
                      <div class="form-group">
                        <label class="text-bold text-primary-cshop">
                          Teléfono
                        </label>
                        <input
                          type="tel"
                          :readonly="!canEdit"
                          name="phone"
                          :class="
                            canEdit ? 'form-control' : 'form-control-plaintext'
                          "
                          id="phone"
                          v-model="phone"
                        />
                      </div>
                    </div>
                    <div class="col-sm-6">
                      <div class="form-group">
                        <label class="text-bold text-primary-cshop">
                          Correo electrónico</label
                        >
                        <input
                          type="email"
                          readOnly
                          name="email"
                          :class="
                            canEdit ? 'form-control' : 'form-control-plaintext'
                          "
                          id="email"
                          v-model="email"
                        />
                      </div>
                    </div>
                  </div>
                  <div class="row" v-if="canEdit">
                    <div class="col-sm-12 text-right">
                      <button
                        type="button"
                        class="btn btn-cshop"
                        @click.prevent="saveProfile"
                      >
                        Guardar
                      </button>
                    </div>
                  </div>
                </form>
                <div class="row">
                  <div class="col-12">
                    <h4 class="card-title float-left text-uppercase">
                      Cambiar contraseña
                    </h4>
                  </div>
                  <div class="col-12">
                    <div class="form-group text-center">
                      <p v-if="errors.length">
                        <ul class="list-unstyled">
                          <li :key="index" v-for="(error, index) in errors" class="text-danger">{{ error }}</li>
                        </ul>
                      </p>
                    </div>
                  </div>
                  <div class="col-sm-6">
                    <div class="form-group">
                      <label class="text-bold text-primary-cshop">
                        Nueva contraseña
                      </label>
                      <input
                        type="password"
                        name="name"
                        class="form-control"
                        id="name"
                        v-model="password"
                        placeholder="Nueva contraseña"
                      />
                    </div>
                  </div>
                  <div class="col-sm-6">
                    <div class="form-group">
                      <label class="text-bold text-primary-cshop">
                        Confirmar contraseña
                      </label>
                      <input
                        type="password"
                        name="name"
                        class="form-control"
                        id="name"
                        v-model="confirmPassword"
                        placeholder="Confirmar contraseña"
                      />
                    </div>
                  </div>
                  <div class="col-sm-12 text-right">
                    <button
                      type="button"
                      class="btn btn-cshop"
                      v-b-modal.change-password
                    >
                      Cambiar contraseña
                    </button>
                  </div>
                </div>
              </div>

              <div
                class="tab-pane fade"
                id="my-address"
                role="tabpanel"
                aria-labelledby="my-address-tab"
              >
                <MyAddress />
              </div>

              <div
                class="tab-pane fade"
                id="order-list"
                role="tabpanel"
                aria-labelledby="order-list-tab"
              >
                <MyOrders />
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
              @click.prevent="changePassword"
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
import MyAddress from "../components/Profile/MyAddress";
import MyOrders from "../components/Profile/MyOrders";
import axios from "axios";

export default {
  components: { MyAddress, MyOrders },
  data() {
    return {
      errors: [],
      name: this.$store.state.user.info.name,
      lastName: this.$store.state.user.info.lastName,
      phone: this.$store.state.user.info.phone,
      email: this.$store.state.user.info.username,
      canEdit: false,
      password: null,
      confirmPassword: null,
    };
  },
  mounted() {
    this.$store.dispatch("getUser", { username: this.email });
  },
  methods: {
    editProfile() {
      this.canEdit = !this.canEdit;
      const info = this.$store.state.user.info;
      if (!this.canEdit) {
        if (
          this.name !== info.name ||
          this.lastName !== info.lastName ||
          this.phone !== info.phone ||
          this.email !== info.username
        ) {
          this.name = info.name;
          this.lastName = info.lastName;
          this.phone = info.phone;
          this.email = info.username;
        }
      }
    },
    saveProfile() {
      if (this.name !== "" && this.lastName && this.phone !== "") {
        const info = {
          name: this.name,
          lastName: this.lastName,
          phone: this.phone,
          username: this.$store.state.user.data.username,
          token: this.$store.getters.token,
        };
        this.$store.dispatch("editUser", info);
        this.canEdit = false;
      }

      if (this.name === "") {
        this.showToastError("El nombre está vacío");
      } else if (this.name.length < 4) {
        this.showToastError("El nombre debe ser mayor a 3 letras.");
      }

      if (this.lastName === "") {
        this.showToastError("Los apellidos están vacíos");
      } else if (this.lastName.length < 4) {
        this.showToastError("El campo de apellido debe ser mayor a 3 letras");
      }

      if (this.phone === "") {
        this.showToastError("El teléfono está vacío");
      } else if (this.phone.length < 10 || this.phone.length > 10) {
        this.showToastError("El campo de teléfono debe ser de  10 dígitos");
      }
    },
    showToastError(message) {
      this.$toasted.error(message, {
        duration: 3500,
        keepOnHover: true,
        icon: "times",
      });
    },
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
              this.$swal(
                "¡Éxito!",
                "Su contraseña se ha cambiado correctamente",
                "success"
              );
              this.password = null;
              this.confirmPassword = null;
              this.hideModal();
            } else {
              this.$swal("Error", data.message, "error");
              this.hideModal();
            }
          });
      }
    },
    formValid() {
      this.errors = [];

      if (!this.password) {
        this.errors.push("La contraseña es requerida.");
        this.hideModal();
      }

      if (!this.confirmPassword) {
        this.errors.push("La confirmación de contraseña es requerida.");
        this.hideModal();
      } else if (this.confirmPassword !== this.password) {
        this.errors.push("Las contraseñas no coinciden.");
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

<style lang="scss">
@import "../assets/scss/views/profile";
</style>