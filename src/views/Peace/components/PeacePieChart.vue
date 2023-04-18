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
    const PeacePieCharts = ref()

    // 生命周期钩子
    onMounted(() => {
      nextTick(() => {
        initChart()
      })

      window.onresize = function () {
        // console.log(PeacePieCharts.value)
        PeacePieCharts.value.resize()
      }
      const windowOnresizePeaceEvent = () => {
        if (PeacePieCharts.value) PeacePieCharts.value.resize()
      }

      $bus.on('windowOnresizePeace', windowOnresizePeaceEvent)
    })

    onBeforeUnmount(() => {
      if (!PeacePieCharts.value) {
        return
      }
      PeacePieCharts.value.dispose()
      PeacePieCharts.value = null
    })

    // 方法 methods

    const initChart = () => {
      PeacePieCharts.value = markRaw(echarts.init(chart.value!, 'roma'))
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
            connectNulls: false,
            xAxisIndex: 0,
            yAxisIndex: 0,
            symbolSize: 4,
            showSymbol: true,
            smooth: false,
            clip: true,
            step: true,
            data: [
              ['2013年', 3084],
              ['2014年', 3559],
              ['2015年', 5951],
              ['2016年', 4746],
              ['2017年', 2337],
              ['2018年', 1856],
              ['2019年', 4050],
              ['2020年', 4285],
              ['2022年', 2520],
              ['2023年', 2149],
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
          {
            type: 'pie',
            clockwise: true,
            data: [
              {
                name: '2013年',
                value: 3084,
              },
              {
                name: '2014年',
                value: 3559,
              },
              {
                name: '2015年',
                value: 5951,
              },
              {
                name: '2016年',
                value: 4746,
              },
              {
                name: '2017年',
                value: 2337,
              },
              {
                name: '2018年',
                value: 1856,
              },
              {
                name: '2019年',
                value: 4050,
              },
              {
                name: '2020年',
                value: 4285,
              },
              {
                name: '2022年',
                value: 2520,
              },
              {
                name: '2023年',
                value: 2149,
              },
            ],
            radius: ['70%', '80%'],
            center: ['50%', '50%'],
            label: {
              show: true,
              position: 'top',
              margin: 8,
              formatter: '{b}: {c} 万米',
            },
            rippleEffect: {
              show: true,
              brushType: 'stroke',
              scale: 2.5,
              period: 4,
            },
            xAxisIndex: 1,
            yAxisIndex: 1,
          },
        ],
        legend: [
          {
            data: [''],
            selected: {
              '': true,
            },
            show: true,
            padding: 5,
            itemGap: 10,
            itemWidth: 25,
            itemHeight: 14,
          },
          {
            data: [
              '2013年',
              '2014年',
              '2015年',
              '2016年',
              '2017年',
              '2018年',
              '2019年',
              '2020年',
              '2022年',
              '2023年',
            ],
            selected: {},
            show: true,
            left: '2%',
            top: '-1%',
            // top: '15%',
            // orient: 'vertical',
            orient: 'horizontal',
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
          formatter: '{b}: {c} 万米',
        },
        xAxis: [
          {
            show: false,
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
              '2013年',
              '2014年',
              '2015年',
              '2016年',
              '2017年',
              '2018年',
              '2019年',
              '2020年',
              '2022年',
              '2023年',
            ],
          },
        ],
        yAxis: [
          {
            show: false,
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
          },
        ],
        title: [
          {
            padding: 5,
            itemGap: 10,
          },
          {
            text: '中国对外援助修建的铁路',
            x: 'center',
            top: '2%',
            padding: 5,
            itemGap: 10,
          },
        ],
        grid: [
          {
            show: false,
            zlevel: 0,
            z: 2,
            top: '30%',
            right: '35%',
            width: '300px',
            containLabel: false,
            backgroundColor: 'transparent',
            // "borderColor": "#ccc",
            borderWidth: 1,
          },
          {
            show: false,
            zlevel: 0,
            z: 2,
            left: '100%',
            containLabel: false,
            backgroundColor: 'transparent',
            // "borderColor": "#ccc",
            borderWidth: 1,
          },
        ],
        // "color": []
      }
      PeacePieCharts.value.setOption(option)
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
    class="PeacePieCharts"
    ref="chart"
    style="width: 100%; height: 100%"
  ></div>
</template>

<style lang="less"></style>
