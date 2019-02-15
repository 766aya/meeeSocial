<template>
  <div>
    <gov-search-bar
      :listQuery="listQuery"
      :formProps="formProps"
      @handleFilter="handleFilter"
    />
  </div>
</template>

<script>
import mixins from '@/mixins/index'
import { searchOption } from './const/index'

export default {
  name: 'appCase',
  mixins: [mixins],
  data () {
    return {

    }
  },
  computed: {
    formProps () {
      return searchOption
    },
  },
  methods: {
    getList () {

    },
  },
}
</script>
