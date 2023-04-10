<script lang="ts">
// 这是一个基于 TypeScript 的 Vue 组件
import { defineComponent, onMounted } from 'vue'
import { useRouter } from 'vue-router'

export default defineComponent({
  setup(props, context) {
    // 在这里声明数据，或者编写函数并在这里执行它
    // 在使用 setup 的情况下，请牢记一点：不能再用 this 来获取 Vue 实例
    const router = useRouter()

    // 生命周期钩子
    onMounted(() => {
      console.log(router)
    })

    // 方法 methods

    // 计算方法 computed

    // 监听 watch

    return {
      // 需要给 `<template />` 用的数据或函数，在这里 `return` 出去
    }
  },
})
</script>

<template>
  <div class="home_header_container">
    <ul class="home_nav_contianer">
      <router-link to="/" class="home_nav_item">
        <li class="home_nav_text">首页</li>
      </router-link>
      <router-link to="/wordcloud" class="home_nav_item">
        <li class="home_nav_text">词云</li>
      </router-link>
      <router-link to="/timeline" class="home_nav_item">
        <li class="home_nav_text">时间轴</li>
      </router-link>
      <router-link to="/population" class="home_nav_item">
        <li class="home_nav_text">人口规模</li>
      </router-link>
      <router-link to="/poverty" class="home_nav_item">
        <li class="home_nav_text">脱贫致富</li>
      </router-link>
      <router-link to="/civilization" class="home_nav_item">
        <li class="home_nav_text">精神文明</li>
      </router-link>
      <router-link to="/nature" class="home_nav_item">
        <li class="home_nav_text">人与自然</li>
      </router-link>
      <router-link to="/peace" class="home_nav_item">
        <li class="home_nav_text">和平发展</li>
      </router-link>
    </ul>
  </div>
</template>

<style lang="less">
.home_header_container {
  position: absolute;
  // height: calc(var(--w-space-sm) * 4);
  z-index: 10;
  top: 0px;
  left: calc((100% - 1160px) / 2);

  .home_nav_contianer {
    display: flex;
    justify-content: center;
    margin-top: 0px;
    margin-bottom: 0px;
    padding-left: 0px;

    .home_nav_item {
      // margin-left: 50px;
      padding: var(--w-space-sm) var(--w-space-lg);
      cursor: pointer;

      li {
        color: var(--c-light-blue);
        font-size: var(--w-space);
        font-weight: bold;
      }

      // .home_nav_text {
      // }
    }

    // .home_nav_item:hover {
    //   background-color: var(--c-gray);
    // }
  }
}
</style>
