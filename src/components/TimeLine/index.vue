<script lang="ts">
// 这是一个基于 TypeScript 的 Vue 组件
import { defineComponent, onMounted, ref } from 'vue'
import LineChart from '@/components/LineChart/index.vue'
import BarChart from '@/components/BarChart/index.vue'
import PieChart from '@/components/PieChart/index.vue'

// import { VueHorizontalTimeline } from 'vue-horizontal-timeline'
import VueHorizontalTimeline from '@/components/VueHorizontalTimeline/index.vue'

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
    VueHorizontalTimeline,
    LineChart,
    BarChart,
    PieChart,
  },
  setup(props, context) {
    // 在这里声明数据，或者编写函数并在这里执行它
    // 在使用 setup 的情况下，请牢记一点：不能再用 this 来获取 Vue 实例

    const items = ref<object[]>([])

    const lineChartData = ref<number[]>()

    // 生命周期钩子
    onMounted(() => {
      const example1 = {
        title: '50~70年代',
        content:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ex dolor, malesuada luctus scelerisque ac, auctor vitae risus. Vivamus risus dolor, faucibus a bibendum quis, facilisis eget odio.',
      }
      const example2 = {
        title: '70~90年代',
        content:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ex dolor, malesuada luctus scelerisque ac, auctor vitae risus. Vivamus risus dolor, faucibus a bibendum quis, facilisis eget odio.',
      }
      const example3 = {
        title: '90~00年代',
        content:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ex dolor, malesuada luctus scelerisque ac, auctor vitae risus. Vivamus risus dolor, faucibus a bibendum quis, facilisis eget odio.',
      }
      const example4 = {
        title: '00~至今',
        content:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ex dolor, malesuada luctus scelerisque ac, auctor vitae risus. Vivamus risus dolor, faucibus a bibendum quis, facilisis eget odio.',
      }
      items.value = [example1, example2, example3, example4]

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
      items,
      lineChartData,
      handleSetLineChartData,
    }
  },
})
</script>

<template>
  <div class="timeline-container">
    <vue-horizontal-timeline :items="items" />

    <div class="timeline-echarts-container">
      <div class="timeline-echarts-item">
        <line-chart v-if="lineChartData" :chart-data="lineChartData" />
      </div>
      <div class="timeline-echarts-item">
        <bar-chart></bar-chart>
      </div>
      <div class="timeline-echarts-item">
        <pie-chart></pie-chart>
      </div>
    </div>
  </div>
</template>

<style lang="less">
.timeline-container {
  // height: 800px;
  margin-top: 64px;

  .timeline {
    ol {
      li:last-child {
        background-color: #ddd !important;
      }
    }

    .add-step {
      background-color: #ddd !important;
    }
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

  .timeline-echarts-container {
    background-color: #fafafa;
    // width: 600px;
    width: 100%;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;

    .timeline-echarts-item {
      margin-top: 20px;
      width: 100%;
      // display: flex;
      // justify-content: center;
    }
  }
}
</style>
