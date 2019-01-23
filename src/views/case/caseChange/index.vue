<template>
  <div class="caseChange">
    <div class="title-list">
      <a class="title-item" href="javascript:;" v-for="item in caseTitleList" :key="item.title" @click="changeCaseTitle(item.type)">{{ item.title }}</a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'caseChange',
  data () {
    return {
      caseTitleList: [
        {
          title: '全部案例',
          type: 0
        }, {
          title: '游戏案例',
          type: 1
        }, {
          title: 'APP案例',
          type: 2
        }, {
          title: '品牌案例',
          type: 3
        }, {
          title: '电商案例',
          type: 4
        }
      ],
      listQuery: {

      }
    }
  }
}
</script>

<style lang="scss" scoped>
  .caseChange {
    display: flex;
    max-width: 1200px;
    min-width: 1000px;
    width: 100%;
    margin: 50px auto;
    flex-direction: column;
    .title-list {
      display: flex;
      flex-direction: row;
      line-height: 40px;
      .title-item {
        color: #666666;
        font-weight: 700;
        border-bottom: 2px solid #FFFFFF;
        margin: 0px 15px;
        &:hover {
          color: #333333;
          border-bottom: 2px solid #2872ED;
        }
        &.active {
          border-bottom: 2px solid #2872ED;
        }
      }
    }
  }
</style>
