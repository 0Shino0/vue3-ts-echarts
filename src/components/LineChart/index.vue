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

interface PurchasesMember {
  expectedData: number[]
  actualData: number[]
}

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
      required: true,
    },
  },
  setup(props, context) {
    // 在这里声明数据，或者编写函数并在这里执行它
    // 在使用 setup 的情况下，请牢记一点：不能再用 this 来获取 Vue 实例

    const chart = ref<HTMLElement>()
    const lineCharts = ref()

    // 生命周期钩子
    onMounted(() => {
      nextTick(() => {
        initChart()
      })
      // window.onresize = function () {
      //   lineCharts.value.resize()
      // }
      const windowOnresizeEvent = () => {
        lineCharts.value.resize()
      }

      $bus.on('windowOnresize', windowOnresizeEvent)
    })

    onBeforeUnmount(() => {
      if (!lineCharts.value) {
        return
      }
      lineCharts.value.dispose()
      lineCharts.value = null
    })

    // 方法 methods

    const initChart = () => {
      lineCharts.value = markRaw(echarts.init(chart.value!, 'bgYellow'))
      // setOptions(props.chartData)

      let purchases: PurchasesMember = {
        expectedData: [
          1000000, 18000000, 30000000, 50000000, 100000000, 120000000,
          200000000,
        ],
        actualData: [
          5000000, 12000000, 18000000, 25000000, 30000000, 70000000, 120000000,
        ],
      }
      setOptions(purchases)
    }

    const setOptions = (purchases: PurchasesMember) => {
      lineCharts.value.setOption({
        title: {
          text: '工业数量',
        },
        xAxis: {
          data: [
            '50年代',
            '60年代',
            '70年代',
            '80年代',
            '90年代',
            '00后',
            '至今',
          ],
          boundaryGap: false,
          axisTick: {
            show: false,
          },
        },
        grid: {
          left: 10,
          right: 10,
          bottom: 20,
          top: 30,
          containLabel: true,
        },
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'cross',
          },
          padding: [5, 10],
        },
        yAxis: {
          axisTick: {
            show: false,
          },
        },
        legend: {
          data: ['实际', '目标'],
        },
        series: [
          {
            name: '实际',
            itemStyle: {
              normal: {
                // color: '#FF005A',
                lineStyle: {
                  // color: '#00C6FF',
                  width: 2,
                },
              },
            },
            smooth: true,
            type: 'line',
            data: purchases.expectedData,
            animationDuration: 2800,
            animationEasing: 'cubicInOut',
          },
          {
            name: '目标',
            smooth: true,
            type: 'line',
            itemStyle: {
              normal: {
                // color: '#3888fa',
                lineStyle: {
                  // color: '#3888fa',
                  width: 2,
                },
                areaStyle: {
                  color: '#f3f8ff',
                },
              },
            },
            data: purchases.actualData,
            animationDuration: 2800,
            animationEasing: 'quadraticOut',
          },
        ],
      })
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
    class="linechart-container"
    :ref="className"
    :style="{ height: height, width: width }"
  />
</template>

<style lang="less"></style>
