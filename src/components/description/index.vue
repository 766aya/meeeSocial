<template>
  <div id="gov-desc" class="description">
    <div class="iconfont icon-yonghu">{{ publisher }}</div>
    <div class="iconfont icon-biaoqian">{{ createTime }}</div>
    <div class="iconfont icon-shijian">
      <span v-for="tip in tips" :key="tip" class="tip-item">{{tip}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'GovDesc',
  props: {
    option: {
      type: Object,
      default: () => {
        return {
          publisher: '浩捷亚互动',
          createTime: '2018-07-03',
          tips: ['Facebook案例', 'App案例', 'Audience', 'Network'],
        }
      },
    },
  },
  computed: {
    publisher () {
      return this.option.publisher ? this.option.publisher : ''
    },
    createTime () {
      return this.option.createTime ? this.option.createTime : ''
    },
    tips () {
      return this.option.tips ? this.option.tips : []
    },
  },
}
</script>

<style lang="scss" scoped>
  .description {
    display: flex;
    width: 1200px;
    line-height: 50px;
    height: 50px;
    margin: 0 auto;
    border: 1px solid rgb(184, 184, 184);
    border-right: none;
    border-left: none;
    justify-content: center;
    color: #9C9C9C;
    margin-bottom: 25px;
    &>div {
      padding-right: 15px;
      &.iconfont {
        &::before {
          padding-right: 10px;
        }
      }
    }
    .tip-item {
      padding-right: 10px;
      cursor: pointer;
      &:hover {
        color: #333333;
      }
    }
  }
</style>
