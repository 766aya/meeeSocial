<template>
  <el-carousel :height="`${height}px`" class="banner">
    <el-carousel-item v-for="item in bannerList" :key="item.alt">
      <a href="javascript:;" class="banner-box" @click="getWenzhang(item.filename)">
        <img :src="`/getPhoto?filename=${item.img}`" class="banner-img">
      </a>
    </el-carousel-item>
  </el-carousel>
</template>

<script>
export default {
  name: 'banner',
  data () {
    return {
      bannerList: [],
    }
  },
  props: {
    height: {
      default: '150px',
      type: String,
    },
    tag: {
      default: '首页',
      type: String,
    },
  },
  created () {
    this.getBanners()
  },
  methods: {
    getBanners () {
      this.axios
        .get('/getBreviaryArticleList', {
          params: {
            tags: JSON.stringify(['轮播', this.tag]),
            title: '',
            page: 0,
            pageNum: 6,
          },
        })
        .then(({ data }) => {
          this.bannerList = data.data.data.map(item => {
            return JSON.parse(item)
          })
          console.log(this.bannerList)
        })
    },
    getArticle (filename, cb) {
      this.axios
        .get(`/getArticle`, {
          params: {
            filename: filename,
          },
        })
        .then(({ data }) => {
          cb(JSON.parse(data.data).data[0].context)
        })
    },
    getWenzhang (filename) {
      this.getArticle(filename, articleName => {
        this.$router.push({ path: `/marketing/bannerTo/${articleName}` })
      })
    },
  },
}
</script>

<style lang="scss" scoped>
.banner {
  min-width: 1200px;
  .banner-box {
    display: block;
    height: 100%;
    width: 100%;
    .banner-img {
      display: block;
      height: 100%;
      width: auto;
      text-align: center;
      margin: 0 auto;
    }
  }
}
</style>
