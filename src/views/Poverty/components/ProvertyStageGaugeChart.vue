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
    const provertyStageGaugeChartCharts = ref()

    // 生命周期钩子
    onMounted(() => {
      nextTick(() => {
        initChart()
      })

      // window.onresize = function () {
      //   // console.log(provertyStageGaugeChartCharts.value)
      //   provertyStageGaugeChartCharts.value.resize()
      // }
      const windowOnresizeProvertyEvent = () => {
        if (provertyStageGaugeChartCharts.value)
          provertyStageGaugeChartCharts.value.resize()
      }

      $bus.on('windowOnresizeProverty', windowOnresizeProvertyEvent)
    })

    onBeforeUnmount(() => {
      if (!provertyStageGaugeChartCharts.value) {
        return
      }
      provertyStageGaugeChartCharts.value.dispose()
      provertyStageGaugeChartCharts.value = null
    })

    // 方法 methods

    const initChart = () => {
      provertyStageGaugeChartCharts.value = markRaw(
        echarts.init(chart.value!, 'roma')
      )
      // setOptions(props.chartData)

      setOptions()
    }

    const setOptions = () => {
      let option = {
        title: {
          text: '精准扶贫工作完成情况',
          left: 'center',
        },
        series: [
          {
            type: 'gauge',
            axisLine: {
              lineStyle: {
                width: 25,
                color: [
                  [0.3, '#37a2da'],
                  [0.7, '#67e0e3'],
                  [1, '#fd666d'],
                ],
              },
            },
            pointer: {
              itemStyle: {
                color: 'inherit',
              },
            },
            axisTick: {
              distance: -30,
              length: 8,
              lineStyle: {
                color: '#fff',
                width: 2,
              },
            },
            splitLine: {
              distance: -30,
              length: 30,
              lineStyle: {
                color: '#fff',
                width: 4,
              },
            },
            axisLabel: {
              color: 'inherit',
              distance: 40,
              fontSize: 16,
            },
            detail: {
              valueAnimation: true,
              formatter: '{value} %',
              color: 'inherit',
              fontSize: 24,
            },
            data: [
              {
                value: 99,
              },
            ],
          },
        ],
      }

      provertyStageGaugeChartCharts.value.setOption(option)
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
  <div
    class="provertyStageGaugeChartCharts"
    ref="chart"
    style="width: 100%; height: 100%"
  ></div>
</template>

<style lang="less"></style>
