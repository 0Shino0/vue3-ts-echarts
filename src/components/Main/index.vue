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
      <!-- 全屏背景动画 -->
      <div class="center">
        <h1 class="title title-big">
          <br /><br />
          中 国 式 现 代 化 <br />数据可视化设计<br />
        </h1>

        <a href="#0" class="btn-arrow-down to-second centered">
          <span class="arrow-down-p1"> </span>
          <span class="arrow-down-p2"> </span>
          <span class="arrow-down-p3"> </span>
        </a>

        <div class="tiny-stars">
          <img src="@/assets/svg/stars2.svg" alt="" />
        </div>

        <div class="tiny-stars middle-stars">
          <img src="@/assets/svg/stars3.svg" alt="" />
        </div>

        <div class="planet-big centered">
          <span class="round round-1"></span>
          <span class="round round-2"></span>
          <span class="round round-3"></span>
          <span class="round round-4"></span>
          <span class="round round-5"></span>
        </div>

        <div class="planet-big-content centered screen-1">
          <h2>
            中 国 式 现 代 化 <br />
            <span class="title-cursive"> ——数据可视化设计 </span>
          </h2>
          <h4 class="title title-small">
            碳中和，指产生人类生产生活产生的二氧化碳或温室气体排放总量
          </h4>
          <h4 class="title title-small">
            通过自然或人工手段实现正负抵消，达到零排放
          </h4>
          <p class="text">
            《巴黎协定》实施后，实现CO2
            及温室气体的净零排放成为各国长期减排目标的主要形式。
            特别是中国提出2060
            年前实现碳中和目标之后，国际社会对与净零排放相关的长期目标愈加重视。
            长期以来，中国积极参与全球治理，将温室气体减排任务纳入国家五年规划和2035
            远景目标。在落实政策方面，通过产业结构调整、能源结构优化、能源效率提高、碳市场建设、生态碳汇增加等一系列措施，使得中国节能减排行动取得了显著成效。
          </p>
        </div>

        <img src="@/assets/img/planet-1.png" alt="" class="abs planet-1" />

        <img src="@/assets/img/moon.png" alt="" class="abs moon" />
      </div>
    </div>

    <canvas id="bg-stars" class="bg-stars"></canvas>
  </div>
</template>

<style lang="less">
html,
body {
  width: 100%;
  min-width: 1280px;
  height: 100%;
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
.page-wrapper {
  position: relative;
  width: 100%;
  min-height: 2000px;
  // background: url(../../assets/img/bg-main.png);
  // background: url(../../assets/img/endless-constellation.png);
  overflow: hidden;
  z-index: 2;
}
.container {
  position: relative;
  width: calc(100% - 30px);
  max-width: 1600px;
  margin: 0 auto;
  padding-top: 30px;
  z-index: 3;
}
img {
  display: block;
}
.centered {
  margin: 0 auto;
}
.center {
  text-align: center;
}
.title,
.steps li .step-text {
  text-align: center;
  text-transform: uppercase;
  font-weight: bold;
}

// delete
.title-small,
.title-smaller {
  margin: 25px 0;
  color: #00c6ff;
  font-size: 20px;
  font-family: 'PT Sans', Arial, sans-serif;
}
.title-smaller {
  font-size: 18px;
  margin: 20px 0 0;
}
@media (min-width: 1351px) and (max-width: 1520px) {
  .title-smaller {
    font-size: 16px;
  }
}
@media (max-width: 1350px) {
  .title-smaller {
    font-size: 14px;
  }
}

// delete
.title-medium {
  margin-bottom: 25px;
  color: #fff;
  font-size: 50px;
  font-family: 'PT Sans', Arial, sans-serif;
  font-weight: bold;
}
@media (max-width: 1440px) {
  .title-medium {
    font-size: 42px;
  }
}
.title-big {
  color: #00c6ff;
  font-size: 70px;
  line-height: 70px;
  font-weight: normal;
  font-family: 'Open Sans', Arial, sans-serif;
}
.title-big span {
  display: block;
  font-size: 140px;
  line-height: 180px;
  font-weight: bold;
}
@media (max-width: 1440px) {
  .title-big {
    font-size: 60px;
    line-height: 60px;
  }
  .title-big span {
    font-size: 120px;
    line-height: 160px;
  }
}
.title-special {
  margin: 10px 0 40px;
  color: #fff;
  font-weight: normal;
}

.title-special span {
  text-transform: none;
}

.btn {
  -moz-box-sizing: content-box;
  -webkit-box-sizing: content-box;
  box-sizing: content-box;
  position: relative;
  display: inline-block;
  background-color: #02bb71;
  color: #fff;
  text-align: center;
  text-transform: uppercase;
  text-decoration: none;
  font-weight: bold;
  font-family: 'PT Sans', Arial, sans-serif;
  letter-spacing: 1px;
  -moz-border-radius: 5px;
  -webkit-border-radius: 5px;
  border-radius: 5px;
  border: none;
  outline: none;
}

.btn-small {
  height: 30px;
  padding: 0 20px;
  line-height: 32px;
  font-size: 12px;
  box-shadow: 0 4px #017e4c;
}

.btn-small:hover {
  top: 2px;
  box-shadow: 0 2px #017e4c;
}

.btn-small:active {
  top: 6px;
  box-shadow: 0 0 #017e4c;
}

.btn-big {
  height: 50px;
  padding: 0 35px;
  line-height: 54px;
  font-size: 18px;
  box-shadow: 0 5px #017e4c;
}

.btn-big:hover {
  top: 2px;
  box-shadow: 0 3px #017e4c;
}

.btn-big:active {
  top: 6px;
  box-shadow: 0 0 #017e4c;
}

.text,
.text-small,
.modules .info-full p,
.modules .info-short,
.modules .info-full li,
.planet-3-area .plus span,
.block-bottom-content .questions p,
.block-bottom-content .questions a {
  color: #fff;
  font-size: 20px;
  line-height: 35px;
  font-family: 'PT Sans Narrow', Arial, sans-serif;
}

.text-small,
.modules .info-full p {
  font-size: 16px;
  line-height: 24px;
  text-align: center;
}

// delete
.block {
  width: 990px;
  margin: 160px auto 30px;
}

.block span {
  color: #00c6ff;
}

.block-special {
  margin-top: 50px;
}

.bg-stars {
  position: fixed;
  top: 0;
  left: 0;
  background: transparent;
}

.tossing {
  animation-name: tossing;
  -webkit-animation-name: tossing;
  animation-duration: 2.5s;
  -webkit-animation-duration: 2.5s;
  animation-iteration-count: infinite;
  -webkit-animation-iteration-count: infinite;
}

@keyframes tossing {
  0% {
    margin-top: -64px;
    transform: rotate(-2deg);
  }

  50% {
    margin-top: -60px;
    transform: rotate(2deg);
  }

  100% {
    margin-top: -64px;
    transform: rotate(-2deg);
  }
}

@-webkit-keyframes tossing {
  0% {
    margin-top: -64px;
    -webkit-transform: rotate(-2deg);
  }

  50% {
    margin-top: -60px;
    -webkit-transform: rotate(2deg);
  }

  100% {
    margin-top: -64px;
    -webkit-transform: rotate(-2deg);
  }
}

.cow {
  animation-name: cow;
  -webkit-animation-name: cow;
  animation-duration: 2.6s;
  -webkit-animation-duration: 2.6s;
  animation-iteration-count: infinite;
  -webkit-animation-iteration-count: infinite;
}

@keyframes cow {
  0% {
    top: 80%;
    transform: rotate(-4deg);
  }

  50% {
    top: 55%;
    opacity: 1;
    transform: rotate(4deg);
  }

  100% {
    top: 50%;
    opacity: 0;
    transform: rotate(-4deg);
  }
}

@-webkit-keyframes cow {
  0% {
    top: 80%;
    -webkit-transform: rotate(-4deg);
  }

  50% {
    top: 55%;
    -webkit-transform: rotate(4deg);
  }

  100% {
    top: 50%;
    -webkit-transform: rotate(-4deg);
  }
}

.menu-container {
  position: fixed;
  top: 50px;
  left: 50px;
  z-index: 4;
}

.btn-menu {
  display: inline-block;
  width: 45px;
  height: 30px;
  background-image: url(../assets/img/btn-menu.png);
  background-repeat: no-repeat;
  background-position: 0 0;
}

.btn-menu:hover,
.btn-menu.is-open {
  background-position: 0 -36px;
}

.menu-list {
  display: none;
  margin-top: 20px;
}

.menu-list li {
  margin-bottom: 8px;
  background-color: #fdfdfd;
  float: left;
  border-radius: 5px;
  clear: both;
}

.menu-list a {
  z-index: 1;
  display: inline-block;
  height: 40px;
  padding: 0 20px;
  line-height: 40px;
  color: #041527;
  font-size: 14px;
  font-weight: bold;
  text-transform: uppercase;
  border-radius: 5px;
  outline: none;
  position: relative;
  -moz-transition: all 0.3s;
  -o-transition: all 0.3s;
  -webkit-transition: all 0.3s;
  transition: all 0.3s;
}

.menu-list a:after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
  border-radius: 5px;
  -moz-transition: all 0.3s;
  -o-transition: all 0.3s;
  -webkit-transition: all 0.3s;
  transition: all 0.3s;
  width: 0%;
  height: 100%;
  background: #02bb71;
}

.menu-list a:hover,
.menu-list a:active {
  color: #fdfdfd;
}

.menu-list a:hover:after,
.menu-list a:active:after {
  width: 100%;
}

.user-menu {
  position: absolute;
  top: 50px;
  right: 50px;
  z-index: 4;
}

.user-menu .menu-list li {
  float: right;
}

.user-menu a.language,
.user-menu a.btn {
  display: inline-block;
  vertical-align: middle;
  margin-left: 10px;
}

.language {
  color: #fff;
  font-size: 19px;
  font-weight: bold;
  text-transform: uppercase;
  font-family: 'Open Sans', Arial, sans-serif;
}

.language:after {
  display: inline-block;
  content: '';
  width: 0;
  height: 0;
  border-style: solid;
  border-width: 8px 6px 0 6px;
  border-color: #02bb71 transparent transparent transparent;
  margin-left: 5px;
}

.logo-main {
  margin-bottom: 56px;
}

.btn-arrow-down {
  display: inline-block;
  position: absolute;
  left: 50%;
  margin-left: -29px;
  z-index: 10;
}

.btn-arrow-down .arrow-down-p1,
.btn-arrow-down .arrow-down-p2,
.btn-arrow-down .arrow-down-p3 {
  width: 58px;
  height: 41px;
  position: absolute;
  display: inline-block;
  opacity: 0;
}

.btn-arrow-down .arrow-down-p1 {
  background: url('../../assets/img/arrow-down-1.png') center 0 no-repeat;
  -webkit-animation: blinker 3s linear infinite;
  -moz-animation: blinker 3s linear infinite;
  animation: blinker 3s linear infinite;
}

.btn-arrow-down .arrow-down-p2 {
  background: url('../../assets/img/arrow-down-2.png') center 16px no-repeat;
  -webkit-animation: blinker 3s linear infinite;
  -moz-animation: blinker 3s linear infinite;
  animation: blinker 3s linear infinite;
  -webkit-animation-delay: 0.1s;
  animation-delay: 0.1s;
}

.btn-arrow-down .arrow-down-p3 {
  background: url('../../assets/img/arrow-down-3.png') center 31px no-repeat;
  -webkit-animation: blinker 3s linear infinite;
  -moz-animation: blinker 3s linear infinite;
  animation: blinker 3s linear infinite;
  -webkit-animation-delay: 0.2s;
  animation-delay: 0.2s;
}

@-moz-keyframes blinker {
  0% {
    opacity: 0;
  }

  50% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
}

@-webkit-keyframes blinker {
  0% {
    opacity: 0;
  }

  50% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
}

@keyframes blinker {
  0% {
    opacity: 0;
  }

  50% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
}

.planet-big {
  z-index: 2;
  position: relative;
  vertical-align: middle;
  width: 944px;
  height: 944px;
  margin-top: 115px;
  background-image: url(../../assets/img/planet-big-with-orbits.png);
  background-position: center center;
  background-size: contain;
  background-repeat: no-repeat;
}

.planet-big-content {
  z-index: 100;
  position: absolute;
  top: 500px;
  left: 50%;
  margin-left: -472px;
  width: 944px;
  height: 700px;
  padding-top: 150px;
  text-align: center;
  vertical-align: middle;
}

.planet-big-content h2 {
  color: #fdc12d;
  font-family: 'PT Sans', Arial, sans-serif;
  font-size: 40px;
  font-weight: bold;
}

.planet-big-content h2 span {
  font-style: italic;
}

.planet-big-content p {
  width: 440px;
  margin: 0 auto 60px;
}

.abs {
  position: absolute;
}

.austro {
  position: absolute;
  top: 1070px;
  left: 45%;
  margin-left: -750px;
  z-index: 3;
}

.dusty {
  position: absolute;
  top: 480px;
  left: 50%;
  margin-left: -640px;
  z-index: 2;
}

.planet-1 {
  top: 420px;
  left: 15%;
}

.moon {
  top: 160px;
  right: 80px;
}

canvas {
  position: absolute;
  z-index: 2;
}

@-webkit-keyframes rot {
  from {
    -moz-transform: rotate(0deg) translate(-472px) rotate(0deg);
    -ms-transform: rotate(0deg) translate(-472px) rotate(0deg);
    -webkit-transform: rotate(0deg) translate(-472px) rotate(0deg);
    transform: rotate(0deg) translate(-472px) rotate(0deg);
  }

  to {
    -moz-transform: rotate(360deg) translate(-472px) rotate(-360deg);
    -ms-transform: rotate(360deg) translate(-472px) rotate(-360deg);
    -webkit-transform: rotate(360deg) translate(-472px) rotate(-360deg);
    transform: rotate(360deg) translate(-472px) rotate(-360deg);
  }
}

@-moz-keyframes rot {
  from {
    -moz-transform: rotate(0deg) translate(-472px) rotate(0deg);
    -ms-transform: rotate(0deg) translate(-472px) rotate(0deg);
    -webkit-transform: rotate(0deg) translate(-472px) rotate(0deg);
    transform: rotate(0deg) translate(-472px) rotate(0deg);
  }

  to {
    -moz-transform: rotate(360deg) translate(-472px) rotate(-360deg);
    -ms-transform: rotate(360deg) translate(-472px) rotate(-360deg);
    -webkit-transform: rotate(360deg) translate(-472px) rotate(-360deg);
    transform: rotate(360deg) translate(-472px) rotate(-360deg);
  }
}

@-o-keyframes rot {
  from {
    -moz-transform: rotate(0deg) translate(-472px) rotate(0deg);
    -ms-transform: rotate(0deg) translate(-472px) rotate(0deg);
    -webkit-transform: rotate(0deg) translate(-472px) rotate(0deg);
    transform: rotate(0deg) translate(-472px) rotate(0deg);
  }

  to {
    -moz-transform: rotate(360deg) translate(-472px) rotate(-360deg);
    -ms-transform: rotate(360deg) translate(-472px) rotate(-360deg);
    -webkit-transform: rotate(360deg) translate(-472px) rotate(-360deg);
    transform: rotate(360deg) translate(-472px) rotate(-360deg);
  }
}

@keyframes rot {
  from {
    -moz-transform: rotate(0deg) translate(-472px) rotate(0deg);
    -ms-transform: rotate(0deg) translate(-472px) rotate(0deg);
    -webkit-transform: rotate(0deg) translate(-472px) rotate(0deg);
    transform: rotate(0deg) translate(-472px) rotate(0deg);
  }

  to {
    -moz-transform: rotate(360deg) translate(-472px) rotate(-360deg);
    -ms-transform: rotate(360deg) translate(-472px) rotate(-360deg);
    -webkit-transform: rotate(360deg) translate(-472px) rotate(-360deg);
    transform: rotate(360deg) translate(-472px) rotate(-360deg);
  }
}

@-webkit-keyframes rot-back {
  from {
    -moz-transform: rotate(360deg) translate(-472px) rotate(-360deg);
    -ms-transform: rotate(360deg) translate(-472px) rotate(-360deg);
    -webkit-transform: rotate(360deg) translate(-472px) rotate(-360deg);
    transform: rotate(360deg) translate(-472px) rotate(-360deg);
  }

  to {
    -moz-transform: rotate(0deg) translate(-472px) rotate(0deg);
    -ms-transform: rotate(0deg) translate(-472px) rotate(0deg);
    -webkit-transform: rotate(0deg) translate(-472px) rotate(0deg);
    transform: rotate(0deg) translate(-472px) rotate(0deg);
  }
}

@-moz-keyframes rot-back {
  from {
    -moz-transform: rotate(360deg) translate(-472px) rotate(-360deg);
    -ms-transform: rotate(360deg) translate(-472px) rotate(-360deg);
    -webkit-transform: rotate(360deg) translate(-472px) rotate(-360deg);
    transform: rotate(360deg) translate(-472px) rotate(-360deg);
  }

  to {
    -moz-transform: rotate(0deg) translate(-472px) rotate(0deg);
    -ms-transform: rotate(0deg) translate(-472px) rotate(0deg);
    -webkit-transform: rotate(0deg) translate(-472px) rotate(0deg);
    transform: rotate(0deg) translate(-472px) rotate(0deg);
  }
}

@-o-keyframes rot-back {
  from {
    -moz-transform: rotate(360deg) translate(-472px) rotate(-360deg);
    -ms-transform: rotate(360deg) translate(-472px) rotate(-360deg);
    -webkit-transform: rotate(360deg) translate(-472px) rotate(-360deg);
    transform: rotate(360deg) translate(-472px) rotate(-360deg);
  }

  to {
    -moz-transform: rotate(0deg) translate(-472px) rotate(0deg);
    -ms-transform: rotate(0deg) translate(-472px) rotate(0deg);
    -webkit-transform: rotate(0deg) translate(-472px) rotate(0deg);
    transform: rotate(0deg) translate(-472px) rotate(0deg);
  }
}

@keyframes rot-back {
  from {
    -moz-transform: rotate(360deg) translate(-472px) rotate(-360deg);
    -ms-transform: rotate(360deg) translate(-472px) rotate(-360deg);
    -webkit-transform: rotate(360deg) translate(-472px) rotate(-360deg);
    transform: rotate(360deg) translate(-472px) rotate(-360deg);
  }

  to {
    -moz-transform: rotate(0deg) translate(-472px) rotate(0deg);
    -ms-transform: rotate(0deg) translate(-472px) rotate(0deg);
    -webkit-transform: rotate(0deg) translate(-472px) rotate(0deg);
    transform: rotate(0deg) translate(-472px) rotate(0deg);
  }
}

@-webkit-keyframes rot-inner {
  from {
    -moz-transform: rotate(0deg) translate(-437px) rotate(0deg);
    -ms-transform: rotate(0deg) translate(-437px) rotate(0deg);
    -webkit-transform: rotate(0deg) translate(-437px) rotate(0deg);
    transform: rotate(0deg) translate(-437px) rotate(0deg);
  }

  to {
    -moz-transform: rotate(360deg) translate(-437px) rotate(-360deg);
    -ms-transform: rotate(360deg) translate(-437px) rotate(-360deg);
    -webkit-transform: rotate(360deg) translate(-437px) rotate(-360deg);
    transform: rotate(360deg) translate(-437px) rotate(-360deg);
  }
}

@-moz-keyframes rot-inner {
  from {
    -moz-transform: rotate(0deg) translate(-437px) rotate(0deg);
    -ms-transform: rotate(0deg) translate(-437px) rotate(0deg);
    -webkit-transform: rotate(0deg) translate(-437px) rotate(0deg);
    transform: rotate(0deg) translate(-437px) rotate(0deg);
  }

  to {
    -moz-transform: rotate(360deg) translate(-437px) rotate(-360deg);
    -ms-transform: rotate(360deg) translate(-437px) rotate(-360deg);
    -webkit-transform: rotate(360deg) translate(-437px) rotate(-360deg);
    transform: rotate(360deg) translate(-437px) rotate(-360deg);
  }
}

@-o-keyframes rot-inner {
  from {
    -moz-transform: rotate(0deg) translate(-437px) rotate(0deg);
    -ms-transform: rotate(0deg) translate(-437px) rotate(0deg);
    -webkit-transform: rotate(0deg) translate(-437px) rotate(0deg);
    transform: rotate(0deg) translate(-437px) rotate(0deg);
  }

  to {
    -moz-transform: rotate(360deg) translate(-437px) rotate(-360deg);
    -ms-transform: rotate(360deg) translate(-437px) rotate(-360deg);
    -webkit-transform: rotate(360deg) translate(-437px) rotate(-360deg);
    transform: rotate(360deg) translate(-437px) rotate(-360deg);
  }
}

@keyframes rot-inner {
  from {
    -moz-transform: rotate(0deg) translate(-437px) rotate(0deg);
    -ms-transform: rotate(0deg) translate(-437px) rotate(0deg);
    -webkit-transform: rotate(0deg) translate(-437px) rotate(0deg);
    transform: rotate(0deg) translate(-437px) rotate(0deg);
  }

  to {
    -moz-transform: rotate(360deg) translate(-437px) rotate(-360deg);
    -ms-transform: rotate(360deg) translate(-437px) rotate(-360deg);
    -webkit-transform: rotate(360deg) translate(-437px) rotate(-360deg);
    transform: rotate(360deg) translate(-437px) rotate(-360deg);
  }
}

@-webkit-keyframes rot-back-inner {
  from {
    -moz-transform: rotate(360deg) translate(-437px) rotate(-360deg);
    -ms-transform: rotate(360deg) translate(-437px) rotate(-360deg);
    -webkit-transform: rotate(360deg) translate(-437px) rotate(-360deg);
    transform: rotate(360deg) translate(-437px) rotate(-360deg);
  }

  to {
    -moz-transform: rotate(0deg) translate(-437px) rotate(0deg);
    -ms-transform: rotate(0deg) translate(-437px) rotate(0deg);
    -webkit-transform: rotate(0deg) translate(-437px) rotate(0deg);
    transform: rotate(0deg) translate(-437px) rotate(0deg);
  }
}

@-moz-keyframes rot-back-inner {
  from {
    -moz-transform: rotate(360deg) translate(-437px) rotate(-360deg);
    -ms-transform: rotate(360deg) translate(-437px) rotate(-360deg);
    -webkit-transform: rotate(360deg) translate(-437px) rotate(-360deg);
    transform: rotate(360deg) translate(-437px) rotate(-360deg);
  }

  to {
    -moz-transform: rotate(0deg) translate(-437px) rotate(0deg);
    -ms-transform: rotate(0deg) translate(-437px) rotate(0deg);
    -webkit-transform: rotate(0deg) translate(-437px) rotate(0deg);
    transform: rotate(0deg) translate(-437px) rotate(0deg);
  }
}

@-o-keyframes rot-back-inner {
  from {
    -moz-transform: rotate(360deg) translate(-437px) rotate(-360deg);
    -ms-transform: rotate(360deg) translate(-437px) rotate(-360deg);
    -webkit-transform: rotate(360deg) translate(-437px) rotate(-360deg);
    transform: rotate(360deg) translate(-437px) rotate(-360deg);
  }

  to {
    -moz-transform: rotate(0deg) translate(-437px) rotate(0deg);
    -ms-transform: rotate(0deg) translate(-437px) rotate(0deg);
    -webkit-transform: rotate(0deg) translate(-437px) rotate(0deg);
    transform: rotate(0deg) translate(-437px) rotate(0deg);
  }
}

@keyframes rot-back-inner {
  from {
    -moz-transform: rotate(360deg) translate(-437px) rotate(-360deg);
    -ms-transform: rotate(360deg) translate(-437px) rotate(-360deg);
    -webkit-transform: rotate(360deg) translate(-437px) rotate(-360deg);
    transform: rotate(360deg) translate(-437px) rotate(-360deg);
  }

  to {
    -moz-transform: rotate(0deg) translate(-437px) rotate(0deg);
    -ms-transform: rotate(0deg) translate(-437px) rotate(0deg);
    -webkit-transform: rotate(0deg) translate(-437px) rotate(0deg);
    transform: rotate(0deg) translate(-437px) rotate(0deg);
  }
}

@-webkit-keyframes rot-rocket {
  from {
    -moz-transform: rotate(0) translateX(-280px);
    -ms-transform: rotate(0) translateX(-280px);
    -webkit-transform: rotate(0) translateX(-280px);
    transform: rotate(0) translateX(-280px);
  }

  to {
    -moz-transform: rotate(360deg) translateX(-280px);
    -ms-transform: rotate(360deg) translateX(-280px);
    -webkit-transform: rotate(360deg) translateX(-280px);
    transform: rotate(360deg) translateX(-280px);
  }
}

@-moz-keyframes rot-rocket {
  from {
    -moz-transform: rotate(0) translateX(-280px);
    -ms-transform: rotate(0) translateX(-280px);
    -webkit-transform: rotate(0) translateX(-280px);
    transform: rotate(0) translateX(-280px);
  }

  to {
    -moz-transform: rotate(360deg) translateX(-280px);
    -ms-transform: rotate(360deg) translateX(-280px);
    -webkit-transform: rotate(360deg) translateX(-280px);
    transform: rotate(360deg) translateX(-280px);
  }
}

@-o-keyframes rot-rocket {
  from {
    -moz-transform: rotate(0) translateX(-280px);
    -ms-transform: rotate(0) translateX(-280px);
    -webkit-transform: rotate(0) translateX(-280px);
    transform: rotate(0) translateX(-280px);
  }

  to {
    -moz-transform: rotate(360deg) translateX(-280px);
    -ms-transform: rotate(360deg) translateX(-280px);
    -webkit-transform: rotate(360deg) translateX(-280px);
    transform: rotate(360deg) translateX(-280px);
  }
}

@keyframes rot-rocket {
  from {
    -moz-transform: rotate(0) translateX(-280px);
    -ms-transform: rotate(0) translateX(-280px);
    -webkit-transform: rotate(0) translateX(-280px);
    transform: rotate(0) translateX(-280px);
  }

  to {
    -moz-transform: rotate(360deg) translateX(-280px);
    -ms-transform: rotate(360deg) translateX(-280px);
    -webkit-transform: rotate(360deg) translateX(-280px);
    transform: rotate(360deg) translateX(-280px);
  }
}

.round-1 {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 10px;
  height: 10px;
  margin-top: -5px;
  margin-left: -5px;
  background-color: #fff;
  -moz-border-radius: 50%;
  -webkit-border-radius: 50%;
  border-radius: 50%;
  -webkit-animation: rot 10s infinite linear;
  -moz-animation: rot 10s infinite linear;
  -o-animation: rot 10s infinite linear;
  animation: rot 10s infinite linear;
}

.round-2 {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 10px;
  height: 10px;
  margin-top: -5px;
  margin-left: -5px;
  background-color: #fff;
  -moz-border-radius: 50%;
  -webkit-border-radius: 50%;
  border-radius: 50%;
  -webkit-animation: rot-back 6s infinite linear;
  -moz-animation: rot-back 6s infinite linear;
  -o-animation: rot-back 6s infinite linear;
  animation: rot-back 6s infinite linear;
}

.round-3 {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 10px;
  height: 10px;
  margin-top: -5px;
  margin-left: -5px;
  background-color: #fff;
  -moz-border-radius: 50%;
  -webkit-border-radius: 50%;
  border-radius: 50%;
  -webkit-animation: rot 34s infinite linear;
  -moz-animation: rot 34s infinite linear;
  -o-animation: rot 34s infinite linear;
  animation: rot 34s infinite linear;
}

.round-4 {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 6px;
  height: 6px;
  margin-top: -3px;
  margin-left: -3px;
  background-color: #fff;
  -moz-border-radius: 50%;
  -webkit-border-radius: 50%;
  border-radius: 50%;
  -webkit-animation: rot-back-inner 8s infinite linear;
  -moz-animation: rot-back-inner 8s infinite linear;
  -o-animation: rot-back-inner 8s infinite linear;
  animation: rot-back-inner 8s infinite linear;
}

.round-5 {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 6px;
  height: 6px;
  margin-top: -3px;
  margin-left: -3px;
  background-color: #fff;
  -moz-border-radius: 50%;
  -webkit-border-radius: 50%;
  border-radius: 50%;
  -webkit-animation: rot-inner 28s infinite linear;
  -moz-animation: rot-inner 28s infinite linear;
  -o-animation: rot-inner 28s infinite linear;
  animation: rot-inner 28s infinite linear;
}

@-webkit-keyframes austronaut {
  from {
    -moz-transform: rotate(-50deg) scale(0.7);
    -ms-transform: rotate(-50deg) scale(0.7);
    -webkit-transform: rotate(-50deg) scale(0.7);
    transform: rotate(-50deg) scale(0.7);
    top: 1280px;
    left: 75px;
  }

  to {
    top: 1080px;
    left: 275px;
    -moz-transform: rotate(0) scale(1);
    -ms-transform: rotate(0) scale(1);
    -webkit-transform: rotate(0) scale(1);
    transform: rotate(0) scale(1);
  }
}

@-moz-keyframes austronaut {
  from {
    -moz-transform: rotate(-50deg) scale(0.7);
    -ms-transform: rotate(-50deg) scale(0.7);
    -webkit-transform: rotate(-50deg) scale(0.7);
    transform: rotate(-50deg) scale(0.7);
    top: 1280px;
    left: 75px;
  }

  to {
    top: 1080px;
    left: 275px;
    -moz-transform: rotate(0) scale(1);
    -ms-transform: rotate(0) scale(1);
    -webkit-transform: rotate(0) scale(1);
    transform: rotate(0) scale(1);
  }
}

@-o-keyframes austronaut {
  from {
    -moz-transform: rotate(-50deg) scale(0.7);
    -ms-transform: rotate(-50deg) scale(0.7);
    -webkit-transform: rotate(-50deg) scale(0.7);
    transform: rotate(-50deg) scale(0.7);
    top: 1280px;
    left: 75px;
  }

  to {
    top: 1080px;
    left: 275px;
    -moz-transform: rotate(0) scale(1);
    -ms-transform: rotate(0) scale(1);
    -webkit-transform: rotate(0) scale(1);
    transform: rotate(0) scale(1);
  }
}

@keyframes austronaut {
  from {
    -moz-transform: rotate(-50deg) scale(0.7);
    -ms-transform: rotate(-50deg) scale(0.7);
    -webkit-transform: rotate(-50deg) scale(0.7);
    transform: rotate(-50deg) scale(0.7);
    top: 1280px;
    left: 75px;
  }

  to {
    top: 1080px;
    left: 275px;
    -moz-transform: rotate(0) scale(1);
    -ms-transform: rotate(0) scale(1);
    -webkit-transform: rotate(0) scale(1);
    transform: rotate(0) scale(1);
  }
}

.austronaut {
  z-index: 3;
  -webkit-animation: austronaut 10s infinite ease-in-out alternate;
  -moz-animation: austronaut 10s infinite ease-in-out alternate;
  -o-animation: austronaut 10s infinite ease-in-out alternate;
  animation: austronaut 10s infinite ease-in-out alternate;
}

@-webkit-keyframes infinite-spinning {
  from {
    -moz-transform: rotate(0deg);
    -ms-transform: rotate(0deg);
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
  }

  to {
    -moz-transform: rotate(360deg);
    -ms-transform: rotate(360deg);
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}

@-moz-keyframes infinite-spinning {
  from {
    -moz-transform: rotate(0deg);
    -ms-transform: rotate(0deg);
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
  }

  to {
    -moz-transform: rotate(360deg);
    -ms-transform: rotate(360deg);
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}

@-o-keyframes infinite-spinning {
  from {
    -moz-transform: rotate(0deg);
    -ms-transform: rotate(0deg);
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
  }

  to {
    -moz-transform: rotate(360deg);
    -ms-transform: rotate(360deg);
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}

@keyframes infinite-spinning {
  from {
    -moz-transform: rotate(0deg);
    -ms-transform: rotate(0deg);
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
  }

  to {
    -moz-transform: rotate(360deg);
    -ms-transform: rotate(360deg);
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}

@-webkit-keyframes infinite-spinning-alt {
  from {
    -moz-transform: rotate(360deg);
    -ms-transform: rotate(360deg);
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }

  to {
    -moz-transform: rotate(0deg);
    -ms-transform: rotate(0deg);
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
  }
}

@-moz-keyframes infinite-spinning-alt {
  from {
    -moz-transform: rotate(360deg);
    -ms-transform: rotate(360deg);
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }

  to {
    -moz-transform: rotate(0deg);
    -ms-transform: rotate(0deg);
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
  }
}

@-o-keyframes infinite-spinning-alt {
  from {
    -moz-transform: rotate(360deg);
    -ms-transform: rotate(360deg);
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }

  to {
    -moz-transform: rotate(0deg);
    -ms-transform: rotate(0deg);
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
  }
}

@keyframes infinite-spinning-alt {
  from {
    -moz-transform: rotate(360deg);
    -ms-transform: rotate(360deg);
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }

  to {
    -moz-transform: rotate(0deg);
    -ms-transform: rotate(0deg);
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
  }
}

.tiny-stars {
  position: absolute;
  top: 390px;
  left: 50%;
  margin-left: -528px;
  z-index: 1;
  -webkit-animation: infinite-spinning 40s infinite linear;
  -moz-animation: infinite-spinning 40s infinite linear;
  -o-animation: infinite-spinning 40s infinite linear;
  animation: infinite-spinning 40s infinite linear;
}

@media (max-width: 1440px) {
  .tiny-stars {
    top: 545px;
  }
}

.middle-stars {
  margin-left: -538px;
  -webkit-animation: infinite-spinning 30s infinite linear;
  -moz-animation: infinite-spinning 30s infinite linear;
  -o-animation: infinite-spinning 30s infinite linear;
  animation: infinite-spinning 30s infinite linear;
}

// delete

// pace.css
.pace {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #00c6ff;
  z-index: 50;
  -webkit-pointer-events: none;
  pointer-events: none;
  -webkit-user-select: none;
  -moz-user-select: none;
  user-select: none;
}

.pace.pace-inactive {
  display: none;
}

.pace .pace-progress {
  background: #041527;
  position: fixed;
  z-index: 2000;
  top: 0;
  left: 0;
  height: 100%;
  width: 5rem;
}

.pace .pace-progress:after {
  display: block;
  position: absolute;
  top: 0;
  left: 0.5rem;
  content: attr(data-progress-text);
  font-family: 'Helvetica Neue', sans-serif;
  font-weight: 100;
  font-size: 5rem;
  line-height: 1;
  text-align: right;
  color: rgba(255, 255, 255, 0.19999999999999996);
}
</style>
