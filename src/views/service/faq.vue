<template>
  <div id="FAQ">
    <div class="content">
      <div class="header">
        <div class="title">常见问题解答</div>
        <div class="more">
          <router-link :to="{path: '/'}">
            了解更多 >
          </router-link>
        </div>
      </div>
      <div class="main">
        <router-link class="item-link" :to="{path: `/faq/${item.id}`}" v-for="item in dataList" :key="item.id">
          <span class="item-title">{{ item.title }}</span>
          <span class="item-time">{{item.createTime}}</span>
        </router-link>
      </div>
    </div>
    <router-link class="n-number-link" :to="{path: '/'}">
      <img class="n-number-img" src="https://www.meetsocial.cn/upload/service/1547599946369852254.png">
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'FAQ',
  data () {
    return {
      dataList: [
        {
          title: 'faceBook怎么做推广?',
          createTime: '2018-08-17',
          id: 10
        }, {
          title: 'faceBook怎么做推广?',
          createTime: '2018-08-18',
          id: 11
        }, {
          title: 'faceBook怎么做推广?',
          createTime: '2018-08-19',
          id: 12
        }, {
          title: 'faceBook怎么做推广?',
          createTime: '2018-08-20',
          id: 13
        }, {
          title: 'faceBook怎么做推广?',
          createTime: '2018-08-20',
          id: 14
        }, {
          title: 'faceBook怎么做推广?',
          createTime: '2018-08-20',
          id: 15
        }, {
          title: 'faceBook怎么做推广?',
          createTime: '2018-08-20',
          id: 16
        }, {
          title: 'faceBook怎么做推广?',
          createTime: '2018-08-20',
          id: 17
        }, {
          title: 'faceBook怎么做推广?',
          createTime: '2018-08-20',
          id: 18
        }, {
          title: 'faceBook怎么做推广?',
          createTime: '2018-08-20',
          id: 19
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
  #FAQ {
    padding: 100px 0;
    margin: 0 auto;
    background: #FFFFFF;
    .content {
      width: 100%;
      min-width: 800px;
      max-width: 1000px;
      margin: 0 auto;
      background: #F4F4F4;
      padding: 30px;
      .header {
        height: 40px;
        line-height: 40px;
        display: flex;
        flex-direction: row;
        padding-bottom: 30px;
        .title {
          width: 50%;
          text-align: left;
          font-size: 30px;
          font-weight: 700;
        }
        .more {
          width: 50%;
          text-align: right;
          font-size: 20px;
          font-weight: 700;
          a { color: #2872ED; }
        }
      }
      .main {
        display: flex;
        flex-wrap: wrap;
        flex-direction: row;
        width: 100%;
        min-width: 800px;
        max-width: 1000px;
        .item-link {
          display: flex;
          flex-direction: row;
          width: calc(50% - 30px);
          font-size: 20px;
          line-height: 40px;
          margin: 0 15px;
          .item-time {
            flex: 1;
            text-align: right;
          }
        }
      }
    }
    .n-number-link {
      display: block;
      width: 100%;
      min-width: 800px;
      max-width: 1060px;
      margin: 50px auto 0px auto;
      .n-number-img {
        width: 100%;
      }
    }
  }
</style>
