<template>
  <div id="services">
    <banner height="500" :bannerList="bannerList"></banner>
    <crumbs :routerList="routerList"></crumbs>
    <s-service></s-service>
    <s-advantage>
      <s-side-box
        v-for="item in advantageList"
        :key="$t(item.title)"
        :position="item.position"
        :title="item.title"
        :desc="item.desc"
        :img="item.img">
      </s-side-box>
    </s-advantage>
    <s-latest-case></s-latest-case>
  </div>
</template>

<script>
import service from './service'
import advantage from './advantage'
import sideBox from './sideBox'
import latestCase from './latestCase'
export default {
  name: 'service',
  components: {
    'sService': service,
    'sAdvantage': advantage,
    'sSideBox': sideBox,
    'sLatestCase': latestCase
  },
  data () {
    return {
      bannerList: [
        {
          routerType: '1',
          routerLink: '/',
          img: 'https://img.zcool.cn/community/01ebd45a2bf71ea80120ba38c96af3.jpg'
        }, {
          routerType: '1',
          routerLink: '/',
          img: 'https://img.zcool.cn/community/019fcc5c242c65a80121df904686cb.jpg'
        }, {
          routerType: '1',
          routerLink: '/',
          img: 'https://img.zcool.cn/community/01171c5630730432f8755701b5cff0.jpg'
        }, {
          routerType: '1',
          routerLink: '/',
          img: 'https://img.zcool.cn/community/013b0b5630731532f875570151725e.jpg'
        }
      ],
      routerList: [
        {
          name: this.$route.meta.label,
          path: this.$route.fullPath
        }
      ],
      advantageList: [
        {
          position: 'left',
          img: 'https://www.meetsocial.cn/templates/default/images/fuwu1.jpg',
          title: 'service.sideOne.title',
          desc: 'service.sideOne.desc'
        }, {
          position: 'right',
          img: 'https://www.meetsocial.cn/templates/default/images/fuwu2.jpg',
          title: 'service.sideTwo.title',
          desc: 'service.sideTwo.desc'
        }, {
          position: 'left',
          img: 'https://www.meetsocial.cn/templates/default/images/fuwu3.jpg',
          title: 'service.sideThree.title',
          desc: 'service.sideThree.desc'
        }, {
          position: 'right',
          img: 'https://www.meetsocial.cn/templates/default/images/fuwu4.jpg',
          title: 'service.sideFour.title',
          desc: 'service.sideFour.desc'
        }
      ]
    }
  }
}
</script>
