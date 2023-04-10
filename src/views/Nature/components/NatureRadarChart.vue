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
    const natureRadarCharts = ref()

    // 生命周期钩子
    onMounted(() => {
      nextTick(() => {
        initChart()
      })

      window.onresize = function () {
        // console.log(natureRadarCharts.value)
        natureRadarCharts.value.resize()
      }
      const windowOnresizeNatureEvent = () => {
        if (natureRadarCharts.value) natureRadarCharts.value.resize()
      }

      $bus.on('windowOnresizeNature', windowOnresizeNatureEvent)
    })

    onBeforeUnmount(() => {
      if (!natureRadarCharts.value) {
        return
      }
      natureRadarCharts.value.dispose()
      natureRadarCharts.value = null
    })

    // 方法 methods

    const initChart = () => {
      natureRadarCharts.value = markRaw(
        echarts.init(chart.value!, 'wonderland')
      )
      // setOptions(props.chartData)

      setOptions()
    }

    const setOptions = () => {
      const color = ['#4FB69D', '#4BFFFC'] //线条边框颜色
      const legend = {
        //data，就是取得每个series里面的name属性。
        orient: 'vertical',
        icon: 'circle', //图例形状
        padding: 0,
        top: 10,
        right: 20,
        itemWidth: 10, //小圆点宽度
        itemHeight: 10, // 小圆点高度
        itemGap: 10, // 图例每项之间的间隔。[ default: 10 ]横向布局时为水平间隔，纵向布局时为纵向间隔。
        textStyle: {
          fontSize: 12,
          color: '#00E4FF',
        },
      }
      const tooltip = {
        show: true,
      }
      const indicator = [
        {
          name: '低碳状态',
          max: 100,
          color: '#4FB69D',
        },
        {
          name: '排放趋势',
          max: 100,
          color: '#4FB69D',
        },
        {
          name: '气候雄心',
          max: 100,
          color: '#4FB69D',
        },
        {
          name: 'GDP发展',
          max: 100,
          color: '#4FB69D',
        },
        {
          name: '森林资源',
          max: 100,
          color: '#4FB69D',
        },
        {
          name: '中和水平',
          max: 100,
          color: '#4FB69D',
        },
      ]
      const dataArr = [
        {
          name: '现状',
          value: [60.53, 41.46, 35.55, 46.5, 4.1, 40.59],
          //中和水平计算方法：20%*低碳状态+25%*排放趋势+10%*气候雄心+30%*GDP发展+15%*森林资源
          symbolSize: 8,
          symbol: 'circle',

          lineStyle: {
            width: 2,
          },
          areaStyle: {
            // 单项区域填充样式
            color: {
              type: 'linear',
              x: 0, //右
              y: 0, //下
              x2: 1, //左
              y2: 1, //上
              colorStops: [
                {
                  offset: 0,
                  color: color[0],
                },
                {
                  offset: 0.5,
                  color: 'rgba(0,0,0,0)',
                },
                {
                  offset: 1,
                  color: color[0],
                },
              ],
              global: false,
            },
            opacity: 1, // 区域透明度
          },
        },
      ]
      let option = {
        title: {
          text: '全国碳达峰碳中和值数',
          // subtext: '数据来源国家数据',
          x: 'center',
          top: '20px',
        },
        color,
        legend,
        tooltip,
        radar: {
          center: ['50%', '50%'], //圆心坐标距离左边和上边的距离
          radius: ['1%', '75%'], //内外半径，不写默认是75%
          startAngle: 90, //可以旋转图形
          shape: 'polygon',
          axisName: {
            color: '#4FB69D',
            fontSize: 10,
          },
          indicator: indicator,
          splitArea: {
            show: true, //默认显示颜色分割区域，不需要显示
          },
          axisLine: {
            show: true, //是否显示十字交叉线
            //指向外圈文本的分隔线样式
            lineStyle: {
              color: '#153269', //线条颜色
            },
          },
          axisLabel: { show: false },
          splitLine: {
            //雷达一圈圈
            show: true,
            lineStyle: {
              type: 'solid',
              color: '#113865', // 雷达一圈圈颜色分隔线颜色
              width: 1, // 分隔线线宽
            },
          },
        },
        series: [
          {
            type: 'radar',
            data: dataArr,
          },
        ],
      }

      natureRadarCharts.value.setOption(option)
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
    class="natureRadarCharts"
    ref="chart"
    style="width: 100%; height: 100%"
  ></div>
</template>

<style lang="less"></style>
