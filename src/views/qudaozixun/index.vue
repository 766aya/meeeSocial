<template>
  <div id="case">
    <div class="banner">
      <img class="img" src="https://www.meetsocial.cn/templates/default/images/nybanner3.gif">
    </div>
    <crumbs></crumbs>
    <div class="banner02"></div>
    <div class="banner03"></div>
    <s-advantage>
      <s-side-box
        v-for="item in advantageList"
        :key="item.title"
        :position="item.position"
        :title="item.title"
        :desc="item.desc"
        :img="item.img"
      ></s-side-box>
    </s-advantage>
    <latestCase></latestCase>
    <el-tabs v-model="activeName" class="tabs-content">
      <div class="learn-more">
        <el-button size="small" type="primary" @click="learnMore">更多 ></el-button>
      </div>
      <el-tab-pane label="常见问题" name="first">
        <div class="change-content">
          <router-link
            class="change-item"
            v-for="item in faqList"
            :key="item.id"
            :to="{path: `/marketing/faq/${item.filename}`}"
          >
            <span class="title">{{ item.title }}</span>
            <span class="create-time">{{ item.createTime }}</span>
          </router-link>
        </div>
      </el-tab-pane>
      <el-tab-pane label="营销百科" name="second">
        <div class="change-content">
          <router-link
            class="change-item"
            v-for="item in wikiList"
            :key="item.id"
            :to="{path: item.router}"
          >
            <span class="title">{{ item.title }}</span>
            <span class="create-time">{{ item.createTime }}</span>
          </router-link>
        </div>
      </el-tab-pane>
      <el-tab-pane label="行业资讯" name="third">
        <div class="change-content">
          <router-link
            class="change-item"
            v-for="item in parperList"
            :key="item.id"
            :to="{path: item.router}"
          >
            <span class="title">{{ item.title }}</span>
            <span class="create-time">{{ item.createTime }}</span>
          </router-link>
        </div>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import advantage from '../service/advantage'
import sideBox from '../service/sideBox'
import latestCase from '../service/latestCase'
export default {
  name: 'qudaozixun',
  components: {
    sAdvantage: advantage,
    sSideBox: sideBox,
    latestCase,
  },
  data () {
    return {
      advantageList: [
        {
          position: 'left',
          img: 'https://www.meetsocial.cn/templates/default/images/fuwu1.jpg',
          title: 'Facebook中国区官方授权代理机构',
          desc:
            '飞书互动能够为广告主获取最优Facebook官方资源及大数据支持，帮助中国广告主发掘最有潜力的市场和受众，并为客户开启绿色开户通道。',
        },
        {
          position: 'right',
          img: 'https://www.meetsocial.cn/templates/default/images/fuwu2.jpg',
          title: '顶尖国际化团队',
          desc:
            '服务团队全部持有Facebook Blueprint等官方认证资质，精通当地文化的外籍专家指导全球不同区域的推广运营，全面支持小语种市场。',
        },
        {
          position: 'left',
          img: 'https://www.meetsocial.cn/templates/default/images/fuwu3.jpg',
          title: '国际一流水准的创意团队',
          desc:
            '飞书互动旗下海外广告创意专家，为客户提供基于广告历史数据以及市场现状数据的素材创意与制作服务。',
        },
        {
          position: 'right',
          img: 'https://www.meetsocial.cn/templates/default/images/fuwu4.jpg',
          title: '独家技术产品',
          desc:
            '基于渠道及公司积累的大数据，利用一流技术为实现精准高效的数字营销提供强大的支持和保障。自主研发的Facebook官方授权智能投放系统——逸途助您轻松出海。',
        },
      ],
      activeName: 'first',
      faqList: [],
      wikiList: [],
      parperList: [],
    }
  },
  created () {
    this.getFaqList()
    this.getWikiList()
    this.getParperList()
  },
  methods: {
    handleClick (tab, event) {
      console.log(this.activeName)
    },
    learnMore () {
      this.$router.push({ path: '/' })
    },
    getFaqList () {
      this.axios
        .get('/getBreviaryArticleList', {
          params: {
            page: 0,
            pageNum: 10,
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
            pageNum: 10,
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
    getParperList () {
      this.axios
        .get('/getBreviaryArticleList', {
          params: {
            page: 0,
            pageNum: 10,
            title: '',
            tags: JSON.stringify(['文章', '行业白皮书']),
          },
        })
        .then(({ data }) => {
          this.parperList = data.data.data.map(item => {
            return JSON.parse(item)
          })
        })
    },
  },
}
</script>

<style lang="scss" scoped>
#case {
  .banner {
    display: block;
    width: 100%;
    .img {
      width: 100%;
    }
  }
  .banner02 {
    width: 100%;
    min-width: 1200px;
    background: url(/img/ditch_bg1.jpg) no-repeat center center;
    height: 785px;
  }
  .banner03 {
    width: 100%;
    min-width: 1200px;
    background: url(/img/ditch_bg2.jpg) no-repeat center center;
    height: 785px;
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
      }
      .create-time {
        flex: 1;
        display: flex;
        justify-content: flex-end;
        padding-right: 10px;
      }
    }
  }
}
</style>
