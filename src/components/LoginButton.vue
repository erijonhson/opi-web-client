<template>
  <div>
    <span uk-toggle=".login-alert"></span>
    <div class="uk-position-center-right">
      <a href="#modal-login" class="uk-icon-button uk-margin-right" uk-icon="sign-in" uk-tooltip="Entrar" uk-toggle></a>
    </div>
    <div id="modal-login" class="uk-flex-top" uk-modal>
      <div class="uk-modal-dialog uk-modal-body uk-margin-auto-vertical">
        <button class="uk-modal-close-default" type="button" uk-close></button>
        <form v-on:submit="handleSubmit($event)">
          <div class="uk-margin">
            <div class="uk-inline">
              <span class="uk-form-icon" uk-icon="icon: user"></span>
              <input v-model="user.email" class="uk-input uk-form-width-large" type="text">
            </div>
          </div>
          <div class="uk-margin">
            <div class="uk-inline">
              <span class="uk-form-icon uk-form-icon-flip" uk-icon="icon: lock"></span>
              <input v-model="user.password" class="uk-input uk-form-width-large" type="text">
            </div>
          </div>
          <p class="uk-text-right">
            <button class="uk-button uk-button-default uk-modal-close" type="button">Cancelar</button>
            <button class="uk-button uk-button-primary" type="submit">Entrar</button>
          </p>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
var app = require('../main.js')

export default {
  name: 'LoginButton',
  data: () => ({
    user: {
      email: null,
      password: null
    }
  }),
  methods: {
    handleSubmit: (e) => {
      e.preventDefault()
      console.log(this.data.user)
      alert(this.data)
      app.default.$auth.login({
        body: this.data.user,
        success: (response) => {
          UIkit.notification('Bem vindo', 'success')
          this.setRoleUser(response.data.role)
        },
        error: (response) => {
          let msgError = 'Verique sua conexão com a internet'
          if (response.status >= 400 && response.status <= 499) {
            msgError = 'Login e/ou senha inválidos'
          }
          UIkit.notification(msgError, 'danger')
        },
        rememberMe: true,
        redirect: '/home#results'
      })
    }
  }
}
</script>
