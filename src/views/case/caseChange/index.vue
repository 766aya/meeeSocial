<template>
  <div class="caseChange">
    <div class="title-list">
      <router-link
        class="title-item"
        :class="$route.path.indexOf(item.router) > -1 ? 'active' : ''"
        v-for="item in caseTitleList"
        :key="item.title"
        :to="{path: item.router}"
      >
        {{ item.title }}
      </router-link>
    </div>
    <div class="search-bar">
      <div class="search-condtion">
        <span>投放渠道：</span>
        <a
          class="item"
          href="javascript:;"
          v-for="item in channelList"
          :key="item.value"
          :class="listQuery.channel === item.value ? 'active' : ''"
          @click="changeSearchCondtion(item.value, 'channel')"
        >
          {{ item.label }}
        </a>
      </div>
      <div class="search-condtion">
        <span>投放地域：</span>
        <a
          class="item"
          href="javascript:;"
          v-for="item in regionList"
          :key="item.value"
          :class="listQuery.region === item.value ? 'active' : ''"
          @click="changeSearchCondtion(item.value, 'region')"
        >
          {{ item.label }}
        </a>
      </div>
      <div class="search-condtion">
        <span>营销目标：</span>
        <a
          class="item"
          href="javascript:;"
          v-for="item in targetList"
          :key="item.value"
          :class="listQuery.target === item.value ? 'active' : ''"
          @click="changeSearchCondtion(item.value, 'target')"
        >
          {{ item.label }}
        </a>
      </div>
    </div>
    <div class="content">
      <router-link class="item" :to="{path: routerTo(item.type, item.id)}" href="javascript:;" v-for="(item, index) in contentList" :key="index">
        <img :src="item.img">
        <h3>{{ item.title }}</h3>
        <p>{{ item.desc }}</p>
        <span>{{ item.createTime }}</span>
      </router-link>
    </div>
    <div class="pagination">
      <el-pagination
        background
        layout="prev, pager, next"
        :page-size="12"
        :current-page="1"
        :total="36">
      </el-pagination>
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
          type: 0,
          router: '/case/index'
        }, {
          title: '游戏案例',
          type: 1,
          router: '/case/gameCase'
        }, {
          title: 'APP案例',
          type: 2,
          router: '/case/appCase'
        }, {
          title: '品牌案例',
          type: 3,
          router: '/case/brandCase'
        }, {
          title: '电商案例',
          type: 4,
          router: '/case/shopCase'
        }
      ],
      channelList: [
        { label: '不限', value: '' },
        { label: 'FaceBook营销案例', value: '1' },
        { label: 'Instagram营销案例', value: '2' }
      ],
      regionList: [
        { label: '不限', value: '' },
        { label: '亚太地区', value: '1' },
        { label: '欧洲', value: '2' },
        { label: '拉丁美洲', value: '3' },
        { label: '北美', value: '4' },
        { label: '中东', value: '5' },
        { label: '非洲', value: '6' },
        { label: '大洋洲', value: '7' }
      ],
      targetList: [
        { label: '不限', value: '' },
        { label: '品牌认知', value: '1' },
        { label: '购买意向', value: '2' },
        { label: '转化', value: '3' }
      ],
      listQuery: {
        type: 0,
        channel: '',
        region: '',
        target: ''
      },
      contentList: []
    }
  },
  watch: {
    listQuery: {
      deep: true,
      handler () {
        this.getList()
      }
    }
  },
  methods: {
    changeSearchCondtion (value, field) {
      this.listQuery[field] = value
    },
    getList () {
      this.axios.get('/api/case/allCase', {
        params: this.listQuery
      }).then(({ data }) => {
        this.contentList = data
      })
    },
    routerTo (type, id) {
      switch (type) {
        case 'app':
          return `/case/appCase/${id}`
        case 'game':
          return `/case/gameCase/${id}`
        case 'brand':
          return `/case/brandCase/${id}`
        case 'shop':
          return `/case/shopCase/${id}`
        default:
          return `/case`
      }
    }
  },
  created () {
    this.getList()
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
    .search-bar {
      display: flex;
      flex-direction: column;
      line-height: 30px;
      margin-top: 15px;
      .item {
        margin: 0px 10px;
        &.active {
          color: #2872ED;
        }
      }
    }
    .content {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      flex-wrap: wrap;
      margin-top: 15px;
      margin-bottom: 20px;
      .item {
        width: 24%;
        background: #F4F4F4;
        margin-bottom: 30px;
        img {
          width: 100%;
        }
        h3 {
          padding: 15px 0px 0px 15px;
        }
        p {
          max-height: 3em;
          padding: 0px 15px 15px 15px;
          overflow: hidden;
          // text-overflow: ellipsis;
          // white-space: nowrap;
        }
        span {
          display: block;
          padding: 0px 15px;
          line-height: 30px;
          text-align: right;
          margin-bottom: 15px;
        }
      }
    }
    .pagination {
      display: flex;
      justify-content: center;
    }
  }
</style>
