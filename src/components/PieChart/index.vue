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
    const timeLinePieTechCharts = ref()

    // 生命周期钩子
    onMounted(() => {
      nextTick(() => {
        initChart()
      })
      // window.onresize = function () {
      //   timeLinePieTechCharts.value.resize()
      // }
      const windowOnresizeEvent = () => {
        if (timeLinePieTechCharts.value) timeLinePieTechCharts.value.resize()
      }

      $bus.on('windowOnresize', windowOnresizeEvent)
    })

    onBeforeUnmount(() => {
      if (!timeLinePieTechCharts.value) {
        return
      }
      timeLinePieTechCharts.value.dispose()
      timeLinePieTechCharts.value = null
    })

    // 方法 methods

    const initChart = () => {
      timeLinePieTechCharts.value = markRaw(
        echarts.init(chart.value!, 'bgYellow')
      )
      // setOptions(props.chartData)

      setOptions()
    }

    const setOptions = () => {
      // let option = {
      //   title: {
      //     text: '科技现代化',
      //     left: 'center',
      //   },
      //   legend: {
      //     top: 'bottom',
      //   },
      //   toolbox: {
      //     show: true,
      //     feature: {
      //       mark: { show: true },
      //       dataView: { show: true, readOnly: false },
      //       restore: { show: true },
      //       saveAsImage: { show: true },
      //     },
      //   },
      //   tooltip: {
      //     trigger: 'item',
      //     formatter: '{a} <br/>{b} : {c} ({d}%)',
      //   },
      //   series: [
      //     {
      //       name: '科技现代化',
      //       type: 'pie',
      //       radius: [75, 100],
      //       center: ['50%', '50%'],
      //       // roseType: 'area',
      //       itemStyle: {
      //         borderRadius: 8,
      //       },
      //       data: [
      //         { value: 452.78, name: '科学技术部' },
      //         { value: 315.93, name: '国家自然科学基金委员会' },
      //         { value: 102.95, name: '农业农村部' },
      //         { value: 93.85, name: '工业和信息化部' },
      //         { value: 66.59, name: '国家卫生健康' },
      //         { value: 45.0, name: '教育部' },
      //         // { value: 22, name: 'rose 7' },
      //         // { value: 18, name: 'rose 8' },
      //       ],
      //     },
      //   ],
      // }
      let option = {
        animation: true,
        animationThreshold: 2000,
        animationDuration: 1000,
        animationEasing: 'cubicOut',
        animationDelay: 0,
        animationDurationUpdate: 300,
        animationEasingUpdate: 'cubicOut',
        animationDelayUpdate: 0,
        series: [
          {
            type: 'line',
            name: '中国科技期刊文章数量',
            connectNulls: false,
            symbolSize: 4,
            showSymbol: true,
            smooth: false,
            clip: true,
            step: false,
            stack: '3',
            data: [
              ['2012年', 329015.4],
              ['2013年', 359274.1],
              ['2014年', 390396.2],
              ['2015年', 407974.6],
              ['2016年', 438348.7],
              ['2017年', 473438.5],
              ['2018年', 528263.3],
            ],
            hoverAnimation: true,
            label: {
              show: false,
              position: 'top',
              margin: 8,
            },
            lineStyle: {
              show: true,
              width: 1,
              opacity: 1,
              curveness: 0,
              type: 'solid',
            },
            areaStyle: {
              opacity: 0.5,
            },
            zlevel: 0,
            z: 0,
          },
          {
            type: 'line',
            name: '美国科技期刊文章数量',
            connectNulls: false,
            symbolSize: 4,
            showSymbol: true,
            smooth: false,
            clip: true,
            step: false,
            stack: '4',
            data: [
              ['2012年', 427996.8],
              ['2013年', 429570.1],
              ['2014年', 433192.3],
              ['2015年', 429988.9],
              ['2016年', 427264.6],
              ['2017年', 432216.5],
              ['2018年', 422807.7],
            ],
            hoverAnimation: true,
            label: {
              show: false,
              position: 'top',
              margin: 8,
            },
            lineStyle: {
              show: true,
              width: 1,
              opacity: 1,
              curveness: 0,
              type: 'solid',
            },
            areaStyle: {
              opacity: 0.5,
            },
            zlevel: 0,
            z: 0,
          },
        ],
        legend: [
          {
            data: ['中国科技期刊文章数量', '美国科技期刊文章数量'],
            selected: {
              中国科技期刊文章数量: true,
              美国科技期刊文章数量: true,
            },
            left: 'right',
            show: true,
            padding: 5,
            itemGap: 10,
            itemWidth: 25,
            itemHeight: 14,
          },
        ],
        tooltip: {
          show: true,
          trigger: 'axis',
          triggerOn: 'mousemove|click',
          axisPointer: {
            type: 'cross',
          },
          showContent: true,
          alwaysShowContent: false,
          showDelay: 0,
          hideDelay: 100,
          textStyle: {
            fontSize: 14,
          },
          borderWidth: 0,
          padding: 5,
        },
        xAxis: [
          {
            type: 'category',
            show: true,
            scale: false,
            nameLocation: 'end',
            nameGap: 15,
            gridIndex: 0,
            inverse: false,
            offset: 0,
            splitNumber: 5,
            boundaryGap: false,
            minInterval: 0,
            splitLine: {
              show: false,
              lineStyle: {
                show: true,
                width: 1,
                opacity: 1,
                curveness: 0,
                type: 'solid',
              },
            },
            data: [
              // '2009年',
              // '2010年',
              // '2011年',
              '2012年',
              '2013年',
              '2014年',
              '2015年',
              '2016年',
              '2017年',
              '2018年',
            ],
          },
        ],
        yAxis: [
          {
            type: 'value',
            show: true,
            scale: false,
            nameLocation: 'end',
            nameGap: 15,
            gridIndex: 0,
            axisTick: {
              show: true,
              alignWithLabel: false,
              inside: false,
            },
            axisLabel: {
              show: true,
              position: 'top',
              margin: 8,
              formatter: '{value} \u5343\u7bc7',
            },
            inverse: false,
            offset: 0,
            splitNumber: 5,
            minInterval: 0,
            splitLine: {
              show: true,
              lineStyle: {
                show: true,
                width: 1,
                opacity: 1,
                curveness: 0,
                type: 'solid',
              },
            },
          },
        ],
        title: [
          {
            text: '中国科技期刊文章数量',
            subtext: '美国科技期刊文章数量',
            left: 'center',
            padding: 5,
            itemGap: 10,
          },
        ],
        grid: [
          {
            show: false,
            zlevel: 0,
            z: 2,
            left: '15%',
            // right: '20%',
            containLabel: false,
            backgroundColor: 'transparent',
            // borderColor: '#ccc',
            borderWidth: 1,
          },
        ],
        toolbox: {
          show: true,
          itemSize: 15,
          itemGap: 10,
          orient: 'vertical',
          left: 'right',
          top: 'center',
          feature: {
            saveAsImage: {},
            restore: {},
            magicType: {
              show: true,
              type: ['line', 'bar'],
            },
            dataView: {},
          },
        },
      }

      timeLinePieTechCharts.value.setOption(option)
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
    class="timeLinePieTechchart-container"
    :ref="className"
    :style="{ height: height, width: width }"
  />
</template>

<style lang="less"></style>
