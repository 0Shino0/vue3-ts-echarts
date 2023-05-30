<script lang="ts">
// 这是一个基于 TypeScript 的 Vue 组件
import { defineComponent, onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'

// import MapChart from '@/components/MapChart.vue'
import ProvinceChart from './components/ProvinceChart.vue'
import ProvinceLineChart from './components/ProvinceLineChart.vue'
import ProvinceDoughnutCharts from './components/ProvinceDoughnutCharts.vue'
import ProvinceBarChart from './components/ProvinceBarChart.vue'
import ProvinceFooterBarChart from './components/ProvinceFooterBarChart.vue'
// import DynamicLineChart from './components/DynamicLineChart.vue'
// import DynamicList from './components/DynamicList.vue'

import $bus from '@/libs/eventBus'

export interface MapNameMember {
  name: string
  pinying?: string
}

export default defineComponent({
  components: {
    ProvinceChart,
    ProvinceLineChart,
    ProvinceDoughnutCharts,
    ProvinceBarChart,
    ProvinceFooterBarChart,
  },
  setup(props, context) {
    // 在这里声明数据，或者编写函数并在这里执行它
    // 在使用 setup 的情况下，请牢记一点：不能再用 this 来获取 Vue 实例
    const route = useRoute()

    const mapName = ref<MapNameMember>({
      name: '',
      // pinying: '',
    })

    // 生命周期钩子
    onMounted(() => {
      getParams()
      // 窗口事件
      window.onresize = function () {
        $bus.emit('windowOnresizeProvince')
      }
    })

    // 方法 methods
    const getParams = () => {
      console.log(route.params)
      mapName.value.name = route.params.name as string
      // mapName.value.pinying = route.params.pinying as string
      // console.log(mapName.value)
    }

    // 计算方法 computed

    // 监听 watch

    return {
      // 需要给 `<template />` 用的数据或函数，在这里 `return` 出去
      mapName,
    }
  },
})
</script>

<template>
  <div class="province-container" style="width: 100%">
    <div class="province-map-container" style="width: 100%; height: 80vh">
      <province-chart
        v-if="mapName.name != ''"
        :mapNameObj="mapName"
      ></province-chart>
    </div>
    <div class="province-provinceline-container">
      <province-line-chart
        v-if="mapName.name != ''"
        :mapNameObj="mapName"
      ></province-line-chart>
    </div>
    <div class="province-provincedoughnut-container">
      <province-doughnut-charts
        v-if="mapName.name != ''"
        :mapNameObj="mapName"
      ></province-doughnut-charts>
    </div>
    <div class="province-provincebar-container">
      <province-bar-chart
        v-if="mapName.name != ''"
        :mapNameObj="mapName"
      ></province-bar-chart>
    </div>
    <div class="province-provincefooterbar-container">
      <province-footer-bar-chart
        v-if="mapName.name != ''"
        :mapNameObj="mapName"
      ></province-footer-bar-chart>
    </div>
    <!-- <div class="province-dynamicline-container">
      <dynamic-line-chart></dynamic-line-chart>
    </div> -->
  </div>
</template>

<style lang="less">
.province-container {
  // margin-top: 64px;
  // background-color: #fefefe;
  background-color: #fff1ba;
  position: relative;
  // height: calc(100vh + 64px);
  height: 120vh;

  .province-map-container {
    position: absolute;
    // margin-top: 10vh;
    top: 10vh;
  }

  .province-provinceline-container {
    // width: 23vw;
    width: 28vw;
    height: 20vw;
    position: absolute;
    // top: 30px;
    top: 5vw;
    // bottom: 30px;
    left: 30px;
  }

  .province-dynamiclist-container {
    width: 23vw;
    //     width: 30vw;
    height: 20vw;
    position: absolute;
    // top: 50px;
    // bottom: 30px;
    left: 30px;
  }
  .province-provincedoughnut-container {
    // width: 25vw;
    width: 30vw;
    // height: 23vw;
    height: 30vw;
    position: absolute;
    // top: 30vw;
    top: 55vh;
    left: 30px;
    // bottom: 30px;
  }
  .province-provincebar-container {
    // width: 23vw;
    width: 30vw;
    height: 20vw;
    position: absolute;
    // top: 30px;
    top: 5vw;
    right: 30px;
    // bottom: 30px;
  }
  .province-provincefooterbar-container {
    width: 32vw;
    height: 20vw;
    position: absolute;
    // top: 20vw;
    top: 50vh;
    right: 5px;
    // bottom: 30px;
  }
}
</style>
