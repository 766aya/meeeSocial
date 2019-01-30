<template>
  <div id="app">
    <fixed-box></fixed-box>
    <header-layout></header-layout>
    <router-view/>
    <footer-layout></footer-layout>
  </div>
</template>

<script>
import headerLayout from '@/components/header/index'
import footerLayout from '@/components/footer/index'
import fixedBox from '@/components/fixedBox/index'

export default {
  components: { headerLayout, footerLayout, fixedBox }
}
</script>

<style lang="scss">
  body {
    margin: 0;
    padding: 0;
  }
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
</style>
