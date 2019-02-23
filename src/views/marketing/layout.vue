<template>
  <div id="wiki">
    <div class="banner">
      <img
        class="img"
        v-if="$route.path.indexOf('faq') > -1"
        src="https://www.meetsocial.cn/templates/default/images/wendaxiangqing.jpg"
      >
      <img
        class="img"
        v-else-if="$route.path.indexOf('news') > -1"
        src="https://www.meetsocial.cn/templates/default/images/gongsixiangqing3.jpg"
      >
      <img
        class="img"
        v-else
        src="https://www.meetsocial.cn/templates/default/images/g_banner1.jpg"
      >
    </div>
    <crumbs></crumbs>
    <div class="content">
      <div class="lside">
        <div>
          <img src="https://www.meetsocial.cn/upload/faq/1547599969386455848.png">
        </div>
        <listTitle title="行业资讯"></listTitle>
        <div class="list-box">
          <router-link
            class="list-item"
            v-for="(item, index) in newsList"
            :key="index"
            :to="{path: `/marketing/news/${item.filename}`}"
          >{{ item.title }}</router-link>
        </div>
        <listTitle title="营销百科"></listTitle>
        <div class="list-box">
          <router-link
            class="list-item"
            v-for="(item, index) in wikiList"
            :key="index"
            :to="{path: `/marketing/wiki/${item.filename}`}"
          >{{ item.title }}</router-link>
        </div>
        <listTitle title="常见问题"></listTitle>
        <div class="list-box">
          <router-link
            class="list-item"
            v-for="(item, index) in faqList"
            :key="index"
            :to="{path: `/marketing/faq/${item.filename}`}"
          >{{ item.title }}</router-link>
        </div>
        <listTitle title="热门标签"></listTitle>
        <div class="tips-box">
          <!-- <router-link class="tip-item"  v-for="(item, index) in hotTipsList" :key="index" :to="{path: item.router}">{{ item.title }}</router-link> -->
          <a
            class="tip-item"
            v-for="(item, index) in hotTipsList"
            :key="index"
            href="javascript:;"
          >{{ item.title }}</a>
        </div>
      </div>
      <div class="rside">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'wiki',
  data () {
    return {
      newsList: [],
      wikiList: [],
      faqList: [],
      hotTipsList: [],
    }
  },
  methods: {
    getList () {
      this.getNewsList()
      this.getFAQList()
      this.getWikiList()
      this.getHotTipsList()
    },
    getNewsList () {
      this.axios
        .get('/getBreviaryArticleList', {
          params: {
            page: 0,
            pageNum: 5,
            title: '',
            tags: JSON.stringify(['文章', '行业资讯']),
          },
        })
        .then(({ data }) => {
          this.newsList = data.data.data.map(item => {
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
            tags: JSON.stringify(['文章', '互动问答']),
          },
        })
        .then(({ data }) => {
          this.faqList = data.data.data.map(item => {
            return JSON.parse(item)
          })
        })
    },
    getWikiList () {
      this.axios
        .get('/getBreviaryArticleList', {
          params: {
            page: 0,
            pageNum: 5,
            title: '',
            tags: JSON.stringify(['文章', '营销百科']),
          },
        })
        .then(({ data }) => {
          this.wikiList = data.data.data.map(item => {
            return JSON.parse(item)
          })
        })
    },
    getHotTipsList () {
      this.axios.get('/api/marketing/hotTips').then(({ data }) => {
        this.hotTipsList = data.length > 4 ? data.slice(0, 4) : data
      })
    },
  },
  created () {
    this.getList()
  },
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
          text-overflow: ellipsis;
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
          border: 1px solid #e0e0e0;
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
