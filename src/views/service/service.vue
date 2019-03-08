<template>
  <div id="service">
    <div class="content">
      <h1 class="gov-title">浩捷亚服务</h1>
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
        zh: '浩捷亚互动专注于为出海企业提供基于Facebook营销矩阵的推广服务',
        en: 'Meetsocial + Facebook + Instagram = Your Global Clients',
      },
      mainList: [
        {
          nameCn: '海外市场洞察',
          nameEn: 'OVERSEAS MARKET ANALYSIS',
          icon: 'icon-shichangtuiguang',
        },
        {
          nameCn: '广告优化服务',
          nameEn: 'ADVERTISING OPTIMIZATION',
          icon: 'icon-shichangfenxi',
        },
        {
          nameCn: '社交内容营销',
          nameEn: 'SOCIAL MARKETING',
          icon: 'icon-yingxiaoguanli',
        },
        {
          nameCn: '广告创意服务',
          nameEn: 'CREATIVITY AND DESIGN',
          icon: 'icon-guanggao',
        },
        {
          nameCn: '技术支持服务',
          nameEn: 'TECHNICAL SUPPORT',
          icon: 'icon-iosworldoutline',
        },
        {
          nameCn: '账户管理服务',
          nameEn: 'ACCOUNT MANAGEMENT',
          icon: 'icon-fa-pagelines',
        },
      ],
    }
  },
}
</script>

<style lang="scss" scoped>
.content {
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
  overflow: hidden;
  .title-text {
    font-size: 18px;
  }
  .text {
    color: #b1b0b0;
    text-align: center;
  }
  & > .main {
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
        color: #ffffff;
        background: #2872ed;
      }
      .line {
        margin: 15px auto;
        width: 40px;
        height: 1px;
        background: #b1b0b0;
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
          color: #b1b0b0;
        }
      }
      .icon {
        transition: 0.5s;
        color: #ffffff;
        border-radius: 50%;
        width: 50px;
        height: 50px;
        background: #b1b0b0;
        line-height: 50px;
        text-align: center;
        font-size: 25px;
        border: 2px solid #ffffff;
        margin-bottom: 15px;
      }
    }
  }
}
</style>
