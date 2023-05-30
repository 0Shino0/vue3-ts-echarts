<script lang="ts">
// 这是一个基于 TypeScript 的 Vue 组件
import {
  defineComponent,
  onMounted,
  ref,
  nextTick,
  onBeforeUnmount,
  markRaw,
} from 'vue'

import * as echarts from 'echarts'

import $bus from '@/libs/eventBus'

export default defineComponent({
  props: {
    className: {
      type: String,
      default: 'chart',
    },
    width: {
      type: String,
      default: '100%',
    },
    height: {
      type: String,
      default: '350px',
    },
    autoResize: {
      type: Boolean,
      default: true,
    },
    chartData: {
      type: Object,
      required: false,
    },
  },
  setup(props, context) {
    // 在这里声明数据，或者编写函数并在这里执行它
    // 在使用 setup 的情况下，请牢记一点：不能再用 this 来获取 Vue 实例

    const chart = ref<HTMLElement>()
    const radarCharts = ref()

    // 生命周期钩子
    onMounted(() => {
      nextTick(() => {
        initChart()
      })

      // window.onresize = function () {
      //   // console.log(radarCharts.value)
      //   radarCharts.value.resize()
      // }
      const windowOnresizeProvertyEvent = () => {
        if (radarCharts.value) radarCharts.value.resize()
      }

      $bus.on('windowOnresizeProverty', windowOnresizeProvertyEvent)
    })

    onBeforeUnmount(() => {
      if (!radarCharts.value) {
        return
      }
      radarCharts.value.dispose()
      radarCharts.value = null
    })

    // 方法 methods

    const initChart = () => {
      radarCharts.value = markRaw(echarts.init(chart.value!, 'bgYellow'))
      // setOptions(props.chartData)

      setOptions()
    }

    const setOptions = () => {
      let option = {
        title: {
          text: '各年份贫困地区人均可支配收入及支出',
          x: 'center',
          top: '20px',
        },
        tooltip: {
          trigger: 'item',
          formatter: '{b}<br/>{c}<br/>',
        },
        legend: {
          data: ['贫困地人均可支配收入', '人均消费支出'],
        },
        radar: {
          // shape: 'circle',
          indicator: [
            { name: '2019', max: 6500 },
            { name: '2020', max: 16000 },
            { name: '2021', max: 30000 },
            { name: '2022', max: 38000 },
            // { name: '2023', max: 52000 },
          ],
        },
        series: [
          {
            name: 'Budget vs spending',
            type: 'radar',
            data: [
              {
                value: [4200, 10000, 20000, 35000, 38000],
                name: '贫困地人均可只配收入',
              },
              {
                value: [5000, 14000, 28000, 38000, 42000],
                name: '人均消费支出',
              },
            ],
          },
        ],
      }

      radarCharts.value.setOption(option)
    }

    // 计算方法 computed

    // 监听 watch

    return {
      // 需要给 `<template />` 用的数据或函数，在这里 `return` 出去
      chart,
    }
  },
})
</script>

<template>
  <div class="radarCharts" ref="chart" style="width: 100%; height: 100%"></div>
</template>

<style lang="less"></style>
