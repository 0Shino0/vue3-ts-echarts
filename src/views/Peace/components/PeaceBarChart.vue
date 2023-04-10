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
      const windowOnresizePeaceEvent = () => {
        if (NatureBarCharts.value) NatureBarCharts.value.resize()
      }

      $bus.on('windowOnresizePeace', windowOnresizePeaceEvent)
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
      NatureBarCharts.value = markRaw(echarts.init(chart.value!, 'roma'))
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
            type: 'bar',
            name: '中国',
            legendHoverLink: true,
            data: [
              131989200, 146441500, 159337100, 174393600, 185136300, 193734000,
              197849000, 222155800, 233201600, 242030000,
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
              position: 'right',
              margin: 8,
            },
            rippleEffect: {
              show: true,
              brushType: 'stroke',
              scale: 2.5,
              period: 4,
            },
          },
          {
            type: 'bar',
            name: '美国',
            legendHoverLink: true,
            data: [
              42031000, 42550780, 43538250, 44340870, 46233010, 47886450,
              48436470, 52132840, 54776340, 55518880,
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
              position: 'right',
              margin: 8,
            },
            rippleEffect: {
              show: true,
              brushType: 'stroke',
              scale: 2.5,
              period: 4,
            },
          },
          {
            type: 'bar',
            name: '俄罗斯',
            legendHoverLink: true,
            data: [
              142031000, 142550780, 143538250, 144340870, 146233010, 147886450,
              148436470, 152132840, 154776340, 155518880,
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
              position: 'right',
              margin: 8,
            },
            rippleEffect: {
              show: true,
              brushType: 'stroke',
              scale: 2.5,
              period: 4,
            },
          },
          {
            type: 'bar',
            name: '日本',
            legendHoverLink: true,
            data: [
              42031000, 42550780, 43538250, 44340870, 46233010, 47886450,
              48436470, 52132840, 54776340, 55518880,
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
              position: 'right',
              margin: 8,
            },
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
            data: ['中国', '美国', '日本', '俄罗斯'],
            selected: {
              中国: true,
              美国: true,
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
          },
        ],
        yAxis: [
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
        title: {
          text: '世界各国对外援助',
          // subtext: '数据来源国家数据',
          x: 'center',
          top: '20px',
        },
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
