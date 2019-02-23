<template>
  <div id="gov-footer">
    <footer-top></footer-top>
    <footer-bottom></footer-bottom>
  </div>
</template>

<script>
import footerTop from './footerTop'
import footerBottom from './footerBottom'

export default {
  name: 'govFooter',
  components: { footerTop, footerBottom },
}
</script>

<style lang="scss" scoped>

</style>
