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
        {{item.name}}
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
              <span class="title">{{ item.name }}</span>
              <span class="p-name">{{ item.pName }}</span>
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
          key: 'game',
        }, {
          name: 'APP案例',
          key: 'app',
        }, {
          name: '品牌案例',
          key: 'brand',
        }, {
          name: '电商案例',
          key: 'ec',
        },
      ],
      carouselList: {
        game: [],
        app: [],
        brand: [],
        ec: [],
      },
      actived: 'game',
    }
  },
  created () {
    this.getArticle()
  },
  methods: {
    changeBanner (key) {
      this.actived = key
    },
    getArticle () {
      let tags = [
        JSON.stringify(['案例', "游戏案例"]),
        JSON.stringify(['案例', "APP案例"]),
        JSON.stringify(['案例', "品牌案例"]),
        JSON.stringify(['案例', "电商案例"]),
      ]
      tags.forEach(item=>{
        this.axios.get('/getBreviaryArticleList', {
          params: {
            page: 0,
            pageNum: 6,
            title: '',
            tags: item,
          },
        })
      })
    },
  },
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
