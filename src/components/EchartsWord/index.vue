<script lang="ts">
// 这是一个基于 TypeScript 的 Vue 组件
import { defineComponent, onMounted, ref, inject, nextTick } from 'vue'

import chinaImgUrl from '@/assets/img/china.jpg'

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
        减排: 12199,
        反腐: 10288,
        可持续: 29487,
        绿色: 22294,
        现代化: 74470,
        能源: 20517,
        系统: 8353,
        打虎: 8253,
        猎狐: 8153,
        拍蝇: 8053,
        '互联网+': 6000,
        半导体: 2000,
        芯片: 15418,
        节能: 620,
        三个件大事: 1206,
        计算: 969,
        疫情: 232,
        三件大事: 3300,
        人民民主: 3501,
        三个务必: 3600,
        科教兴国: 3300,
        共同富裕: 3200,
        从严治党: 3885,
        人才强国: 3546,
        为民造福: 3700,
        依法治国: 3944,
        分配制度: 4840,
        inverse: 3706,
        max: 3391,
        saveAsImage: 2616,
        text: 2592,
        icon: 2782,
        animationEasing: 2983,
        animationDurationUpdate: 2259,
        symbolOffset: 2549,
        radius: 2103,
        center: 2425,
        sankey: 2933,
        fontWeight: 2828,
        fontFamily: 2490,
        subtextStyle: 2066,
        yAxisIndex: 2529,
        人类命运共同体: 1110,
        一带一路: 1614,
        两步走: 1819,
        selectedMode: 1821,
        三大攻坚战: 1176,
        听党指挥: 1186,
        不忘初心: 1622,
        牢记使命: 1046,
        绿水青山: 1771,
        四个自信: 1724,
        四个伟大: 1276,
        四个意识: 1188,
        两个维护: 1481,
        五位一体: 1255,
        三严三实: 1840,
        中国梦: 1781,
        八项规定: 1166,
        中国影响力: 1277,
        treemap: 1861,
        pointer: 590,
        smooth: 1295,
        smoothMonotone: 696,
        sampling: 757,
        polar: 6279,
        calculable: 879,
        excludeComponents: 130,
        dimension: 478,
        inRange: 1060,
        showTitle: 484,
        restore: 932,
        range: 477,
        precision: 878,
        target: 1433,
        showSymbol: 1247,
        nameGap: 4896,
        zoomLock: 571,
        throttle: 466,
        connectNulls: 897,
        clipOverflow: 826,
        startValue: 551,
        splitArea: 4775,
        filterMode: 635,
        end: 409,
        left: 6475,
        baseline: 431,
        coord: 897,
        nameTextStyle: 7477,
        width: 4338,
        shadowBlur: 4493,
        effect: 929,
        period: 225,
        areaColor: 631,
        containLabel: 1701,
        pieces: 414,
        categories: 1000,
        itemSymbol: 273,
        effectScatter: 7147,
        margin: 1034,
        link: 1366,
        showDelay: 896,
        subtext: 1442,
        barCategoryGap: 827,
        barGap: 1094,
        barWidth: 1521,
        barBorderRadius: 284,
        z: 4014,
        polarIndex: 1456,
        shadowOffsetY: 2475,
        height: 1988,
        barMinHeight: 575,
        lang: 131,
        showAllSymbol: 942,
        transitionDuration: 993,
        fillerColor: 229,
        nameMap: 1249,
        barMaxWidth: 747,
        labelPrecision: 248,
        option: 654,
        seriesIndex: 935,
        controlPosition: 121,
        shadowStyle: 347,
        boxplot: 1394,
        labelFormatter: 264,
        realtime: 631,
        dataBackgroundColor: 239,
        showDetail: 247,
        showDataShadow: 217,
        x: 684,
        valueDim: 499,
        onZero: 931,
        clockwise: 1035,
        itemWidth: 1732,
        axis: 379,
        selectedOffset: 670,
        startAngle: 1293,
        minAngle: 590,
        top: 4637,
        avoidLabelOverlap: 870,
        endAngle: 213,
        start: 779,
        roam: 1738,
        indicator: 853,
        sublink: 708,
        zoom: 1038,
        subtarget: 659,
        length: 1060,
        itemSize: 505,
        controlStyle: 452,
        edgeLabel: 1188,
        radiusAxisIndex: 354,
        scaleLimit: 1313,
        geoIndex: 535,
        regions: 1892,
        itemHeight: 1290,
        nodes: 644,
        crossStyle: 466,
        edges: 369,
        layout: 846,
        barBorderColor: 721,
        barBorderWidth: 498,
        y: 367,
        valueIndex: 704,
        showLegendSymbol: 482,
        mapValueCalculation: 492,
        optionToContent: 264,
        handleColor: 187,
        handleSize: 271,
        showContent: 1853,
        angleAxisIndex: 406,
        endValue: 327,
        triggerOn: 1720,
        contentToOption: 169,
        buttonColor: 71,
        rotate: 1144,
        hoverLink: 335,
        outOfRange: 491,
        textareaColor: 58,
        textareaBorderColor: 58,
        textColor: 60,
        buttonTextColor: 66,
        category: 336,
        hideDelay: 786,
        alwaysShowContent: 1267,
        extraCssText: 901,
        effectType: 277,
        force: 1820,
        rippleEffect: 723,
        edgeSymbolSize: 329,
        showEffectOn: 271,
        gravity: 199,
        edgeLength: 193,
        layoutAnimation: 152,
        length2: 169,
        enterable: 957,
        dim: 83,
        readOnly: 143,
        levels: 444,
        textGap: 256,
        pixelRatio: 84,
        nodeScaleRatio: 232,
        draggable: 249,
        brushType: 158,
        radarIndex: 152,
        large: 182,
        edgeSymbol: 675,
        largeThreshold: 132,
        leafDepth: 73,
        childrenVisibleMin: 73,
        minSize: 35,
        maxSize: 35,
        sort: 90,
        funnelAlign: 61,
        source: 336,
        nodeClick: 200,
        curveness: 350,
        areaSelectStyle: 104,
        parallelIndex: 52,
        initLayout: 359,
        trailLength: 116,
        boxWidth: 20,
        back: 53,
        rewind: 110,
        zoomToNodeRatio: 80,
        squareRatio: 60,
        parallelAxisDefault: 358,
        checkpointStyle: 440,
        nodeWidth: 49,
        color0: 62,
        layoutIterations: 56,
        nodeGap: 54,
        repulsion: 276,
        tiled: 105,
        currentIndex: 145,
        axisType: 227,
        loop: 97,
        playInterval: 112,
        borderColor0: 23,
        gap: 43,
        autoPlay: 123,
        showPlayBtn: 25,
        breadcrumb: 119,
        colorMappingBy: 85,
        id: 18,
        blurSize: 85,
        minOpacity: 50,
        maxOpacity: 54,
        prevIcon: 12,
        children: 21,
        shape: 98,
        nextIcon: 12,
        showNextBtn: 17,
        stopIcon: 21,
        visibleMin: 83,
        visualDimension: 97,
        colorSaturation: 56,
        colorAlpha: 66,
        emptyItemWidth: 10,
        inactiveOpacity: 4,
        activeOpacity: 4,
        showPrevBtn: 19,
        playIcon: 26,
        ellipsis: 19,
        gapWidth: 19,
        borderColorSaturation: 10,
        handleIcon: 2,
        handleStyle: 6,
        borderType: 1,
        constantSpeed: 1,
        polyline: 2,
        blendMode: 1,
        dataBackground: 1,
        textAlign: 1,
        textBaseline: 1,
        brush: 3,
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
      <h1>近五年关键字——词云</h1>
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
