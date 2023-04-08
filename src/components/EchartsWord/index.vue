<script lang="ts">
// 这是一个基于 TypeScript 的 Vue 组件
import { defineComponent, onMounted, ref, inject, nextTick } from 'vue'

import chinaImgUrl from '@/assets/img/china.png'

// 引入echarts
import * as echarts from 'echarts'
import 'echarts-wordcloud' // 词云图

// import type {
//   EChartsOption,
//   ECharts,
//   SetOptionOpts,
//   EChartsType,
// } from 'echarts'
// EChartsType

// export interface VueEChartsProps {
//   option: EChartsOption
//   // style?: CSSProperties;
//   settings?: SetOptionOpts
//   loading?: boolean
//   theme?: 'light' | 'dark'
// }

export interface ChartsData {
  name: string
  value: number
}

export default defineComponent({
  setup(props, context) {
    // 在这里声明数据，或者编写函数并在这里执行它
    // 在使用 setup 的情况下，请牢记一点：不能再用 this 来获取 Vue 实例
    // const $echarts: ECharts | undefined = inject('$echarts')

    const echartsWordRef = ref<HTMLElement>()
    const wordCharts = ref()

    const maskImage = ref<HTMLImageElement>(new Image())

    // 生命周期钩子
    onMounted(() => {
      console.log(echartsWordRef.value)
      console.log(echarts)

      if (echarts != undefined && echartsWordRef.value) {
        wordCharts.value = echarts.init(echartsWordRef.value)
      }
      console.log(wordCharts.value)

      nextTick(() => {
        maskImage.value.onload = function () {
          chartSetOption()
        }

        maskImage.value.src = chinaImgUrl

        window.onresize = function () {
          wordCharts.value.resize()
        }
      })
    })

    // 方法 methods
    // 设置charts
    const chartSetOption = () => {
      var keywords: any = {
        现代化: 74470,
        共同富裕: 13200,
        可持续: 3487,
        绿色: 3294,
        '互联网+': 600,
        新征程: 8706,
        新发展理念: 3391,
        高质量发展: 3616,
        人与自然和谐共生: 3592,
        科教兴国战略: 1782,
        创新驱动发展战略: 5983,
        总体国家安全观: 3849,
        全过程人民民主: 3103,
        中华民族伟大复兴: 8425,
        踔厉奋发: 2828,
        勇毅前行: 2490,
        不忘初心: 2066,
        美丽中国: 2130,
        健康中国: 2478,
        完善金融监管: 1060,
        协商议政: 2484,
        稳中求进: 2932,
        战略性新兴产业: 2477,
        扩大消费: 2878,
        新型举国体制: 5433,
        亲清政商关系: 5247,
        住房保障: 2896,
        呵护未成年人: 2571,
        扫黑除恶: 1551,
        优化营商环境: 1775,
        节能: 120,
        人民就是江山: 2206,
        人民民主: 3501,
        五年: 3501,
        民主: 3501,
        三个务必: 3501,
        三件大事: 3501,
        发展: 3501,
        安全观: 3501,
        共同体: 2501,
        必由之路: 2501,
        工作: 2501,
        民生: 2501,
        全面: 2501,
        新格局: 3600,
        科教兴国: 2300,
        从严治党: 885,
        人才强国: 546,
        为民造福: 2700,
        依法治国: 944,
        团结奋斗: 933,
        社会公平正义: 1429,
        人类命运共同体: 1110,
        一带一路: 1614,
        两步走: 1819,
        平安中国: 2821,
        三大攻坚战: 1176,
        听党指挥: 1186,
        牢记使命: 1046,
        绿水青山: 1771,
        四个自信: 1724,
        四个伟大: 276,
        四个意识: 188,
        两个维护: 481,
        五位一体: 255,
        三严三实: 840,
        中国梦: 1781,
        中国影响力: 1277,
        历史周期律: 1590,
        人民至上: 9295,
        中心任务: 1696,
        中国故事: 1757,
        江山就是人民: 279,
        零容忍: 1879,
        加强人格权保护: 1635,
        一国两制: 897,
        完善生育支持政策体系: 800,
        反独促统: 3826,
        能源: 2217,
        打虎: 2353,
        猎狐: 2353,
        拍蝇: 2353,
        减排: 2399,
        反腐: 2388,
        i: 200,
        love: 300,
        china: 500,
      }

      var data: ChartsData[] = []
      for (var name in keywords) {
        // let nameTonumber: number = parseInt(name)
        data.push({
          name: name,
          value: Math.sqrt(keywords[name]),
        })
      }

      let option = {
        series: [
          {
            type: 'wordCloud',
            sizeRange: [4, 150],
            rotationRange: [0, 0],
            gridSize: 0,
            shape: 'pentagon',
            maskImage: maskImage.value,
            drawOutOfBound: false,
            // layoutAnimation: true,
            keepAspect: true,
            textStyle: {
              fontWeight: 'bold',
              color: function () {
                return (
                  'rgb(' +
                  [
                    Math.round(Math.random() * 200) + 50,
                    Math.round(Math.random() * 50),
                    Math.round(Math.random() * 50) + 50,
                  ].join(',') +
                  ')'
                )
              },
            },
            emphasis: {
              textStyle: {
                color: '#528',
              },
            },
            data: data.sort(function (a, b) {
              return b.value - a.value
            }),
          },
        ],
      }
      wordCharts.value.setOption(option)
    }

    // 计算方法 computed

    // 监听 watch

    return {
      // 需要给 `<template />` 用的数据或函数，在这里 `return` 出去
      echartsWordRef,
    }
  },
})
</script>

<template>
  <div class="echarts-word-container">
    <div class="echarts-word-title">
      <h1>近五年关键字——热词</h1>
    </div>
    <div
      id="echartsWord"
      ref="echartsWordRef"
      style="width: 100%; min-height: 1080px"
    ></div>
  </div>
</template>

<style lang="less">
.echarts-word-container {
  width: 100%;
  height: 100%;
  margin: 0;
  border: 1px solid #081f5a;
  min-height: 860px;
  position: relative;

  .echarts-word-title {
    margin-top: 50px;
    text-align: center;

    h1 {
      color: white;
      margin: 0 auto;
    }
  }
}
</style>
