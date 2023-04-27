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
    const timeLineBarCharts = ref()

    // 生命周期钩子
    onMounted(() => {
      nextTick(() => {
        initChart()
      })

      // window.onresize = function () {
      //   // console.log(timeLineBarCharts.value)
      //   timeLineBarCharts.value.resize()
      // }

      const windowOnresizeEvent = () => {
        if (timeLineBarCharts.value) timeLineBarCharts.value.resize()
      }

      $bus.on('windowOnresize', windowOnresizeEvent)
    })

    onBeforeUnmount(() => {
      if (!timeLineBarCharts.value) {
        return
      }
      timeLineBarCharts.value.dispose()
      timeLineBarCharts.value = null
    })

    // 方法 methods

    const initChart = () => {
      timeLineBarCharts.value = markRaw(echarts.init(chart.value!, 'bgYellow'))
      // setOptions(props.chartData)

      setOptions()
    }

    const setOptions = () => {
      let option = {
        title: {
          text: '工业现代化',
          subtext: '数据来源：国家统计局',
          x: 'center',
          // top: '20px',
        },
        backgroundColor: '#FFF1BA',
        tooltip: {
          trigger: 'axis',
          // axisPointer: {
          //   type: 'cross',
          //   crossStyle: {
          //     color: '#999',
          //   },
          // },
        },
        toolbox: {
          feature: {
            dataView: { show: true, readOnly: false },
            magicType: { show: true, type: ['line', 'bar'] },
            restore: { show: true },
            saveAsImage: { show: true },
          },
          orient: 'vertical',
          left: 'right',
          top: 'center',
        },
        legend: {
          data: ['工业增加值', '增长率'],
          left: 'right',
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
            name: '工业增加值/亿元',
            // min: 0,

            max: 900000,
            // interval: 1000,
            axisLabel: {
              formatter: '{value}',
            },
          },
          {
            type: 'value',
            show: false,
            name: '增长率/%',
            // axisLine: {
            //   show: false,
            // },
            // axisTick: {
            // show: false,
            // },
            // minorTick: {
            //   show: false,
            // },
            // axisPointer: { type: 'none' },
            min: 0,
            max: 13,
            alignTicks: true, // 多y轴自动对齐
            axisLabel: {
              formatter: '{value}',
            },
          },
        ],
        series: [
          {
            name: '工业增加值',
            type: 'bar',
            tooltip: {
              valueFormatter: function (value: string | number) {
                return value + ''
              },
            },
            // color: '#a90000',
            color: '#DD1D1D',
            // barWidth: '80%', //柱图宽度
            // barWidth: '70%', //柱图宽度
            // barWidth: '60%', //柱图宽度
            data: [
              188650, 193786, 216217, 228974, 245406, 275119, 301089, 311859,
              313071, 372575, 401600,
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
            data: [1.6, 2.7, 6.1, 5.9, 5.7, 6.2, 6.1, 4.8, 2.4, 9.6, 3.4],
          },
        ],
        grid: {
          left: '100',
        },
      }

      timeLineBarCharts.value.setOption(option)
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
    class="timeLineBarCharts"
    ref="chart"
    style="width: 100%; height: 350px"
  ></div>
</template>

<style lang="less"></style>
