<template>
  <section id="logo" class="container-fluid text-center">
    <center>
      <img src="/static/img/opi-logo.png" class="opi-logo" alt="OPI Logo">
    </center>
  </section>
</template>

<style lang="scss">
@import 'src/assets/app';

#logo {
  @extend %section-padding;
  background: -webkit-linear-gradient(#999999, #ffffff); /* For Safari 5.1 to 6.0 */
  background: -o-linear-gradient(#999999, #ffffff); /* For Opera 11.1 to 12.0 */
  background: -moz-linear-gradient(#999999, #ffffff); /* For Firefox 3.6 to 15 */
  background: linear-gradient(#999999, #ffffff); /* Standard syntax (must be last) */
}
.opi-logo {
  display: inline;
  width: 350px;
  height: 350px;
}
</style>
