<template>
  <div id="article-one">
    <h1 class="title">{{ content.title }}</h1>
    <div class="info-box" v-if="content.createTime || content.classification || content.tips">
      <div class="iconfont icon-shijian">{{ content.createTime }}</div>
      <div class="iconfont icon-biaoqian" v-if="content.classification">{{ content.classification }}</div>
      <div class="iconfont icon-biaoqian" v-if="content.tips">
        <a href="javascript:;" class="tip-item" v-for="(item, index) in content.tips" :key="index">{{ item }}</a>
      </div>
    </div>
    <div class="content">
      <video id="myVideo" class="video-js vjs-default-skin vjs-big-play-centered" controls preload="auto" data-setup='{}' style='width: 100%;height: auto'>
        <source id="source" :src="content.data[0].context" type="video/mp4" />
      </video>
    </div>
  </div>
</template>

<script>
export default {
  name: 'article-one',
  data () {
    return {
      content: {},
    }
  },
  watch: {
    '$route.params.id' () {
      this.initPage()
    },
  },
  methods: {
    initPage () {
      this.axios.get(`/getArticle`, {
        params: {
          filename: this.$route.params.id,
        },
      }).then(({ data }) => {
        this.content = JSON.parse(data.data)
        console.log(this.content)
      })
    },
  },
  created () {
    this.initPage()
  },
}
</script>

<style lang="scss" scoped>
  #article-one {
    .title {
      font-size: 30px;
      text-align: center;
      font-weight: normal;
      color: #333333;
    }
    .info-box {
      border-top: 1px solid #E5E5E5;
      border-bottom: 1px solid #E5E5E5;
      display: flex;
      flex-direction: row;
      line-height: 50px;
      justify-content: center;
      color: #999999;
      &>* {
        margin-right: 25px;
        &.iconfont {
          &::before {
            margin-right: 10px;
          }
        }
        .tip-item {
          margin-right: 10px;
        }
      }
    }
    .content {
      .list {
        ul,ol {
          li {
            font-size: 20px;
            line-height: 30px;
            color: #666666;
          }
        }
      }
      .title {
        display: flex;
        flex-direction: row;
        margin-top: 20px;
        h1 {
          display: block;
          text-align: left;
          font-weight: normal;
          font-size: 30px;
          color: #2872ED;
          line-height: 30px;
          margin: 0;
          padding: 0;
        }
        .line {
          height: 1px;
          background: #E5E5E5;
          flex: 1;
          margin-top: 15px;
          margin-left: 10px;
        }
      }
      .text {
        p {
          font-size: 20px;
          line-height: 30px;
          color: #666666;
          text-indent: 2em;
        }
      }
      .img {
        width: 100%;
        img {
          display: block;
          margin: 0 auto;
          text-align: center;
        }
      }
    }
  }
  .no-data {
    font-size: 35px;
    color: #999999;
    text-align: center;
  }
</style>
