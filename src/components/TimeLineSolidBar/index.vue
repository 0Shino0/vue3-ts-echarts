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
    const timeLineSolidBarCharts = ref()

    // 生命周期钩子
    onMounted(() => {
      nextTick(() => {
        initChart()
      })
      // window.onresize = function () {
      //   timeLineSolidBarCharts.value.resize()
      // }
      const windowOnresizeEvent = () => {
        if (timeLineSolidBarCharts.value) timeLineSolidBarCharts.value.resize()
      }

      $bus.on('windowOnresize', windowOnresizeEvent)
    })

    onBeforeUnmount(() => {
      if (!timeLineSolidBarCharts.value) {
        return
      }
      timeLineSolidBarCharts.value.dispose()
      timeLineSolidBarCharts.value = null
    })

    // 方法 methods

    const initChart = () => {
      timeLineSolidBarCharts.value = markRaw(
        echarts.init(chart.value!, 'bgYellow')
      )
      // setOptions(props.chartData)

      setOptions()
    }

    const setOptions = () => {
      const yData = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]

      let option = {
        title: {
          text: '农业现代化',
          subtext: '数据来源：国家统计局',
          x: 'center',
          // top: '20px',
        },
        tooltip: {
          trigger: 'axis',
          left: 'right',
          top: 'center',
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
          orient: 'vertical',
          left: 'right',
          top: 'center',
        },
        // legend: {
        //   // 'Evaporation',
        //   data: ['中央财政国防支出', '增长率'],
        //   left: 'right',
        // },
        // 直角坐标系内绘图网格,设置组件距离容器的距离
        grid: {
          left: 50,
          top: 50,
          right: 50,
          bottom: 50,
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
            // 设置x轴的颜色和偏移量
            axisLabel: {
              color: '#999',
              rotate: 0,
            },
            // 不显示x轴刻度
            axisTick: {
              show: false,
            },
            axisPointer: {
              type: 'shadow',
            },
          },
        ],
        yAxis: [
          {
            type: 'value',
            name: '粮食产量/万吨',
            // min: 0,
            // max: 30000,
            // interval: 1000,
            axisLabel: {
              formatter: '{value} ',
            },
          },
          // {
          //   type: 'value',
          //   name: '增长率',
          //   // min: 0,
          //   // max: 14,
          //   // interval: 1,
          //   axisLabel: {
          //     formatter: '{value} ',
          //   },
          // },
        ],
        series: [
          {
            z: 1,
            name: '粮食产量/万吨',
            type: 'bar',
            // color: '#DD1D1D',
            itemStyle: {
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                { offset: 0, color: '#DD1D1D' },
                { offset: 1, color: '#ae0000' },
              ]),
            },
            // barWidth: '80%', //柱图宽度
            // barWidth: '70%', //柱图宽度
            barWidth: '60%', //柱图宽度
            // alignTicks: true, // 多y轴自动对齐
            tooltip: {
              valueFormatter: function (value: string | number) {
                return value + ''
              },
            },

            data: [
              58958, 60194, 60710, 62144, 66044, 66161, 65789, 66384, 66949,
              68285, 68653,
            ],
          },

          // {
          //   name: '增长率',
          //   type: 'line',
          //   yAxisIndex: 1,
          //   tooltip: {
          //     valueFormatter: function (value: string | number) {
          //       return value + '%'
          //     },
          //   },
          //   data: [11.0, 10.7, 12.2, 10.1, 7.6, 7.1, 8.2, 7.5, 6.6, 8.8, 7.2],
          // },
          // 样式
          {
            z: 2,
            type: 'pictorialBar',
            symbol: 'diamond',
            symbolOffset: ['0%', '58%'],
            symbolSize: ['80%', 12],
            tooltip: {
              show: false,
            },
            itemStyle: {
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                { offset: 0, color: '#DD1D1D' },
                { offset: 1, color: '#FF0000' },
              ]),
            },
            data: yData,
          },
          // 内容的顶部
          // {
          //       z: 3,
          //       type: 'pictorialBar',
          //       symbol: 'diamond',
          //       symbolPosition: 'center',
          //       symbolOffset: ['0%', '-50%'],
          //       symbolSize: [30, 12],
          //       tooltip:{
          //           show: false,
          //       },
          //       itemStyle:{
          //        color: new echarts.graphic.LinearGradient(0,0,0,1, [{offset:0, color: '#DD1D1D'},{offset:1, color: '#DD1D1D'}])
          //       },
          //       data: yData,
          // },

          // 阴影的顶部
          {
            z: 3,
            type: 'pictorialBar',
            symbol: 'diamond',
            symbolPosition: 'end',
            symbolOffset: ['0%', '-55%'],
            symbolSize: ['82%', 18],
            // symbolOffset: ['0%', '-55%'],
            // symbolSize: ['100%','100%'],
            tooltip: {
              show: false,
            },
            itemStyle: {
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                { offset: 0, color: '#990036' },
                { offset: 1, color: '#990036' },
              ]),
              //柱形图圆角设置
            },
            data: [
              58958, 60194, 60710, 62144, 66044, 66161, 65789, 66384, 66949,
              68285, 68653,
            ],
          },
        ],
      }

      timeLineSolidBarCharts.value.setOption(option)
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
    class="timeLineSolidBarchart-container"
    :ref="className"
    :style="{ height: height, width: width }"
  />
</template>

<style lang="less"></style>
