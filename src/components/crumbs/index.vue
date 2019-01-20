<template>
  <div id="crumbs">
    <div class="content">
      <div>
        <router-link class="link-style" :to="{path: '/'}">{{ $t('crumbs.index') }}</router-link>
        <span class="distance">></span>
      </div>
      <div v-for="(item, index) in routerList" :key="$t(item.name)">
        <router-link :class=" routerList.length-1 === index ? 'link' : 'link-style'" :to="{path: routerList.length-1 === index ? '' : item.path}">{{ $t(item.name) }}</router-link>
        <span class="distance" v-if="routerList.length-1 !== index">></span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    routerList: {
      type: Array,
      default: () => {
        return []
      }
    }
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
