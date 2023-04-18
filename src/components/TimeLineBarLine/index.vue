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
    const timeLineBarLineCharts = ref()

    // 生命周期钩子
    onMounted(() => {
      nextTick(() => {
        initChart()
      })

      // window.onresize = function () {
      //   // console.log(timeLineBarLineCharts.value)
      //   timeLineBarLineCharts.value.resize()
      // }

      const windowOnresizeEvent = () => {
        if (timeLineBarLineCharts.value) timeLineBarLineCharts.value.resize()
      }

      $bus.on('windowOnresize', windowOnresizeEvent)
    })

    onBeforeUnmount(() => {
      if (!timeLineBarLineCharts.value) {
        return
      }
      timeLineBarLineCharts.value.dispose()
      timeLineBarLineCharts.value = null
    })

    // 方法 methods

    const initChart = () => {
      timeLineBarLineCharts.value = markRaw(echarts.init(chart.value!, 'roma'))
      // setOptions(props.chartData)

      setOptions()
    }

    const setOptions = () => {
      let option = {
        title: {
          text: '中央财政国防支出',
          x: 'center',
          top: '20px',
        },
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'cross',
            crossStyle: {
              color: '#999',
            },
          },
        },
        toolbox: {
          feature: {
            dataView: { show: true, readOnly: false },
            magicType: { show: true, type: ['line', 'bar'] },
            restore: { show: true },
            saveAsImage: { show: true },
          },
        },
        legend: {
          // 'Evaporation',
          data: ['中央财政国防支出', '增长率'],
        },
        xAxis: [
          {
            type: 'category',
            data: [
              '2012',
              '2013',
              '2014',
              '2015',
              '2016',
              '2017',
              '2018',
              '2019',
              '2020',
              '2021',
              '2022',
            ],
            axisPointer: {
              type: 'shadow',
            },
          },
        ],
        yAxis: [
          {
            type: 'value',
            name: '中央财政国防支出',
            min: 0,
            max: 15000,
            interval: 1000,
            axisLabel: {
              formatter: '{value} ',
            },
          },
          {
            type: 'value',
            name: '增长率',
            min: 0,
            max: 14,
            interval: 1,
            axisLabel: {
              formatter: '{value} ',
            },
          },
        ],
        series: [
          {
            name: '中央财政国防支出',
            type: 'bar',
            tooltip: {
              valueFormatter: function (value: string | number) {
                return value + ''
              },
            },
            data: [
              6481, 7177, 8055, 8869, 9546, 10226, 11070, 11897, 12680, 13795,
              14760,
            ],
          },
          {
            name: '增长率',
            type: 'line',
            yAxisIndex: 1,
            tooltip: {
              valueFormatter: function (value: string | number) {
                return value + '%'
              },
            },
            data: [, 10.7, 12.2, 10.1, 7.6, 7.1, 8.2, 7.5, 6.6, 8.8, 7.2],
          },
        ],
      }

      timeLineBarLineCharts.value.setOption(option)
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
    class="timeLineBarLineCharts"
    ref="chart"
    style="width: 100%; height: 350px"
  ></div>
</template>

<style lang="less"></style>
