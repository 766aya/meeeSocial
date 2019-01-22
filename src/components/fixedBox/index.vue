<template>
  <div id="fixed-box">
    <a href="javascript:;" class="item weixin iconfont icon-weixin">
      <img class="" src="https://www.meetsocial.cn/templates/default/images/ewm.jpg">
    </a>
    <a href="javascript:;" class="item iconfont icon-weibo"></a>
    <a href="javascript:;" class="item iconfont icon-facebook"></a>
    <a href="javascript:;" class="item iconfont icon-dingbu" v-show="isShow" @click="scrollToTop"></a>
  </div>
</template>

<script>
export default {
  name: 'fixedBox',
  data () {
    return {
      isTop: true,
      timer: null,
      isShow: false
    }
  },
  methods: {
    scrollToTop () {
      let self = this
      self.timer = setInterval(function () {
        let osTop = document.documentElement.scrollTop || document.body.scrollTop
        let ispeed = Math.floor(-osTop / 5)
        document.documentElement.scrollTop = document.body.scrollTop = osTop + ispeed
        self.isTop = true
        if (osTop === 0) {
          clearInterval(self.timer)
        }
      }, 30)
    },
    needScroll () {
      let self = this
      let clientHeight = document.documentElement.clientHeight
      window.onscroll = function () {
        let osTop = document.documentElement.scrollTop || document.body.scrollTop
        if (osTop >= clientHeight) {
          self.isShow = true
        } else {
          self.isShow = false
        }
        if (!self.isTop) {
          clearInterval(self.timer)
          self.isTop = false
        }
      }
    }
  },
  mounted () {
    this.needScroll()
  }
}
</script>

<style lang="scss" scoped>
  #fixed-box {
    position: fixed;
    display: flex;
    flex-direction: column;
    width: 50px;
    top: 50%;
    margin-top: -100px;
    right: 10px;
    z-index: 9999;
    transition: 0.5s;
  }
  .item {
    display: block;
    height: 50px;
    width: 50px;
    line-height: 50px;
    text-align: center;
    background: #2872ED;
    transition: 0.5s;
    color: #FFFFFF;
    font-size: 22px;
    &:hover {
      background: #215CBE;
    }
  }
  .weixin {
    position: relative;
    img {
      height: 100px;
      width: 100px;
      position: absolute;
      right: 60px;
      top: 50%;
      margin-top: -50px;
    }
  }
</style>
