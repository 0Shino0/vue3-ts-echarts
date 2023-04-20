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
    const provertyBarCharts = ref()

    // 生命周期钩子
    onMounted(() => {
      nextTick(() => {
        initChart()
      })

      // window.onresize = function () {
      //   // console.log(provertyBarCharts.value)
      //   provertyBarCharts.value.resize()
      // }

      const windowOnresizeProvertyEvent = () => {
        if (provertyBarCharts.value) provertyBarCharts.value.resize()
      }

      $bus.on('windowOnresizeProverty', windowOnresizeProvertyEvent)
    })

    onBeforeUnmount(() => {
      if (!provertyBarCharts.value) {
        return
      }
      provertyBarCharts.value.dispose()
      provertyBarCharts.value = null
    })

    // 方法 methods

    const initChart = () => {
      provertyBarCharts.value = markRaw(echarts.init(chart.value!, 'roma'))
      // setOptions(props.chartData)

      setOptions()
    }

    const setOptions = () => {
      let option = {
        title: {
          text: '各年份全国农村贫困人口数量',
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
          orient: 'vertical',
          left: 'right',
          top: 'center',
          feature: {
            dataView: { show: true, readOnly: false },
            magicType: { show: true, type: ['line', 'bar'] },
            restore: { show: true },
            saveAsImage: { show: true },
          },
        },
        legend: {
          data: ['Evaporation', '贫困人口数量', '贫困百分比'],
        },
        xAxis: [
          {
            type: 'category',
            // data: ['2019', '2020', '2021', '2022', '2023'],
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
            ],
            axisPointer: {
              type: 'shadow',
            },
            splitLine: {
              show: false, // 删除网格线
            },
          },
        ],
        yAxis: [
          {
            type: 'value',
            name: '贫困人口数量',
            min: 0,
            max: 12000,
            interval: 2000,
            axisLabel: {
              formatter: '{value} ',
            },
            splitLine: {
              show: false, // 删除网格线
            },
          },
          {
            type: 'value',
            name: '贫困百分比',
            // min: 0,
            // max: 8,
            // interval: 1,
            axisLabel: {
              formatter: '{value} ',
            },
          },
        ],
        grid: {
          left: '60px',
        },
        series: [
          {
            name: '贫困人口数量（万人）',
            type: 'bar',
            tooltip: {
              valueFormatter: function (value: string | number) {
                return value + ''
              },
            },
            data: [9899, 8249, 7017, 5575, 4335, 3046, 1660, 551, 0],
          },
          {
            name: '贫困百分比',
            type: 'line',
            yAxisIndex: 1,
            tooltip: {
              valueFormatter: function (value: string | number) {
                return value + '%'
              },
            },
            data: [5.3, 5.5, 4.3, 4.2, 3.3, 2.4, 1.5, 1.0, 0],
          },
        ],
      }

      provertyBarCharts.value.setOption(option)
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
    class="provertyBarCharts"
    ref="chart"
    style="width: 100%; height: 100%"
  ></div>
</template>

<style lang="less"></style>
