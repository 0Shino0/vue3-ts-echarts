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

    const chartLeft = ref<HTMLElement>()
    const chartRight = ref<HTMLElement>()
    const ProvinceDoughnutLeftCharts = ref()
    const ProvinceDoughnutRightCharts = ref()

    // 生命周期钩子
    onMounted(() => {
      nextTick(() => {
        initChart()
      })

      // window.onresize = function () {
      //   // console.log(ProvinceDoughnutCharts.value)
      //   ProvinceDoughnutLeftCharts.value.resize()
      //   ProvinceDoughnutRightCharts.value.resize()
      // }

      const windowOnresizeProvertyEvent = () => {
        if (ProvinceDoughnutLeftCharts.value) {
          ProvinceDoughnutLeftCharts.value.resize()
          ProvinceDoughnutRightCharts.value.resize()
        }
      }

      $bus.on('windowOnresizeProverty', windowOnresizeProvertyEvent)
    })

    onBeforeUnmount(() => {
      if (!ProvinceDoughnutLeftCharts.value) {
        return
      }
      ProvinceDoughnutLeftCharts.value.dispose()
      ProvinceDoughnutLeftCharts.value = null
    })

    // 方法 methods

    const initChart = () => {
      ProvinceDoughnutLeftCharts.value = markRaw(
        echarts.init(chartLeft.value!, 'wonderland')
      )
      ProvinceDoughnutRightCharts.value = markRaw(
        echarts.init(chartRight.value!, 'wonderland')
      )
      // setOptions(props.chartData)

      setOptions()
    }

    const setOptions = () => {
      var total = {
        name: '2030',
        value: '2030',
        rightName: '绿地',
      }
      let optionLeft = {
        title: [
          {
            text: total.name,
            left: '48%',
            top: '28%',
            textAlign: 'center',
            textBaseline: 'middle',
            textStyle: {
              // color: '#fff',
              fontWeight: 'normal',
              fontSize: 12,
            },
          },
          // {
          //   text: total.value,
          //   left: '48%',
          //   top: '44%',
          //   textAlign: 'center',
          //   textBaseline: 'middle',
          //   textStyle: {
          //     // color: '#fff',
          //     fontWeight: 'normal',
          //     fontSize: 14,
          //   },
          // },
        ],
        tooltip: {
          trigger: 'item',
          formatter: '{a} <br/>{b} : {c} ({d}%)',
        },
        // color: ['#70a3ff', '#ff7f4e'],
        legend: {
          orient: 'vertical',
          x: 'center',
          bottom: '5%',
          selectedMode: true,
          data: ['碳达峰目标年'],
          show: true,
          textStyle: {
            // color: '#fff',
            fontWeight: 'bold',
          },
        },

        series: [
          {
            name: '',
            type: 'pie',
            selectedMode: 'single',
            // radius: ['45%', '55%'],
            radius: ['50%', '70%'],
            center: ['50%', '30%'],
            data: [
              { value: 2030, name: '碳达峰目标年' },
              { value: 0, name: 'test2' },
            ],
            label: {
              normal: {
                show: false,
                position: 'outer',
                align: 'left',
                textStyle: {
                  rotate: true,
                },
              },
            },
            itemStyle: {
              emphasis: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                // shadowColor: 'rgba(0, 0, 0, 0.5)',
              },
              normal: {
                label: {
                  show: true,
                  formatter: '{b} {c}',
                },
              },
            },
          },
        ],
      }

      let optionRight = {
        title: [
          {
            text: total.rightName,
            left: '48%',
            top: '28%',
            textAlign: 'center',
            textBaseline: 'middle',
            textStyle: {
              // color: '#fff',
              fontWeight: 'normal',
              fontSize: 12,
            },
          },
          // {
          //   text: total.rightName,
          //   left: '48%',
          //   top: '44%',
          //   textAlign: 'center',
          //   textBaseline: 'middle',
          //   textStyle: {
          //     color: '#fff',
          //     fontWeight: 'normal',
          //     fontSize: 18,
          //   },
          // },
        ],
        tooltip: {
          trigger: 'item',
          formatter: '{a} <br/>{b} : {c} ({d}%)',
        },

        // color: ['#4f9de7', '#4acf79'],
        legend: {
          orient: 'vertical',
          x: 'center',
          bottom: '-2%',
          selectedMode: true,
          data: ['林业用地面积', '人工林面积'],
          show: true,
          textStyle: {
            // color: '#fff',
            fontWeight: 'bold',
          },
        },
        series: [
          {
            name: '绿地',
            type: 'pie',
            selectedMode: 'single',
            // radius: ['45%', '55%'],
            radius: ['50%', '70%'],
            center: ['50%', '30%'],
            data: [
              { value: 449.33, name: '林业用地面积' },
              { value: 232.91, name: '人工林面积' },
            ],
            label: {
              normal: {
                show: false,
                position: 'outer',
                align: 'left',
                textStyle: {
                  rotate: true,
                },
              },
            },
            itemStyle: {
              emphasis: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                // shadowColor: 'rgba(0, 0, 0, 0.5)',
              },
              normal: {
                label: {
                  show: true,
                  formatter: '{b} {c}',
                },
              },
            },
          },
        ],
      }

      ProvinceDoughnutLeftCharts.value.setOption(optionLeft)
      ProvinceDoughnutRightCharts.value.setOption(optionRight)
    }

    // 计算方法 computed

    // 监听 watch

    return {
      // 需要给 `<template />` 用的数据或函数，在这里 `return` 出去
      chartLeft,
      chartRight,
    }
  },
})
</script>

<template>
  <div class="provinceDoughnutCharts" style="width: 30vw; height: 100%">
    <div class="provinceDoughnutCharts-left" ref="chartLeft"></div>
    <div class="provinceDoughnutCharts-right" ref="chartRight"></div>
  </div>
</template>

<style lang="less">
.provinceDoughnutCharts {
  display: flex;
  // flex: auto;
  // flex-shrink: 1;
}

.provinceDoughnutCharts-left {
  // width: 50%;
  width: 70vw;
  height: 60%;
  // height: 100%;
  // flex: 70%;
}
.provinceDoughnutCharts-right {
  // width: 50%;
  width: 70vw;
  height: 60%;
  // flex: 70%;
  // height: 100%;
}
</style>
