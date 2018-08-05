<template>
  <div>
    <logo></logo>
    <div class="uk-container uk-container-small uk-position-relative">
      <goals></goals>
      <categories></categories>
    </div>
    <div class="uk-container uk-container-large uk-position-relative">
      <schedule></schedule>
      <results></results>
    </div>
    <div class="uk-container uk-container-small uk-position-relative">
      <contact></contact>
    </div>
  </div>
</template>

<script>
import Categories from '@/pages/home/categories'
import Contact from '@/pages/home/contact'
import Goals from '@/pages/home/goals'
import Logo from '@/pages/home/logo'
import Results from '@/pages/home/results'
import Schedule from '@/pages/home/schedule'

export default {
  name: 'Home',
  components: {Categories, Contact, Goals, Logo, Results, Schedule},
}
</script>

<style lang="scss">
  p {
    color: #111;
    font-family: 'Open Sans', sans-serif;
    font-size: 16px;
    line-height: 28px;
    margin: 0 0 0px;
    text-align: justify;
  }
  .text-justify {
    text-align: justify;
  }
</style>
