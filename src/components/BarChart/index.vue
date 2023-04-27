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
      default: '100%',
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
      const windowOnresizePopulationEvent = () => {
        if (barCharts.value) barCharts.value.resize()
      }
      $bus.on('windowOnresizePopulation', windowOnresizePopulationEvent)
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
      barCharts.value = markRaw(echarts.init(chart.value!, 'bgYellow'))
      // setOptions(props.chartData)

      setOptions()
    }

    const setOptions = () => {
      // let option = {
      //   title: {
      //     text: '人均GDP',
      //     subtext: '数据来源维基百科 | 单位百万美元',
      //   },
      //   legend: {},
      //   tooltip: {
      //     trigger: 'item',
      //     formatter: (item: any) => {
      //       // console.log(item)
      //       return `${item.name}<br/>${item.seriesName}: ${
      //         item.data[item.seriesName]
      //       } 百万美元`
      //     },
      //   },
      //   dataset: {
      //     dimensions: ['product', '2012', '2017', '2022'],
      //     source: [
      //       {
      //         product: '中国',
      //         2012: 8570348,
      //         2017: 11937562,
      //         2022: 18321197,
      //       },
      //       { product: '美国', 2012: 16155250, 2017: 19362129, 2022: 25035164 },
      //       { product: '俄罗斯', 2012: 2170145, 2017: 1469341, 2022: 2133092 },
      //       { product: '日本', 2012: 6203213, 2017: 4884489, 2022: 4300621 },
      //     ],
      //   },
      //   xAxis: { type: 'category' },
      //   yAxis: {},
      //   // Declare several bar series, each will be mapped
      //   // to a column of dataset.source by default.
      //   series: [{ type: 'bar' }, { type: 'bar' }, { type: 'bar' }],
      // }
      let option = {
        animation: true,
        animationThreshold: 2000,
        animationDuration: 1000,
        animationEasing: 'cubicOut',
        animationDelay: 0,
        animationDurationUpdate: 300,
        animationEasingUpdate: 'cubicOut',
        animationDelayUpdate: 0,
        // color: ['#0000FF', '#DE1F1E'],

        series: [
          {
            type: 'bar',
            name: '中国国内生产总值',
            yAxisIndex: 0,
            legendHoverLink: true,
            color: '#DD1D1D',
            data: [
              // 7.5547,
              8.532, 9.5744, 10.4767, 11.06, 11.237, 12.3232, 13.8919, 14.3004,
              14.7296, 16.5457, 17.5645,
            ],
            showBackground: false,
            barMinHeight: 0,
            barCategoryGap: '20%',
            barGap: '30%',
            large: false,
            largeThreshold: 400,
            seriesLayoutBy: 'column',
            datasetIndex: 0,
            clip: true,
            zlevel: 0,
            z: 2,
            label: {
              show: true,
              position: 'top',
              margin: 8,
            },
          },
          {
            type: 'bar',
            name: '美国国内生产总值',
            yAxisIndex: 0,
            legendHoverLink: true,
            // color: '#0032E8',
            color: '#0028ba',
            data: [
              // 15.5426,
              16.197, 16.7849, 17.5273, 18.2383, 18.7451, 19.543, 20.6119,
              21.4332, 20.9328, 23.32, 25.46,
            ],
            showBackground: false,
            barMinHeight: 0,
            barCategoryGap: '20%',
            barGap: '30%',
            large: false,
            largeThreshold: 400,
            seriesLayoutBy: 'column',
            datasetIndex: 0,
            clip: true,
            zlevel: 0,
            z: 2,
            label: {
              show: true,
              position: 'top',
              margin: 8,
            },
          },
          {
            type: 'line',
            name: '中国国内生产总值增速',
            color: '#BC252F',
            connectNulls: false,
            yAxisIndex: 1,
            symbolSize: 4,
            showSymbol: true,
            smooth: false,
            clip: true,
            step: false,
            data: [
              // [
              //     "2011年",
              //     9.6
              // ],
              ['2012年', 7.9],
              ['2013年', 7.8],
              ['2014年', 7.4],
              ['2015年', 7],
              ['2016年', 6.8],
              ['2017年', 6.9],
              ['2018年', 6.7],
              ['2019年', 6],
              ['2020年', 2.3],
              ['2021年', 8.1],
              ['2022年', 3.0],
            ],
            hoverAnimation: true,
            label: {
              show: false,
              position: 'top',
              margin: 8,
            },
            lineStyle: {
              show: true,
              width: 3,
              opacity: 1,
              curveness: 0,
              type: 'solid',
            },
            areaStyle: {
              opacity: 0,
            },
            zlevel: 0,
            z: 0,
            rippleEffect: {
              show: true,
              brushType: 'stroke',
              scale: 2.5,
              period: 4,
            },
          },
          {
            type: 'line',
            name: '美国国内生产总值增速',
            // color: '#FAC858',
            color: '#0028ba',
            connectNulls: false,
            yAxisIndex: 1,
            symbolSize: 4,
            showSymbol: true,
            smooth: false,
            clip: true,
            step: false,
            data: [
              // [
              //     "2011年",
              //     1.6
              // ],
              ['2012年', 2.2],
              ['2013年', 1.7],
              ['2014年', 2.6],
              ['2015年', 2.9],
              ['2016年', 1.5],
              ['2017年', 2.2],
              ['2018年', 3],
              ['2019年', 2.2],
              ['2020年', -3.5],
              ['2021年', 5.7],
              ['2022年', 2.1],
            ],
            hoverAnimation: true,
            label: {
              show: false,
              position: 'top',
              margin: 8,
            },
            lineStyle: {
              show: true,
              width: 3,
              opacity: 1,
              curveness: 0,
              type: 'solid',
            },
            areaStyle: {
              opacity: 0,
            },
            zlevel: 0,
            z: 0,
            rippleEffect: {
              show: true,
              brushType: 'stroke',
              scale: 2.5,
              period: 4,
            },
          },
        ],
        legend: [
          {
            data: [
              '中国国内生产总值',
              '美国国内生产总值',
              '中国国内生产总值增速',
              '美国国内生产总值增速',
            ],
            selected: {
              中国国内生产总值: true,
              美国国内生产总值: true,
              中国国内生产总值增速: true,
              美国国内生产总值增速: true,
            },
            show: true,
            padding: 5,
            itemGap: 10,
            itemWidth: 25,
            itemHeight: 14,
            left: 'right',
          },
        ],
        tooltip: {
          show: true,
          trigger: 'axis',
          triggerOn: 'mousemove|click',
          axisPointer: {
            type: 'cross',
          },
          showContent: true,
          alwaysShowContent: false,
          showDelay: 0,
          hideDelay: 100,
          textStyle: {
            fontSize: 14,
          },
          borderWidth: 0,
          padding: 5,
        },
        xAxis: [
          {
            show: true,
            scale: false,
            nameLocation: 'end',
            nameGap: 15,
            gridIndex: 0,
            inverse: false,
            offset: 0,
            splitNumber: 5,
            minInterval: 0,
            splitLine: {
              show: false,
              lineStyle: {
                show: true,
                width: 1,
                opacity: 1,
                curveness: 0,
                type: 'solid',
              },
            },
            data: [
              // "2011年",
              '2012年',
              '2013年',
              '2014年',
              '2015年',
              '2016年',
              '2017年',
              '2018年',
              '2019年',
              '2020年',
              '2021年',
              '2022年',
            ],
          },
        ],
        yAxis: [
          {
            name: '\u56fd\u5185\u751f\u4ea7\u603b\u91cf',
            show: true,
            scale: false,
            nameLocation: 'end',
            nameGap: 15,
            gridIndex: 0,

            axisLine: {
              show: true,
              onZero: true,
              onZeroAxisIndex: 0,
              lineStyle: {
                show: true,
                width: 1,
                opacity: 1,
                curveness: 0,
                type: 'solid',
                // "color": "#5793f3"
              },
            },
            axisLabel: {
              show: true,
              position: 'top',
              margin: 8,
              formatter: '{value} 万亿美元',
            },
            inverse: false,
            position: 'right',
            offset: 0,
            splitNumber: 5,
            min: 0,
            // max: 50,
            minInterval: 0,
            splitLine: {
              show: false,
              lineStyle: {
                show: true,
                width: 1,
                opacity: 1,
                curveness: 0,
                type: 'solid',
              },
            },
          },
          {
            type: 'value',
            show: true,
            scale: false,
            nameLocation: 'end',
            nameGap: 15,
            gridIndex: 0,
            axisLine: {
              show: true,
              onZero: true,
              onZeroAxisIndex: 0,
              lineStyle: {
                show: true,
                width: 1,
                opacity: 1,
                curveness: 0,
                type: 'solid',
                // color: '#675bba',
              },
            },
            axisLabel: {
              show: true,
              position: 'top',
              margin: 8,
              formatter: '{value} %',
            },
            inverse: false,
            position: 'left',
            offset: 0,
            splitNumber: 5,
            min: -5,
            max: 10,
            minInterval: 0,
            splitLine: {
              show: true,
              lineStyle: {
                show: true,
                width: 1,
                opacity: 0.5,
                curveness: 0,
                type: 'solid',
              },
            },
          },
        ],
        title: [
          {
            // text: '中美十年国内生产总值',
            // text: '中美十年GDP对比',
            text: '中美GDP对比',
            subtext: '数据来源：世界银行',
            padding: 5,
            itemGap: 10,
          },
        ],
        grid: [
          {
            show: false,
            zlevel: 0,
            z: 2,
            left: '5%',
            right: '10%',
            bottom: '4%',
            // left: '5%',
            // right: '20%',
            containLabel: false,
            backgroundColor: 'transparent',
            // borderColor: '#ccc',
            borderWidth: 1,
          },
        ],

        color: ['red', '#4CD7FF'],
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
