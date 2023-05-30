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
    const timeLinePieCharts = ref()

    // 生命周期钩子
    onMounted(() => {
      nextTick(() => {
        initChart()
      })
      // window.onresize = function () {
      //   timeLinePieCharts.value.resize()
      // }
      const windowOnresizeEvent = () => {
        if (timeLinePieCharts.value) timeLinePieCharts.value.resize()
      }

      $bus.on('windowOnresize', windowOnresizeEvent)
    })

    onBeforeUnmount(() => {
      if (!timeLinePieCharts.value) {
        return
      }
      timeLinePieCharts.value.dispose()
      timeLinePieCharts.value = null
    })

    // 方法 methods

    const initChart = () => {
      timeLinePieCharts.value = markRaw(echarts.init(chart.value!, 'bgYellow'))
      // setOptions(props.chartData)

      setOptions()
    }

    const setOptions = () => {
      let option = {
        //timeline基本配置都写在baseoption 中
        baseOption: {
          timeline: {
            //loop: false,
            axisType: 'category',
            show: true,
            autoPlay: true,
            playInterval: 3000,
            data: ['十八大', '十九大', '二十大', '两会'],
          },
          grid: { containLabel: true },
          series: [
            {
              type: 'pie',
              color: ['#D05C67', '#C00000'],
            },
          ],
          tooltip: {},
          toolbox: {
            feature: {
              dataView: { show: true, readOnly: false },
              magicType: { show: true, type: ['line', 'bar'] },
              restore: { show: true },
              saveAsImage: { show: true },
            },
            orient: 'vertical',
            left: 'right',
            top: 'center',
          },
        },
        //变量则写在options中
        options: [
          {
            title: {
              text: '2012年农业数字经济占农业增加值比重',
              subtext: '数据来源：国家统计局',
              left: 'center',
            },
            legend: {
              top: 'top',
              left: 'right',
            },
            // toolbox: {
            //   show: true,
            //   feature: {
            //     mark: { show: true },
            //     dataView: { show: true, readOnly: false },
            //     restore: { show: true },
            //     saveAsImage: { show: true },
            //   },
            // },
            tooltip: {
              trigger: 'item',
              formatter: '{a} <br/>{b} : ({d}%)',
            },
            series: [
              {
                type: 'pie',
                // radius: [50, 250],
                center: ['50%', '50%'],
                // roseType: 'area',
                itemStyle: {
                  borderRadius: 8,
                },
                data: [
                  { value: 97, name: '农业增加值' },
                  { value: 0.3, name: '农业数字经济' },
                ],
              },
            ],
          },
          {
            title: {
              text: '2018年农业数字经济占农业增加值比重',
              // subtext: '单位:Mwh'
              subtext: '数据来源：国家统计局',
            },
            series: [
              {
                type: 'pie',
                // radius: [50, 250],
                center: ['50%', '50%'],
                // roseType: 'area',
                itemStyle: {
                  borderRadius: 8,
                },
                data: [
                  { value: 92.7, name: '农业增加值' },
                  { value: 7.3, name: '农业数字经济' },
                ],
              },
            ],
          },
          {
            title: {
              text: '2022年农业数字经济占农业增加值比重',
              // subtext: '单位:Mwh'
              subtext: '数据来源：国家统计局',
            },
            series: [
              {
                type: 'pie',
                // radius: [50, 250],
                center: ['50%', '50%'],
                // roseType: 'area',
                itemStyle: {
                  borderRadius: 8,
                },
                data: [
                  { value: 87, name: '农业增加值' },
                  { value: 13, name: '农业数字经济' },
                ],
              },
            ],
          },
          {
            title: {
              text: '两会期间农业数字经济占农业增加值比重',
              // subtext: '单位:Mwh'
              subtext: '数据来源：国家统计局',
            },
            series: [
              {
                type: 'pie',
                // radius: [50, 250],
                center: ['50%', '50%'],
                // roseType: 'area',
                itemStyle: {
                  borderRadius: 8,
                },
                data: [
                  { value: 87, name: '农业增加值' },
                  { value: 13, name: '农业数字经济' },
                ],
              },
            ],
          },
        ],
      }

      timeLinePieCharts.value.setOption(option)
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
    class="timeLinePiechart-container"
    :ref="className"
    :style="{ height: height, width: width }"
  />
</template>

<style lang="less"></style>
