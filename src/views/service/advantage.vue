<template>
  <div id="advantage">
    <h1 class="gov-title">{{ $t('routerMap.service.advantage') }}</h1>
    <div class="content">
      <slot></slot>
      <a :href="learnMoreUrl" target="_blank" class="learn-more-btn">{{ $t('service.learnMore') }}</a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'advantage',
  data () {
    return {
      learnMoreUrl: 'http://www.sinoclick.com/'
    }
  }
}
</script>

<style lang="scss" scoped>
  #advantage {
    margin-bottom: 30px;
  }
  .content {
    width: 1200px;
    display: flex;
    margin: 0 auto;
    flex-direction: column;
  }
</style>
