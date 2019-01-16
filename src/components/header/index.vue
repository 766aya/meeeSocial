<template>
  <div id="header">
    <div class="main">
      <div class="logo-layout">
        <img class="logo" src="https://www.meetsocial.cn/templates/default/images/logo-new.png" alt="logo">
      </div>
      <div class="main-layout">
        <div class="h50 text-layout">
          <div class="iconfont icon-icon-email gray">
            <a :href="`mailto:${email}`">{{email}}</a>
          </div>
          <div class="iconfont icon-dianhua gray">400-869-9583</div>
          <div>
            <a href="https://www.meetsocial.cn/drive" class="brand">
            {{ $t("header.brand") }}
            </a>
          </div>
          <div>
            <a href="javascript:;" :class="lang === 'en' ? 'active': ''" class="change-lang-btn" @click="changeLanguage('en')">en</a>
            <span class="change-lang-line">|</span>
            <a href="javascript:;" :class="lang === 'zh' ? 'active': ''" class="change-lang-btn" @click="changeLanguage('zh')">中文</a>
          </div>
        </div>
        <div class="h50 menu-layout"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'headerLayout',
  data () {
    return {
      email: 'contact@meetsocial.cn',
      lang: 'zh'
    }
  },
  methods: {
    // 语言切换
    changeLanguage (lang) {
      this.lang = lang
      this.$i18n.locale = lang
    }
  },
  created () {
    this.changeLanguage(this.lang)
  }
}
</script>

<style lang="scss" scoped>
  *::selection {
    background: #2872ED;
    color: #FFFFFF;
  }
  .h50 {
    display: flex;
    height: 50%;
    line-height: 30px;
    align-items: center;
    & > div {
      margin-left: 15px;
    }
  }
  .iconfont {
    &.gray {
      color: #999999;
      a {
        color: inherit;
        text-decoration: none;
      }
    }
    &::before {
      margin-right: 5px;
    }
  }
  #header {
    width: 100%;
    height: 110px;
    .main {
      margin: 0 auto;
      display: flex;
      width: 1300px;
      height: 100%;
      overflow: hidden;
      .logo-layout {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100%;
        flex: 1;
        .logo {
          width: 372px;
          height: 57px;
        }
      }
      .main-layout {
        width: 850px;
        height: 100%;
        .text-layout {
          flex-direction: row;
          justify-content: flex-end;
          .brand {
            padding: 5px 10px;
            line-height: 30px;
            text-decoration: none;
            background: #2872ED;
            color: #FFFFFF;
          }
          .change-lang-btn {
            color: #999999;
            text-decoration: none;
            font-size: 14px;
            &:hover {
              color: #2872ED;
            }
            &.active {
              color: #2872ED;
            }
          }
          .change-lang-line {
            margin: 0px 5px;
            color: #999999;
          }
        }
        .menu-layout {
          color: #FFFFFF;
        }
      }
    }
  }
</style>
