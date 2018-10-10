<template>
  <div>
    <transition name="router-fade" mode="out-in">
      <keep-alive>
        <router-view v-if="$route.meta.keepAlive"></router-view>
      </keep-alive>
    </transition>
    <transition name="router-fade" mode="out-in">
      <router-view v-if="!$route.meta.keepAlive"></router-view>
    </transition>
    <svg-icon />
  </div>
</template>

<script>
  import svgIcon from 'components/common/svgIcon'
  export default {
    components: { svgIcon },
  }
</script>

<style lang='scss'>
  @import 'styles/mixin';
  @import 'styles/common';
  html {
    scroll-behavior: smooth;
    -webkit-overflow-scolling: touch;
  }
  .router-fade-enter-active, .router-fade-leave-active {
    transition: opacity .3s;
  }
  .router-fade-enter, .router-fade-leave-to {
    opacity: 0;
  }
</style>
