<script lang="ts">
// 这是一个基于 TypeScript 的 Vue 组件
import { defineComponent, onMounted } from 'vue'

import WordCloud from '@/components/WordCloud/index.vue'
import EchartsWord from '@/components/EchartsWord/index.vue'
import TimeLine from '@/components/TimeLine/index.vue'

export default defineComponent({
  components: {
    WordCloud,
    EchartsWord,
    TimeLine,
  },
  setup(props, context) {
    // 在这里声明数据，或者编写函数并在这里执行它
    // 在使用 setup 的情况下，请牢记一点：不能再用 this 来获取 Vue 实例

    // 生命周期钩子
    onMounted(() => {})

    // 计算方法 computed

    // 监听 watch

    return {
      // 需要给 `<template />` 用的数据或函数，在这里 `return` 出去
    }
  },
})
</script>

<template>
  <div class="test">
    <time-line></time-line>
  </div>
</template>

<style lang="less"></style>
