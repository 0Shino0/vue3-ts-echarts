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
    const NatureBarCharts = ref()

    // 生命周期钩子
    onMounted(() => {
      nextTick(() => {
        initChart()
      })

      window.onresize = function () {
        // console.log(NatureBarCharts.value)
        NatureBarCharts.value.resize()
      }
      const windowOnresizeNatureEvent = () => {
        if (NatureBarCharts.value) NatureBarCharts.value.resize()
      }

      $bus.on('windowOnresizeNature', windowOnresizeNatureEvent)
    })

    onBeforeUnmount(() => {
      if (!NatureBarCharts.value) {
        return
      }
      NatureBarCharts.value.dispose()
      NatureBarCharts.value = null
    })

    // 方法 methods

    const initChart = () => {
      NatureBarCharts.value = markRaw(echarts.init(chart.value!, 'wonderland'))
      // setOptions(props.chartData)

      setOptions()
    }

    const setOptions = () => {
      let option = {
        title: {
          text: '全国森林资源清查数据',
          subtext: '数据来源国家数据',
          x: 'center',
          top: '20px',
        },
        grid: {
          left: '0',
          top: '30',
          right: '0',
          bottom: '10',
          containLabel: true,
        },
        legend: {
          top: 0,
          itemWidth: 10, // 设置宽度
          itemHeight: 10, // 设置高度
        },

        tooltip: {
          trigger: 'axis',
          axisPointer: {
            // 坐标轴指示器，坐标轴触发有效
            type: 'shadow', // 默认为直线，可选为：'line' | 'shadow'
          },
        },

        xAxis: {
          type: 'category',
          data: [
            '第一次',
            '第二次',
            '第三次',
            '第四次',
            '第五次',
            '第六次',
            '第七次',
            '第八次',
            '第九次',
          ],

          axisTick: {
            //---坐标轴 刻度
            show: true, //---是否显示
          },
          axisLine: {
            //---坐标轴 轴线
            show: true, //---是否显示
            lineStyle: {
              // color: 'rgba(255,255,255,.1)',
              width: 1,
              type: 'dotted',
            },
          },

          axisLabel: {
            //X轴文字
            textStyle: {
              fontSize: 8,
              // color: '#fff',
            },
          },
        },

        yAxis: {
          type: 'value',

          splitLine: {
            //分割线
            show: true,
            lineStyle: {
              color: 'rgba(255,255,255,.1)',
              width: 1,
              type: 'dotted',
            },
          },

          axisLabel: {
            //Y轴刻度值
            formatter: '{value}',
            textStyle: {
              fontSize: 12,
              // color: '#fff',
            },
          },

          axisLine: {
            //---坐标轴 轴线
            show: false, //---是否显示
          },
        },
        series: [
          {
            name: '面积(万平方米)',
            type: 'bar',
            data: [
              12186.23, 11527.74, 12465.28, 13370.35, 15894.09, 17490.92,
              19545.22, 20768.73, 22044.62,
            ],
            barWidth: 15, //柱图宽度
            itemStyle: {
              normal: {
                //设置颜色的渐变
                barBorderRadius: 50,
                color: '#4fb69d',
              },
            },
          },
        ],
      }

      NatureBarCharts.value.setOption(option)
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
    class="NatureBarCharts"
    ref="chart"
    style="width: 100%; height: 100%"
  ></div>
</template>

<style lang="less"></style>
