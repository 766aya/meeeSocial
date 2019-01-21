<template>
  <div id="fixed-box">
    <a href="javascript:;" class="item iconfont icon-"></a>
    <a href="javascript:;" class="item iconfont icon-"></a>
    <a href="javascript:;" class="item iconfont icon-"></a>
    <a href="javascript:;" class="item iconfont icon-"></a>
  </div>
</template>

<script>
export default {
  name: 'fixedBox'
}
</script>

<style lang="scss" scoped>
  #fixed-box {
    position: fixed;
    display: flex;
    flex-direction: column;
    width: 50px;
    top: 50%;
    margin-top: -250px;
    right: 10px;
    z-index: 9999;
  }
  .item {
    display: block;
    height: 50px;
    width: 50px;
    line-height: 50px;
    text-align: center;
    background: #2872ED;
    transition: 0.5s;
    &:hover {
      background: #215CBE;
    }
  }
</style>
