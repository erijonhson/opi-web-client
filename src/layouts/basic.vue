<template>
  <div>
    <topmenu></topmenu>
    <div id="app-body" class="app-body">
        <main class="main">
            <router-view></router-view>
        </main>
    </div>
  </div>
</template>

<script>
import Topmenu from '@/components/topmenu'
import Assignfooter from '@/components/assignfooter'

export default {
  name: 'basic',
  components: {Assignfooter, Topmenu},
  created () {
  },
  data () {
  }
}
</script>

<style lang="scss">
  @import 'src/assets/app';
</style>
