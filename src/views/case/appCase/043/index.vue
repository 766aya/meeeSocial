<template>
  <div id="case043">
    <div class="header-img">
      <img class="content-img" src="https://www.meetsocial.cn/upload/case/1530581244184797658.jpg">
      <img class="head-img" src="https://www.meetsocial.cn/upload/case/1530581242883970794.png">
    </div>
    <el-row>
      Jump Ramp
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'Jump Ramp'

}
</script>

<style lang="scss" scoped>
  #case043 {
    width: 1200px;
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    .header-img {
      position: relative;
      width: 100%;
      height: 400px;
      margin: 75px 0;
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
      }
    }
  }
</style>
