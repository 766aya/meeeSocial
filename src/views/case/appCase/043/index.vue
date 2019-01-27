<template>
  <div id="case043">
    <div class="header-img">
      <img class="content-img" src="https://www.meetsocial.cn/upload/case/1530581244184797658.jpg">
      <img class="head-img" src="https://www.meetsocial.cn/upload/case/1530581242883970794.png">
    </div>
    <div class="general-title">
      Jump Ramp
    </div>
  </div>
</template>

<script>
export default {
  name: 'Jump Ramp'

}
</script>

<style lang="scss" scoped>
  #case043 {
    width: 100%;
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    .header-img {
      position: relative;
      width: 1200px;
      height: 400px;
      margin: 75px auto;
      .content-img {
        width: 100%;
      }
      .head-img {
        position: absolute;
        height: 150px;
        width: 150px;
        top: 100%;
        left: 75px;
        margin-top: -75px;
        border: 1px solid #333333;
      }
    }
  }
</style>
