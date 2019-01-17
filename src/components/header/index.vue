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
        <div class="h50 menu-layout">
          <div class="menus">
            <div v-for="(item, index) in menuList" :key="item.label" class="menu-box" @mouseover="changeMenuShow(index)" @mouseleave="clearMenuShow">
              <router-link
                class="menu-item"
                :class="menuChildrenShow === index ? 'router-link-active' : ''"
                :to="{ path: item.router }">
                {{ item.label }}
              </router-link>
              <div class="menu-dropdown" v-show="menuChildrenShow === index">
                <router-link
                  v-for="menu in item.children"
                  :key="menu.label"
                  class="menu-children"
                  :to="{path: menu.router}">
                  {{ menu.label }}
                </router-link>
              </div>
            </div>
          </div>
          <div class="search" @mouseout="clearIsSearch">
            <a href="javascript:;" class="iconfont icon-sousuo search-btn" @click="search" :class="isSearch ? 'active' : ''">搜索</a>

          </div>
        </div>
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
      lang: 'zh',
      menuList: [
        {
          label: '飞书服务',
          router: '/1',
          children: [
            {
              label: '服务介绍',
              router: '/11'
            }, {
              label: '飞书优势',
              router: '/12'
            }
          ]
        }, {
          label: '成功案例',
          router: '/2',
          children: [
            {
              label: '游戏案例',
              router: '/21'
            }, {
              label: 'APP案例',
              router: '/22'
            }, {
              label: '品牌案例',
              router: '/23'
            }, {
              label: '电商案例',
              router: '/24'
            }
          ]
        }
      ],
      menuChildrenShow: -1,
      isSearch: false
    }
  },
  methods: {
    // 语言切换
    changeLanguage (lang) {
      this.lang = lang
      this.$i18n.locale = lang
    },
    // 菜单经过显示
    changeMenuShow (index) {
      this.menuChildrenShow = index
    },
    // 清除菜单显示
    clearMenuShow () {
      this.menuChildrenShow = -1
    },
    search () {
      if (!this.isSearch) {
        this.isSearch = !this.isSearch
      }
    },
    clearIsSearch () {
      this.isSearch = false
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
          flex-direction: row;
          justify-content: flex-end;
          .menus {
            display: flex;
            flex-direction: row;
            .menu-box {
              position: relative;
              margin: 0px 10px;
              .menu-item {
                display: block;
                background: rgba($color: #003399, $alpha: 0);
                color: #000000;
                text-decoration: none;
                padding: 5px 0px;
                width: 110px;
                text-align: center;
                // transition: 0.3s;
                &:hover {
                  background: #003399;
                  color: #FFFFFF;
                }
                &.router-link-active {
                  background: #003399;
                  color: #FFFFFF;
                }
              }
              .menu-dropdown {
                position: absolute;
                display: flex;
                flex-direction: column;
                .menu-children {
                  display: block;
                  width: 110px;
                  padding: 5px 0px;
                  color: #FFFFFF;
                  text-align: center;
                  background: #003399;
                  text-decoration: none;
                  transition: 0.3s;
                  border-bottom: 1px solid #2872ED;
                  &:first-child {
                    border-top: 1px solid #2872ED;
                  }
                  &:hover {
                    background: #2872ED;
                  }
                }
              }
            }
          }
          .search {
            .search-btn {
              display: block;
              padding: 5px 10px;
              color: #FFFFFF;
              text-decoration: none;
              line-height: 25px;
              font-size: 14px;
              background: #2872ED;
              &:hover {
                background: #003399;
              }
              &.active {
                background: #003399;
              }
            }
          }
        }
      }
    }
  }
</style>
