<template>
  <div class="content">
    <div class="lside side-box">
      <img src="https://www.meetsocial.cn/templates/default/images/fuwu_img1.png">
      <router-link :to="{path: '/qudaozixun'}" class="learn-more-btn">渠道资讯 ></router-link>
    </div>
    <div class="rside side-box">
      <img src="https://www.meetsocial.cn/templates/default/images/fuwu_img2.png">
      <router-link :to="{path: '/qudaozixun'}" class="learn-more-btn">渠道资讯 ></router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'channel',
  data () {
    return {
      fuwuUrl1: 'https://www.meetsocial.cn/channel/facebook',
      fuwuUrl2: 'https://www.meetsocial.cn/channel/instagram',
    }
  },
}
</script>

<style lang="scss" scoped>
.content {
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 400px;
  background: url(https://www.meetsocial.cn/templates/default/images/fuwu_bg.gif)
    no-repeat center center;
  margin: 50px 0;
  .side-box {
    width: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    .learn-more-btn {
      margin-top: 15px;
    }
  }
}
</style>
