<template>
  <div id="crumbs">
    <div class="content">
      <div v-for="(item, index) in routerList" :key="index">
        <router-link
          :class=" routerList.length-1 === index ? 'link' : 'link-style'"
          :to="{path: routerList.length-1 === index ? '' : item.path}"
        >
          {{ item.name }}
        </router-link>
        <span class="distance" v-if="routerList.length-1 !== index">></span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'crumbs',
  data () {
    return {
      routerList: []
    }
  },
  created () {
    this.routerList = this.$route.matched.map(item => {
      return { name: item.meta.label, path: item.path, text: item.meta.text }
    })
  }
}
</script>

<style lang="scss" scoped>
  #crumbs {
    width: 100%;
    height: 50px;
    background: #F4F4F4;
    .content {
      display: flex;
      flex-direction: row;
      width: 100%;
      max-width: 1200px;
      margin: 0 auto;
      line-height: 50px;
      .distance {
        margin: 0px 10px;
        cursor: default;
      }
      .link-style {
        color: #666666;
        &:hover {
          color: #2872EE;
        }
      }
      .link {
        color: #666666;
        cursor: default;
      }
    }
  }
</style>
