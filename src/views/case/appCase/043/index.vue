<template>
  <div id="case043">
    <div class="header-img">
      <img class="content-img" src="https://www.meetsocial.cn/upload/case/1530581244184797658.jpg">
      <img class="head-img" src="https://www.meetsocial.cn/upload/case/1530581242883970794.png">
    </div>
    <div class="general-title">
      Jump Ramp
    </div>
    <gov-desc :option="descOption"></gov-desc>
    <div class="title-case">成功案例</div>
    <div class="detail-case">
      Jump Ramp 是一款优质生活应用。它利用 Facebook广告的Audience Network 成功使广告填充率高于平均水平 30% 以上，千次展示费用优于平均水平 40%，总体收入高出公司其他应用综合的2 倍。
    </div>
    <div class="banner banner01">
      <div class="content">
        <div class="item">
          <div class="top">
            <span>30</span>
            <span>%</span>
          </div>
          <div class="bottom">广告填充率高于平均</div>
        </div>
        <div class="item">
          <div class="top">
            <span>2.7</span>
            <span>倍</span>
          </div>
          <div class="bottom">点击率提高</div>
        </div>
        <div class="item">
          <div class="top">
            <span>2.3</span>
            <span>倍</span>
          </div>
          <div class="bottom">广告相关度分数提升</div>
        </div>
      </div>
    </div>
    <div class="title-case">品牌故事</div>
    <div class="detail-case">
      移动应用发布公司 Jump Ramp Games 致力于在 iOS 和 Android 设备上提供新颖的促销、奖品和现场抽奖活动体验。该公司的旗舰应用 Lucktastic 一直稳居应用商店生活类应用排行榜前十强。作为一家优质内容发布公司，Jump Ramp 同样也会与开发者和品牌合作投放定制化营销活动。
    </div>
    <hr />
    <div class="title-case">营销目标</div>
    <div class="detail-case">
      团队在提供解决方案和满足具体需求与时间线上的响应速度。与其他移动广告网络相比，不论是在整合还是在沟通方面，移动应用受众网络都是公司最优质的广告网络之一。
    </div>
    <div class="banner banner02">
      <p class="title">解决方案</p>
      <p class="desc">Audience Network 的规模化、多样化需求和原生广告解决方案通过品牌提升的广告网络，为玩家提供相关度更高、更加个性化的内容体验。</p>
    </div>
    <div class="title-case">品牌成功</div>
    <div class="detail-case">
      <p>通过Facebook广告，Jump Ramp Games 在收入方面取得</p>
      <p>如下成效：</p>
      <ul style="list-style: none;">
        <li>带来的广告填充率高于平均水平30% 以上</li>
        <li>千次展示费用优于平均水平 40%</li>
        <li>总体收入比应用中仅次于其他的广告网络高出近 2 倍</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Jump Ramp',
  data () {
    return {
      descOption: {
        publisher: '飞书互动',
        createTime: '2018-07-03',
        tips: ['Facebook案例', 'App案例', 'Audience', 'Network']
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  .banner {
    margin: 30px 0;
  }
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
    .banner01 {
      background: url(https://www.meetsocial.cn/templates/default/images/show_bg.jpg) no-repeat center center;
      &>.content {
        width: 1200px;
        margin: 0 auto;
        display: flex;
        padding: 60px;
        flex-direction: row;
        justify-content: space-around;
        .item {
          width: 300px;
          text-align: center;
          .top {
            color: #2872ED;
            &>:first-child {
              font-size: 60px;
              font-weight: 700;
            }
            &>:last-child {
              font-size: 20px;
            }
          }
          .bottom {
            color: #666666;
          }
        }
      }
    }
    .banner02 {
      background: url(https://www.meetsocial.cn/templates/default/images/show_bg2.jpg) no-repeat center center;
      height: 300px;
      text-align: center;
      color: #FFFFFF;
      display: flex;
      align-items: center;
      flex-direction: column;
      .title {
        font-size: 30px;
        margin-top: 90px;
        margin-bottom: 0px;
        font-weight: 700;
      }
      .desc {
        font-size: 16px;
      }
    }
  }
</style>
