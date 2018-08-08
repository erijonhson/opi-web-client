<template>
  <div id="basic">
    <topmenu></topmenu>
    <div id="app-body" class="app-body">
      <router-view></router-view>
    </div>
    <assignfooter></assignfooter>
  </div>
</template>

<script>
import Topmenu from '@/components/topmenu'
import Assignfooter from '@/components/assignfooter'

export default {
  name: 'default',
  components: {Assignfooter, Topmenu}
}
</script>

<style lang="scss">
  @import 'src/assets/app';

  #basic {
    min-height:100%;
    position:relative;
    height:100%;
  }
</style>
