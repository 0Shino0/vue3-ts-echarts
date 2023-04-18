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
    const peaceSunburstCharts = ref()

    // 生命周期钩子
    onMounted(() => {
      nextTick(() => {
        initChart()
      })

      window.onresize = function () {
        // console.log(peaceSunburstCharts.value)
        peaceSunburstCharts.value.resize()
      }
      const windowOnresizePeaceEvent = () => {
        if (peaceSunburstCharts.value) peaceSunburstCharts.value.resize()
      }

      $bus.on('windowOnresizePeace', windowOnresizePeaceEvent)
    })

    onBeforeUnmount(() => {
      if (!peaceSunburstCharts.value) {
        return
      }
      peaceSunburstCharts.value.dispose()
      peaceSunburstCharts.value = null
    })

    // 方法 methods

    const initChart = () => {
      peaceSunburstCharts.value = markRaw(echarts.init(chart.value!, 'roma'))
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
            name: '\u4e2d\u56fd',
            coordinateSystem: 'polar',
            symbolSize: 4,
            data: [100, 130, 120, 150],
            label: {
              show: true,
              position: 'top',
              margin: 8,
            },
            areaStyle: {
              opacity: 0,
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
            name: '\u7f8e\u56fd',
            coordinateSystem: 'polar',
            symbolSize: 4,
            data: [10, 0, 3, 5],
            label: {
              show: true,
              position: 'top',
              margin: 8,
            },
            areaStyle: {
              opacity: 0,
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
            data: ['中国', '美国'],
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
          formatter: '{a}<br/> {b}: 援助了 {c} 个国家',
        },
        radiusAxis: {
          type: 'category',
          data: ['2020年', '2021年', '2022年', '2023年'],
          scale: false,
        },
        angleAxis: {
          clockwise: true,
          max: 22,
          scale: false,
          splitNumber: 5,
        },
        polar: {},
        title: [
          {
            text: '中美两国在疫情期间对外援助的对⽐',
            padding: 5,
            itemGap: 10,
            x: 'center',
            top: '20px',
          },
        ],
      }

      peaceSunburstCharts.value.setOption(option)
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
    class="peaceSunburstCharts"
    ref="chart"
    style="width: 100%; height: 100%"
  ></div>
</template>

<style lang="less"></style>
