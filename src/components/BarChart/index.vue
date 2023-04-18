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
    const barCharts = ref()

    // 生命周期钩子
    onMounted(() => {
      nextTick(() => {
        initChart()
      })
      // window.onresize = function () {
      //   console.log(barCharts.value)
      //   barCharts.value.resize()
      // }
      const windowOnresizeEvent = () => {
        barCharts.value.resize()
      }

      $bus.on('windowOnresize', windowOnresizeEvent)
    })

    onBeforeUnmount(() => {
      if (!barCharts.value) {
        return
      }
      barCharts.value.dispose()
      barCharts.value = null
    })

    // 方法 methods

    const initChart = () => {
      barCharts.value = markRaw(echarts.init(chart.value!, 'roma'))
      // setOptions(props.chartData)

      setOptions()
    }

    const setOptions = () => {
      let option = {
        title: {
          text: '人均GDP',
          subtext: '数据来源维基百科 | 单位百万美元',
        },
        legend: {},
        tooltip: {
          trigger: 'item',
          formatter: (item: any) => {
            // console.log(item)
            return `${item.name}<br/>${item.seriesName}: ${
              item.data[item.seriesName]
            } 百万美元`
          },
        },
        dataset: {
          dimensions: ['product', '2012', '2017', '2022'],
          source: [
            {
              product: '中国',
              2012: 8570348,
              2017: 11937562,
              2022: 18321197,
            },
            { product: '美国', 2012: 16155250, 2017: 19362129, 2022: 25035164 },
            { product: '俄罗斯', 2012: 2170145, 2017: 1469341, 2022: 2133092 },
            { product: '日本', 2012: 6203213, 2017: 4884489, 2022: 4300621 },
          ],
        },
        xAxis: { type: 'category' },
        yAxis: {},
        // Declare several bar series, each will be mapped
        // to a column of dataset.source by default.
        series: [{ type: 'bar' }, { type: 'bar' }, { type: 'bar' }],
      }

      barCharts.value.setOption(option)
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
    :class="className"
    class="barchart-container"
    :ref="className"
    :style="{ height: height, width: width }"
  />
</template>

<style lang="less"></style>
