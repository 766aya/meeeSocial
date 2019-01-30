<template>
  <div id="header" @mouseleave="clearIsSearch">
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
            <a href="https://www.meetsocial.cn/drive" class="brand">逸途</a>
          </div>
          <div>
            <a href="javascript:;" :class="lang === 'en' ? 'active': ''" class="change-lang-btn" @click="changeLanguage('')">en</a>
            <span class="change-lang-line">|</span>
            <a href="javascript:;" :class="lang === 'zh' ? 'active': ''" class="change-lang-btn" @click="changeLanguage('')">中文</a>
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
                <div v-for="menu in item.children" :key="menu.label">
                  <router-link v-if="!menu.type" class="menu-children" :to="menu.router">{{ menu.label }}</router-link>
                  <a v-else class="menu-children" href="javascript:;" @click="anchorLink(menu.router)">{{ menu.label }}</a>
                </div>
              </div>
            </div>
          </div>
          <div class="search">
            <a href="javascript:;" class="iconfont icon-sousuo search-btn" @click="search" :class="isSearch ? 'active' : ''">搜索</a>
            <transition name="fade">
              <div class="search-content" v-show="isSearch" :class="isSearch ? 'active' : ''">
                <input type="text" autocomplete="off" v-model="searchData">
              </div>
            </transition>
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
          router: '/service',
          children: [
            {
              label: '服务介绍',
              router: '/service#service',
              type: 1
            }, {
              label: '飞书优势',
              router: '/service#advantage',
              type: 1
            }
          ]
        }, {
          label: '成功案例',
          router: '/case',
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
        }, {
          label: '渠道资讯',
          router: '/qudaozixun'
        }, {
          label: '体验中心',
          router: '/tiyanzhongxin'
        }, {
          label: '逸途',
          router: '/yitu'
        }, {
          label: '营销学院',
          router: '/yingxiaoxueyuan'
        }, {
          label: '最新动态',
          router: '/zuixindongtai'
        }, {
          label: '驱动技术',
          router: '/qudongjishu'
        }, {
          label: '关于我们',
          router: '/about'
        }
      ],
      menuChildrenShow: -1,
      isSearch: false,
      searchData: ''
    }
  },
  methods: {
    // 语言切换
    changeLanguage (lang) {
      this.lang = lang
      // this.$i18n.locale = lang
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
        this.isSearch = true
      } else {
        console.log(this.searchData)
      }
    },
    clearIsSearch () {
      this.isSearch = false
      this.searchData = ''
    },
    anchorLink (url) {
      let route = this.$route
      let urlList = url.split('#')
      let id = urlList[1]
      if (urlList[0] === route.path) {
        document.querySelector(`#${id}`).scrollIntoView(true)
      } else {
        this.$router.push({ path: urlList[0] })
        this.$nextTick(() => {
          document.querySelector(`#${id}`).scrollIntoView(true)
        })
      }
    }
  },
  created () {
    this.changeLanguage(this.lang)
  }
}
</script>

<style lang="scss" scoped>
  .h50 {
    display: flex;
    height: 50%;
    line-height: 30px;
    align-items: center;
    & > div {
      margin-left: 15px;
    }
  }
  .fade-enter-active, .fade-leave-active {
    transition: 0.5s;
    width: 150px;
  }
  .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
    width: 0px;
  }
  .iconfont {
    &.gray {
      color: #999999;
      a {
        color: inherit;
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
      width: 100%;
      max-width: 1300px;
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
            background: #2872ED;
            color: #FFFFFF;
          }
          .change-lang-btn {
            color: #999999;
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
              .menu-item {
                display: block;
                background: rgba($color: #003399, $alpha: 0);
                color: #000000;
                padding: 5px 0px;
                width: 80px;
                text-align: center;
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
                z-index: 9999;
                .menu-children {
                  display: block;
                  width: 80px;
                  padding: 5px 0px;
                  color: #FFFFFF;
                  text-align: center;
                  background: #003399;
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
            position: relative;
            .search-btn {
              display: block;
              height: 40px;
              width: 70px;
              text-align: center;
              color: #FFFFFF;
              line-height: 40px;
              font-size: 14px;
              background: #2872ED;
              z-index: 1000;
              transition: 0.5s;
              &:hover {
                background: #003399;
              }
              &.active {
                background: #003399;
              }
            }
            .search-content {
              position: absolute;
              top: 0;
              right: 70px;
              height: 40px;
              background: #2872ED;
              line-height: 40px;
              overflow: hidden;
              z-index: 999;
              &.active {
                background: #003399;
              }
              input {
                margin: 0;
                padding: 0 0 0 5px;
                margin: 0 10px;
                border: none;
                height: 24px;
                width: 125px;
                &:focus {
                  outline: none;
                }
              }
            }
          }
        }
      }
    }
  }
</style>
