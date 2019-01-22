<template>
  <div class="case-tabs-box">
    <div class="header-bar">
      <a
        class="title-item"
        href="javascript:;"
        v-for="item in dataList"
        :key="item.name"
        :class="item.key === actived ? 'active' : ''"
        @click="changeBanner(item.key)">
        {{ $t(item.i18n) }}
      </a>
    </div>
    <div class="content-bar" v-for="(items, key) in carouselList" :key="key" v-show="key === actived">
      <el-carousel :interval="3000" type="card" height="400px" v-if="key === actived">
        <el-carousel-item v-for="item in items" :key="item.name" class="carousel-item">
          <a class="carousel-link" :href="item.router" target="_blank">
            <div class="img-box">
              <img :src="item.img">
            </div>
            <div class="text-box">
              <span class="title">{{item.name}}</span>
              <span class="p-name">{{ $t(item.pName) }}</span>
            </div>
          </a>
        </el-carousel-item>
      </el-carousel>
    </div>
  </div>
</template>

<script>
export default {
  name: 'caseTabs',
  data () {
    return {
      dataList: [
        {
          name: '游戏案例',
          i18n: 'routerMap.case.game',
          key: 'game'
        }, {
          name: 'APP案例',
          i18n: 'routerMap.case.app',
          key: 'app'
        }, {
          name: '品牌案例',
          i18n: 'routerMap.case.brand',
          key: 'brand'
        }, {
          name: '电商案例',
          i18n: 'routerMap.case.ec',
          key: 'ec'
        }
      ],
      carouselList: {
        game: [
          {
            img: 'https://www.meetsocial.cn/upload/case/1529893926227707371.jpg',
            name: '无敌炫斗王',
            pName: 'routerMap.case.game',
            router: 'https://www.meetsocial.cn/case/37.html'
          }, {
            img: 'https://www.meetsocial.cn/upload/case/1529892440819307215.jpg',
            name: 'ludia games',
            pName: 'routerMap.case.game',
            router: 'https://www.meetsocial.cn/case/36.html'
          }, {
            img: 'https://www.meetsocial.cn/upload/case/1529890446794444472.jpg',
            name: 'Dungeon Crash',
            pName: 'routerMap.case.game',
            router: 'https://www.meetsocial.cn/case/35.html'
          }, {
            img: 'https://www.meetsocial.cn/upload/case/1529886793930613814.png',
            name: 'Trivia Crack',
            pName: 'routerMap.case.game',
            router: 'https://www.meetsocial.cn/case/33.html'
          }, {
            img: 'https://www.meetsocial.cn/upload/case/1528685529958282150.jpg',
            name: '太极熊猫',
            pName: 'routerMap.case.game',
            router: 'https://www.meetsocial.cn/case/15.html'
          }, {
            img: 'https://www.meetsocial.cn/upload/case/1528675440518132319.jpg',
            name: '九阴真经',
            pName: 'routerMap.case.game',
            router: 'https://www.meetsocial.cn/case/3.html'
          }
        ],
        app: [
          {
            img: 'https://www.meetsocial.cn/upload/case/1530581243995960603.jpg',
            name: 'Jump Ramp',
            pName: 'routerMap.case.app',
            router: 'https://www.meetsocial.cn/case/43.html'
          }, {
            img: 'https://www.meetsocial.cn/upload/case/1528858021948287535.jpg',
            name: '点心省电',
            pName: 'routerMap.case.app',
            router: 'https://www.meetsocial.cn/case/24.html'
          }, {
            img: 'https://www.meetsocial.cn/upload/case/1528771763903825185.jpg',
            name: 'Apus',
            pName: 'routerMap.case.app',
            router: 'https://www.meetsocial.cn/case/23.html'
          }, {
            img: 'https://www.meetsocial.cn/upload/case/1528766981395664010.jpg',
            name: 'Blued',
            pName: 'routerMap.case.app',
            router: 'https://www.meetsocial.cn/case/22.html'
          }, {
            img: 'https://www.meetsocial.cn/upload/case/1528766995837829128.jpg',
            name: 'ofo',
            pName: 'routerMap.case.app',
            router: 'https://www.meetsocial.cn/case/19.html'
          }
        ],
        brand: [
          {
            img: 'https://www.meetsocial.cn/upload/case/1530580715536700385.jpg',
            name: 'iDEAL of Sweden',
            pName: 'routerMap.case.brand',
            router: 'https://www.meetsocial.cn/case/41.html'
          }, {
            img: 'https://www.meetsocial.cn/upload/case/1529888977186589346.jpg',
            name: 'InMyFace.com',
            pName: 'routerMap.case.brand',
            router: 'https://www.meetsocial.cn/case/34.html'
          }, {
            img: 'https://www.meetsocial.cn/upload/case/1529887136241604556.jpg',
            name: '途风',
            pName: 'routerMap.case.brand',
            router: 'https://www.meetsocial.cn/case/32.html'
          }, {
            img: 'https://www.meetsocial.cn/upload/case/1529888038373268070.jpg',
            name: 'App Mahal',
            pName: 'routerMap.case.brand',
            router: 'https://www.meetsocial.cn/case/31.html'
          }
        ],
        ec: [
          {
            img: 'https://www.meetsocial.cn/upload/case/1530581031473434033.jpg',
            name: 'iDEAL of Sweden',
            pName: 'routerMap.case.ec',
            router: 'https://www.meetsocial.cn/case/42.html'
          }, {
            img: 'https://www.meetsocial.cn/upload/case/1530572532639684818.jpg',
            name: 'Panli',
            pName: 'routerMap.case.ec',
            router: 'https://www.meetsocial.cn/case/39.html'
          }, {
            img: 'https://www.meetsocial.cn/upload/case/1529951528502291971.jpg',
            name: 'PUFII',
            pName: 'routerMap.case.ec',
            router: 'https://www.meetsocial.cn/case/38.html'
          }, {
            img: 'https://www.meetsocial.cn/upload/case/1528746174613061040.jpg',
            name: 'Cilory.com',
            pName: 'routerMap.case.ec',
            router: 'https://www.meetsocial.cn/case/18.html'
          }
        ]
      },
      actived: 'game'
    }
  },
  methods: {
    changeBanner (key) {
      console.log(key)
      this.actived = key
    }
  }
}
</script>

<style lang="scss" scoped>
  .case-tabs-box {
    margin: 0 0 25px 0;
  }
  .header-bar {
    width: 50%;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    margin: 0 auto;
    .title-item {
      display: block;
      font-size: 16px;
      font-weight: 700;
      color: #666666;
      line-height: 40px;
      margin: 15px 0;
      border-bottom: 3px solid rgba(255, 255, 255, 0);
      &:hover {
        color: #2872ED;
        border-bottom: 3px solid #2872ED;
      }
      &.active {
        color: #2872ED;
        border-bottom: 3px solid #2872ED;
      }
    }
  }
  .content-bar {
    width: 1200px;
    margin: 0 auto;
    .carousel-item {
      overflow: hidden;
      background: #FFFFFF;
    }
    .carousel-link {
      display: flex;
      flex-direction: column;
      .img-box {
        width: 100%;
        height: 300px;
        overflow: hidden;
        img {
          width: 100%;
          height: auto;
        }
      }
      .text-box {
        display: flex;
        flex-direction: column;
        .title {
          position: relative;
          text-align: center;
          color: #333333;
          font-size: 25px;
          line-height: 50px;
          &::before {
            content: '';
            position: absolute;
            width: 50px;
            height: 2px;
            background: #2B72ED;
            bottom: 0px;
            left: 50%;
            margin-left: -25px;
          }
        }
        .p-name {
          text-align: center;
          color: #2B72ED;
          font-size: 20px;
          line-height: 50px;
          font-weight: 700;
        }
      }
    }
  }
</style>
