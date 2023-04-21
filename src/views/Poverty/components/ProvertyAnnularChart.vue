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
    const provertyAnnularCharts = ref()

    // 生命周期钩子
    onMounted(() => {
      nextTick(() => {
        initChart()
      })

      // window.onresize = function () {
      //   // console.log(provertyAnnularCharts.value)
      //   provertyAnnularCharts.value.resize()
      // }
      const windowOnresizeProvertyEvent = () => {
        if (provertyAnnularCharts.value) provertyAnnularCharts.value.resize()
      }

      $bus.on('windowOnresizeProverty', windowOnresizeProvertyEvent)
    })

    onBeforeUnmount(() => {
      if (!provertyAnnularCharts.value) {
        return
      }
      provertyAnnularCharts.value.dispose()
      provertyAnnularCharts.value = null
    })

    // 方法 methods

    const initChart = () => {
      provertyAnnularCharts.value = markRaw(echarts.init(chart.value!, 'roma'))
      // setOptions(props.chartData)

      setOptions()
    }

    const setOptions = () => {
      let option = {
        title: {
          text: '精准扶贫',
          left: 'center',
        },
        tooltip: {
          // trigger: `item`
          formatter: '{a}<br/>{b} : {c}%',
        },
        legend: {
          top: 'bottom',
        },
        toolbox: {
          orient: 'vertical',
          left: 'right',
          top: 'center',
          feature: {
            dataView: { show: true, readOnly: false },
            magicType: { show: true, type: ['line', 'bar'] },
            restore: { show: true },
            saveAsImage: { show: true },
          },
        },
        series: [
          {
            name: '精准扶贫',
            type: 'pie',
            radius: ['40%', '60%'],
            center: ['50%', '50%'],
            // roseType: 'area',
            // itemStyle: {
            //   borderRadius: 8
            // },
            data: [
              { value: 45.38, name: '就业与异地搬迁' },
              { value: 19.48, name: '教育扶贫' },
              { value: 23.38, name: '产业发展' },
              { value: 11.26, name: '其他' },
              { value: 0.5, name: '兜底保障' },
            ],
          },
        ],
      }

      provertyAnnularCharts.value.setOption(option)
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
    class="provertyAnnularCharts"
    ref="chart"
    style="width: 100%; height: 100%"
  ></div>
</template>

<style lang="less"></style>
