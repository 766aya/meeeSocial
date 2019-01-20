<template>
  <div id="latestCase">
    <h1 class="gov-title">{{ $t('service.latestCase') }}</h1>
    <div class="content">

      <a :href="learnMoreUrl" target="_blank" class="learn-more-btn">{{ $t('service.moreCase') }}</a>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      learnMoreUrl: ''
    }
  }
}
</script>

<style lang="scss" scoped>
  #latestCase {
    background: #F4F4F4;
    padding: 45px 0px;
  }
  .content {
    width: 1200px;
    display: flex;
    margin: 0 auto;
    flex-direction: column;
  }
</style>
