<script lang="ts">
// 这是一个基于 TypeScript 的 Vue 组件
import { defineComponent, onMounted } from 'vue'

export default defineComponent({
  setup(props, context) {
    // 在这里声明数据，或者编写函数并在这里执行它
    // 在使用 setup 的情况下，请牢记一点：不能再用 this 来获取 Vue 实例

    // 生命周期钩子
    onMounted(() => {})

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
  <div class="page-wrapper page">
    <div class="container">
      <div class="center">
        <!-- <h1 class="title title-big">中国式现代化发展数据可视化</h1>

        <p class="text">
          中国式现代化是中国共产党领导的社会主义现代化。中国式现代化既有各国现代化的共同特征，更基于自己国情的中国特色，是人口规模巨大的现代化，全体人民共同富裕的现代化，物质文明和精神文明相协调的现代化，人与自然和谐共生的现代化，走和平发展道路的现代化。
        </p> -->
      </div>
    </div>
  </div>
</template>

<style lang="less">
// 清除默认样式
html,
body {
  width: 100%;
  height: 100%;
  min-width: 1280px;
  // min-height: 800px;
  // min-height: calc(2000px - 150px);
  // max-height: 100%;
  // overflow: hidden;
  font-size: 14px;
  font-family: Arial, sans-serif;
  background-color: #041527;
}
ul,
p {
  margin: 0;
}
a {
  text-decoration: none;
}
input,
button,
textarea,
input:active,
textarea:active,
button:active,
:focus {
  outline: none;
}
*,
*:before,
*:after {
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}
a:focus {
  outline: none;
}
ul {
  list-style-type: none;
  padding-left: 0;
}
.left {
  float: left;
}
.right {
  float: right;
}
.no-mg {
  margin: 0 !important;
}
.mt-20 {
  margin-top: 20px;
}
.clearfix:before,
.clearfix:after {
  content: '.';
  display: block;
  height: 0;
  overflow: hidden;
  zoom: 1;
}
.clearfix:after {
  clear: both;
}
.hidden {
  display: none;
}

// 主要代码
.page-wrapper {
  // max-height: 100%;
  // margin-top: 20vw;
  // padding-bottom: 7vw;
  // padding-bottom: 20vw;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  .container {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .center {
    width: 60vw;
    // width: 50vw;
    .title,
    .text {
      text-align: center;
      font-family: 'SimSun';
    }

    .title-big {
      color: var(--c-title-big-theme);
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 65px;
      line-height: 65px;
      // font-weight: bold;
      font-weight: 900;

      // 文字阴影
      text-shadow: 3px 5px 5px #000000;
    }

    .text {
      margin-top: 10vw;
      color: var(--c-title-big-theme);
    }
  }
}
</style>
