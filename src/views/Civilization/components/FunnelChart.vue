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
    const funnelCharts = ref()

    // 生命周期钩子
    onMounted(() => {
      nextTick(() => {
        initChart()
      })

      // window.onresize = function () {
      //   // console.log(funnelCharts.value)
      //   funnelCharts.value.resize()
      // }
      const windowOnresizeCivilizationEvent = () => {
        if (funnelCharts.value) funnelCharts.value.resize()
      }

      $bus.on('windowOnresizeCivilization', windowOnresizeCivilizationEvent)
    })

    onBeforeUnmount(() => {
      if (!funnelCharts.value) {
        return
      }
      funnelCharts.value.dispose()
      funnelCharts.value = null
    })

    // 方法 methods

    const initChart = () => {
      funnelCharts.value = markRaw(echarts.init(chart.value!, 'roma'))
      // setOptions(props.chartData)

      setOptions()
    }

    const setOptions = () => {
      let option = {
        title: {
          text: '国风热潮',
          subtext: '数据来源：腾讯研究院',
          left: 'center',
        },
        tooltip: {
          trigger: 'item',
          formatter: '{a} <br/>{b} : {c}%',
        },
        legend: {
          // data: ['国漫', '绘画', '汉服', '书法', '名胜古迹'],
          top: 'bottom',
          type: 'scroll',
          orient: 'vertical',
          left: '5px',
        },
        series: [
          {
            name: '国风热潮',
            type: 'funnel',
            left: '5',
            width: '100%',
            color: ['#F5BD8A', '#B22F0C', '#f89898', '#D05C67', '#E01F54'],
            // width: '80%',
            label: {
              position: 'inside',
              formatter: '{c}%',
              // color: '#fff',
            },
            itemStyle: {
              // opacity: 0.5,
              // borderColor: '#fff',
              borderWidth: 2,
            },

            emphasis: {
              label: {
                position: 'inside',
                formatter: '{b}: {c}%',
              },
            },
            data: [
              { value: 30, name: '汉服' },
              { value: 10, name: '书法' },
              { value: 20, name: '名胜古迹' },
              { value: 50, name: '各地风俗' },
              { value: 80, name: '国画' },
            ],
            // Ensure outer shape will not be over inner shape when hover.
            z: 100,
          },
        ],
      }

      funnelCharts.value.setOption(option)
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
  <div class="funnelCharts" ref="chart" style="width: 100%; height: 100%"></div>
</template>

<style lang="less"></style>
