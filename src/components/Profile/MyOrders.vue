<template>
  <div class="row">
    <div class="col-12">
      <h4 class="text-uppercase mt-0 mb-4">Pedidos</h4>
      <div class="order-list-tabel-main table-responsive">
        <div class="dataTables_wrapper container-fluid dt-bootstrap4 no-footer">
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
                <template #cell(date_purchase)="row">
                  {{
                    new Date(row.item.date_purchase).toLocaleDateString(
                      undefined,
                      options
                    )
                  }}
                </template>

                <template #cell(price)="row">
                  {{
                    new Intl.NumberFormat("en-US", {
                      style: "currency",
                      currency: "USD",
                      minimumFractionDigits: 2,
                    }).format(row.item.price)
                  }}
                </template>

                <template #cell(actions)="row">
                  <button
                    @click="info(row.item, row.index, $event.target)"
                    class="btn btn-info"
                  >
                    <i class="far fa-eye"></i>
                  </button>
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

    <!-- Info modal -->
    <b-modal
      :id="infoModal.id"
      :title="infoModal.title"
      ok-only
      centered
      @hide="resetInfoModal"
    >
      <div class="row">
        <div class="col-12 col-md-6">
          <img :src="infoModal.content.image" class="img-fluid" />
        </div>
        <div class="col-12 col-md-6">
          <div class="text-right">
            <p>
              <span class="text-bold">Producto:</span>
              {{ infoModal.content.name }}
            </p>
            <p>
              <span class="text-bold">Comprado:</span>
              {{
                new Date(infoModal.content.date_purchase).toLocaleDateString(
                  undefined,
                  options
                )
              }}
            </p>
            <hr />
            <p>
              <span class="text-bold">Precio:</span>
              {{
                new Intl.NumberFormat("en-US", {
                  style: "currency",
                  currency: "USD",
                  minimumFractionDigits: 2,
                }).format(infoModal.content.price)
              }}
            </p>
          </div>
        </div>
      </div>
    </b-modal>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    const options = { year: "numeric", month: "long", day: "numeric" };
    return {
      options: options,
      fields: [
        {
          key: "id",
          label: "Orden",
          sortable: true,
          sortDirection: "desc",
          class: "text-center",
        },
        {
          key: "date_purchase",
          label: "Fecha",
          class: "text-center",
        },
        {
          key: "price",
          label: "Precio",
          sortable: true,
          class: "text-center",
        },
        { key: "actions", label: "Detalle", class: "text-center" },
      ],
      totalRows: 1,
      currentPage: 1,
      perPage: 5,
      sortBy: "",
      sortDesc: false,
      sortDirection: "asc",
      filter: null,
      items: [],
      infoModal: {
        id: "info-modal",
        title: "Invoice",
        content: "",
      },
    };
  },
  async beforeCreate() {
    const token = this.$store.getters.token;

    await axios
      .post(
        "https://8rj68a68ml.execute-api.us-east-1.amazonaws.com/default/gethistory",
        { token }
      )
      .then((response) => {
        this.items = response.data;
        this.totalRows = this.items.length;
      });
  },
  methods: {
    resetInfoModal() {
      this.infoModal.title = "Orden";
      this.infoModal.content = "";
    },
    info(item, index, button) {
      this.infoModal.content = item;
      this.infoModal.title = `Orden - #${item.id}`;
      this.$root.$emit("bv::show::modal", this.infoModal.id, button);
    },
  },
};
</script>

<style>
</style>