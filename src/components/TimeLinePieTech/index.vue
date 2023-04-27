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
      pieCharts.value = markRaw(echarts.init(chart.value!, 'bgYellow'))
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
            playInterval: 1000,
            tooltip: {
              // 让鼠标悬浮到此项时能够显示 `tooltip`。
              formatter: '{b}',
            },
            label: {
              position: 'auto',

              interval: 0, //坐标轴刻度标签的显示间隔(在类目轴中有效) 0:显示所有  1：隔一个显示一个 :3：隔三个显示一个...
              // rotate: -20, //标签倾斜的角度，显示不全时可以通过旋转防止标签重叠（-90到90）
            },
            itemStyle: {
              // 时间轴样式
              color: '#FF0000',
              // borderWidth:1,
              // borderType:'solid',
              // borderColor:"#DD1E1E"
            },
            progress: {
              // 时间轴进度条样式
              itemStyle: {
                color: '#FF0000',
                borderColor: '#DD1E1E',
              },
              lineStyle: {
                color: '#FF0000',
              },
            },
            checkpointStyle: {
              // 当前向样式
              // color:"#FF0000",
              color: '#E43C59',
              borderWidth: 2,
              borderColor: '#DD1E1E',
            },

            // emphasis:{
            //   itemStyle:{
            //   color:'#DD1E1E',
            //   borderWidth:10,
            //   borderType:'solid',
            //   borderColor:"#DD1E1E"
            //   }
            // },
            data: [
              '2012',
              '2013',
              '2014',
              '2015',
              '2016',
              '2017',
              '2018',
              '2019',
              '2020',
              '2021',
              '2022',
            ],
          },

          grid: { containLabel: true },
          series: [
            {
              type: 'pie',
              // color: ['#FF0000', '#0032E8'],
              color: ['#FF0000', '#0028ba'],
            },
          ],
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
              text: '2012年中美科技期刊对比',
              subtext: '数据来源：国家统计局',
              left: 'center',
            },
            legend: {
              top: 'top',
              left: 'right',
              orient: 'vertical',
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
              formatter: '{a} <br/>{b} : {c}千篇 ({d}%)',
            },
            series: [
              {
                type: 'pie',
                // radius: [50, 250],
                center: ['50%', '50%'],
                name: '2012年中美科技期刊对比',
                // roseType: 'area',
                itemStyle: {
                  borderRadius: 8,
                },
                data: [
                  { value: 329015.4, name: '中国科技期刊文章数量' },
                  { value: 427996.8, name: '美国科技期刊文章数量' },
                ],
              },
            ],
          },
          {
            title: {
              text: '2013年中美科技期刊对比',
              subtext: '数据来源：国家统计局',
              left: 'center',
            },
            legend: {
              top: 'top',
              left: 'right',
              orient: 'vertical',
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
              formatter: '{a} <br/>{b} : {c}千篇 ({d}%)',
            },
            series: [
              {
                type: 'pie',
                name: '2013年中美科技期刊对比',
                // radius: [50, 250],
                center: ['50%', '50%'],
                // roseType: 'area',
                itemStyle: {
                  borderRadius: 8,
                },
                data: [
                  { value: 359274.1, name: '中国科技期刊文章数量' },
                  { value: 429570.1, name: '美国科技期刊文章数量' },
                ],
              },
            ],
          },
          {
            title: {
              text: '2014年中美科技期刊对比',
              subtext: '数据来源：国家统计局',
              left: 'center',
            },
            legend: {
              top: 'top',
              left: 'right',
              orient: 'vertical',
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
              formatter: '{a} <br/>{b} : {c}千篇 ({d}%)',
            },
            series: [
              {
                type: 'pie',
                name: '2014年中美科技期刊对比',
                // radius: [50, 250],
                center: ['50%', '50%'],
                // roseType: 'area',
                itemStyle: {
                  borderRadius: 8,
                },
                data: [
                  { value: 390396.2, name: '中国科技期刊文章数量' },
                  { value: 433192.3, name: '美国科技期刊文章数量' },
                ],
              },
            ],
          },
          {
            title: {
              text: '2015年中美科技期刊对比',
              subtext: '数据来源：国家统计局',
              left: 'center',
            },
            legend: {
              top: 'top',
              left: 'right',
              orient: 'vertical',
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
              formatter: '{a} <br/>{b} : {c}千篇 ({d}%)',
            },
            series: [
              {
                type: 'pie',
                name: '2015年中美科技期刊对比',
                // radius: [50, 250],
                center: ['50%', '50%'],
                // roseType: 'area',
                itemStyle: {
                  borderRadius: 8,
                },
                data: [
                  { value: 407974.6, name: '中国科技期刊文章数量' },
                  { value: 429988.9, name: '美国科技期刊文章数量' },
                ],
              },
            ],
          },
          {
            title: {
              text: '2016年中美科技期刊对比',
              subtext: '数据来源：国家统计局',
              left: 'center',
            },
            legend: {
              top: 'top',
              left: 'right',
              orient: 'vertical',
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
              formatter: '{a} <br/>{b} : {c}千篇 ({d}%)',
            },
            series: [
              {
                type: 'pie',
                name: '2016年中美科技期刊对比',
                // radius: [50, 250],
                center: ['50%', '50%'],
                // roseType: 'area',
                itemStyle: {
                  borderRadius: 8,
                },
                data: [
                  { value: 438348.7, name: '中国科技期刊文章数量' },
                  { value: 427264.6, name: '美国科技期刊文章数量' },
                ],
              },
            ],
          },
          {
            title: {
              text: '2017年中美科技期刊对比',
              subtext: '数据来源：国家统计局',
              left: 'center',
            },
            legend: {
              top: 'top',
              left: 'right',
              orient: 'vertical',
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
              formatter: '{a} <br/>{b} : {c}千篇 ({d}%)',
            },
            series: [
              {
                type: 'pie',
                name: '2017年中美科技期刊对比',
                // radius: [50, 250],
                center: ['50%', '50%'],
                // roseType: 'area',
                itemStyle: {
                  borderRadius: 8,
                },
                data: [
                  { value: 473438.5, name: '中国科技期刊文章数量' },
                  { value: 452216.5, name: '美国科技期刊文章数量' },
                ],
              },
            ],
          },
          {
            title: {
              text: '2018年中美科技期刊对比',
              subtext: '数据来源：国家统计局',
              left: 'center',
            },
            legend: {
              top: 'top',
              left: 'right',
              orient: 'vertical',
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
              formatter: '{a} <br/>{b} : {c}千篇 ({d}%)',
            },
            series: [
              {
                type: 'pie',
                name: '2018年中美科技期刊对比',
                // radius: [50, 250],
                center: ['50%', '50%'],
                // roseType: 'area',
                itemStyle: {
                  borderRadius: 8,
                },
                data: [
                  { value: 484234.6, name: '中国科技期刊文章数量' },
                  { value: 456234.8, name: '美国科技期刊文章数量' },
                ],
              },
            ],
          },
          {
            title: {
              text: '2019年中美科技期刊对比',
              subtext: '数据来源：国家统计局',
              left: 'center',
            },
            legend: {
              top: 'top',
              left: 'right',
              orient: 'vertical',
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
              formatter: '{a} <br/>{b} : {c}千篇 ({d}%)',
            },
            series: [
              {
                type: 'pie',
                name: '2019年中美科技期刊对比',
                // radius: [50, 250],
                center: ['50%', '50%'],
                // roseType: 'area',
                itemStyle: {
                  borderRadius: 8,
                },
                data: [
                  { value: 513242.5, name: '中国科技期刊文章数量' },
                  { value: 473258.6, name: '美国科技期刊文章数量' },
                ],
              },
            ],
          },
          {
            title: {
              text: '2020年中美科技期刊对比',
              subtext: '数据来源：国家统计局',
              left: 'center',
            },
            legend: {
              top: 'top',
              left: 'right',
              orient: 'vertical',
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
              formatter: '{a} <br/>{b} : {c}千篇 ({d}%)',
            },
            series: [
              {
                type: 'pie',
                name: '2020年中美科技期刊对比',
                // radius: [50, 250],
                center: ['50%', '50%'],
                // roseType: 'area',
                itemStyle: {
                  borderRadius: 8,
                },
                data: [
                  { value: 549845.8, name: '中国科技期刊文章数量' },
                  { value: 495416.9, name: '美国科技期刊文章数量' },
                ],
              },
            ],
          },
          {
            title: {
              text: '2021年中美科技期刊对比',
              subtext: '数据来源：国家统计局',
              left: 'center',
            },
            legend: {
              top: 'top',
              left: 'right',
              orient: 'vertical',
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
              formatter: '{a} <br/>{b} : {c}千篇 ({d}%)',
            },
            series: [
              {
                type: 'pie',
                name: '2021年中美科技期刊对比',
                // radius: [50, 250],
                center: ['50%', '50%'],
                // roseType: 'area',
                itemStyle: {
                  borderRadius: 8,
                },
                data: [
                  { value: 569435.7, name: '中国科技期刊文章数量' },
                  { value: 504387.6, name: '美国科技期刊文章数量' },
                ],
              },
            ],
          },
          {
            title: {
              text: '2022年中美科技期刊对比',
              subtext: '数据来源：国家统计局',
              left: 'center',
            },
            legend: {
              top: 'top',
              left: 'right',
              orient: 'vertical',
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
              formatter: '{a} <br/>{b} : {c}千篇 ({d}%)',
            },
            series: [
              {
                type: 'pie',
                name: '2022年中美科技期刊对比',
                // radius: [50, 250],
                center: ['50%', '50%'],
                // roseType: 'area',
                itemStyle: {
                  borderRadius: 8,
                },
                data: [
                  { value: 609197.9, name: '中国科技期刊文章数量' },
                  { value: 529987.6, name: '美国科技期刊文章数量' },
                ],
              },
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
