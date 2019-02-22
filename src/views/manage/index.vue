<template>
  <el-container id="container">
    <el-header class="header-bar">后台管理中心</el-header>
    <el-container>
      <el-aside width="200px" class="aside-bar">
        <el-menu
          default-active="2"
          class="el-menu-vertical-demo"
          @open="handleOpen"
          @close="handleClose">
          <router-link :to="{name: 'article'}">
            <el-menu-item index="1">
              <i class="el-icon-menu"></i>
              <span slot="title">文章管理</span>
            </el-menu-item>
          </router-link>
          <router-link :to="{name: 'appCaseManage'}">
            <el-menu-item index="2">
              <i class="el-icon-menu"></i>
              <span slot="title">案例管理</span>
            </el-menu-item>
          </router-link>
          <router-link :to="{name: 'vedio'}">
            <el-menu-item index="3">
              <i class="el-icon-menu"></i>
              <span slot="title">视频管理</span>
            </el-menu-item>
          </router-link>
        </el-menu>
      </el-aside>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
export default {
  name: 'manage',
  data () {
    return {

    }
  },
}
</script>

<style lang="scss" scoped>
  #container {
    height: 100vh;
    width: 100%;
  }
  .header-bar {
    text-align: center;
    color: #000000;
    line-height: 60px;
    font-size: 25px;
    background: #EEEEEE;
  }
  .aside-bar {
    border-right: 1px solid #EEEEEE;
    height: 100%;
    > .el-menu {
      border-right: none;
    }
  }
</style>
