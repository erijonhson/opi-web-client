<template>
  <nav class="uk-navbar uk-navbar-fixed">
    <div class="uk-navbar-left">
      <ul class="uk-navbar-nav">
        <li><a href="#logo" class="uk-margin-left" uk-scroll>Início</a></li>
        <li><a href="#goals" uk-scroll>Objetivos</a></li>
        <li><a href="#categories" uk-scroll>Categorias</a></li>
        <li><a href="#schedule" uk-scroll>Datas</a></li>
        <li><a href="#results" uk-scroll>Resultados</a></li>
        <li><a href="#" uk-scroll>Notícias</a></li>
        <li><a href="#contact" uk-scroll>Contato</a></li>
      </ul>
      <login-button></login-button>
    </div>
  </nav>
</template>

<script>
import LoginButton from '@/components/LoginButton';

export default {
  name: 'topmenu',
  components: {'login-button': LoginButton}
}
</script>

<style lang="css">
.uk-navbar {
  border: none;
  background-color: #222;
  border-color: #080808;
}
.uk-navbar-fixed {
    position: fixed;
    right: 0;
    left: 0;
    top: 0;
    z-index: 1030;
}
</style>
