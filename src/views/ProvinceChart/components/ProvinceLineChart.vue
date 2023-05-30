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
import type { PropType } from 'vue'
import { MapNameMember } from '@/views/ProvinceChart/index.vue'

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
    mapNameObj: {
      type: Object as PropType<MapNameMember>,
      required: false,
    },
  },
  setup(props, context) {
    // 在这里声明数据，或者编写函数并在这里执行它
    // 在使用 setup 的情况下，请牢记一点：不能再用 this 来获取 Vue 实例

    const chart = ref<HTMLElement>()
    const provinceLineCharts = ref()

    // 生命周期钩子
    onMounted(() => {
      nextTick(() => {
        initChart()
      })

      // window.onresize = function () {
      //   // console.log(provinceLineCharts.value)
      //   provinceLineCharts.value.resize()
      // }
      const windowOnresizeProvinceEvent = () => {
        if (provinceLineCharts.value) provinceLineCharts.value.resize()
      }

      $bus.on('windowOnresizeProvince', windowOnresizeProvinceEvent)
    })

    onBeforeUnmount(() => {
      if (!provinceLineCharts.value) {
        return
      }
      provinceLineCharts.value.dispose()
      provinceLineCharts.value = null
    })

    // 方法 methods

    const initChart = () => {
      provinceLineCharts.value = markRaw(
        echarts.init(chart.value!, 'wonderland')
      )
      // setOptions(props.chartData)

      setOptions()
    }

    const setOptions = () => {
      let option = {
        title: {
          text: props.mapNameObj!.name + '碳达峰',
          x: 'left',
          // y: 'top',
          textStyle: {
            // color: '#fff',
            fontWeight: 'bold',
            fontSize: 14,
          },
        },
        tooltip: {
          trigger: 'axis',
        },
        grid: {
          left: '3%',
          right: '8%',
          bottom: '5%',
          top: '13%',
          containLabel: true,
        },
        color: ['#72b332', '#35a9e0'],
        legend: {
          data: ['碳排放增速', 'GDP增速'],
          show: true,
          right: '15%',
          y: '0',
          textStyle: {
            color: '#999',
            fontSize: '13',
          },
        },
        toolbox: {
          show: false,
          feature: {
            mark: { show: true },
            dataView: { show: true, readOnly: false },
            magicType: { show: true, type: ['line', 'bar', 'stack', 'tiled'] },
            restore: { show: true },
            saveAsImage: { show: true },
          },
        },
        calculable: true,
        xAxis: [
          {
            type: 'category',
            boundaryGap: false,
            data: [
              '2013',
              '2014',
              '2015',
              '2016',
              '2017',
              '2018',
              '2019',
              '2020',
            ],
            splitLine: {
              show: true,
              lineStyle: {
                color: '#2d3b53',
              },
            },
            axisLabel: {
              textStyle: {
                // color: '#fff',
              },
              alignWithLabel: true,
              interval: 0,
              rotate: '15',
            },
          },
        ],
        yAxis: [
          {
            type: 'value',
            splitLine: {
              show: true,
              lineStyle: {
                color: '#2d3b53',
              },
            },
            axisLabel: {
              textStyle: {
                color: '#999',
              },
            },
          },
        ],
        series: [
          {
            name: '碳排放增速',
            type: 'line',
            smooth: true,
            symbol: 'roundRect',
            data: [0, 5.5, 4.9, 4.1, 3.5, 8, 4, 1.5],
          },
          {
            name: 'GDP增速',
            type: 'line',
            smooth: true,
            symbol: 'roundRect',
            data: [12, 11, 10, 9.5, 9, 8.5, 8.2, 8],
          },
        ],
      }

      provinceLineCharts.value.setOption(option)
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
    class="provinceLineCharts"
    ref="chart"
    style="width: 100%; height: 100%"
  ></div>
</template>

<style lang="less"></style>
