<template>
  <div id="basic">
    <topmenu></topmenu>
    <div id="app-body" class="app-body">
        <main class="main">
            <router-view></router-view>
        </main>
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
