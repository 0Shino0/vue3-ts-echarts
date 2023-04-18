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
        <li class="home_nav_text">共同富裕</li>
      </router-link>
      <router-link to="/civilization" class="home_nav_item">
        <li class="home_nav_text">物质文明与精神文明</li>
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
/*大型屏幕pc 超大屏*/
@media screen and (min-width: 1200px) {
}
/*1200>=pc>=992 大屏，字体红色，背景黑色*/
@media screen and (min-width: 992px) and (max-width: 1199px) {
}
/*768<=pad<992 中屏，字体黄色，背景红色*/
@media screen and (min-width: 768px) and (max-width: 991px) {
}
/*phone<768  小屏，字体黑色，背景蓝色*/
@media screen and (max-width: 767px) and (min-width: 480px) {
}
/* 超小屏，字体黑色，背景蓝色*/
@media screen and (max-width: 480px) {
}

.home_header_container {
  position: absolute;
  // height: calc(var(--w-space-sm) * 4);
  z-index: 10;
  top: 0px;
  left: calc((100% - 1039.6px) / 2);

  .home_nav_contianer {
    display: flex;
    justify-content: center;
    margin-top: 0px;
    margin-bottom: 0px;
    padding-left: 0px;

    .home_nav_item {
      flex-shrink: 1;
      // margin-left: 50px;
      // padding: var(--w-space-sm) var(--w-space-lg);
      padding: var(--w-space-sm) var(--w-space-sm);
      cursor: pointer;

      li {
        color: var(--c-light-blue);
        font-size: var(--w-space);
        font-weight: bold;
      }

      .home_nav_text {
        // color: var(--c-title-big-theme);
        color: var(--c-title-big-theme);
        // font-family: 'STXingkai';
        font-size: 24px;
        font-family: 'SimSun';
      }
    }

    // .home_nav_item:hover {
    //   background-color: var(--c-gray);
    // }
  }
}
</style>
