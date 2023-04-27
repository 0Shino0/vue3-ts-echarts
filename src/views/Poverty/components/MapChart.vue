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

      // window.onresize = function () {
      //   // console.log(mapCharts.value)
      //   mapCharts.value.resize()
      // }
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
      mapCharts.value = markRaw(echarts.init(chart.value!, 'bgYellow'))
      // setOptions(props.chartData)

      setOptions()
    }

    const setOptions = () => {
      let option = {
        title: [
          {
            // text: '全国34省市区的832个贫困县分布图',
            text: '中国国家级贫困地区与非贫困地区分布图',
            subtext:
              '数据来源：中华人民共和国中央人民政府、中国减贫研究数据库\n 地图来源：高德地图（GeoJSON） | 审图号：2022 高德软件 GS京(2022)1061号',
            sublink:
              'http://datav.aliyun.com/portal/school/atlas/area_selector#&lat=33.521903996156105&lng=104.29849999999999&zoom=4',
            x: 'center',
            top: '0%',
          },
        ],

        tooltip: {
          trigger: 'item',
          formatter: function (params: any) {
            // console.log(params)
            const data = params.data
            // const data = undefined

            if (!data) return
            var dotHtml =
              '<span style="display:inline-block;margin-right:5px;border-radius:10px;width:8px;height:8px;background-color:#C1252F"></span>' // 定义第一个数据前的圆点颜色
            var dotHtml2 =
              '<span style="display:inline-block;margin-right:5px;border-radius:10px;width:8px;height:8px;background-color:#D05C67"></span>' // 定义第二个数据前的圆点颜色

            var result =
              params.name +
              '<br/>' +
              dotHtml +
              '贫困地区数量：' +
              data.value +
              '<br/>' +
              dotHtml2 +
              '非贫困地区数量：' +
              data.value2 +
              '<br/>' +
              dotHtml +
              '下辖地区总数：' +
              data.value3

            return result
          },
          // '{b}<br/>贫困县总数：{c} <br/> 非贫困地区数量：{d} <br/>贫困地区数量：{e}',
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
          max: 200,
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
              // value 贫困地区数量 value2非贫困地区 value3贫困县地区
              { name: '北京', value: 0, value3: 16, value2: 16 },
              { name: '天津', value: 0, value3: 16, value2: 16 },
              { name: '河北', value: 45, value3: 168, value2: 123 },
              { name: '山西', value: 36, value3: 117, value2: 81 },
              { name: '内蒙古', value: 31, value3: 103, value2: 72 },
              { name: '辽宁', value: 0, value3: 100, value2: 100 },
              { name: '吉林', value: 8, value3: 60, value2: 52 },
              { name: '黑龙江', value: 21, value3: 125, value2: 104 },
              { name: '上海', value: 0, value3: 16, value2: 16 },
              { name: '江苏', value: 0, value3: 95, value2: 95 },
              { name: '浙江', value: 0, value3: 90, value2: 90 },
              { name: '安徽', value: 20, value3: 104, value2: 84 },
              { name: '福建', value: 0, value3: 85, value2: 85 },
              { name: '江西', value: 24, value3: 100, value2: 76 },
              { name: '山东', value: 0, value3: 136, value2: 136 },
              { name: '河南', value: 38, value3: 158, value2: 120 },
              { name: '湖北', value: 28, value3: 103, value2: 75 },
              { name: '湖南', value: 40, value3: 122, value2: 82 },
              { name: '广东', value: 0, value3: 125, value2: 125 },
              { name: '广西', value: 33, value3: 111, value2: 78 },
              { name: '海南', value: 5, value3: 27, value2: 22 },
              { name: '重庆', value: 14, value3: 38, value2: 24 },
              { name: '四川', value: 66, value3: 183, value2: 117 },
              { name: '贵州', value: 66, value3: 88, value2: 22 },
              { name: '云南', value: 88, value3: 129, value2: 41 },
              { name: '西藏', value: 74, value3: 74, value2: 0 },
              { name: '陕西', value: 56, value3: 107, value2: 51 },
              { name: '甘肃', value: 58, value3: 87, value2: 29 },
              { name: '青海', value: 41, value3: 45, value2: 4 },
              { name: '宁夏', value: 8, value3: 22, value2: 14 },
              { name: '新疆', value: 32, value3: 106, value2: 74 },
              { name: '台湾', value: 0, value3: 172, value2: 172 },
              { name: '香港', value: 0, value3: 18, value2: 18 },
              { name: '澳门', value: 0, value3: 8, value2: 8 },
              { name: '十段线', value: 0, value3: 0, value2: 0 },
              { name: '南海诸岛', value: 0, value3: 0, value2: 0 },
              // { name: '吉林', value: 1234 },
            ],
            // data: [
            //   { name: '西藏', value: 50201.34 },
            //   { name: '新疆', value: 42040 },
            //   { name: '云南', value: 32040 },
            //   { name: '贵州', value: 32040 },
            //   { name: '青海', value: 22040 },
            //   { name: '广西', value: 22040 },
            //   { name: '甘肃', value: 6000 },
            //   { name: '陕西', value: 6000 },
            //   { name: '内蒙古', value: 6000 },
            //   { name: '山西', value: 6000 },
            //   { name: '湖南', value: 6000 },
            //   { name: '湖北', value: 6000 },
            //   { name: '河南', value: 6000 },
            //   { name: '河北', value: 6000 },
            //   { name: '重庆', value: 6000 },
            //   { name: '黑龙江', value: 6000 },
            //   // d
            //   { name: '四川', value: 1900 },
            //   { name: '宁夏', value: 1400 },
            //   { name: '辽宁', value: 1900 },
            //   { name: '北京', value: 1400 },
            //   { name: '河北', value: 1400 },
            //   { name: '天津', value: 1900 },
            //   { name: '山东', value: 1800 },
            //   { name: '江苏', value: 1600 },
            //   { name: '安徽', value: 1400 },
            //   { name: '上海', value: 2000 },
            //   { name: '浙江', value: 1400 },
            //   { name: '江西', value: 1010 },
            //   { name: '福建', value: 1400 },
            //   { name: '台湾', value: 1600 },
            //   { name: '广东', value: 1100 },
            //   { name: '澳门', value: 1000 },
            //   { name: '香港', value: 2000 },
            //   { name: '海南', value: 1050 },
            //   { name: '吉林', value: 1234 },
            //   { name: '十段线', value: 1000 },
            //   { name: '南海诸岛', value: 1000 },
            // ],
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
