<template>
  <div id="app">
    <transition name="animate" enter-active-class="animated fadeInLeft" leave-active-class="animated fadeOutRight">
    <router-view/>
    </transition>
  </div>
</template>

<style lang="scss">
@import '../src/assets/styles/_reset';
</style>
