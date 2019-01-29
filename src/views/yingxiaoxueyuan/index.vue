<template>
  <div id="yingxiaoxueyuan">
    <div class="banner">
      <img class="img" src="https://www.meetsocial.cn/templates/default/images/nybanner4.jpg">
    </div>
    <crumbs></crumbs>
    <div class="gov-title">在线课堂</div>
    <div class="gov-title">课程回顾</div>
    <div class="classes">
      <router-link class="class-item" :to="{path: item.router}" v-for="(item, index) in classesData" :key="index">
        <div class="img">
          <img :src="item.img">
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
          <router-link class="change-item" v-for="item in yingxiaobaike" :key="item.id" :to="{path: item.router}">
            <span class="title">{{ item.title }}</span>
            <span class="create-time">{{ item.createTime }}</span>
          </router-link>
        </div>
      </el-tab-pane>
      <el-tab-pane label="行业白皮书" name="baipishu">
        <div class="change-content">
          <router-link class="change-item" v-for="item in baipishu" :key="item.id" :to="{path: item.router}">
            <span class="title">{{ item.title }}</span>
            <span class="create-time">{{ item.createTime }}</span>
          </router-link>
        </div>
      </el-tab-pane>
    </el-tabs>
    <div class="faq-box">
      <div class="title-box">
        <span class="title">常见问题</span>
        <router-link class="learn-more" :to="{path: '/'}">更多</router-link>
      </div>
      <div class="content">
        <router-link class="faq-item" v-for="(item, index) in faqData" :key="index" :to="item.router">
          <p class="questions iconfont icon-icon_tiwen">{{ item.questions }}</p>
          <p class="answer">{{ item.answer }}</p>
        </router-link>
      </div>
    </div>
    <div class="hangyezixun">
      <div class="img-box left">
        <img src="https://www.meetsocial.cn/templates/default/images/xue_img9.jpg">
      </div>
      <div class="text-box">
        <h1 class="title">行业资讯</h1>
        <p class="desc">
          <ul>
            <li>
              <router-link :to="{path: '/'}">
                善用Facebook数字营销，领跑消费电子品市场
              </router-link>
            </li>
            <li>
              <router-link :to="{path: '/'}">
                情感牌怎么打才能赢?六招教你与客户“走心”
              </router-link>
            </li>
            <li>
              <router-link :to="{path: '/'}">
                24区丨2019内容营销七大关键趋势，你猜中了几个？
              </router-link>
            </li>
            <li>
              <router-link :to="{path: '/'}">
                想出海，就来pick一下Facebook营销入门指南
              </router-link>
            </li>
          </ul>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import classesData from './classes.json'
import yingxiaobaike from './yingxiaobaike.json'
import baipishu from './baipishu.json'
import faqData from './faq.json'

export default {
  name: 'yingxiaoxueyuan',
  data () {
    return {
      classesData: classesData,
      yingxiaobaike: yingxiaobaike,
      baipishu: baipishu,
      faqData: faqData,
      activeName: 'yingxiaobaike'
    }
  },
  methods: {
    learnMore () {
      this.$message.success('查看更多')
    }
  }
}
</script>

<style lang="scss" scoped>
#yingxiaoxueyuan {
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
      background: #F4F4F4;
      .title {
        padding: 10px 0.5em;
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
    width: 1200px;
    margin: 0 auto 50px auto;
    padding: 30px;
    background: #F4F4F4;
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
        color: #2872ED;
      }
    }
    .content {
      display: flex;
      flex-direction: column;
      .faq-item {
        .questions {
          color: #2872ED;
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
    margin: 0 auto;
    display: flex;
    flex-direction: row;
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
      }
      .desc {
        color: #666666;
        font-size: 16px;
        line-height: 45px;
      }
    }
  }
}
</style>
