<template>
  <div id="pageLayout">
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
</style>
