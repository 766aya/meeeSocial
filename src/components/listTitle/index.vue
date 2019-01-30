<template>
  <div class="list-title">
    <span class="title">{{ title }}</span>
    <router-link :to="{path: path}" class="el-icon-plus plus"></router-link>
  </div>
</template>

<script>
export default {
  name: 'listTitle',
  props: {
    title: {
      type: String,
      default: ''
    },
    path: {
      type: String,
      default: '/'
    }
  }
}
</script>

<style lang="scss" scoped>
  .list-title {
    display: flex;
    width: calc(100% - 10px);
    border-left: 10px solid #CCCCCC;
    background: #F4F4F4;
    margin: 15px 0 10px 0;
    .title {
      line-height: 35px;
      padding-left: 10px;
      flex: 1;
    }
    .plus {
      line-height: 35px;
      width: 25px;
      height: 100%;
      font-weight: 700;
      color: #2872ED;
    }
  }
</style>
