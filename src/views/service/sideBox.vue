<template>
  <div class="side-box">
    <template v-if="position === 'left'">
      <div class="img-box left">
        <img :src="img">
      </div>
      <div class="text-box">
        <h1 class="title">{{ title }}</h1>
        <p class="desc">{{ desc }}</p>
      </div>
    </template>
    <template v-if="position === 'right'">
      <div class="text-box">
        <h1 class="title">{{ title }}</h1>
        <p class="desc">{{ desc }}</p>
      </div>
      <div class="img-box right">
        <img :src="img">
      </div>
    </template>
  </div>
</template>

<script>
export default {
  name: 'side-box',
  props: {
    position: {
      type: String,
      default: 'left',
    },
    img: {
      type: String,
      default: '',
    },
    title: {
      type: String,
      default: '',
    },
    desc: {
      type: String,
      default: '',
    },
  },
}
</script>

<style lang="scss" scoped>
  .side-box {
    height: 300px;
    width: 100%;
    display: flex;
    background: #F4F4F4;
    margin: 20px 0px;
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
</style>
