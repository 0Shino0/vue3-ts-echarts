<script lang="ts">
// 这是一个基于 TypeScript 的 Vue 组件
import { defineComponent, onMounted, ref } from 'vue'

import MapChart from './components/MapChart.vue'
import NatureBarChart from './components/NatureBarChart.vue'
import NatureRadarChart from './components/NatureRadarChart.vue'
// import ProvinceChart from '../ProvinceChart/components/ProvinceChart.vue'

import $bus from '@/libs/eventBus'

// export interface MapNameMember {
//   name: string
//   pinying: string
// }

export default defineComponent({
  components: {
    MapChart,
    NatureBarChart,
    NatureRadarChart,
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
        $bus.emit('windowOnresizeNature')
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
  <div class="nature-container" style="width: 100%; height: 55vw">
    <div class="nature-map-container" style="width: 100vw; height: 50vw">
      <map-chart></map-chart>
    </div>
    <div class="nature-naturebar-container">
      <nature-bar-chart></nature-bar-chart>
    </div>
    <div class="nature-natureradar-container">
      <nature-radar-chart></nature-radar-chart>
    </div>
  </div>
</template>

<style lang="less">
.nature-container {
  margin-top: 64px;
  background-color: #fefefe;
  position: relative;

  .nature-map-container {
    position: absolute;
  }

  .nature-naturebar-container {
    width: 23vw;
    height: 20vw;
    position: absolute;
    // top: 50px;
    bottom: 30px;
    left: 30px;
  }

  .nature-natureradar-container {
    width: 23vw;
    height: 20vw;
    position: absolute;
    // top: 50px;
    bottom: 30px;
    right: 30px;
  }
}
</style>
