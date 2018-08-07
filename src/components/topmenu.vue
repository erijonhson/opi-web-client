<template>
  <div class="navbar-black-fixed">
    <nav class="uk-navbar">
      <div class="uk-navbar-left">
        <ul class="uk-navbar-nav uk-visible@m">
          <li>
            <router-link
              tag="a"
              v-bind:class="{active: $route.path == '/home#logo'}"
              to="/home#logo"
              uk-scroll
              replace>
              Início
            </router-link>
          </li>
          <li>
            <router-link
              tag="a"
              v-bind:class="{active: $route.path == '/home#goals'}"
              to="/home#goals"
              uk-scroll
              replace>
              Objetivos
            </router-link>
          </li>
          <li>
            <router-link
              tag="a"
              v-bind:class="{active: $route.path == '/home#categories'}"
              to="/home#categories"
              uk-scroll
              replace>
              Categorias
            </router-link>
          </li>
          <li>
            <router-link
              tag="a"
              v-bind:class="{active: $route.path == '/home#schedule'}"
              to="/home#schedule"
              uk-scroll
              replace>
              Datas
            </router-link>
          </li>
          <li>
            <router-link
              tag="a"
              v-bind:class="{active: $route.path == '/home#results'}"
              to="/home#results"
              uk-scroll
              replace>
              Resultados
            </router-link>
          </li>
          <li>
            <router-link
              tag="a"
              v-bind:class="{active: $route.path == '/home'}"
              to="/home"
              uk-scroll
              replace>
              Notícias
            </router-link>
          </li>
          <li>
            <router-link
              tag="a"
              v-bind:class="{active: $route.path == '/home#contact'}"
              to="/home#contact"
              uk-scroll
              replace>
              Contato
            </router-link>
          </li>
        </ul>
      </div>
      <div class="uk-navbar-right">
        <a href="/login" class="uk-icon-button uk-margin-right" uk-icon="sign-in" uk-tooltip="Entrar"></a>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'topmenu'
}
</script>

<style lang="scss">
  .uk-navbar {
    // medium
    box-sizing: content-box;
    max-width: 1200px;
    margin-left: auto;
    margin-right: auto;
    padding-left: 15px;
    padding-right: 15px;
    // end-medium
    @media (min-width: 960px) {
      padding-left: 40px;
      padding-right: 40px;
    }
    @media (min-width: 640px) {
      padding-left: 30px;
      padding-right: 30px;
    }
  }
  .navbar-black-fixed {
    border: none;
    background-color: #222;
    border-color: #080808;
    // fixing
    position: fixed;
    right: 0;
    left: 0;
    top: 0;
    z-index: 1030;
    // end fixing
  }
</style>
