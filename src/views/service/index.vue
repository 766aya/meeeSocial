<template>
  <div id="services">
    <banner height="600" tag="浩捷亚服务"></banner>
    <crumbs :routerList="routerList"></crumbs>
    <s-service></s-service>
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
    <s-latest-case></s-latest-case>
    <channel></channel>
    <s-faq></s-faq>
  </div>
</template>

<script>
import service from './service'
import advantage from './advantage'
import sideBox from './sideBox'
import latestCase from './latestCase'
import faq from './faq'

export default {
  name: 'service',
  components: {
    sService: service,
    sAdvantage: advantage,
    sSideBox: sideBox,
    sLatestCase: latestCase,
    sFaq: faq,
  },
  data () {
    return {
      routerList: [
        {
          name: this.$route.meta.label,
          path: this.$route.fullPath,
        },
      ],
      advantageList: [
        {
          position: 'left',
          img: 'https://www.meetsocial.cn/templates/default/images/fuwu1.jpg',
          title: 'Facebook海外广告投放优化',
          desc:
            '浩捷亚互动能够为广告主获取最优Facebook官方资源及大数据支持，帮助中国广告主发掘最有潜力的市场和受众，并为客户开启绿色开户通道。',
        },
        {
          position: 'right',
          img: 'https://www.meetsocial.cn/templates/default/images/fuwu2.jpg',
          title: '顶尖国际化团队',
          desc:
            'Blueprint等官方认证资质，精通当地文化的外籍专家指导全球不同区域的推广运营，全面支持小语种市场。',
        },
        {
          position: 'left',
          img: 'https://www.meetsocial.cn/templates/default/images/fuwu3.jpg',
          title: '国际一流水准的创意团队',
          desc:
            '浩捷亚互动旗下海外广告创意专家，为客户提供基于广告历史数据以及市场现状数据的素材创意与制作服务。',
        },
        {
          position: 'right',
          img: 'https://www.meetsocial.cn/templates/default/images/fuwu4.jpg',
          title: '独家技术产品',
          desc:
            '基于渠道及公司积累的大数据，利用一流技术为实现精准高效的数字营销提供强大的支持和保障。自主研发的Facebook官方授权智能投放系统——逸途助您轻松出海。',
        },
      ],
    }
  },
}
</script>
