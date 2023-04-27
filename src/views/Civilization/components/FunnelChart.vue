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
      funnelCharts.value = markRaw(echarts.init(chart.value!, 'bgYellow'))
      // setOptions(props.chartData)

      setOptions()
    }

    const setOptions = () => {
      let option = {
        title: {
          text: '国风热潮',
          subtext: '数据来源：网络直播文艺生态报告',
          left: 'center',
        },
        tooltip: {
          trigger: 'item',
          formatter: '{a} <br/>{b} : 观看时长同比增长 {c}%',
        },
        legend: {
          // data: ['国漫', '绘画', '汉服', '书法', '名胜古迹'],
          type: 'scroll',
          // orient: 'vertical',
          left: '5px',
          top: 'bottom',
        },
        // grid: {
        // left: 10,
        // right: 10,
        // bottom: 20,
        // top: 30,
        // containLabel: true,
        // },
        series: [
          {
            name: '国风热潮',
            type: 'funnel',
            left: '-5',
            width: '100%',
            // color: ['#F5BD8A', '#B22F0C', '#f89898', '#D05C67', '#E01F54'],
            color: [
              '#b11717',
              '#ff0000',
              '#DD1D1D',
              '#ff5357',
              '#D26872',
              '#E3B7BB',
              // '#B22F0C',
            ],
            // width: '80%',
            label: {
              position: 'inside',
              formatter: '{b}',
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
                formatter: '{b}: 观看时长同比增长 {c}%',
              },
            },
            data: [
              { value: 278, name: '曲艺' },
              { value: 264, name: '传统手工艺' },
              { value: 231, name: '汉服' },
              { value: 149, name: '棋牌' },
              { value: 132, name: '书法国画' },
              { value: 98, name: '民族乐器' },
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
