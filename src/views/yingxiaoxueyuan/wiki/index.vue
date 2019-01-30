<template>
  <div id="wiki">
    <div class="banner">
      <img class="img" src="https://www.meetsocial.cn/templates/default/images/g_banner1.jpg">
    </div>
    <crumbs></crumbs>
    <div class="content">
      <div class="lside">
        <div>
          <img src="https://www.meetsocial.cn/upload/faq/1547599969386455848.png">
        </div>
        <listTitle title="新闻动态"></listTitle>
        <div class="list-box">
          <router-link class="list-item" v-for="(item, index) in news" :key="index" :to="{path: item.router}">{{ item.title }}</router-link>
        </div>
        <listTitle title="营销百科"></listTitle>
        <div class="list-box">
          <router-link class="list-item" v-for="(item, index) in wiki" :key="index" :to="{path: item.router}">{{ item.title }}</router-link>
        </div>
        <listTitle title="常见问题"></listTitle>
        <div class="list-box">
          <router-link class="list-item" v-for="(item, index) in faq" :key="index" :to="{path: item.router}">{{ item.title }}</router-link>
        </div>
        <listTitle title="热门标签"></listTitle>
        <div class="tips-box">
          <router-link class="tip-item" v-for="(item, index) in hotTips" :key="index" :to="{path: item.router}">{{ item.title }}</router-link>
        </div>
      </div>
      <div class="rside">2</div>
    </div>
  </div>
</template>

<script>
import news from './news.json'
import wiki from './wiki.json'
import faq from './faq.json'
import hotTips from './hotTips.json'

export default {
  name: 'wiki',
  data () {
    return {
      news,
      wiki,
      faq,
      hotTips
    }
  }
}
</script>

<style lang="scss" scoped>
#wiki {
  .banner {
    display: block;
    width: 100%;
    .img {
      width: 100%;
    }
  }
  .content {
    display: flex;
    flex-direction: row;
    width: 1200px;
    margin: 50px auto;
    .lside {
      width: 340px;
      .list-box {
        padding: 0px 0.5em;
        display: flex;
        flex-direction: column;
        .list-item {
          margin: 5px 0;
          line-height: 25px;
          overflow: hidden;
          text-overflow:ellipsis;
          white-space: nowrap;
        }
      }
      .tips-box {
        padding: 0px 0.5em;
        display: flex;
        flex-direction: column;
        .tip-item {
          display: block;
          text-align: center;
          border: 1px solid #E0E0E0;
          margin: 3px 0px;
          padding: 7px 0px;
        }
      }
    }
    .rside {
      flex: 1;
      margin-left: 50px;
    }
  }
}
</style>
