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
    const provertyLineCharts = ref()

    // 生命周期钩子
    onMounted(() => {
      nextTick(() => {
        initChart()
      })

      // window.onresize = function () {
      //   // console.log(provertyLineCharts.value)
      //   provertyLineCharts.value.resize()
      // }
      const windowOnresizeProvertyEvent = () => {
        if (provertyLineCharts.value) provertyLineCharts.value.resize()
      }

      $bus.on('windowOnresizeProverty', windowOnresizeProvertyEvent)
    })

    onBeforeUnmount(() => {
      if (!provertyLineCharts.value) {
        return
      }
      provertyLineCharts.value.dispose()
      provertyLineCharts.value = null
    })

    // 方法 methods

    const initChart = () => {
      provertyLineCharts.value = markRaw(echarts.init(chart.value!, 'bgYellow'))
      // setOptions(props.chartData)

      setOptions()
    }

    const setOptions = () => {
      let option = {
        title: {
          text: '中央财政补助地方专项扶贫资金',
          x: 'center',
          // top: '20px',
        },
        color: '#DD1D1D',
        xAxis: {
          type: 'category',
          boundaryGap: false,
          data: ['2017', '2018', '2019', '2020'],
        },
        tooltip: {
          // trigger: 'item',
          trigger: 'axis',
          formatter: '{a}<br/>{b}：{c} 亿元',
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
        yAxis: {
          type: 'value',
          // type: 'value',
          nameTextStyle: {
            // align: 'left',
            padding: [0, 0, 0, 120],
            rich: {
              a: {
                // 没有设置 `align`，则 `align` 为 right
              },
            },
          },
          name: '中央财政补助地方专项扶贫资金/亿元',
          // min: 0,
          // max: 12000,
          // interval: 2000,
          axisLabel: {
            formatter: '{value} ',
          },
          splitLine: {
            show: false, // 删除网格线
          },
        },

        series: [
          {
            // data: [300, 450, 600, 750, 900],
            name: '中央财政补助地方专项扶贫资金',
            data: [837, 1178, 1226, 1461],
            type: 'line',
            areaStyle: {},
          },
        ],
      }

      provertyLineCharts.value.setOption(option)
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
    class="provertyLineCharts"
    ref="chart"
    style="width: 100%; height: 100%"
  ></div>
</template>

<style lang="less"></style>
