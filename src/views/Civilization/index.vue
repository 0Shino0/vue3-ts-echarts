<script lang="ts">
// 这是一个基于 TypeScript 的 Vue 组件
import { defineComponent, onMounted } from 'vue'

import MapChart from './components/MapChart.vue'
import NightingaleChart from './components/NightingaleChart.vue'
import FunnelChart from './components/FunnelChart.vue'

import $bus from '@/libs/eventBus'

export default defineComponent({
  components: {
    MapChart,
    NightingaleChart,
    FunnelChart,
  },
  setup(props, context) {
    // 在这里声明数据，或者编写函数并在这里执行它
    // 在使用 setup 的情况下，请牢记一点：不能再用 this 来获取 Vue 实例

    // 生命周期钩子
    onMounted(() => {
      // 窗口事件
      window.onresize = function () {
        $bus.emit('windowOnresizeCivilization')
      }
    })

    // 方法 methods

    // 计算方法 computed

    // 监听 watch

    return {
      // 需要给 `<template />` 用的数据或函数，在这里 `return` 出去
    }
  },
})
</script>

<template>
  <div class="civilization-container" style="width: 100%; height: 45vw">
    <div class="civilization-map-container" style="width: 100vw; height: 40vw">
      <map-chart></map-chart>
    </div>
    <div class="civilization-nightingale-container">
      <nightingale-chart></nightingale-chart>
    </div>
    <div class="civilization-funnel-container">
      <funnel-chart></funnel-chart>
    </div>
  </div>
</template>

<style lang="less">
.civilization-container {
  // margin-top: 64px;
  background-color: #fefefe;
  position: relative;

  .civilization-map-container {
    position: absolute;
    // top: 3vw;
  }

  .civilization-nightingale-container {
    width: 28vw;
    height: 30vw;
    position: absolute;
    // top: 50px;
    top: 5vw;
    // left: 30px;
    left: 0;
  }

  .civilization-funnel-container {
    width: 28vw;
    height: 30vw;
    position: absolute;
    // top: 50px;
    top: 5vw;
    // right: 30px;
    right: 0;
  }
}
</style>
