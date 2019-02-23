<template>
  <div id="index">
    <banner height="600" tag="首页"></banner>
    <crumbs></crumbs>
    <service></service>
    <latestCase></latestCase>
  </div>
</template>

<script>
import service from '@/views/service/service.vue'
import latestCase from '@/views/service/latestCase.vue'
export default {
  components: { service, latestCase },
  data () {
    return {}
  },
}
</script>
