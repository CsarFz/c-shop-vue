<template>
  <section id="formSignUp">
    <div class="container my-5 py-5">
      <div class="row d-flex justify-content-center">
        <div class="col-md-12">
          <div class="card pt-5 pb-3 border-20 shadow border-0">
            <div class="card-body">
              <h2 class="card-title text-center">Regístrate</h2>
              <div class="form-group text-center">
                
              </div>
              <form class="px-lg-5 px-2 mt-4" noValidate>
                <div class="row">
                  <div class="col-12 col-md-4 px-lg-3 pb-3">
                    <input
                      type="text"
                      class="form-control form-control-lg primary-input"
                      name="name"
                      placeholder="Nombre(s)"
                      required
                    />
                  </div>
                  <div class="col-12 col-md-4 px-lg-3 pb-3">
                    <input
                      type="text"
                      class="form-control form-control-lg primary-input"
                      name="lastName"
                      placeholder="Apellido paterno"
                      required
                    />
                  </div>
                  <div class="col-12 col-md-4 px-lg-3 pb-3">
                    <input
                      type="text"
                      class="form-control form-control-lg primary-input"
                      name="motherLastName"
                      placeholder="Apellido materno"
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
                      required
                    />
                  </div>
                  <div class="col-12 col-md-6 px-lg-3 pb-3">
                    <input
                      type="email"
                      class="form-control form-control-lg primary-input"
                      name="email"
                      placeholder="Correo electrónico"
                      required
                    />
                  </div>
                  <div class="col-12 col-md-6 px-lg-3 pb-3">
                    <input
                      type="password"
                      class="form-control form-control-lg primary-input"
                      name="password"
                      placeholder="Contraseña"
                      required
                    />
                  </div>
                  <div class="col-12 col-md-6 px-lg-3 pb-3">
                    <input
                      type="password"
                      class="form-control form-control-lg primary-input"
                      name="passwordConfirm"
                      placeholder="Confirmar contraseña"
                      required
                    />
                  </div>
                </div>
                <div class="d-flex justify-content-center">
                  <button id="signup" class="btn btn-cshop my-3" type="submit">
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
export default {};
</script>

<style>
</style>