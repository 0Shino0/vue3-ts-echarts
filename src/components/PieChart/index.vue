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
    const pieCharts = ref()

    // 生命周期钩子
    onMounted(() => {
      nextTick(() => {
        initChart()
      })
      // window.onresize = function () {
      //   pieCharts.value.resize()
      // }
      const windowOnresizeEvent = () => {
        if (pieCharts.value) pieCharts.value.resize()
      }

      $bus.on('windowOnresize', windowOnresizeEvent)
    })

    onBeforeUnmount(() => {
      if (!pieCharts.value) {
        return
      }
      pieCharts.value.dispose()
      pieCharts.value = null
    })

    // 方法 methods

    const initChart = () => {
      pieCharts.value = markRaw(echarts.init(chart.value!, 'roma'))
      // setOptions(props.chartData)

      setOptions()
    }

    const setOptions = () => {
      let option = {
        title: {
          text: '科技现代化',
        },
        legend: {
          top: 'bottom',
        },
        toolbox: {
          show: true,
          feature: {
            mark: { show: true },
            dataView: { show: true, readOnly: false },
            restore: { show: true },
            saveAsImage: { show: true },
          },
        },
        tooltip: {
          trigger: 'item',
          formatter: '{a} <br/>{b} : {c} ({d}%)',
        },
        series: [
          {
            name: '科技现代化',
            type: 'pie',
            radius: [75, 100],
            center: ['50%', '50%'],
            // roseType: 'area',
            itemStyle: {
              borderRadius: 8,
            },
            data: [
              { value: 452.78, name: '科学技术部' },
              { value: 315.93, name: '国家自然科学基金委员会' },
              { value: 102.95, name: '农业农村部' },
              { value: 93.85, name: '工业和信息化部' },
              { value: 66.59, name: '国家卫生健康' },
              { value: 45.0, name: '教育部' },
              // { value: 22, name: 'rose 7' },
              // { value: 18, name: 'rose 8' },
            ],
          },
        ],
      }

      pieCharts.value.setOption(option)
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
    :class="className"
    class="piechart-container"
    :ref="className"
    :style="{ height: height, width: width }"
  />
</template>

<style lang="less"></style>
