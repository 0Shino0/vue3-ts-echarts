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
    const PeaceLineCharts = ref()

    // 生命周期钩子
    onMounted(() => {
      nextTick(() => {
        initChart()
      })

      window.onresize = function () {
        // console.log(PeaceLineCharts.value)
        PeaceLineCharts.value.resize()
      }
      const windowOnresizePeaceEvent = () => {
        if (PeaceLineCharts.value) PeaceLineCharts.value.resize()
      }

      $bus.on('windowOnresizePeace', windowOnresizePeaceEvent)
    })

    onBeforeUnmount(() => {
      if (!PeaceLineCharts.value) {
        return
      }
      PeaceLineCharts.value.dispose()
      PeaceLineCharts.value = null
    })

    // 方法 methods

    const initChart = () => {
      PeaceLineCharts.value = markRaw(echarts.init(chart.value!, 'roma'))
      // setOptions(props.chartData)

      setOptions()
    }

    const setOptions = () => {
      let option = {
        animation: true,
        animationThreshold: 2000,
        animationDuration: 1000,
        animationEasing: 'cubicOut',
        animationDelay: 0,
        animationDurationUpdate: 300,
        animationEasingUpdate: 'cubicOut',
        animationDelayUpdate: 0,

        series: [
          {
            type: 'line',
            name: '我国近年来对外援助的增⻓',
            connectNulls: false,
            symbolSize: 4,
            showSymbol: true,
            smooth: false,
            clip: true,
            step: false,
            data: [
              ['2014年', 186227.07],
              ['2015年', 189336.85],
              ['2016年', 210596.92],
              ['2017年', 230460.0],
              ['2018年', 253484.0],
              ['2019年', 281405.23],
              ['2020年', 308379.34],
              ['2021年', 337494.67],
              ['2022年', 366002.26],
              // ['2023年', 520349.9],
            ],
            hoverAnimation: true,
            label: {
              show: true,
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
              '中国',
              // '\u7f8e\u56fd\u94c1\u8def\u8fd0\u8f93\u91cf',
            ],
            selected: {
              中国: true,
              // '\u7f8e\u56fd\u94c1\u8def\u8fd0\u8f93\u91cf': true,
            },
            show: true,
            padding: 5,
            itemGap: 10,
            itemWidth: 25,
            itemHeight: 14,
          },
        ],
        tooltip: {
          show: true,
          trigger: 'item',
          triggerOn: 'mousemove|click',
          formatter: '{a} <br/> {c} 万次',
          axisPointer: {
            type: 'line',
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
              '2014年',
              '2015年',
              '2016年',
              '2017年',
              '2018年',
              '2019年',
              '2020年',
              '2021年',
              '2022年',
              '2023年',
            ],
          },
        ],
        yAxis: [
          {
            type: 'value',
            show: true,
            scale: false,
            nameLocation: 'end',
            nameGap: 15,
            gridIndex: 0,
            axisLabel: {
              show: true,
              position: 'top',
              margin: 8,
              formatter: '{value}',
            },
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
          },
        ],
        title: [
          {
            text: '我国近年对外援助的增长',
            padding: 5,
            itemGap: 10,
            x: 'center',
            top: '20px',
          },
        ],
      }

      PeaceLineCharts.value.setOption(option)
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
    class="PeaceLineCharts"
    ref="chart"
    style="width: 100%; height: 100%"
  ></div>
</template>

<style lang="less"></style>
