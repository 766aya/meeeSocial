<template>
  <div id="marketing">
    <div class="banner">
      <img class="img" src="https://www.meetsocial.cn/templates/default/images/nybanner4.jpg">
    </div>
    <crumbs></crumbs>
    <div class="gov-title">课程回顾</div>
    <div class="classes">
      <router-link
        class="class-item"
        :to="{path: `/marketing/course/${item.filename}`}"
        v-for="(item, index) in classesData"
        :key="index"
      >
        <div class="img">
          <img :src="`/getPhoto?filename=${item.img}`">
        </div>
        <div class="title" v-text="item.title"></div>
      </router-link>
    </div>
    <el-tabs v-model="activeName" class="tabs-content">
      <div class="learn-more">
        <el-button size="small" type="primary" @click="learnMore">更多 ></el-button>
      </div>
      <el-tab-pane label="营销百科" name="yingxiaobaike">
        <div class="change-content">
          <router-link
            class="change-item"
            v-for="item in yingxiaobaike"
            :key="item.id"
            :to="{path: `/marketing/wiki/${item.filename}`}"
          >
            <span class="title">{{ item.title }}</span>
            <span class="create-time">{{ item.createTime }}</span>
          </router-link>
        </div>
      </el-tab-pane>
      <el-tab-pane label="行业白皮书" name="baipishu">
        <div class="change-content">
          <router-link
            class="change-item"
            v-for="item in baipishu"
            :key="item.id"
            :to="{path: `/marketing/parper/${item.filename}`}"
          >
            <span class="title">{{ item.title }}</span>
            <span class="create-time">{{ item.createTime }}</span>
          </router-link>
        </div>
      </el-tab-pane>
    </el-tabs>
    <div class="faq-box">
      <div class="title-box">
        <span class="title">常见问题</span>
        <router-link class="learn-more" :to="{path: '/marketing/faq'}">更多</router-link>
      </div>
      <div class="content">
        <router-link
          class="faq-item"
          v-for="(item, index) in faqData"
          :key="index"
          :to="{path: `/marketing/faq/${item.filename}`}"
        >
          <p class="questions iconfont icon-icon_tiwen">{{ item.title }}</p>
          <p class="answer">{{ item.desc }}</p>
        </router-link>
      </div>
    </div>
    <div class="hangyezixun">
      <div class="img-box left">
        <img src="https://www.meetsocial.cn/templates/default/images/xue_img9.jpg">
      </div>
      <div class="text-box">
        <div class="title">
          <span class="title">行业资讯</span>
          <router-link class="learn-more" :to="{path: '/marketing/wiki'}">更多</router-link>
        </div>
        <div class="desc">
          <ul>
            <li v-for="item in wikiList" :key="item.createTime">
              <router-link :to="{path: `/marketing/wiki/${item.filename}`}">{{ item.title }}</router-link>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <!-- <div class="tips-box">
      <h3 class="title">热门标签</h3>
      <div class="tips-content">
        <router-link
          class="tip-item"
          v-for="(item, index) in tipsData"
          :key="index"
          :to="{path: item.router}"
        >{{ item.title }}</router-link>
      </div>
    </div>-->
  </div>
</template>

<script>
import tipsData from './tips.json';

export default {
  name: 'marketing',
  data () {
    return {
      classesData: [],
      yingxiaobaike: [],
      baipishu: [],
      faqData: [],
      wikiList: [],
      tipsData: tipsData,
      activeName: 'yingxiaobaike',
    }
  },
  created () {
    this.getClassesData()
    this.getYingxiaobaike()
    this.getPaperList()
    this.getFAQList()
    this.getWikiList()
  },
  methods: {
    learnMore () {
      if (this.activeName === 'yingxiaobaike') {
        this.$router.push({ path: '/marketing/wiki' })
      } else {
        this.$router.push({ path: '/marketing/paper' })
      }
    },
    getClassesData () {
      this.axios
        .get('/getBreviaryArticleList', {
          params: {
            page: 0,
            pageNum: 9999,
            title: '',
            tags: JSON.stringify(['在线课堂']),
          },
        })
        .then(({ data }) => {
          this.classesData = data.data.data.map(item => {
            return JSON.parse(item)
          })
        })
    },
    getYingxiaobaike () {
      this.axios
        .get('/getBreviaryArticleList', {
          params: {
            page: 0,
            pageNum: 10,
            title: '',
            tags: JSON.stringify(['营销百科']),
          },
        })
        .then(({ data }) => {
          this.yingxiaobaike = data.data.data.map(item => {
            return JSON.parse(item)
          })
        })
    },
    getPaperList () {
      this.axios
        .get('/getBreviaryArticleList', {
          params: {
            page: 0,
            pageNum: 10,
            title: '',
            tags: JSON.stringify(['行业白皮书']),
          },
        })
        .then(({ data }) => {
          this.baipishu = data.data.data.map(item => {
            return JSON.parse(item)
          })
        })
    },
    getFAQList () {
      this.axios
        .get('/getBreviaryArticleList', {
          params: {
            page: 0,
            pageNum: 5,
            title: '',
            tags: JSON.stringify(['互动问答']),
          },
        })
        .then(({ data }) => {
          this.faqData = data.data.data.map(item => {
            return JSON.parse(item)
          })
        })
    },
    getWikiList () {
      this.axios
        .get('/getBreviaryArticleList', {
          params: {
            page: 0,
            pageNum: 4,
            title: '',
            tags: JSON.stringify(['营销百科']),
          },
        })
        .then(({ data }) => {
          this.wikiList = data.data.data.map(item => {
            return JSON.parse(item)
          })
        })
    },
  },
}
</script>

<style lang="scss" scoped>
#marketing {
  .banner {
    display: block;
    width: 100%;
    .img {
      width: 100%;
    }
  }
  .classes {
    width: 1200px;
    margin: 0 auto;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    .class-item {
      width: calc(25% - 20px);
      margin: 10px 10px;
      background: #f4f4f4;
      .title {
        padding: 10px 0.5em;
      }
      img {
        width: 100%;
        height: 150px;
        overflow: hidden;
      }
    }
  }
  .yingxiao-tabs {
    width: 1200px;
    margin: 50px auto;
    padding: 20px;
  }
  .tabs-content {
    width: 1200px;
    margin: 50px auto;
    .learn-more {
      display: flex;
      flex-direction: row;
      justify-content: flex-end;
      padding-right: 20px;
    }
  }
  .change-content {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    .change-item {
      width: 50%;
      line-height: 40px;
      display: flex;
      .title {
        flex: 1;
        padding-left: 10px;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
      }
      .create-time {
        flex: 1;
        display: flex;
        justify-content: flex-end;
        padding-right: 10px;
      }
    }
  }
  .faq-box {
    width: calc(1200px - 60px);
    margin: 0 auto 50px auto;
    padding: 30px;
    background: #f4f4f4;
    .title-box {
      display: flex;
      flex-direction: row;
      .title {
        font-size: 20px;
        font-weight: 700;
        line-height: 25px;
      }
      .learn-more {
        text-align: right;
        flex: 1;
        font-size: 20px;
        font-weight: 700;
        line-height: 25px;
        color: #2872ed;
      }
    }
    .content {
      display: flex;
      flex-direction: column;
      .faq-item {
        .questions {
          color: #2872ed;
          &::before {
            display: inline-block;
            line-height: 35px;
            padding-right: 1em;
          }
        }
        .answer {
          color: #666666;
          padding-left: 2em;
        }
      }
    }
  }
  .hangyezixun {
    width: 1200px;
    margin: 50px auto;
    display: flex;
    flex-direction: row;
    background: #f4f4f4;
    .img-box {
      width: 400px;
      height: 100%;
      overflow: hidden;
      position: relative;
      img {
        height: 100%;
        width: auto;
      }
      &.left::before {
        content: "";
        position: absolute;
        right: 0;
        top: 50%;
        margin-top: -17px;
        width: 17px;
        height: 34px;
        background-image: url(https://www.meetsocial.cn/templates/default/images/fuwu_icon1.png);
      }
      &.right::before {
        content: "";
        position: absolute;
        left: 0;
        top: 50%;
        margin-top: -17px;
        width: 17px;
        height: 34px;
        background-image: url(https://www.meetsocial.cn/templates/default/images/fuwu_icon2.png);
      }
    }
    .text-box {
      flex: 1;
      height: 100%;
      padding: 30px;
      .title {
        color: #333333;
        font-size: 24px;
        font-weight: 700;
        display: flex;
        flex-direction: row;
        .title {
          width: 200px;
        }
        .learn-more {
          flex: 1;
          text-align: right;
        }
      }
      .desc {
        color: #666666;
        font-size: 16px;
        line-height: 45px;
      }
    }
  }
  .tips-box {
    width: 1200px;
    margin: 50px auto;
    .tips-content {
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      justify-content: flex-start;
      .tip-item {
        line-height: 30px;
        padding: 0px 10px;
        margin: 0px 10px;
      }
    }
  }
}
</style>
