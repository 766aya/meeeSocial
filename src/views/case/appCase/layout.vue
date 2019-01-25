<template>
  <div id="caseLayout">
    <div class="banner">
      <img class="img" src="https://www.meetsocial.cn/templates/default/images/nybanner2.gif">
    </div>
    <crumbs></crumbs>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'appcaseLayout',
  data () {
    return {

    }
  },
  created () {

  }
}
</script>

<style lang="scss" scoped>
  #caseLayout {
    .banner {
      display: block;
      width: 100%;
      .img {
        width: 100%;
      }
    }
  }
</style>
