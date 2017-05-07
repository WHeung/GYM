<template>
  <div id="allmap" :style="{ width: mapStyle.width+'px', height: mapStyle.height+'px'}"></div>
</template>

<script>
import BMap from 'BMap'
import * as types from '~src/store/types'

export default {
  data () {
    return {
      mapStyle: {
        width: window.screen.width,
        height: window.screen.height
      },
      map: null,
      oldSelectId: null
    }
  },
  props: ['stores', 'selectId'],
  watch: {
    stores: {
      handler (val) {
        val.map(item => {
          var myCompOverlay = new ComplexCustomOverlay(item)
          this.map.addOverlay(myCompOverlay)
          var _self = this
          myCompOverlay.addEventListener('touchstart', function (e) { _self.handleClick(e, this) }.bind(myCompOverlay))
        })
      }
    },
    selectId: {
      handler (val, oldVal) {
        const mkrs = this.map.getOverlays()
        const actMkr = mkrs.find(item => {
          return item.id === val
        })
        if (oldVal && oldVal !== val) {
          const oldMkr = mkrs.find(item => {
            return item.id === oldVal
          })
          oldMkr._div.className = 'map-point'
        }
        actMkr._div.className += ' active'
      }
    }
  },
  created () {
    this.$store.commit(types.SET_MAP_STORES, [
      {
        id: 256,
        longitude: 113.270894,
        latitude: 23.139776,
        price: 220,
        name: '肌肉健身',
        cover: 'http://cdn01.dwfei.com/img/city/80LANKAWEI.png',
        star: 4,
        evaluateNum: 53
      },
      {
        id: 128,
        longitude: 113.257476,
        latitude: 23.142955,
        price: 530,
        name: '肥肉健身',
        cover: 'http://cdn01.dwfei.com/img/city/Singapore_01.png',
        star: 5,
        evaluateNum: 340
      },
      {
        id: 1024,
        longitude: 113.275536,
        latitude: 23.127731,
        price: 5320,
        name: '瘦肉健身',
        cover: 'http://cdn01.dwfei.com/img/city/mangu_01.png',
        star: 3,
        evaluateNum: 5
      }
    ])
  },
  mounted () {
    this.map = new BMap.Map('allmap')    // 创建Map实例
    this.map.centerAndZoom('广州', 14)  // 初始化地图,设置中心点坐标和地图级别
    this.map.setCurrentCity('广州')          // 设置地图显示的城市 此项是必须设置的
    this.map.setMapStyle({ style: 'light' })
  },
  methods: {
    handleClick (e, mrks) {
      this.$store.dispatch(types.UPDATE_MAP_SELECTED, mrks.id)
    }
  }
}
function ComplexCustomOverlay (item) {
  this.point = new BMap.Point(item.longitude, item.latitude)
  Object.assign(this, item)
}
ComplexCustomOverlay.prototype = new BMap.Overlay()
ComplexCustomOverlay.prototype.initialize = function (map) {
  this.map = map
  var div = this._div = document.createElement('div')
  div.className = 'map-point'
  div.appendChild(document.createTextNode('￥' + this.price))
  map.getPanes().labelPane.appendChild(div)
  this._div = div
  return div
}
ComplexCustomOverlay.prototype.addEventListener = function (event, fun) {
  this._div['on' + event] = fun
}
ComplexCustomOverlay.prototype.draw = function () {
  var map = this.map
  var pixel = map.pointToOverlayPixel(this.point)
  this._div.style.left = pixel.x - this._div.clientWidth / 2 + 'px'
  this._div.style.top = pixel.y - this._div.clientHeight + 'px'
}

</script>

<style lang="stylus">
  .map-point
    position absolute
    z-index 1
    background #f7f7f7
    height 18px
    line-height 18px
    padding 5px
    white-space nowrap
    font-size 13px
    border 1px solid #d8d8d8
    border-radius 3px
    color #675F6D
    &:after
      content ''
      display table
      position absolute
      bottom -6px
      left 50%
      transform translateX(-50%) rotate(45deg)
      border 1px solid #d8d8d8
      width: 10px;
      height: 10px;
      border-top: 0;
      border-left: 0;
      background #f7f7f7
    &.active
      background #32c47c
      color #fff
      &:after
        background #32c47c


</style>
