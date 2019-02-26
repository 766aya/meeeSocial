<template>
  <div class="case-tabs-box">
    <div class="header-bar">
      <a
        class="title-item"
        href="javascript:;"
        v-for="item in dataList"
        :key="item.name"
        :class="item.key === actived ? 'active' : ''"
        @click="changeBanner(item.key)"
      >{{item.name}}</a>
    </div>
    <div
      class="content-bar"
      v-for="(items, key) in carouselList"
      :key="key"
      v-show="key === actived"
    >
      <el-carousel :interval="3000" type="card" height="400px" v-if="key === actived">
        <el-carousel-item v-for="item in items" :key="item.title" class="carousel-item">
          <router-link class="carousel-link" :to="{ path: `/case/${actived}/${item.filename}` }">
            <div class="img-box">
              <img :src="`/getPhoto?filename=${item.img}`">
            </div>
            <div class="text-box">
              <span class="title">{{ item.title }}</span>
              <span class="p-name">{{ actived }}</span>
            </div>
          </router-link>
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
          key: 'gameCase',
        },
        {
          name: 'APP案例',
          key: 'appCase',
        },
        {
          name: '品牌案例',
          key: 'brandCase',
        },
        {
          name: '电商案例',
          key: 'shopCase',
        },
      ],
      carouselList: {
        gameCase: [],
        appCase: [],
        brandCase: [],
        shopCase: [],
      },
      actived: 'gameCase',
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
        JSON.stringify(['案例', '游戏案例']),
        JSON.stringify(['案例', 'APP案例']),
        JSON.stringify(['案例', '品牌案例']),
        JSON.stringify(['案例', '电商案例']),
      ]
      tags.forEach(item => {
        this.axios
          .get('/getBreviaryArticleList', {
            params: {
              page: 0,
              pageNum: 6,
              title: '',
              tags: item,
            },
          })
          .then(({ data }) => {
            let dataV = data.data.data.map(item => {
              return JSON.parse(item)
            })
            if (item.indexOf('游戏案例') > -1) {
              this.$set(this.carouselList, 'gameCase', dataV)
            }
            if (item.indexOf('APP案例') > -1) {
              this.$set(this.carouselList, 'appCase', dataV)
            }
            if (item.indexOf('品牌案例') > -1) {
              this.$set(this.carouselList, 'brandCase', dataV)
            }
            if (item.indexOf('电商案例') > -1) {
              this.$set(this.carouselList, 'shopCase', dataV)
            }
          })
      })
    },
    computedLinkTo (type, filename) {
      console.log(`/case/${type}/${filename}`)
      return `/case/appcase/${filename}`
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
      color: #2872ed;
      border-bottom: 3px solid #2872ed;
    }
    &.active {
      color: #2872ed;
      border-bottom: 3px solid #2872ed;
    }
  }
}
.content-bar {
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
  .carousel-item {
    overflow: hidden;
    background: #ffffff;
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
          content: "";
          position: absolute;
          width: 50px;
          height: 2px;
          background: #2b72ed;
          bottom: 0px;
          left: 50%;
          margin-left: -25px;
        }
      }
      .p-name {
        text-align: center;
        color: #2b72ed;
        font-size: 20px;
        line-height: 50px;
        font-weight: 700;
      }
    }
  }
}
</style>
