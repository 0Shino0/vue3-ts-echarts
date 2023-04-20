<script lang="ts">
// 这是一个基于 TypeScript 的 Vue 组件
import { defineComponent, onMounted } from 'vue'

import MapChart from './components/MapChart.vue'
import ProvertyBarChart from './components/ProvertyBarChart.vue'
// import RadarChart from './components/RadarChart.vue'
import ProvertyAnnularChart from './components/ProvertyAnnularChart.vue'
import ProvertyLineChart from './components/ProvertyLineChart.vue'
// import DoughutChart from './components/DoughnutChart.vue'
import ProvertyStageGaugeChart from './components/ProvertyStageGaugeChart.vue'

import $bus from '@/libs/eventBus'

export default defineComponent({
  components: {
    MapChart,
    ProvertyBarChart,
    // RadarChart,
    ProvertyAnnularChart,
    ProvertyLineChart,
    // DoughutChart,
    ProvertyStageGaugeChart,
  },
  setup(props, context) {
    // 在这里声明数据，或者编写函数并在这里执行它
    // 在使用 setup 的情况下，请牢记一点：不能再用 this 来获取 Vue 实例

    // 生命周期钩子
    onMounted(() => {
      // 窗口事件
      window.onresize = function () {
        $bus.emit('windowOnresizeProverty')
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
  <div class="proverty-container" style="width: 100%; height: 50vw">
    <div class="proverty-map-container" style="width: 100vw; height: 44vw">
      <map-chart></map-chart>
    </div>

    <div class="proverty-barchart-container">
      <proverty-bar-chart></proverty-bar-chart>
    </div>
    <div class="proverty-radar-container proverty-chart-item">
      <!-- <radar-chart></radar-chart> -->
      <proverty-annular-chart></proverty-annular-chart>
    </div>
    <!-- <div class="proverty-radar-container proverty-chart-item">
      <radar-chart></radar-chart>
    </div> -->
    <div class="proverty-line-chart proverty-chart-item">
      <proverty-line-chart></proverty-line-chart>
    </div>
    <div class="proverty-doughut-chart proverty-chart-item">
      <!-- <doughut-chart></doughut-chart> -->
      <proverty-stage-gauge-chart></proverty-stage-gauge-chart>
    </div>
  </div>
</template>

<style lang="less">
.proverty-container {
  // margin-top: 64px;
  background-color: #fefefe;
  position: relative;

  .proverty-map-container {
    position: absolute;
    top: 5vw;
    // height: 600px;
  }

  .proverty-barchart-container {
    width: 28vw;
    height: 20vw;
    position: absolute;
    top: 50px;
    // left: 30px;
    left: -1px;
  }

  .proverty-radar-container {
    width: 28vw;
    height: 20vw;
    position: absolute;
    // top: 320px;
    top: 24vw;
    // left: 30px;
    left: 0;
  }
  .proverty-line-chart {
    width: 28vw;
    height: 20vw;
    position: absolute;
    top: 50px;
    // right: 30px;
    right: -1px;
  }
  .proverty-doughut-chart {
    width: 28vw;
    height: 20vw;
    position: absolute;
    // top: 320px;
    top: 24vw;
    // right: 30px;
    right: 0;
  }
}
</style>
