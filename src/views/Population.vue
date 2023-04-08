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
    const populationLineCharts = ref()

    // 生命周期钩子
    onMounted(() => {
      nextTick(() => {
        initChart()
      })
      window.onresize = function () {
        populationLineCharts.value.resize()
      }
      // const windowOnresizeEvent = () => {
      //   populationLineCharts.value.resize()
      // }

      // $bus.on('windowOnresize', windowOnresizeEvent)
    })

    onBeforeUnmount(() => {
      if (!populationLineCharts.value) {
        return
      }
      populationLineCharts.value.dispose()
      populationLineCharts.value = null
    })

    // 方法 methods

    const initChart = () => {
      populationLineCharts.value = markRaw(echarts.init(chart.value!))
      // setOptions(props.chartData)

      setOptions()
    }

    const setOptions = () => {
      let option = {
        title: {
          text: '中国人口对比',
        },
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'cross',
            label: {
              backgroundColor: '#6a7985',
            },
          },
        },
        legend: {
          data: ['德国', '日本', '美国', '中国', '印度', '法国'],
        },
        toolbox: {
          feature: {
            saveAsImage: {},
          },
        },
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true,
        },
        xAxis: [
          {
            type: 'category',
            boundaryGap: false,
            data: ['1950', '1970', '1990', '2000', '2010', '2020', '2023'],
          },
        ],
        yAxis: [
          {
            type: 'value',
          },
        ],
        series: [
          {
            name: '德国',
            type: 'line',
            stack: 'Total',
            areaStyle: {},
            itemStyle: {
              normal: {
                color: '#8DC14A',
                lineStyle: {
                  // color: '#00C6FF',
                  width: 2,
                },
              },
            },
            emphasis: {
              focus: 'series',
            },
            data: [
              136749144, 106749144, 96749144, 90749144, 89749144, 85749144,
              84271000,
            ],
          },
          {
            name: '法国',
            type: 'line',
            stack: 'Total',
            areaStyle: {},
            emphasis: {
              focus: 'series',
            },
            data: [
              42517690, 49517690, 50517690, 60517690, 61517690, 65517690,
              68043000,
            ],
          },
          {
            name: '日本',
            type: 'line',
            stack: 'Total',
            areaStyle: {},
            emphasis: {
              focus: 'series',
            },
            data: [
              83805000, 93805000, 103805000, 113805000, 113805000, 123805000,
              124490000,
            ],
          },
          {
            name: '美国',
            type: 'line',
            stack: 'Total',
            label: {
              show: true,
              position: 'top',
            },

            areaStyle: {},
            emphasis: {
              focus: 'series',
            },
            data: [
              152271000, 162271000, 182271000, 222710000, 252271000, 302271000,
              334560000,
            ],
          },
          {
            name: '印度',
            type: 'line',
            stack: 'Total',
            label: {
              show: true,
              position: 'top',
            },
            itemStyle: {
              normal: {
                color: '#00C6FF',
                lineStyle: {
                  // color: '#00C6FF',
                  width: 2,
                },
              },
            },
            areaStyle: {},
            emphasis: {
              focus: 'series',
            },
            data: [
              369880000, 509200000, 709200000, 809200000, 909200000, 1209200000,
              1409200000,
            ],
          },

          {
            name: '中国',
            type: 'line',
            stack: 'Total',
            areaStyle: {},
            itemStyle: {
              normal: {
                color: '#BC252F',
                lineStyle: {
                  // color: '#00C6FF',
                  width: 2,
                },
              },
            },
            emphasis: {
              focus: 'series',
            },
            data: [
              562579779, 662579779, 759200000, 911750000, 1011750000,
              1400750000, 1411750000,
            ],
          },
        ],
      }

      populationLineCharts.value.setOption(option)
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
  <div class="population-container">
    <div
      class="pupulation-linecharts-container"
      style="width: 100%; height: 600px"
    >
      <div
        class="population-line-charts"
        ref="chart"
        style="width: 100%; height: 100%"
      ></div>
    </div>
  </div>
</template>

<style lang="less">
.population-container {
  margin-top: 64px;
  background-color: #fff;
}
.pupulation-linecharts-container {
  padding-top: 20px;
}

.population-line-charts {
}
</style>
