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
      const windowOnresizeCivilizationEvent = () => {
        if (mapCharts.value) mapCharts.value.resize()
      }

      $bus.on('windowOnresizeCivilization', windowOnresizeCivilizationEvent)
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
      mapCharts.value = markRaw(echarts.init(chart.value!, 'bgYellow'))
      // setOptions(props.chartData)

      setOptions()
    }

    const setOptions = () => {
      let option = {
        title: {
          text: '2021年全国各省市旅游人数（亿人）',
          subtext:
            '数据来源：中国旅游研究院 \n 地图来源：高德地图（GeoJSON） | 审图号：2022 高德软件 GS京(2022)1061号',
          sublink:
            'http://datav.aliyun.com/portal/school/atlas/area_selector#&lat=33.521903996156105&lng=104.29849999999999&zoom=4',
          x: 'center',
          // top: '20px',
        },
        tooltip: {
          trigger: 'item',
          formatter: '2021年<br/> {b}：{c} 亿人',
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
          min: 0,
          max: 10,
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
            name: '各地旅游推荐',
            type: 'map',
            map: 'china',
            label: {
              show: true,
            },
            data: [
              { name: '广西', value: 8 },
              { name: '河南', value: 7.9 },
              { name: '江西', value: 7.4 },
              { name: '山东', value: 7.3 },
              { name: '江苏', value: 7.1 },
              { name: '贵州', value: 6.4 },
              { name: '湖南', value: 6.3 },
              { name: '浙江', value: 6.2 },
              { name: '云南', value: 6.2 },
              { name: '安徽', value: 5.8 },
              { name: '广东', value: 5.7 },
              { name: '四川', value: 4.8 },
              { name: '河北', value: 4.3 },
              { name: '福建', value: 4.1 },
              { name: '陕西', value: 3.9 },
              { name: '重庆', value: 3.5 },
              { name: '辽宁', value: 3 },
              { name: '上海', value: 3 },
              { name: '甘肃', value: 2.8 },
              { name: '北京', value: 2.6 },
              { name: '吉林', value: 2.1 },
              { name: '山西', value: 2.0 },
              { name: '天津', value: 1.9 },
              { name: '新疆', value: 1.9 },
              { name: '黑龙江', value: 1.6 },
              { name: '内蒙古', value: 1.3 },
              { name: '海南', value: 0.8 },
              { name: '西藏', value: 0.4 },
              { name: '青海', value: 0.4 },
              { name: '宁夏', value: 0.16 },
              { name: '湖北', value: 0.08 },
              { name: '澳门', value: 0.07 },
              { name: '台湾', value: 0.0014 },
              { name: '香港', value: 0.0009 },
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
