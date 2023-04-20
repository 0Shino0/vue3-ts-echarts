<template>
  <!-- <div class="go-back" @click="goBack()"><button class="bn">返回</button></div> -->
  <Header></Header>
  <router-view :key="key" />
  <!-- <Footer></Footer> -->
  <!-- 顶部图片 -->
  <!-- <div class="img-header">
    <img class="header-light" src="@/assets/img/header-light.png" alt="" />
    <img
      class="header-people"
      src="@/assets/img/Great-Hall-of-the-People.png"
      alt=""
    />
  </div> -->
  <!-- 底部图片 -->
  <div class="img-footer">
    <!-- <img src="@/assets/img/1440-900-bg-3.png" alt="" /> -->
    <img src="@/assets/img/1440-900-bg-5.png" alt="" />
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { isMobile, watchResize } from '@bassist/utils'
import Header from './layout/Header.vue'
// import Footer from './layout/Footer.vue'

const route = useRoute()
const router = useRouter()
const appRef = ref()
const key = computed(() => `${String(route.name || route.path)}-${new Date()}`)

onMounted(() => {
  // console.log(route.path === '/' ? true : false)
})

watchResize(() => {
  document.body.className = `platform-${isMobile() ? 'mobile' : 'desktop'}`
})

watch(
  () => route.path,
  (newPath, oldPath) => {
    // console.log(newPath)
    document.documentElement.className =
      route.path === '/' ? 'overflow-hidden' : 'overflow-auto'
  },
  { immediate: true }
)

const goBack = () => {
  router.back()
}
</script>

<style lang="less">
// // 引入字体
// @font-face {
//   font-family: '夏行楷';
//   src: url('@/assets/font/演示夏行楷.ttf');
// }
// @font-face {
//   font-family: '秋鸿楷';
//   src: url('@/assets/font/演示秋鸿楷.ttf');
// }

.html,
body {
  // background-image: linear-gradient(
  //   225deg,
  //   #ff0000 0%,
  //   #d91818 19%,
  //   #f93836 39%,
  //   #d91919 60%,
  //   #d40000 80%,
  //   #db0000 100%
  // );
  background-image: linear-gradient(#ee0b04, #ee0904);
}

.overflow-hidden {
  overflow: hidden;
}
.overflow-auto {
  overflow: auto;
}

#app {
  position: relative;
  width: 100%;
  height: 100%;
  // min-height: 800px;
  // background: url(../../assets/img/bg-main.png);
  // background: url(../../assets/img/endless-constellation.png);
  // background-color: #330033;
  // background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200' viewBox='0 0 800 800'%3E%3Cg fill='none' stroke='%23404' stroke-width='5.6'%3E%3Cpath d='M769 229L1037 260.9M927 880L731 737 520 660 309 538 40 599 295 764 126.5 879.5 40 599-197 493 102 382-31 229 126.5 79.5-69-63'/%3E%3Cpath d='M-31 229L237 261 390 382 603 493 308.5 537.5 101.5 381.5M370 905L295 764'/%3E%3Cpath d='M520 660L578 842 731 737 840 599 603 493 520 660 295 764 309 538 390 382 539 269 769 229 577.5 41.5 370 105 295 -36 126.5 79.5 237 261 102 382 40 599 -69 737 127 880'/%3E%3Cpath d='M520-140L578.5 42.5 731-63M603 493L539 269 237 261 370 105M902 382L539 269M390 382L102 382'/%3E%3Cpath d='M-222 42L126.5 79.5 370 105 539 269 577.5 41.5 927 80 769 229 902 382 603 493 731 737M295-36L577.5 41.5M578 842L295 764M40-201L127 80M102 382L-261 269'/%3E%3C/g%3E%3Cg fill='%23505'%3E%3Ccircle cx='769' cy='229' r='11'/%3E%3Ccircle cx='539' cy='269' r='11'/%3E%3Ccircle cx='603' cy='493' r='11'/%3E%3Ccircle cx='731' cy='737' r='11'/%3E%3Ccircle cx='520' cy='660' r='11'/%3E%3Ccircle cx='309' cy='538' r='11'/%3E%3Ccircle cx='295' cy='764' r='11'/%3E%3Ccircle cx='40' cy='599' r='11'/%3E%3Ccircle cx='102' cy='382' r='11'/%3E%3Ccircle cx='127' cy='80' r='11'/%3E%3Ccircle cx='370' cy='105' r='11'/%3E%3Ccircle cx='578' cy='42' r='11'/%3E%3Ccircle cx='237' cy='261' r='11'/%3E%3Ccircle cx='390' cy='382' r='11'/%3E%3C/g%3E%3C/svg%3E");
  // background-image: linear-gradient(to left bottom, #f22521, #d5110d);
  // background-color: #e3140e;
  // background-color: #ff0000;
  // background-color: #ff6161;
  // background-color: #fc3d3d;
  // background-color: #ff0000;
  // background-color: #bf3c37;

  // background-image: -webkit-linear-gradient(
  //   225deg,
  //   #ff0000 0%,
  //   #d91818 19%,
  //   #f93836 39%,
  //   #d91919 60%,
  //   #d40000 80%,
  //   #db0000 100%
  // );
  // background-image: -moz-linear-gradient(
  //   225deg,
  //   #ff0000 0%,
  //   #d91818 19%,
  //   #f93836 39%,
  //   #d91919 60%,
  //   #d40000 80%,
  //   #db0000 100%
  // );
  // background-image: -o-linear-gradient(
  //   225deg,
  //   #ff0000 0%,
  //   #d91818 19%,
  //   #f93836 39%,
  //   #d91919 60%,
  //   #d40000 80%,
  //   #db0000 100%
  // );

  // background-image: -webkit-linear-gradient(
  //   45deg,
  //   #fc3d3d 2%,
  //   #d41c1c 31%,
  //   #f93836 66%,
  //   #ae0907 100%
  // );
  // background-image: -moz-linear-gradient(
  //   45deg,
  //   #fc3d3d 2%,
  //   #d41c1c 31%,
  //   #f93836 66%,
  //   #ae0907 100%
  // );
  // background-image: -o-linear-gradient(
  //   45deg,
  //   #fc3d3d 2%,
  //   #d41c1c 31%,
  //   #f93836 66%,
  //   #ae0907 100%
  // );
  // background-image: linear-gradient(
  //   45deg,
  //   #fc3d3d 2%,
  //   #d41c1c 31%,
  //   #f93836 66%,
  //   #ae0907 100%
  // );

  // #f59657,

  // background-image: url('@/assets/img/background.jpg');
  background-repeat: no-repeat;
  background-size: cover;

  // overflow: hidden;
  z-index: 2;
}

// 底部图片
.img-footer {
  position: absolute;
  // top: 2vw;
  top: 0px;
  // left: calc(30vw / 2);
  z-index: -1;
  margin: 0 auto;
  img {
    // height: 300px;
    width: 100vw;
    height: 100vh;

    // height: 930px;
  }
}

// .img-header {
//   // position: absolute;
//   // margin-top: 50px;
//   top: 0px;

//   .header-light {
//     position: absolute;
//     width: 100%;
//     z-index: -1;
//     top: 5vw;
//   }
//   .header-people {
//     z-index: 10;
//     top: 5vw;
//     position: absolute;
//     width: 100%;
//   }
// }
</style>
