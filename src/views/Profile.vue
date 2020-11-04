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
                    <h6 class="mb-2 font-weight-bold">César Galván</h6>
                    <p class="mb-1">+91 85680-79956</p>
                    <p>prrueba@prueba.com</p>
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
                          value="César Adrián"
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
                          value="Galván Medrano"
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
                          value="5512345678"
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
                          value="email@example.com"
                        />
                      </div>
                    </div>
                  </div>
                  <div class="row" v-if="canEdit">
                    <div class="col-sm-12 text-right">
                      <button type="button" class="btn btn-cshop">
                        Guardar
                      </button>
                    </div>
                  </div>
                </form>
              </div>

              <div
                class="tab-pane fade"
                id="my-address"
                role="tabpanel"
                aria-labelledby="my-address-tab"
              >
                <h4 class="text-uppercase mt-0 mb-4">Dirección</h4>
                <div class="row">
                  <div class="col-md-6">
                    <div class="bg-white card addresses-item mb-3 shadow-sm">
                      <div class="gold-members p-4">
                        <div class="media">
                          <div class="mr-4">
                            <i class="icofont-ui-home icofont-3x"></i>
                          </div>
                          <div class="media-body">
                            <span class="badge badge-danger">
                              Default - Home
                            </span>
                            <h6 class="mb-3 mt-1 text-dark">Gurdeep Singh</h6>
                            <p>
                              Delhi Bypass Rd GK mall Near, Jawaddi Taksal,
                              Ludhiana, Punjab 141002, India
                            </p>
                            <p class="text-secondary">
                              Phone: <span class="text-dark">8872306061</span>
                            </p>
                            <hr />
                            <p class="mb-0 text-black">
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
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-6 pb-4">
                    <a
                      class="add-address"
                      data-toggle="modal"
                      data-target="#add-address"
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
                  </div>
                </div>
              </div>

              <div
                class="tab-pane fade"
                id="order-list"
                role="tabpanel"
                aria-labelledby="order-list-tab"
              >
                <h4 class="text-uppercase mt-0 mb-4">Pedidos</h4>
                <div class="order-list-tabel-main table-responsive">
                  <div
                    class="dataTables_wrapper container-fluid dt-bootstrap4 no-footer"
                  >
                    <div class="row">
                      <div class="col-sm-12 col-md-6"></div>
                      <div class="col-sm-12 col-md-6 mb-3">
                        <div class="text-right">
                          <b-form-input
                            v-model="filter"
                            type="search"
                            id="filterInput"
                            placeholder="Buscar..."
                            class="primary-input"
                          ></b-form-input>
                        </div>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-12">
                        <b-table
                          show-empty
                          small
                          stacked="md"
                          head-variant="dark"
                          :bordered="true"
                          :striped="true"
                          :borderless="false"
                          :items="items"
                          :fields="fields"
                          :current-page="currentPage"
                          :per-page="perPage"
                          :filter="filter"
                          :sort-by.sync="sortBy"
                          :sort-desc.sync="sortDesc"
                          :sort-direction="sortDirection"
                        >
                          <template #cell(status)="row">
                            <span v-html="row.value"></span>
                          </template>

                          <template #cell(actions)="">
                            <router-link to="/orders/1" class="btn btn-info">
                              <i class="far fa-eye"></i>
                            </router-link>
                          </template>
                        </b-table>
                      </div>
                    </div>
                    <div class="row justify-content-center">
                      <!-- <div class="col-sm-12 col-md-5">
                        <div
                          class="dataTables_info"
                          id="DataTables_Table_0_info"
                          role="status"
                          aria-live="polite"
                        >
                          Showing 1 to 10 of 12 entries
                        </div>
                      </div> -->
                      <div class="col-6">
                        <b-pagination
                          v-model="currentPage"
                          :total-rows="totalRows"
                          :per-page="perPage"
                          align="fill"
                          size="sm"
                          class="my-0"
                        ></b-pagination>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Modal
      :header="true"
      :footer="true"
      id="add-address"
      data-backdrop="static"
      data-keyboard="false"
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
              <div class="form-group col-12 col-md-6">
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
                  placeholder="Dirección e.g. número de casa, calle, colonia"
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
    </Modal>
  </section>
</template>

<script>
import Modal from "../components/Modal";

export default {
  components: { Modal },
  data() {
    const options = { year: "numeric", month: "long", day: "numeric" };
    return {
      canEdit: false,
      flag: "new",
      items: [
        {
          status: true,
          total: new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD",
            minimumFractionDigits: 2,
          }).format(40),
          date: new Date(2020, 2, 12).toLocaleDateString(undefined, options),
        },
        {
          status: false,
          total: new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD",
            minimumFractionDigits: 2,
          }).format(21),
          date: new Date(2020, 2, 26).toLocaleDateString(undefined, options),
        },
        {
          status: false,
          total: new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD",
            minimumFractionDigits: 2,
          }).format(9),
          date: new Date(2020, 6, 1).toLocaleDateString(undefined, options),
        },
        {
          status: false,
          total: new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD",
            minimumFractionDigits: 2,
          }).format(89),
          date: new Date(2020, 6, 12).toLocaleDateString(undefined, options),
        },
        {
          status: true,
          total: new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD",
            minimumFractionDigits: 2,
          }).format(38),
          date: new Date(2020, 5, 30).toLocaleDateString(undefined, options),
        },
        {
          status: false,
          total: new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD",
            minimumFractionDigits: 2,
          }).format(27),
          date: new Date(2020, 7, 13).toLocaleDateString(undefined, options),
        },
        {
          status: true,
          total: new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD",
            minimumFractionDigits: 2,
          }).format(40),
          date: new Date(2020, 7, 16).toLocaleDateString(undefined, options),
        },
        {
          status: true,
          total: new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD",
            minimumFractionDigits: 2,
          }).format(87),
          date: new Date(2020, 4, 12).toLocaleDateString(undefined, options),
        },
        {
          status: false,
          total: new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD",
            minimumFractionDigits: 2,
          }).format(26),
          date: new Date(2020, 1, 5).toLocaleDateString(undefined, options),
        },
        {
          status: false,
          total: new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD",
            minimumFractionDigits: 2,
          }).format(22),
          date: new Date(2020, 9, 1).toLocaleDateString(undefined, options),
        },
      ],
      fields: [
        {
          key: "id",
          label: "Orden",
          sortable: true,
          sortDirection: "desc",
          class: "text-center",
        },
        {
          key: "date",
          label: "Fecha",
          class: "text-center",
        },
        {
          key: "status",
          label: "Estatus",
          formatter: (value) => {
            return value
              ? '<span class="badge badge-success">Entregado</span>'
              : '<span class="badge badge-warning">Retrasado</span>';
          },
          sortable: true,
          sortByFormatted: true,
          filterByFormatted: true,
          class: "text-center",
        },
        {
          key: "total",
          label: "Total",
          sortable: true,
          class: "text-center",
        },
        { key: "actions", label: "Detalle", class: "text-center" },
      ],
      totalRows: 1,
      currentPage: 1,
      perPage: 5,
      pageOptions: [5, 10, 15],
      sortBy: "",
      sortDesc: false,
      sortDirection: "asc",
      filter: null,
    };
  },
  mounted() {
    this.totalRows = this.items.length;
  },
  methods: {
    editProfile() {
      this.canEdit = !this.canEdit;
    },
    editAddress() {
      this.flag = "update";
    },
    addAddress() {
      this.flag = "new";
    }
  },
};
</script>

<style lang="scss">
@import "../assets/scss/views/profile";
</style>