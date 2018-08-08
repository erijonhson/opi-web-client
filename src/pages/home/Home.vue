<template>
  <div>
    <logo></logo>
    <div class="uk-container uk-container-medium uk-position-relative">
      <goals></goals>
      <categories></categories>
      <schedule></schedule>
      <results></results>
    </div>
    <contact></contact>
  </div>
</template>

<script>
import Categories from '@/pages/home/categories'
import Contact from '@/pages/home/contact'
import Goals from '@/pages/home/goals'
import Logo from '@/components/logo'
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
    font-size: 1em;
    line-height: 1.8em;
    margin: 0 0 0px;
    text-align: justify;
  }
  .text-justify {
    text-align: justify;
  }
</style>
