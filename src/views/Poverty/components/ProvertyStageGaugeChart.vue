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
    const provertyStageGaugeChartCharts = ref()

    // 生命周期钩子
    onMounted(() => {
      nextTick(() => {
        initChart()
      })

      // window.onresize = function () {
      //   // console.log(provertyStageGaugeChartCharts.value)
      //   provertyStageGaugeChartCharts.value.resize()
      // }
      const windowOnresizeProvertyEvent = () => {
        if (provertyStageGaugeChartCharts.value)
          provertyStageGaugeChartCharts.value.resize()
      }

      $bus.on('windowOnresizeProverty', windowOnresizeProvertyEvent)
    })

    onBeforeUnmount(() => {
      if (!provertyStageGaugeChartCharts.value) {
        return
      }
      provertyStageGaugeChartCharts.value.dispose()
      provertyStageGaugeChartCharts.value = null
    })

    // 方法 methods

    const initChart = () => {
      provertyStageGaugeChartCharts.value = markRaw(
        echarts.init(chart.value!, 'bgYellow')
      )
      // setOptions(props.chartData)

      setOptions()
    }

    const setOptions = () => {
      const gaugeData = [
        {
          value: 3.4,
          name: '2016年',
          title: {
            offsetCenter: ['-80%', '80%'],
          },
          detail: {
            offsetCenter: ['-80%', '95%'],
          },
        },
        // {
        //   value: 18.4,
        //   name: '2017年',
        //   title: {
        //     offsetCenter: ['-40%', '80%'],
        //   },
        //   detail: {
        //     offsetCenter: ['-40%', '95%'],
        //   },
        // },
        {
          value: 52.4,
          name: '2018年',
          title: {
            offsetCenter: ['0%', '80%'],
          },
          detail: {
            offsetCenter: ['0%', '95%'],
          },
        },
        // {
        //   value: 93.8,
        //   name: '2019年',
        //   title: {
        //     offsetCenter: ['40%', '80%'],
        //   },
        //   detail: {
        //     offsetCenter: ['40%', '95%'],
        //   },
        // },
        {
          value: 100,
          name: '2020年',
          title: {
            offsetCenter: ['80%', '80%'],
          },
          detail: {
            offsetCenter: ['80%', '95%'],
          },
        },
      ]
      let option = {
        title: {
          text: '精准扶贫工作完成情况',
          left: 'center',
        },
        color: ['#DD1D1D', '#ff2400', '#DD1D1D', '#ca3030', '#e85050'],
        tooltip: {
          trigger: 'item',
          formatter: '{b} <br/> 脱贫进度：{c}%',
        },
        series: [
          {
            type: 'gauge',
            anchor: {
              show: true,
              showAbove: true,
              size: 18,
              itemStyle: {
                color: '#FAC858',
              },
            },
            pointer: {
              icon: 'path://M2.9,0.7L2.9,0.7c1.4,0,2.6,1.2,2.6,2.6v115c0,1.4-1.2,2.6-2.6,2.6l0,0c-1.4,0-2.6-1.2-2.6-2.6V3.3C0.3,1.9,1.4,0.7,2.9,0.7z',
              width: 8,
              length: '80%',
              offsetCenter: [0, '8%'],
            },
            progress: {
              show: true,
              overlap: true,
              roundCap: true,
            },
            axisLine: {
              roundCap: true,
            },
            data: gaugeData,
            title: {
              show: true,
              fontSize: 14,
              // fontSize: 0
            },
            label: {
              show: true,
              position: 'center',
            },
            detail: {
              show: true,
              width: 40,
              height: 14,
              fontSize: 14,
              color: '#fff',
              backgroundColor: 'inherit',
              borderRadius: 3,
              formatter: '{value}%',
            },
          },
        ],
      }
      // setInterval(function () {
      // gaugeData[0].value = +(Math.random() * 100).toFixed(2);
      // gaugeData[1].value = +(Math.random() * 100).toFixed(2);
      // gaugeData[2].value = +(Math.random() * 100).toFixed(2);
      // myChart.setOption({
      //   series: [
      //     {
      //       data: gaugeData
      //     }
      //   ]
      // });
      // }, 2000);

      provertyStageGaugeChartCharts.value.setOption(option)
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
    class="provertyStageGaugeChartCharts"
    ref="chart"
    style="width: 100%; height: 100%"
  ></div>
</template>

<style lang="less"></style>
