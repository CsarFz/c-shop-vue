<template>
  <div class="row">
    <div class="col-12">
      <h4 class="text-uppercase mt-0 mb-4">Dirección</h4>
    </div>
    <div class="col-md-6" v-for="item in addresses" :key="item.id">
      <div class="bg-white card addresses-item mb-3 shadow-sm">
        <div class="gold-members p-4">
          <div class="media">
            <div class="mr-4">
              <i class="icofont-ui-home icofont-3x"></i>
            </div>
            <div class="media-body">
              <span class="badge badge-danger"> Default - Home </span>
              <h6 class="mb-3 mt-1 text-dark">{{ item.address }}</h6>
              <p class="text-secondary m-0">
                Ciudad: <span class="text-dark">{{ item.city }}</span>
              </p>
              <p class="text-secondary m-0">
                Colonia: <span class="text-dark">{{ item.suburb }}</span>
              </p>
              <p class="text-secondary">
                Código Postal: <span class="text-dark">{{ item.zipCode }}</span>
              </p>
              <hr />
              <!-- <p class="mb-0 text-black">
                <a
                  class="text-success mr-3"
                  data-toggle="modal"
                  data-target="#add-address"
                  href="#"
                  @click.prevent="editAddress"
                >
                  <i class="fas fa-pencil-alt"></i> EDITAR
                </a>
                <a
                  class="text-danger"
                  data-toggle="modal"
                  data-target="#delete-address-modal"
                  href="#"
                >
                  <i class="far fa-trash-alt"></i> ELIMINAR
                </a>
              </p> -->
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="col-12 text-center py-5" v-if="addresses.length === 0">
      <h2>No tiene ninguna dirección guardada</h2>
    </div>
    <!-- <div class="col-md-6 pb-4">
      <a
        class="add-address"
        v-b-modal.add-address
        href="#"
        @click.prevent="addAddress"
      >
        <div
          class="bg-light border rounded mb-3 shadow-sm text-center h-100 d-flex align-items-center"
        >
          <h6 class="text-center m-0 w-100">
            <i class="fas fa-plus-circle fa-5x"></i>
            <br /><br />Añadir nueva dirección
          </h6>
        </div>
      </a>
    </div> -->

    <b-modal
      id="add-address"
      centered
      hide-header
      hide-footer
      no-close-on-backdrop
      no-close-on-esc
    >
      <template slot="header">
        <h5 class="m-0">
          {{ flag === "new" ? "Añadir nueva dirección" : "Editar dirección" }}
        </h5>
        <button
          type="button"
          class="close"
          data-dismiss="modal"
          aria-label="Close"
        >
          <span aria-hidden="true">&times;</span>
        </button>
      </template>
      <template>
        <div class="modal-body">
          <form>
            <div class="form-row">
              <div class="form-group col-12">
                <label>País</label>
                <select
                  class="form-control"
                  tabindex="-1"
                  aria-hidden="true"
                  disabled
                >
                  <option value="">Seleccionar país</option>
                  <option value="MX" selected>México</option>
                </select>
              </div>
              <div class="form-group col-12 col-md-6">
                <label>Ciudad</label>
                <input type="text" class="form-control" placeholder="Ciudad" />
              </div>
              <div class="form-group col-12 col-md-6">
                <label>Colonia</label>
                <input type="text" class="form-control" placeholder="Colonia" />
              </div>
              <div class="form-group col-md-6">
                <label class="control-label">Código Postal</label>
                <input
                  class="form-control"
                  placeholder="Código Postal"
                  type="text"
                  maxlength="5"
                />
              </div>
              <div class="form-group col-md-6">
                <label>Estado</label>
                <input type="text" class="form-control" placeholder="Estado" />
              </div>
              <div class="form-group col-md-12">
                <label for="street">Dirección </label>
                <input
                  id="street"
                  type="text"
                  class="form-control"
                  placeholder="Dirección e.g. número de casa, calle."
                />
              </div>
              <div class="form-group col-md-12">
                <label for="delivery">Instrucciones de entrega </label>
                <input
                  id="delivery"
                  type="text"
                  class="form-control"
                  placeholder="Instrucciones de entrega e.g. Frente al centro comercial"
                />
              </div>
              <div class="form-group mb-0 col-md-12">
                <label for="inputPassword4">Nickname </label>
                <div
                  class="btn-group btn-group-toggle d-flex justify-content-center"
                  data-toggle="buttons"
                >
                  <label class="btn btn-info active">
                    <input
                      type="radio"
                      name="options"
                      id="option1"
                      autocomplete="off"
                      checked=""
                    />
                    Casa
                  </label>
                  <label class="btn btn-info">
                    <input
                      type="radio"
                      name="options"
                      id="option2"
                      autocomplete="off"
                    />
                    Trabajo
                  </label>
                  <label class="btn btn-info">
                    <input
                      type="radio"
                      name="options"
                      id="option3"
                      autocomplete="off"
                    />
                    Otro
                  </label>
                </div>
              </div>
            </div>
          </form>
        </div>
      </template>
      <template slot="footer">
        <button
          v-if="flag === 'new'"
          type="submit"
          class="btn btn-cshop"
          data-dismiss="modal"
        >
          Añadir
        </button>
        <button v-else type="submit" class="btn btn-cshop" data-dismiss="modal">
          Editar
        </button>
      </template>
    </b-modal>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      flag: "new",
      addresses: [],
    };
  },
  async beforeCreate() {
    const username = this.$store.state.user.data.username;
    await axios
      .post(
        "https://8rj68a68ml.execute-api.us-east-1.amazonaws.com/default/getaddress",
        { username }
      )
      .then((response) => {
        this.addresses = response.data;
      });
  },
  methods: {
    addAddress() {
      this.flag = "new";
    },
    editAddress() {
      this.flag = "update";
    },
  },
};
</script>

<style>
</style>