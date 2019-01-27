<template>
  <div id="case">
    <div class="banner">
      <img class="img" src="https://www.meetsocial.cn/templates/default/images/nybanner3.gif">
    </div>
    <crumbs></crumbs>
    <div class="banner02">

    </div>
    <div class="banner03">

    </div>
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
    <latestCase></latestCase>
    <el-tabs v-model="activeName" @tab-click="handleClick">
      <el-tab-pane label="常见问题" name="first">

      </el-tab-pane>
      <el-tab-pane label="营销百科" name="second">

      </el-tab-pane>
      <el-tab-pane label="行业资讯" name="third">

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
    'sAdvantage': advantage,
    'sSideBox': sideBox,
    latestCase
  },
  data () {
    return {
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
      ],
      activeName: ''
    }
  },
  methosd: {
    handleClick (tab, event) {
      console.log(tab, event)
    }
  }
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
      background: url(https://www.meetsocial.cn/templates/default/images/ditch_bg1.gif) no-repeat center center;
      height: 785px;
    }
    .banner03 {
      width: 100%;
      min-width: 1200px;
      background: url(https://www.meetsocial.cn/templates/default/images/ditch_bg2.gif) no-repeat center center;
      height: 785px;
    }
  }
</style>
