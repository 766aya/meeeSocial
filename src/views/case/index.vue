<template>
  <div id="case">
    <div class="banner">
      <img class="img" src="https://www.meetsocial.cn/templates/default/images/nybanner2.gif">
    </div>
    <crumbs></crumbs>
    <case-change></case-change>
    <channel></channel>
  </div>
</template>

<script>
import caseChange from './caseChange/index'

export default {
  name: 'case',
  components: { caseChange },
  data () {
    return {

    }
  }
}
</script>

<style lang="scss" scoped>
  #case {
    .banner {
      display: block;
      width: 100%;
      .img {
        width: 100%;
      }
    }
  }
</style>
