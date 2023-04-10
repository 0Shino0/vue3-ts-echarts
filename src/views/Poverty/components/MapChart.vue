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
    const mapCharts = ref()

    // 生命周期钩子
    onMounted(() => {
      nextTick(() => {
        initChart()
      })

      window.onresize = function () {
        // console.log(mapCharts.value)
        mapCharts.value.resize()
      }
      const windowOnresizeProvertyEvent = () => {
        if (mapCharts.value) mapCharts.value.resize()
      }

      $bus.on('windowOnresizeProverty', windowOnresizeProvertyEvent)
    })

    onBeforeUnmount(() => {
      if (!mapCharts.value) {
        return
      }
      mapCharts.value.dispose()
      mapCharts.value = null
    })

    // 方法 methods

    const initChart = () => {
      mapCharts.value = markRaw(echarts.init(chart.value!, 'roma'))
      // setOptions(props.chartData)

      setOptions()
    }

    const setOptions = () => {
      let option = {
        title: {
          text: '全国贫困人口数量',
          subtext: '数据来源国家数据',
          x: 'center',
          top: '20px',
        },
        tooltip: {
          trigger: 'item',
          formatter: '{b}<br/>{c} (p / km2)',
        },
        toolbox: {
          show: true,
          orient: 'vertical',
          left: 'right',
          top: 'center',
          feature: {
            dataView: { readOnly: false },
            restore: {},
            saveAsImage: {},
          },
        },
        visualMap: {
          min: 800,
          max: 50000,
          show: false,
          text: ['High', 'Low'],
          realtime: false,
          calculable: true,
          inRange: {
            color: ['#EFEFEF', '#D05C67', '#C1252F'],
          },
        },
        series: [
          {
            name: '中国贫困人口人数',
            type: 'map',
            map: 'china',
            label: {
              show: true,
            },
            data: [
              { name: '西藏', value: 50201.34 },
              { name: '新疆', value: 42040.48 },
              { name: '云南', value: 32040.48 },
              { name: '贵州', value: 32040.48 },
              { name: '青海', value: 22040.48 },
              { name: '广西', value: 22040.48 },
              { name: '甘肃', value: 6000.48 },
              { name: '陕西', value: 6000.48 },
              { name: '内蒙古', value: 6000.48 },
              { name: '山西', value: 6000.48 },
              { name: '湖南', value: 6000.48 },
              { name: '湖北', value: 6000.48 },
              { name: '河南', value: 6000.48 },
              { name: '河北', value: 6000.48 },
              { name: '重庆', value: 6000.48 },
              { name: '黑龙江', value: 6000.48 },
            ],
            // 自定义名称映射
            // nameMap: {
            //   'Central and Western': '中西区',
            //   Eastern: '东区',
            //   Islands: '离岛',
            //   'Kowloon City': '九龙城',
            //   'Kwai Tsing': '葵青',
            //   'Kwun Tong': '观塘',
            //   North: '北区',
            //   'Sai Kung': '西贡',
            //   'Sha Tin': '沙田',
            //   'Sham Shui Po': '深水埗',
            //   Southern: '南区',
            //   'Tai Po': '大埔',
            //   'Tsuen Wan': '荃湾',
            //   'Tuen Mun': '屯门',
            //   'Wan Chai': '湾仔',
            //   'Wong Tai Sin': '黄大仙',
            //   'Yau Tsim Mong': '油尖旺',
            //   'Yuen Long': '元朗',
            // },
          },
        ],
      }

      mapCharts.value.setOption(option)
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
  <div class="mapCharts" ref="chart" style="width: 100%; height: 100%"></div>
</template>

<style lang="less"></style>