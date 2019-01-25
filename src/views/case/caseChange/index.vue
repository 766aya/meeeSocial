<template>
  <div class="caseChange">
    <div class="title-list">
      <a
        class="title-item"
        :class="listQuery.type === item.type ? 'active' : ''"
        href="javascript:;" v-for="item in caseTitleList"
        :key="item.title"
        @click="changeSearchCondtion(item.type, 'type')"
      >
        {{ item.title }}
      </a>
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
      <router-link class="item" :to="{path: '/case/appCase/43'}" href="javascript:;" v-for="(item, index) in contentList" :key="index">
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
      contentList: [
        { img: 'https://www.meetsocial.cn/upload/case/1530581243995960603.jpg', title: 'Jump Ramp', desc: 'Jump Ramp 是一款优质生活应用。它利用 Audience Network 成功使广告填充率高于平均水平 30% 以上，千次展示费用优于平均水平 40%，总体收入高出公司其他应用综合的2 倍。', createTime: '2018-07-03' },
        { img: 'https://www.meetsocial.cn/upload/case/1530581243995960603.jpg', title: 'Jump Ramp', desc: 'Jump Ramp 是一款优质生活应用。它利用 Audience Network 成功使广告填充率高于平均水平 30% 以上，千次展示费用优于平均水平 40%，总体收入高出公司其他应用综合的2 倍。', createTime: '2018-07-03' },
        { img: 'https://www.meetsocial.cn/upload/case/1530581243995960603.jpg', title: 'Jump Ramp', desc: 'Jump Ramp 是一款优质生活应用。它利用 Audience Network 成功使广告填充率高于平均水平 30% 以上，千次展示费用优于平均水平 40%，总体收入高出公司其他应用综合的2 倍。', createTime: '2018-07-03' },
        { img: 'https://www.meetsocial.cn/upload/case/1530581243995960603.jpg', title: 'Jump Ramp', desc: 'Jump Ramp 是一款优质生活应用。它利用 Audience Network 成功使广告填充率高于平均水平 30% 以上，千次展示费用优于平均水平 40%，总体收入高出公司其他应用综合的2 倍。', createTime: '2018-07-03' }
      ]
    }
  },
  methods: {
    changeSearchCondtion (value, field) {
      this.listQuery[field] = value
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
      margin-top: 15px;
      margin-bottom: 20px;
      .item {
        width: 24%;
        background: #F4F4F4;
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
