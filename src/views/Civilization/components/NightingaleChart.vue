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
    const pieNightingaleCharts = ref()

    // 生命周期钩子
    onMounted(() => {
      nextTick(() => {
        initChart()
      })
      // window.onresize = function () {
      //   pieNightingaleCharts.value.resize()
      // }
      const windowOnresizeCivilizationEvent = () => {
        if (pieNightingaleCharts.value) pieNightingaleCharts.value.resize()
      }

      $bus.on('windowOnresizeCivilization', windowOnresizeCivilizationEvent)
    })

    onBeforeUnmount(() => {
      if (!pieNightingaleCharts.value) {
        return
      }
      pieNightingaleCharts.value.dispose()
      pieNightingaleCharts.value = null
    })

    // 方法 methods

    const initChart = () => {
      pieNightingaleCharts.value = markRaw(
        echarts.init(chart.value!, 'bgYellow')
      )
      // setOptions(props.chartData)

      setOptions()
    }

    const setOptions = () => {
      let option = {
        title: {
          text: '近年来文创企业注册数量（家）',
          subtext: '数据来源：企查查官网',
          left: 'center',
        },
        color: [
          '#DD1D1D',
          '#ff2400',
          '#b11717',
          '#ca3030',
          '#e85050',
          '#ff0000',
        ],
        legend: {
          type: 'scroll',
          // orient: 'vertical',
          left: 'center',
          top: 'bottom',
        },

        tooltip: {
          trigger: 'item',
          formatter: '{a} <br/>{b} : {c} ({d}%)',
        },
        toolbox: {
          show: true,
          feature: {
            mark: { show: true },
            dataView: { show: true, readOnly: false },
            restore: { show: true },
            saveAsImage: { show: true },
          },
        },
        series: [
          {
            name: '近年来文创企业注册数量（家）',
            type: 'pie',
            radius: [25, 125],
            center: ['50%', '50%'],
            roseType: 'area',
            itemStyle: {
              borderRadius: 8,
            },
            label: {},
            data: [
              { value: 2015, name: '2016年' },
              { value: 2726, name: '2017年' },
              { value: 3325, name: '2018年' },
              { value: 5030, name: '2019年' },
              { value: 6629, name: '2020年' },
              { value: 10955, name: '2021年' },
            ],
          },
        ],
      }

      pieNightingaleCharts.value.setOption(option)
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
  <!-- :class="className" -->
  <div
    class="pieNightingalechart-container"
    ref="chart"
    style="height: 100%; width: 100%"
  />
</template>

<style lang="less"></style>
