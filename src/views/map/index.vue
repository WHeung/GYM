<template>
  <main>

    <Goods :selectId='selectId'></Goods>
  </main>
</template>

<script>
import * as types from '~src/store/types'
import BMap from '~src/components/BMap.vue'
import Goods from './Goods.vue'

export default {
  components: { BMap, Goods },
  created () {
    this.$store.dispatch(types.CLOSE_LOADING)
  },
  computed: {
    stores () {
      return this.$store.state.map.stores
    },
    selectId () {
      return this.$store.state.map.selectId
    }
  }
}

// 百度地图API功能
</script>

<style lang="stylus">
</style>
