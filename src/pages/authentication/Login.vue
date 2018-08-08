<template>
  <div>
    <center>
      <img id="login-opi-logo" src="/static/img/opi-logo.png" class="opi-logo" alt="OPI Logo">
    </center>
    <div class="uk-card uk-card-small uk-card-default uk-card-body">
      <form v-on:submit="submitLogin($event)">
        <div class="uk-margin">
          <div class="uk-inline">
            <span class="uk-form-icon" uk-icon="icon: user"></span>
            <input v-model="user.email" class="uk-input uk-form-width-large" type="text">
          </div>
        </div>
        <div class="uk-margin">
          <div class="uk-inline">
            <span class="uk-form-icon" uk-icon="icon: lock"></span>
            <input v-model="user.password" class="uk-input uk-form-width-large" type="text">
          </div>
        </div>
        <p class="uk-text-right">
          <button class="uk-button uk-button-default uk-modal-close" type="button">Cancelar</button>
          <button class="uk-button uk-button-secondary" type="submit">Entrar</button>
        </p>
      </form>
    </div>
  </div>
</template>

<script>
import Logo from '@/components/logo'
import { login, setRoleUser } from '@/services/authentication'

export default {
  name: 'Login',
  components: { Logo },
  data () {
    return {
      user: {
        email: null,
        password: null
      }
    }
  },
  methods: {
    submitLogin: function (e) {
      e.preventDefault()
      alert(this.$data)
      console.log(this.$data)
      login(this.user).then(response => {
        UIkit.notification('Bem vindo', 'success')
        setRoleUser(response.data.role)
      }).catch(err => {
        let msgError = 'Verique sua conexão com a internet'
        console.log(err)
        if (err.status >= 400 && response.status <= 499) {
          msgError = 'Login e/ou senha inválidos'
        }
        UIkit.notification(msgError, 'danger')
      })
    }
  }
}
</script>

<style lang="scss">
  #login-opi-logo {
    display: inline;
    width: 250px;
    height: 250px;
  }
</style>
