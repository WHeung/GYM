<template>
  <main>
    <BMap></BMap>
    <Goods></Goods>
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
  }
}

// 百度地图API功能
</script>

<style lang="stylus">
</style>
