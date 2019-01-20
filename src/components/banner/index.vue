<template>
  <el-carousel :height="`${height}px`" class="banner">
    <el-carousel-item v-for="item in bannerList" :key="item.alt">
      <router-link class="banner-box" :to="{path: item.routerLink}" v-if="item.routerType===1">
        <img :src="item.img" class="banner-img">
      </router-link>
      <a class="banner-box" :href="item.routerLink"  v-else>
        <img :src="item.img" class="banner-img">
      </a>
    </el-carousel-item>
  </el-carousel>
</template>

<script>
export default {
  props: {
    height: {
      default: '150px',
      type: String
    },
    bannerList: {
      default: () => [],
      type: Array
    }
  }
}
</script>

<style lang="scss" scoped>
  .banner {
    min-width: 1200px;
    .banner-box {
      display: block;
      height: 100%;
      width: 100%;
      .banner-img {
        display: block;
        height: 100%;
        width: auto;
        text-align: center;
        margin: 0 auto;
      }
    }
  }
</style>
