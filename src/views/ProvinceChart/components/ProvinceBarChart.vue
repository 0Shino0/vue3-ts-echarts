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
    const provincebarCharts = ref()

    // 生命周期钩子
    onMounted(() => {
      nextTick(() => {
        initChart()
      })

      // window.onresize = function () {
      //   // console.log(provincebarCharts.value)
      //   provincebarCharts.value.resize()
      // }
      const windowOnresizeProvinceEvent = () => {
        if (provincebarCharts.value) provincebarCharts.value.resize()
      }

      $bus.on('windowOnresizeProvince', windowOnresizeProvinceEvent)
    })

    onBeforeUnmount(() => {
      if (!provincebarCharts.value) {
        return
      }
      provincebarCharts.value.dispose()
      provincebarCharts.value = null
    })

    // 方法 methods

    const initChart = () => {
      provincebarCharts.value = markRaw(
        echarts.init(chart.value!, 'wonderland')
      )
      // setOptions(props.chartData)

      setOptions()
    }

    const setOptions = () => {
      let option = {
        title: {
          text: props.mapNameObj!.name + '能源消耗',
          // subtext: '数据来源国家数据',
          x: 'left',
          top: '0%',
          textStyle: {
            // color: '#fff',
            fontWeight: 'bold',
            fontSize: 14,
          },
        },
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'shadow',
          },
        },
        // color: ['#eaff00', '#22ac38'],
        legend: {
          right: '0',
          data: ['煤炭消费量/千万吨', '原油消费量/百万吨'],
          // textStyle: {
          //   color: '#00ffff',
          // },
        },
        grid: {
          left: '8%',
          right: '4%',
          bottom: '3%',
          top: '10%',
          containLabel: true,
        },
        xAxis: {
          type: 'value',
          splitLine: {
            show: true,
            // lineStyle: {
            //   color: '#1e2b43',
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
            textStyle: {
              color: '#fff',
            },
            alignWithLabel: true,
            interval: 0,
          },
        },
        dataZoom: [
          {
            type: 'slider',
            yAxisIndex: 0,
            filterMode: 'empty',
            start: 0,
            x: '0',
            end: 60,
            // handleStyle: {
            //   color: '#519cff',
            //   backgroundColor: '#519cff',
            // },
            // textStyle: {
            //   color: '#fff',
            // },
            // borderColor: '#519cff',
          },
        ],
        yAxis: {
          type: 'category',
          data: [
            '2009',
            '2010',
            '2011',
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
            '2023',
          ],
          splitLine: {
            show: false,
            // lineStyle: {
            //   color: '#1e2b43',
            // },
          },
          axisTick: {
            show: false,
          },
          axisLine: {
            show: true,
            lineStyle: {
              color: '#115372',
            },
          },
          axisLabel: {
            // textStyle: {
            //   color: '#419aff',
            // },
            // lineStyle: {
            //   color: '#519cff',
            // },
            alignWithLabel: true,
            interval: 0,
          },
        },
        series: [
          {
            name: '原油消费量/百万吨',
            type: 'bar',
            stack: '比例',
            label: {
              normal: {
                show: true,
                position: 'insideRight',
                textStyle: {
                  color: '#333',
                },
              },
            },
            data: [
              4.5, 4.7, 4.8, 4.2, 5.5, 7.5, 6.9, 5.4, 7.5, 7.2, 6.5, 9, 10, 11,
              12, 13,
            ],
          },
          {
            name: '煤炭消费量/千万吨',
            type: 'bar',
            stack: '比例',
            label: {
              normal: {
                show: true,
                position: 'right',
                // textStyle: {
                //   color: '#00f0ff',
                // },
              },
            },
            data: [
              12.6, 13.3, 14.5, 14.7, 15.6, 15.7, 15.6, 15.7, 16.0, 16.6, 16.7,
              17, 23, 24, 30,
            ],
          },
        ],
      }

      provincebarCharts.value.setOption(option)
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
    class="provincebarCharts"
    ref="chart"
    style="width: 350px; height: 100%"
  ></div>
</template>

<style lang="less"></style>
