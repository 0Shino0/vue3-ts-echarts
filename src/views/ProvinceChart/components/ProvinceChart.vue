<script lang="ts">
import {
  defineComponent,
  onMounted,
  ref,
  nextTick,
  onBeforeUnmount,
  markRaw,
} from 'vue'
import type { PropType } from 'vue'
import { MapNameMember } from '@/views/ProvinceChart/index.vue'

import * as echarts from 'echarts'
import axios from 'axios'

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
    mapNameObj: {
      type: Object as PropType<MapNameMember>,
      required: false,
    },
  },
  setup(props, context) {
    // 在这里声明数据，或者编写函数并在这里执行它
    // 在使用 setup 的情况下，请牢记一点：不能再用 this 来获取 Vue 实例

    const chart = ref<HTMLElement>()
    const provinceCharts = ref()

    // 事件

    // 生命周期钩子
    onMounted(() => {
      getJsonData(props.mapNameObj!.name, props.mapNameObj!.pinying)

      // nextTick(() => {
      //   initChart()
      // })

      // window.onresize = function () {
      //   // console.log(provinceCharts.value)
      //   provinceCharts.value.resize()
      // }
      const windowOnresizeProvinceEvent = () => {
        if (provinceCharts.value) {
          provinceCharts.value.resize()
        }
      }

      $bus.on('windowOnresizeProvince', windowOnresizeProvinceEvent)
    })

    onBeforeUnmount(() => {
      if (!provinceCharts.value) {
        return
      }
      provinceCharts.value.dispose()
      provinceCharts.value = null

      // $bus.off('windowOnresizeProvince', windowOnresizeProvinceEvent)
    })

    // 方法 methods
    const getJsonData = async (name: string, pinying?: string) => {
      const result: any = await axios.get(`src/assets/data/map/${name}.json`)
      echarts.registerMap(name, result.data)
      console.log(result.data)
      initChart()
    }

    const initChart = () => {
      provinceCharts.value = markRaw(echarts.init(chart.value!, 'wonderland'))
      // setOptions(props.chartData)

      setOptions()
    }

    const setOptions = () => {
      let option = {
        title: {
          text: props.mapNameObj!.name + '绿色发展',
          subtext: '数据来源国家数据',
          x: 'center',
          top: '20px',
        },
        tooltip: {
          trigger: 'item',
          // formatter: '{b}<br/>{c} (p / km2)',
        },
        // toolbox: {
        //   show: true,
        //   orient: 'vertical',
        //   left: 'right',
        //   top: 'center',
        //   feature: {
        //     dataView: { readOnly: false },
        //     restore: {},
        //     saveAsImage: {},
        //   },
        // },
        // visualMap: {
        //   min: 800,
        //   max: 50000,
        //   show: false,
        //   text: ['High', 'Low'],
        //   realtime: false,
        //   calculable: true,
        //   inRange: {
        //     color: ['#EFEFEF', '#D05C67', '#C1252F'],
        //   },
        // },
        geo: {
          map: props.mapNameObj!.name,
          label: {
            emphasis: {
              show: true,
              color: '#fff',
            },
          },
          roam: false,
          zoom: 1.2,
          itemStyle: {
            normal: {
              areaColor: '#4FB69D',
              borderColor: 'rgba(112,187,252,.5)',
            },
            emphasis: {
              areaColor: '#62F7D3',
            },
          },
        },
        series: [
          // {
          //   name: '中国贫困人口人数',
          //   type: 'map',
          //   map: props.mapNameObj!.name,
          //   label: {
          //     show: true,
          //   },
          // },
        ],
      }

      provinceCharts.value.setOption(option)
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
    class="provinceCharts"
    ref="chart"
    style="width: 100%; height: 100%"
  ></div>
</template>

<style lang="less"></style>
