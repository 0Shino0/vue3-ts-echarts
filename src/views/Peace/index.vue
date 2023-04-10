<script lang="ts">
// 这是一个基于 TypeScript 的 Vue 组件
import { defineComponent, onMounted, ref } from 'vue'

import $bus from '@/libs/eventBus'

// export interface MapNameMember {
//   name: string
//   pinying: string
// }
import PeaceBarChart from './components/PeaceBarChart.vue'
import PeaceLineChart from './components/PeaceLineChart.vue'
import PeaceSunburstChart from './components/PeaceSunburstChart.vue'
import PeacePieChart from './components/PeacePieChart.vue'

export default defineComponent({
  components: {
    PeaceBarChart,
    PeaceLineChart,
    PeaceSunburstChart,
    PeacePieChart,
  },
  setup(props, context) {
    // 在这里声明数据，或者编写函数并在这里执行它
    // 在使用 setup 的情况下，请牢记一点：不能再用 this 来获取 Vue 实例

    // const mapName = ref<MapNameMember>({
    //   name: '安徽',
    //   pinying: 'anhui',
    // })

    // 生命周期钩子
    onMounted(() => {
      // 窗口事件
      window.onresize = function () {
        $bus.emit('windowOnresizePeace')
      }
    })

    // 方法 methods

    // 计算方法 computed

    // 监听 watch

    return {
      // 需要给 `<template />` 用的数据或函数，在这里 `return` 出去
      // mapName,
    }
  },
})
</script>

<template>
  <div class="nature-container" style="width: 100%">
    <div class="peace-peacebar-container" style="width: 100%; height: 700px">
      <peace-bar-chart></peace-bar-chart>
    </div>
    <div class="peace-peaceline-container" style="width: 100%; height: 700px">
      <peace-line-chart></peace-line-chart>
    </div>
    <div class="peace-sunburst-container" style="width: 100%; height: 700px">
      <peace-sunburst-chart></peace-sunburst-chart>
    </div>
    <div class="peace-pie-container" style="width: 100%; height: 700px">
      <peace-pie-chart></peace-pie-chart>
    </div>
  </div>
</template>

<style lang="less">
.nature-container {
  margin-top: 64px;
  background-color: #fefefe;
  position: relative;

  // .peace-peacebar-container {
  //   // position: absolute;
  //   margin-top: 20px;
  // }
}
</style>
