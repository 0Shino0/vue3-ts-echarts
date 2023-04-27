<script lang="ts">
// 这是一个基于 TypeScript 的 Vue 组件
import { defineComponent, onMounted, ref } from 'vue'
import LineChart from '@/components/LineChart/index.vue'
// import BarChart from '@/components/BarChart/index.vue'
// import PieChart from '@/components/PieChart/index.vue'
import TimeLinePieTech from '@/components/TimeLinePieTech/index.vue'
// import TimeLinePie from '@/components/TimeLinePie/index.vue'
import TimeLineSolidBar from '@/components/TimeLineSolidBar/index.vue'
// import TimeLineBarLine from '@/components/TimeLineBarLine/index.vue'
import TimeLinePictorialBar from '@/components/TimeLinePictorialBar/index.vue'
import TimeLineBar from '@/components/TimeLineBar/index.vue'
// import { VueHorizontalTimeline } from 'vue-horizontal-timeline'
// import VueHorizontalTimeline from '@/components/VueHorizontalTimeline/index.vue'

import $bus from '@/libs/eventBus'

export interface lineChartDataMember {
  newVisitis: number[]
  messages: number[]
  purchases: number[]
  shoppings: number[]
}

const lineChartDataList: lineChartDataMember = {
  newVisitis: [30, 50, 134, 160, 200, 280, 300, 350, 400],

  messages: [200, 192, 120, 144, 160, 130, 140],

  purchases: [80, 100, 121, 104, 105, 90, 100],

  shoppings: [130, 140, 141, 142, 145, 150, 160],
}

export default defineComponent({
  components: {
    // VueHorizontalTimeline,
    LineChart,
    // TimeLinePie,
    TimeLineSolidBar,
    // PieChart,
    TimeLinePieTech,
    // TimeLineBarLine,
    TimeLinePictorialBar,
    TimeLineBar,
  },
  setup(props, context) {
    // 在这里声明数据，或者编写函数并在这里执行它
    // 在使用 setup 的情况下，请牢记一点：不能再用 this 来获取 Vue 实例

    // const items = ref<object[]>([])

    const lineChartData = ref<number[]>()

    // 生命周期钩子
    onMounted(() => {
      // const example1 = {
      //   title: '第十八次全国代表大会',
      //   content:
      //     '十八大提出坚持走中国特色新型工业化、信息化、城镇化、农业现代化道路，推动信息化和工业化深度融合、工业化和城镇化良性互动、城镇化和农业现代化相互协调，促进工业化、信息化、城镇化、农业现代化同步发展。',
      // }
      // const example2 = {
      //   title: '第十九次全国代表大会',
      //   content:
      //     '十九大着重于生态文明建设，首次提出建设富强民主文明和谐美丽的社会主义现代化强国的目标，指明现代化是人与自然和谐共生的现代化。',
      // }
      // const example3 = {
      //   title: '第二十次全国代表大会',
      //   content:
      //     '二十大习近平总书记强调：“要守好中国式现代化的本和源、根和魂，毫不动摇坚持中国式现代化的中国特色、本质要求、重大原则，确保中国式现代化的正确方向。”在新时代新征程上，我们要牢牢把握全面建设社会主义现代化国家的重大原则，以中国式现代化全面推进中华民族伟大复兴。',
      // }
      // const example4 = {
      //   title: '全国政协十四届一次会议和十四届全国人大一次会议',
      //   content:
      //     '两会中再次提到要全面贯彻落实党的二十大精神，砥砺前行，推动经济社会持续健康发展，扎实推进中国式现代化。为把我国建设成为富强民主文明和谐美丽的社会主义现代化国家而不懈奋斗！',
      // }
      // items.value = [example1, example2, example3, example4]

      lineChartData.value = lineChartDataList['newVisitis']

      window.onresize = function () {
        $bus.emit('windowOnresize')
      }
    })

    // 方法 methods
    const handleSetLineChartData = (type: keyof lineChartDataMember) => {
      lineChartData.value = lineChartDataList[type]
    }

    // 计算方法 computed

    // 监听 watch

    return {
      // 需要给 `<template />` 用的数据或函数，在这里 `return` 出去
      // items,
      lineChartData,
      handleSetLineChartData,
    }
  },
})
</script>

<template>
  <div class="timeline-container">
    <!-- <vue-horizontal-timeline :items="items" /> -->

    <!-- 工业 科技 -->
    <div class="timeline-echarts-top">
      <div class="timeline-echarts-container">
        <div class="timeline-echarts-item">
          <time-line-bar v-if="lineChartData" :chart-data="lineChartData" />
        </div>

        <div class="timeline-echarts-item">
          <!-- <pie-chart></pie-chart> -->
          <time-line-pie-tech></time-line-pie-tech>
        </div>
      </div>
    </div>

    <!-- 农业 国防 -->
    <div class="timeline-echarts-bottom">
      <div class="timeline-echarts-container">
        <div class="timeline-echarts-item">
          <time-line-solid-bar></time-line-solid-bar>
        </div>
        <div class="timeline-echarts-item">
          <time-line-pictorial-bar></time-line-pictorial-bar>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="less">
.timeline-container {
  // height: 800px;
  // margin-top: 64px;
  width: 100vw;
  height: 100vh;
  background-color: #fff1ba;

  .timeline {
    ol {
      li:last-child {
        background-color: #ddd !important;
      }
    }
  }
  // 覆盖
  .vue-horizontal-timeline .timeline ol li {
    width: 300px;
    background-color: #ddd !important;
  }

  .vue-horizontal-timeline .timeline ol li .time {
    // left: 12em;
    left: 11em;
    width: 300px;
  }

  .vue-horizontal-timeline .timeline ol li:nth-child(0n + 3) .time {
    // left: 12em;
    // left: 11em;
    width: 380px;
  }
  .vue-horizontal-timeline .timeline ol li:nth-child(0n + 4) .time {
    // left: 12em;
    // left: 11em;
    width: 380px;
  }

  // 红点
  .vue-horizontal-timeline .timeline ol li.add-step:not(:last-child)::after {
    background: #c00000;
  }

  .vue-horizontal-timeline {
    background-color: rgba(0, 0, 0, 0);
    text-align: center;
  }

  .vue-horizontal-timeline .timeline ol li .time {
    // background-color: var(--c-bg-theme);

    .title {
      color: var(--c-title-theme);
    }

    .content {
      color: var(--c-font-theme);
    }
  }
  // .vue-horizontal-timeline .timeline ol li .time[data-v-c7fa1b17]::before {
  //   border-color: transparent transparent transparent var(--c-bg-theme);
  // }

  // 顶部 工业 科技
  .timeline-echarts-top {
    display: flex;
    flex-wrap: nowrap;
    width: 100vw;
  }

  .timeline-echarts-container {
    // width: 600px;
    // width: 100%;
    width: 100vw;
    // background-color: #fafafa;
    background-color: #fff1ba;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;

    .timeline-echarts-item {
      margin-top: 20px;
      width: 47.5vw;
      // width: 600px;
      // width: 100%;
      // display: flex;
      // justify-content: center;
    }
  }

  // 底部 农业
  .timeline-echarts-bottom {
    display: flex;
    flex-wrap: nowrap;
    // height: 400px;
    width: 100vw;
  }
}
</style>
