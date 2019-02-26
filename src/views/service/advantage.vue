<template>
  <div id="advantage">
    <h1 class="gov-title">飞书优势</h1>
    <div class="content">
      <slot></slot>
      <a :href="learnMoreUrl" target="_blank" class="learn-more-btn">了解更多 ></a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'advantage',
  data () {
    return {
      learnMoreUrl: 'http://www.sinoclick.com/',
    }
  },
}
</script>

<style lang="scss" scoped>
#advantage {
  margin-bottom: 30px;
}
.content {
  max-width: 1200px;
  width: 100%;
  display: flex;
  margin: 0 auto;
  flex-direction: column;
}
</style>
