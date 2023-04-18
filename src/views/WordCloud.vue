<script lang="ts">
// 这是一个基于 TypeScript 的 Vue 组件
import { defineComponent, onMounted } from 'vue'

import WordCloud from '@/components/WordCloud/index.vue'
import EchartsWord from '@/components/EchartsWord/index.vue'

export default defineComponent({
  components: {
    WordCloud,
    EchartsWord,
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
  <div class="wordcloud-container">
    <div class="wordcloud-header">
      <div class="wordcloud-header-img">
        <img src="@/assets/img/20people.jpg" alt="20届全国人大" />
      </div>
    </div>
    <WordCloud />
    <EchartsWord />
  </div>
</template>

<style lang="less">
.wordcloud-container {
  margin-top: 64px;

  background-image: linear-gradient(
    to left bottom,
    #fefbf2,
    #f6d9ae,
    #f59657,
    #d5110d
  );

  .wordcloud-header {
    .wordcloud-header-img {
      text-align: center;
      img {
        margin: 0 auto;
      }
    }
  }
}
</style>
