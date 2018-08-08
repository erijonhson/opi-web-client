<template>
  <div>
    <topmenu></topmenu>
    <div id="app-body" class="app-body">
      <div class="uk-position-center uk-overlay uk-overlay-default">
        <router-view></router-view>
      </div>
    </div>
    <assignfooter></assignfooter>
  </div>
</template>

<script>
import Topmenu from '@/components/topmenu'
import Assignfooter from '@/components/assignfooter'

export default {
  name: 'center',
  components: {Assignfooter, Topmenu}
}
</script>

<style lang="scss">
  @import 'src/assets/app';
</style>
