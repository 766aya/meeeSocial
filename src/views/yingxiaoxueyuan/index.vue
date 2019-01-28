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
    <div class="yingxiao-tabs">

    </div>
  </div>
</template>

<script>
import classesData from './classes.json'
export default {
  name: 'yingxiaoxueyuan',
  data () {
    return {
      classesData: classesData
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
}
</style>
