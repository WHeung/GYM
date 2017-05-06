<template>
  <div id="allmap" :style="{ width: mapStyle.width+'px', height: mapStyle.height+'px'}"></div>
</template>

<script>
import BMap from 'BMap'

export default {
  data () {
    return {
      mapStyle: {
        width: window.screen.width,
        height: window.screen.height
      }
    }
  },
  created () {
    // this.mapStyle.width = window.screen.width
    // this.mapStyle.height = window.screen.height
  },
  mounted () {
    var map = new BMap.Map('allmap')    // 创建Map实例
    console.log(map)
    map.centerAndZoom(new BMap.Point(113.331084, 23.112223), 13)  // 初始化地图,设置中心点坐标和地图级别
    // map.addControl(new BMap.MapTypeControl())   // 添加地图类型控件
    map.setCurrentCity('广州')          // 设置地图显示的城市 此项是必须设置的
    map.enableScrollWheelZoom(true)     // 开启鼠标滚轮缩放
  }
}
</script>

<style lang="stylus" module>
</style>
