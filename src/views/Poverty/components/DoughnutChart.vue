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
    const doughnutCharts = ref()

    // 生命周期钩子
    onMounted(() => {
      nextTick(() => {
        initChart()
      })

      // window.onresize = function () {
      //   // console.log(doughnutCharts.value)
      //   doughnutCharts.value.resize()
      // }
      const windowOnresizeProvertyEvent = () => {
        if (doughnutCharts.value) doughnutCharts.value.resize()
      }

      $bus.on('windowOnresizeProverty', windowOnresizeProvertyEvent)
    })

    onBeforeUnmount(() => {
      if (!doughnutCharts.value) {
        return
      }
      doughnutCharts.value.dispose()
      doughnutCharts.value = null
    })

    // 方法 methods

    const initChart = () => {
      doughnutCharts.value = markRaw(echarts.init(chart.value!, 'roma'))
      // setOptions(props.chartData)

      setOptions()
    }

    const setOptions = () => {
      let option = {
        title: [
          {
            text: '贫困地区与非贫困地区',
            left: '10%',
            top: 'center',
            textStyle: {
              color: 'gray',
              fontStyle: '14px',
            },
          },
          {
            text: '省市区内的贫困数量比',
            left: '60%',
            top: 'center',
            textStyle: {
              color: 'gray',
              fontStyle: '14px',
            },
          },
        ],
        tooltip: {
          trigger: 'item',
          formatter: '{a} <br/>{b} : {c} ({d}%)',
        },
        legend: [
          {
            orient: '贫困地区与非贫困地区',
            left: 'left',
            data: ['贫困地区', '非贫困地区'],
          },
          {
            orient: '省市区内的贫困数量比',
            left: 'right',
            data: ['省', '市', '区'],
          },
        ],
        series: [
          {
            name: '省市区内的贫困数量比',
            type: 'pie',
            radius: ['40%', '55%'],
            center: ['75%', '50%'],
            color: ['#EFEFEF', '#D05C67', '#C1252F'],
            data: [
              { value: 335, name: '省' },
              { value: 310, name: '市' },
              { value: 310, name: '区' },
            ],
            emphasis: {
              itemStyle: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: 'rgba(0, 0, 0, 0.5)',
              },
            },
          },
          {
            name: '贫困地区与非贫困地区',
            type: 'pie',
            radius: ['40%', '55%'],
            center: ['25%', '50%'],
            color: ['#D05C67', '#C1252F'],
            data: [
              { value: 200, name: '贫困地区' },
              { value: 800, name: '非贫困地区' },
            ],
            emphasis: {
              itemStyle: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: 'rgba(0, 0, 0, 0.5)',
              },
            },
          },
        ],
      }

      doughnutCharts.value.setOption(option)
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
    class="doughnutCharts"
    ref="chart"
    style="width: 100%; height: 100%"
  ></div>
</template>

<style lang="less"></style>
