<template>
  <div class="list-map">
    <div class="item" v-for="(item, index) in dataList" :key="index">
      <div class="img-box" v-if="item.imgSrc">
        <img :src="item.imgSrc">
      </div>
      <div class="text-box">
        <router-link class="title" :to="{path: `/marketing/${routeActive}/${item.id}`}">{{ item.title }}</router-link>
        <div class="desc" >{{ item.desc }}</div>
        <div class="other">
          <div class="iconfont icon-shijian createTime" v-if="item.createTime">{{ item.createTime }}</div>
          <div class="iconfont icon-yonghu publisher" v-if="item.publisher">{{ item.publisher }}</div>
          <div class="iconfont icon-biaoqian tips" v-if="item.tips">
            <router-link v-for="(tip, i) in item.tips" :key="i" :to="{path: tip.router}">
              {{ tip.title }}
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'listMap',
  data () {
    return {
      dataList: [],
      routeActive: ''
    }
  },
  methods: {
    getList () {
      var routeInfo = this.$route.fullPath

      if (routeInfo.indexOf('faq') > -1) {
        this.routeActive = 'faq'
        this.getFAQList()
      } else if (routeInfo.indexOf('wiki') > -1) {
        this.routeActive = 'wiki'
        this.getWikiList()
      } else {
        console.log(routeInfo)
      }
    },
    getFAQList () {
      this.axios.get('/api/marketing/faq').then(({ data }) => {
        this.dataList = data
      })
    },
    getWikiList () {
      this.axios.get('/api/marketing/wiki').then(({ data }) => {
        this.dataList = data
      })
    }
  },
  created () {
    this.getList()
  }
}
</script>

<style lang="scss" scoped>
  .list-map {
    display: flex;
    flex-direction: column;
    .item {
      display: flex;
      flex-direction: row;
      padding-bottom: 50px;
      margin-bottom: 50px;
      border-bottom: 1px solid #CCCCCC;
      .img-box {
        width: 240px;
        height: 170px;
        overflow: hidden;
        img {
          width: 100%;
        }
      }
      .text-box {
        flex: 1;
        padding: 15px;
        overflow: hidden;
        .title {
          font-size: 25px;
          color: #333333;
          &:hover {
            color: #2872ED;
          }
        }
        .desc {
          margin-top: 15px;
          margin-bottom: 10px;
          min-height: 3em;
          line-height: 25px;
          font-size: 14px;
          color: #666666;
          flex: 1;
        }
        .other {
          display: flex;
          flex-direction: row;
          line-height: 30px;
          .createTime {
            color: #666666;
            margin-right: 30px;
            word-wrap: break-word;
          }
          .publisher {
            color: #666666;
            margin-right: 30px;
            word-wrap: break-word;
          }
          .tips {
            overflow: hidden;
            * {
              word-wrap: break-word;
            }
          }
          .iconfont::before {
            margin-right: 10px;
          }
        }
      }
    }
  }
</style>
