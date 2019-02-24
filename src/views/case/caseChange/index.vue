<template>
  <div class="caseChange">
    <div class="title-list">
      <router-link
        class="title-item"
        :class="$route.path.indexOf(item.router) > -1 ? 'active' : ''"
        v-for="item in caseTitleList"
        :key="item.title"
        :to="{path: item.router}"
      >{{ item.title }}</router-link>
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
        >{{ item.label }}</a>
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
        >{{ item.label }}</a>
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
        >{{ item.label }}</a>
      </div>
    </div>
    <div class="content">
      <router-link
        class="item"
        :to="{path: routerTo(item.type, item.filename )}"
        href="javascript:;"
        v-for="(item, index) in contentList"
        :key="index"
      >
        <img :src="`/getPhoto?filename=${item.img}`">
        <h3>{{ item.title }}</h3>
        <p>{{ item.desc }}</p>
        <span>{{ item.createTime }}</span>
      </router-link>
    </div>
    <div class="pagination">
      <el-pagination
        background
        layout="prev, pager, next"
        :page-size="8"
        :current-page="page.page"
        @current-change="currentChange"
        :total="page.total"
      ></el-pagination>
    </div>
  </div>
</template>

<script>
export default {
  name: 'caseChange',
  data () {
    return {
      page: {
        total: 0,
        page: 1,
        limit: 4,
      },
      caseTitleList: [
        {
          title: '全部案例',
          type: 0,
          router: '/case/index',
        },
        {
          title: '游戏案例',
          type: 1,
          router: '/case/gameCase',
        },
        {
          title: 'APP案例',
          type: 2,
          router: '/case/appCase',
        },
        {
          title: '品牌案例',
          type: 3,
          router: '/case/brandCase',
        },
        {
          title: '电商案例',
          type: 4,
          router: '/case/shopCase',
        },
      ],
      channelList: [
        { label: '不限', value: '' },
        { label: 'FaceBook营销案例', value: 'FaceBook营销案例' },
        { label: 'Instagram营销案例', value: 'Instagram营销案例' },
      ],
      regionList: [
        { label: '不限', value: '' },
        { label: '亚太地区', value: '亚太地区' },
        { label: '欧洲', value: '欧洲' },
        { label: '拉丁美洲', value: '拉丁美洲' },
        { label: '北美', value: '北美' },
        { label: '中东', value: '中东' },
        { label: '非洲', value: '非洲' },
        { label: '大洋洲', value: '大洋洲' },
      ],
      targetList: [
        { label: '不限', value: '' },
        { label: '品牌认知', value: '品牌认知' },
        { label: '购买意向', value: '购买意向' },
        { label: '转化', value: '转化' },
      ],
      listQuery: {
        type: 0,
        channel: '',
        region: '',
        target: '',
      },
      contentList: [],
    }
  },
  watch: {
    listQuery: {
      deep: true,
      handler () {
        this.getList()
      },
    },
    $route () {
      this.getList()
    },
  },
  created () {
    this.getList()
  },
  methods: {
    currentChange (val) {
      this.page.page = val
      this.getList()
    },
    changeSearchCondtion (value, field) {
      this.listQuery[field] = value
    },
    getList () {
      let arr = ['案例']
      if (this.listQuery.channel !== '') {
        arr.push(this.listQuery.channel)
      }
      if (this.listQuery.region !== '') {
        arr.push(this.listQuery.region)
      }
      if (this.listQuery.target !== '') {
        arr.push(this.listQuery.target)
      }
      if (this.$route.path.indexOf('gameCase') > -1) {
        arr.push('游戏案例')
      } else if (this.$route.path.indexOf('appCase') > -1) {
        arr.push('APP案例')
      } else if (this.$route.path.indexOf('brandCase') > -1) {
        arr.push('品牌案例')
      } else if (this.$route.path.indexOf('shopCase') > -1) {
        arr.push('电商案例')
      }
      this.axios
        .get('/getBreviaryArticleList', {
          params: {
            page: this.page.page - 1,
            pageNum: 8,
            title: '',
            tags: JSON.stringify(arr),
          },
        })
        .then(({ data }) => {
          this.$set(this.page, 'total', data.data.total)
          this.contentList = data.data.data.map(item => {
            return JSON.parse(item)
          })
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
          return `/case/appCase/${id}`
      }
    },
  },
  created () {
    this.getList()
  },
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
      border-bottom: 2px solid #ffffff;
      margin: 0px 15px;
      &:hover {
        color: #333333;
        border-bottom: 2px solid #2872ed;
      }
      &.active {
        border-bottom: 2px solid #2872ed;
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
        color: #2872ed;
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
      background: #f4f4f4;
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
