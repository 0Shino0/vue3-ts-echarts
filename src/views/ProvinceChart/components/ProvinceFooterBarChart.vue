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
    const provinceFooterBarCharts = ref()

    // 生命周期钩子
    onMounted(() => {
      nextTick(() => {
        initChart()
      })

      // window.onresize = function () {
      //   // console.log(provinceFooterBarCharts.value)
      //   provinceFooterBarCharts.value.resize()
      // }
      const windowOnresizeProvinceEvent = () => {
        if (provinceFooterBarCharts.value)
          provinceFooterBarCharts.value.resize()
      }

      $bus.on('windowOnresizeProvince', windowOnresizeProvinceEvent)
    })

    onBeforeUnmount(() => {
      if (!provinceFooterBarCharts.value) {
        return
      }
      provinceFooterBarCharts.value.dispose()
      provinceFooterBarCharts.value = null
    })

    // 方法 methods

    const initChart = () => {
      provinceFooterBarCharts.value = markRaw(
        echarts.init(chart.value!, 'wonderland')
      )
      // setOptions(props.chartData)

      setOptions()
    }

    const setOptions = () => {
      let option = {
        tooltip: {
          trigger: 'axis',
          formatter: '{b}</br>{a}: {c}</br>{a1}: {c1}',
        },
        toolbox: {
          show: false,
          feature: {
            dataView: { show: true, readOnly: false },
            magicType: { show: true, type: ['line', 'bar'] },
            restore: { show: true },
            saveAsImage: { show: true },
          },
        },
        legend: {
          data: ['', ''],
          show: false,
        },
        grid: {
          top: '18%',
          right: '5%',
          bottom: '8%',
          left: '5%',
          containLabel: true,
        },
        xAxis: [
          {
            type: 'category',
            data: [
              '2015',
              '2016',
              '2017',
              '2018',
              '2019',
              '2020',
              '2021',
              '2022',
              '2023',
            ],
            splitLine: {
              show: false,
              // lineStyle: {
              //   color: '#3c4452',
              // },
            },
            axisTick: {
              show: false,
            },
            axisLabel: {
              // textStyle: {
              //   color: '#fff',
              // },
              // lineStyle: {
              //   color: '#519cff',
              // },
              alignWithLabel: true,
              interval: 0,
            },
          },
        ],
        yAxis: [
          {
            type: 'value',
            name: '碳排放总量 /百万吨',
            // nameTextStyle: {
            //   color: '#fff',
            // },
            interval: 5,
            max: 40,
            min: 20,
            splitLine: {
              show: true,
              // lineStyle: {
              //   color: '#23303f',
              // },
            },
            axisLine: {
              show: false,
              // lineStyle: {
              //   color: '#115372',
              // },
            },
            axisTick: {
              show: false,
            },
            axisLabel: {
              // textStyle: {
              //   color: '#fff',
              // },
              alignWithLabel: true,
              interval: 0,
            },
          },
          {
            min: 5,
            max: 5.8,
            interval: 0.2,
            type: 'value',
            name: '人均碳排量 吨/人',
            nameTextStyle: {
              color: '#fff',
            },
            splitLine: {
              show: true,
              lineStyle: {
                color: '#23303f',
              },
            },
            axisLine: {
              show: false,
              // lineStyle: {
              //   color: '#115372',
              // },
            },
            axisTick: {
              show: false,
            },
            axisLabel: {
              // textStyle: {
              //   color: '#fff',
              // },
              alignWithLabel: true,
              interval: 0,
            },
          },
        ],
        // color: 'yellow',
        series: [
          {
            name: '碳排放总量',
            type: 'bar',
            data: [30, 32, 33, 33, 34, 34.8, 36, 35.7, 35.3],
            boundaryGap: '45%',
            barWidth: '40%',
            itemStyle: {
              normal: {
                // color: function (params: any) {
                //   var colorList = [
                //     '#6bc0fb',
                //     '#7fec9d',
                //     '#ffffff',
                //     '#ffffff',
                //     '#ffa597',
                //     '#84e4dd',
                //     '#ffccff',
                //     '#cccccc',
                //     '#ccffcc',
                //   ]
                //   return colorList[params.dataIndex]
                // },
                label: {
                  show: true,
                  position: 'top',
                  formatter: '{c}',
                },
              },
            },
          },
          {
            name: '人均碳排放量',
            type: 'line',
            yAxisIndex: 1,
            // lineStyle: {
            //   normal: {
            //     color: '#c39705',
            //   },
            // },
            data: [5.17, 5.4, 5.4, 5.35, 5.48, 5.58, 5.69, 5.61, 5.56],
          },
        ],
      }
      provinceFooterBarCharts.value.setOption(option)
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
    class="provinceFooterBarCharts"
    ref="chart"
    style="width: 100%; height: 100%"
  ></div>
</template>

<style lang="less"></style>
