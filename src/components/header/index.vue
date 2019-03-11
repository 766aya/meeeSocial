<template>
  <div id="header" @mouseleave="clearIsSearch">
    <div class="main">
      <div class="logo-layout">
        <img
          class="logo"
          src="/img/logo.jpg"
          alt="logo"
          @click="() => { this.$router.push({ path: '/' }) }"
        >
      </div>
      <div class="main-layout">
        <div class="h50 text-layout">
          <div class="iconfont icon-icon-email gray">
            <a :href="`mailto:${email}`">{{email}}</a>
          </div>
          <div class="iconfont icon-dianhua gray">173 2617 7986</div>
          <div>
            <a
              href="javascript:;"
              :class="lang === 'en' ? 'active': ''"
              class="change-lang-btn"
              @click="changeLanguage('')"
            >en</a>
            <span class="change-lang-line">|</span>
            <a
              href="javascript:;"
              :class="lang === 'zh' ? 'active': ''"
              class="change-lang-btn"
              @click="changeLanguage('')"
            >中文</a>
          </div>
        </div>
        <div class="h50 menu-layout">
          <div class="menus" @mouseleave="clearMenuShow">
            <div
              v-for="(item, index) in menuList"
              :key="item.label"
              class="menu-box"
              @click="changeMenuActive(index)"
              @mouseover="changeMenuShow(index)"
            >
              <router-link
                class="menu-item"
                :class="menuActive === index || menuChildrenShow === index ? 'router-link-active active' : ''"
                :to="{ path: item.router }"
              >{{ item.label }}</router-link>
              <div
                class="menu-dropdown"
                v-show="menuChildrenShow === index"
                @mouseleave="clearMenuShow"
              >
                <div v-for="menu in item.children" :key="menu.label">
                  <router-link
                    v-if="!menu.type"
                    class="menu-children"
                    :to="menu.router"
                  >{{ menu.label }}</router-link>
                  <a
                    v-else
                    class="menu-children"
                    href="javascript:;"
                    @click="anchorLink(menu.router)"
                  >{{ menu.label }}</a>
                </div>
              </div>
            </div>
          </div>
          <div class="search">
            <a
              href="javascript:;"
              class="iconfont icon-sousuo search-btn"
              @click="search"
              :class="isSearch ? 'active' : ''"
            >搜索</a>
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
      email: 'wanghong@gjasian.com',
      lang: 'zh',
      menuList: [],
      menuChildrenShow: -1,
      isSearch: false,
      searchData: '',
      menuActive: -1,
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
    changeMenuActive (index) {
      console.log(index)
      this.menuActive = index
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
    },
  },
  created () {
    this.changeLanguage(this.lang)
    this.menuList = [
      {
        label: '电商服务',
        router: '/service',
        children: [
          {
            label: '服务介绍',
            router: '/service#service',
            type: 1,
          },
          {
            label: '电商优势',
            router: '/service#advantage',
            type: 1,
          },
        ],
      },
      {
        label: '成功案例',
        router: '/case'
      },
      {
        label: '渠道资讯',
        router: '/qudaozixun'
      },
      {
        label: '营销学院',
        router: '/marketing/index',
        children: [
          {
            label: '互动问答',
            router: '/marketing/faq',
          },
          {
            label: '在线课堂',
            router: '/marketing/course',
          },
          {
            label: '营销百科',
            router: '/marketing/wiki',
          },
          {
            label: '行业白皮书',
            router: '/marketing/paper',
          },
        ],
      }
    ]
  },
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
.fade-enter-active,
.fade-leave-active {
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
  height: 120px;
  display: flex;
  justify-content: center;
  align-items: center;
  .main {
    max-width: 1200px;
    display: flex;
    width: 100%;
    max-width: 1300px;
    height: 100%;
    .logo-layout {
      margin-left: 10px;
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100%;
      flex: 1;
      .logo {
        width: 372px;
        height: 57px;
        cursor: pointer;
      }
    }
    .main-layout {
      width: 850px;
      margin: 10px;
      .text-layout {
        flex-direction: row;
        justify-content: flex-end;
        margin: 10px;
        margin-bottom: 0px;
        .brand {
          padding: 5px 10px;
          line-height: 30px;
          background: #2872ed;
          color: #ffffff;
        }
        .change-lang-btn {
          color: #999999;
          font-size: 14px;
          &:hover {
            color: #2872ed;
          }
          &.active {
            color: #2872ed;
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
        margin: 0px;
        .menus {
          display: flex;
          flex-direction: row;
          .menu-box {
            position: relative;
            padding: 0 10px;
            margin: 0px 5px;
            .menu-item {
              display: block;
              background: rgba($color: #003399, $alpha: 0);
              color: #000000;
              padding: 5px 0px;
              width: 80px;
              text-align: center;
              &:hover {
                background: #003399;
                color: #ffffff;
              }
              &.router-link-active {
                background: #003399;
                color: #ffffff;
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
                color: #ffffff;
                text-align: center;
                background: #003399;
                transition: 0.3s;
                border-bottom: 1px solid #2872ed;
                &:first-child {
                  border-top: 1px solid #2872ed;
                }
                &:hover {
                  background: #2872ed;
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
            color: #ffffff;
            line-height: 40px;
            font-size: 14px;
            background: #2872ed;
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
            background: #2872ed;
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
