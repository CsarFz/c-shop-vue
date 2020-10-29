<template>
  <section id="profile">
    <div class="container my-5 py-5">
      <div class="row d-flex justify-content-center">
        <div class="col-md-12">
          <div class="card pt-3 pb-3 border-20 shadow border-0">
            <div class="card-body">
              <div class="row">
                <div class="col-12">
                  <h2 class="card-title float-left">Perfil</h2>
                  <button
                    class="btn btn-edit float-right"
                    id="btn-edit"
                    @click.prevent="editProfile"
                  >
                    <span v-if="!canEdit"
                      >Editar <i class="fas fa-edit fa-sm"></i
                    ></span>
                    <span v-else
                      >Cancelar <i class="fas fa-times fa-sm"></i
                    ></span>
                  </button>
                </div>
                <form id="profileForm" class="mx-3">
                  <div class="row">
                    <div class="col-12 col-lg-6">
                      <div class="form-group row">
                        <label
                          htmlFor="name"
                          class="col-sm-3 col-form-label text-bold text-primary-cshop text-uppercase"
                          >Nombre</label
                        >
                        <div class="col-sm-9">
                          <input
                            type="text"
                            :readonly="!canEdit"
                            name="name"
                            :class="
                              canEdit
                                ? 'form-control'
                                : 'form-control-plaintext'
                            "
                            id="name"
                            value="César Adrián"
                          />
                        </div>
                      </div>
                    </div>
                    <div class="col-12 col-lg-6">
                      <div class="form-group row">
                        <label
                          htmlFor="surnames"
                          class="col-sm-3 col-form-label text-bold text-primary-cshop text-uppercase"
                          >Apellidos</label
                        >
                        <div class="col-sm-9">
                          <input
                            type="text"
                            :readonly="!canEdit"
                            name="surnames"
                            :class="
                              canEdit
                                ? 'form-control'
                                : 'form-control-plaintext'
                            "
                            id="surnames"
                            value="Galván Medrano"
                          />
                        </div>
                      </div>
                    </div>
                    <div class="col-12 col-lg-6">
                      <div class="form-group row">
                        <label
                          htmlFor="phone"
                          class="col-sm-3 col-form-label text-bold text-primary-cshop text-uppercase"
                          >Teléfono</label
                        >
                        <div class="col-sm-9">
                          <input
                            type="tel"
                            :readonly="!canEdit"
                            name="phone"
                            :class="
                              canEdit
                                ? 'form-control'
                                : 'form-control-plaintext'
                            "
                            id="phone"
                            value="5512345678"
                          />
                        </div>
                      </div>
                    </div>
                    <div class="col-12 col-lg-6">
                      <div class="form-group row">
                        <label
                          htmlFor="email"
                          class="col-sm-3 col-form-label text-bold text-primary-cshop text-uppercase"
                          >Email</label
                        >
                        <div class="col-sm-9">
                          <input
                            type="email"
                            readOnly
                            name="email"
                            :class="
                              canEdit
                                ? 'form-control'
                                : 'form-control-plaintext'
                            "
                            id="email"
                            value="email@example.com"
                          />
                        </div>
                      </div>
                    </div>
                    <div class="col-12 text-center" v-if="canEdit">
                      <button class="btn btn-cshop" type="submit">
                        Guardar
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      canEdit: false,
    };
  },
  methods: {
    editProfile() {
      this.canEdit = !this.canEdit;
    },
  },
};
</script>

<style>
</style>