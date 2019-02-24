<template>
  <div id="latestCase">
    <h1 class="gov-title">最新案例</h1>
    <div class="content">
      <case-tabs></case-tabs>
      <router-link :to="{path: '/case/index'}" class="learn-more-btn">更多案例 ></router-link>
    </div>
  </div>
</template>

<script>
import caseTabs from './caseTabs'

export default {
  name: 'latestCase',
  components: { caseTabs },
  data () {
    return {
      learnMoreUrl: '',
    }
  },
}
</script>

<style lang="scss" scoped>
#latestCase {
  background: #f4f4f4;
  padding: 45px 0px;
}
.content {
  width: 100%;
  max-width: 1200px;
  min-width: 1000px;
  display: flex;
  margin: 0 auto;
  flex-direction: column;
}
</style>
