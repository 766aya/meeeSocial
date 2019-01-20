<template>
  <div id="service">
    <div class="content">
      <h1 class="gov-title">{{$t('routerMap.service.index')}}</h1>
      <p class="text title-text">{{ titleText.zh }}</p>
      <p class="text title-text">{{ titleText.en }}</p>
      <div class="main">
        <div class="main-item" v-for="item in mainList" :key="item.nameCn">
          <div class="icon iconfont" :class="item.icon"></div>
          <h2 class="text-zh" v-text="item.nameCn"></h2>
          <span class="line"></span>
          <h2 class="text-en" v-text="item.nameEn"></h2>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'service',
  data () {
    return {
      titleText: {
        zh: '飞书互动专注于为出海企业提供基于Facebook营销矩阵的推广服务',
        en: 'Meetsocial + Facebook + Instagram = Your Global Clients'
      },
      mainList: [
        {
          nameCn: '海外市场洞察',
          nameEn: 'OVERSEAS MARKET ANALYSIS',
          icon: 'icon-shichangtuiguang'
        }, {
          nameCn: '广告优化服务',
          nameEn: 'ADVERTISING OPTIMIZATION',
          icon: 'icon-shichangfenxi'
        }, {
          nameCn: '社交内容营销',
          nameEn: 'SOCIAL MARKETING',
          icon: 'icon-yingxiaoguanli'
        }, {
          nameCn: '广告创意服务',
          nameEn: 'CREATIVITY AND DESIGN',
          icon: 'icon-guanggao'
        }, {
          nameCn: '技术支持服务',
          nameEn: 'TECHNICAL SUPPORT',
          icon: 'icon-iosworldoutline'
        }, {
          nameCn: '账户管理服务',
          nameEn: 'ACCOUNT MANAGEMENT',
          icon: 'icon-fa-pagelines'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
  .content {
    width: 1200px;
    margin: 0 auto;
    .title-text {
      font-size: 18px;
    }
    .text {
      color: #B1B0B0;
      text-align: center;
    }
    &>.main {
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      align-items: center;
      margin-top: 50px;
      .main-item {
        display: flex;
        flex-direction: column;
        justify-content: center;
        width: calc(100% / 3);
        height: auto;
        text-align: center;
        align-items: center;
        margin-bottom: 50px;
        * {
          cursor: default;
        }
        &:hover .icon {
          color: #FFFFFF;
          background: #2872ED;
        }
        .line {
          margin: 15px auto;
          width: 40px;
          height: 1px;
          background: #B1B0B0;
        }
        h2 {
          margin: 0;
          padding: 0;
          font-weight: normal;
          &.text-zh {
            font-size: 25px;
            color: #000000;
          }
          &.text-en {
            font-size: 14px;
            color: #B1B0B0;
          }
        }
        .icon {
          transition: 0.5s;
          color: #FFFFFF;
          border-radius: 50%;
          width: 50px;
          height: 50px;
          background: #B1B0B0;
          line-height: 50px;
          text-align: center;
          font-size: 25px;
          border: 2px solid #FFFFFF;
          margin-bottom: 15px;
        }
      }
    }
  }
</style>
