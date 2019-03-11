<template>
  <div id="index">
    <banner height="800" tag="首页"></banner>
    <crumbs></crumbs>
    <h1 class="gov-title">关于浩捷亚</h1>
    <div class="align center">
      <p>浩捷亚互动是Facebook海外广告投放优化。</p>
      <p>浩捷亚互动聚焦Facebook业务多年，通过卓越的服务能力和领先的产品技术帮助中国企业通过Facebook和Instagram的全球网络于海外市场提升品牌声望和销售业绩，实现全球化发展。</p>
      <img src="https://www.meetsocial.cn/templates/default/images/about_img1.jpg">
    </div>
    <service></service>
    <latestCase></latestCase>
      <div class="yingxiao-content"></div>
    </div>
  </div>
</template>

<script>
import service from '@/views/service/service.vue'
import latestCase from '@/views/service/latestCase.vue'
export default {
  components: { service, latestCase },
  data () {
    return {}
  },
}
</script>

<style lang="scss" scoped>
#index {
  width: 100%;
}
.align {
  &.center {
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    text-align: center;
    img {
      margin: 20px 0px;
      box-shadow: 0px 0px 30px #dddddd;
    }
  }
}
.youshi-content {
  height: 678px;
  background: url("/img/home_bg2.jpg") no-repeat center center;
}
.yingxiao-content {
  height: 785px;
  background: url("/img/home_bg5.jpg") no-repeat center center;
}
.xueyuan-content {
  height: 1250px;
  background: url("/img/home_bg3.jpg") no-repeat center center;
  .player-box {
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    padding-top: 200px;
    .desc {
      margin-top: -5px;
      display: flex;
      flex-direction: row;
      height: 80px;
      line-height: 80px;
      background: #283a85;
      color: #ffffff;
      font-size: 20px;
      .title {
        padding-left: 20px;
        flex: 1;
      }
      .learn-more {
        width: 200px;
        background: #2872ed;
        height: 80px;
        text-align: center;
        cursor: pointer;
      }
    }
  }
}
</style>
