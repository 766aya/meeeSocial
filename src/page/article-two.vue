<template>
  <div id="article-two">
    <div class="header">
      <div>
        <img :src="`/getPhoto?filename=${content.img}`">
        <img class="logo" v-if="content.logo" :src="content.logo">
      </div>
    </div>
    <h1 class="title">{{ content.title }}</h1>
    <div class="info-box" v-if="content.createTime || content.classification || content.tips">
      <div class="iconfont icon-yonghu" v-if="content.publisher">{{ content.publisher }}</div>
      <div class="iconfont icon-shijian" v-if="content.createTime">{{ content.createTime }}</div>
      <div class="iconfont icon-biaoqian" v-if="content.classification">{{ content.classification }}</div>
      <div class="iconfont icon-biaoqian" v-if="content.tips">
        <a href="javascript:;" class="tip-item" v-for="(item, index) in content.tips" :key="index">{{ item }}</a>
      </div>
    </div>
    <div class="content">
      <h1 class="title success">成功案例</h1>
      <p class="text" v-if="content.data[0].context">{{ content.data[0].context }}</p>
      <div class="datas" v-if="content.data.datas">
        <div class="content">
          <div class="item" v-for="(item, index) in content.data.datas" :key="index">
            <div class="data">
              <h1>{{item.number}}</h1>
              <h2>{{item.symbol}}</h2>
            </div>
            <h3 class="desc">{{item.desc}}</h3>
          </div>
        </div>
      </div>
      <h1 class="title brand">品牌故事</h1>
      <p class="text" v-if="content.data[1].context">{{ content.data[1].context }}</p>
      <h1 class="title marking">营销目标</h1>
      <p class="text" v-if="content.data[2].context">{{ content.data[2].context }}</p>
      <div class="programme">
        <h1 class="title programme">解决方案</h1>
        <p class="text programme" v-if="content.data[3].context">{{ content.data[3].context }}</p>
      </div>
      <h1 class="title solution">品牌成功</h1>
      <p class="text" v-if="content.data[4].context">{{ content.data[4].context }}</p>
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
  #article-two {
    .header {
      position: relative;
      width: 1200px;
      margin: 30px auto;
      .logo {
        position: absolute;
        width: 150px;
        height: 150px;
        top: 100%;
        left: 75px;
        margin-top: -75px;
        border: 1px solid #E5E5E5;
      }
    }
    h1.title {
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
      > .programme {
        width: 100%;
        background: url('https://www.meetsocial.cn/templates/default/images/show_bg2.jpg') no-repeat center center;
        overflow: hidden;
        margin-top: 50px;
      }
      .datas {
        background: url('https://www.meetsocial.cn/templates/default/images/show_bg.jpg') no-repeat center center;
        width: 100%;
        margin-top: 30px;
        .content {
          width: 1200px;
          margin: 0 auto;
          display: flex;
          flex-direction: row;
          justify-content: space-around;
          .item {
            display: flex;
            justify-content: center;
            flex-direction: column;
            margin: 60px auto;
          }
          .data {
            display: flex;
            flex-direction: row;
            align-items: flex-end;
            color: #2872ED;
            text-align: center;
            justify-content: center;
            h1 {
              font-size: 50px;
              line-height: 50px;
              margin: 0;
              padding: 0;
            }
            h2 {
              font-size: 20px;
              line-height: 20px;
              margin: 0;
              padding: 0;
            }
          }
          .desc {
            text-align: center;
            font-weight: normal;
          }
        }
      }
      .title {
        color: #2872ED;
        font-weight: 700;
        &.success::before {
          content: "Cases";
          position: absolute;
          color: #EEEEEE;
          z-index: -1;
          text-align: center;
          margin-top: 23px;
          margin-left: 21px;
        }
        &.brand::before {
          content: "Brand";
          position: absolute;
          color: #EEEEEE;
          z-index: -1;
          text-align: center;
          margin-top: 23px;
          margin-left: 21px;
        }
        &.marking::before {
          content: "Marking";
          position: absolute;
          color: #EEEEEE;
          z-index: -1;
          text-align: center;
          margin-top: 23px;
          margin-left: 3px;
        }
        &.programme {
          color: #FFFFFF;
          z-index: 2;
          padding-top: 20px;
        }
        &.programme::before {
          content: "Solution";
          position: absolute;
          color: #EEEEEE;
          z-index: 1;
          opacity: 0.2;
          text-align: center;
          margin-top: 23px;
          margin-left: 0px;
        }
        &.solution::before {
          content: "Solution";
          position: absolute;
          color: #EEEEEE;
          z-index: -1;
          text-align: center;
          margin-top: 23px;
          margin-left: 3px;
        }
      }
      .text {
        display: block;
        max-width: 1200px;
        margin: 0 auto;
        text-align: center;
        line-height: 25px;
        font-size: 18px;
        color: #999999;
        &.programme {
          color: #FFFFFF;
          padding-bottom: 50px;
        }
      }
    }
  }
</style>
