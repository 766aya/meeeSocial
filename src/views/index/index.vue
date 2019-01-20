<template>
  <div id="index">
    <banner height="500" :bannerList="bannerList"></banner>
    <crumbs></crumbs>
  </div>
</template>

<script>
export default {
  data () {
    return {
      bannerList: [
        {
          routerType: '1',
          routerLink: '/',
          img: 'https://www.meetsocial.cn/upload/about/1547600433899893939.png'
        }, {
          routerType: '1',
          routerLink: '',
          img: 'https://www.meetsocial.cn/upload/about/1545961271750818660.jpg'
        }, {
          routerType: '1',
          routerLink: '/',
          img: 'https://www.meetsocial.cn/upload/about/1545072640837436332.jpg'
        }
      ]
    }
  }
}
</script>
