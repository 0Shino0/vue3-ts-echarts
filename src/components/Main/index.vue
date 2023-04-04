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

        <div class="screen-2">
          <div class="block">
            <h3 class="title title-medium">节能减排——中国的绿色工业革命</h3>
            <h4 class="title title-small">
              用数据说话、用数据决策、用数据管理、用数据创新
            </h4>
            <p class="text">
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;全球气候变化已经成为人类发展的最大挑战之一。中国政府明确提出2030年前碳达峰、2060
              年前碳中和目标，从相对减排到绝对减排，进而零排放。中国成为绿色工业革命的发动者、创新者，让我们从数据之林中探寻中国实现碳达峰与碳中和的发展机遇与多重挑战。中国将以新发展理念为引领，在推动高质量发展中促进经济社会发展全面绿色转型，通过分四个十年专项行动计划、八个五年规划落实并实现碳中和目标，为全球应对气候变化作出更大的绿色贡献。
            </p>
          </div>
          <div class="rhombs">
            <!-- 数据总览板块 -->
            <div class="rhomb-wrapper flip-container">
              <a href="../DataBrowsing/China/China.html">
                <div class="rhomb flipper">
                  <div class="front">
                    <div class="front-content">
                      <img src="@/assets/img/coin.png" alt="" />
                    </div>
                  </div>
                  <div class="back">
                    <div class="back-content">
                      <div class="color">
                        <span class="big">历年数据总览</span>
                      </div>
                      <p class="text">
                        汇聚中国各省市近十几年间的相关数据，以图表形式直观展示。
                      </p>
                    </div>
                  </div>
                </div>
              </a>
            </div>
            <!-- 温室效应板块 -->
            <div class="rhomb-wrapper flip-container">
              <a href="../CarbonDioxide/CarbonDioxide.html">
                <div class="rhomb flipper">
                  <div class="front">
                    <div class="front-content">
                      <img src="@/assets/img/popcorn.png" alt="" />
                    </div>
                  </div>
                  <div class="back">
                    <div class="back-content">
                      <div class="color">
                        <span class="big">温室效应小课堂</span>
                      </div>
                      <p class="text">
                        用新奇的方式说明温室效应的组成，直观的感受国家出台的政策与相关的市场情况。
                      </p>
                    </div>
                  </div>
                </div>
              </a>
            </div>
            <!-- 数据预测板块 -->
            <div class="rhomb-wrapper flip-container">
              <a href="../Forecast/DataForecast.html">
                <div class="rhomb flipper">
                  <div class="front">
                    <div class="front-content">
                      <img src="@/assets/img/dollars.png" alt="" />
                    </div>
                  </div>
                  <div class="back">
                    <div class="back-content">
                      <div class="color">
                        <span class="big">相关预测分析</span>
                      </div>
                      <p class="text">
                        通过对中国历年的数据汇总分析，进而的得到合理的近似预测数据。
                      </p>
                    </div>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
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
  background: url(../../assets/img/bg-main.png);
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

.rhombs {
  width: 100%;
  margin-top: 100px;
}

.rhomb-wrapper {
  display: inline-block;
  margin-left: 200px;
  -moz-transform: rotate(45deg);
  -ms-transform: rotate(45deg);
  -webkit-transform: rotate(45deg);
  transform: rotate(45deg);
  -webkit-animation: pulsate-big 0.8s infinite ease-in-out alternate;
  -moz-animation: pulsate-big 0.8s infinite ease-in-out alternate;
  -o-animation: pulsate-big 0.8s infinite ease-in-out alternate;
  animation: pulsate-big 0.8s infinite ease-in-out alternate;
  -webkit-animation-delay: 0.5s;
  animation-delay: 0.5s;
  -webkit-animation-timing-function: ease-out;
  animation-timing-function: ease-out;
}

.rhomb-wrapper:first-of-type {
  margin-left: 0;
}

.rhomb {
  display: table-cell;
  width: 250px;
  height: 250px;
  border: 3px solid #fff;
  background-color: #041527;
  text-align: center;
  vertical-align: middle;
  cursor: pointer;
  -webkit-animation: pulsate 0.8s infinite ease-in-out alternate;
  -moz-animation: pulsate 0.8s infinite ease-in-out alternate;
  -o-animation: pulsate 0.8s infinite ease-in-out alternate;
  animation: pulsate 0.8s infinite ease-in-out alternate;
  -webkit-animation-timing-function: ease-out;
  animation-timing-function: ease-out;
}

.rhomb img {
  display: block;
  margin: auto;
  -moz-transform: rotate(-45deg);
  -ms-transform: rotate(-45deg);
  -webkit-transform: rotate(-45deg);
  transform: rotate(-45deg);
}

@media (max-width: 1340px) {
  .rhomb {
    width: 220px;
    height: 220px;
  }
}

@-webkit-keyframes pulsate {
  from {
    box-shadow: 0 0 0 0px rgba(254, 254, 254, 0.07);
  }

  to {
    box-shadow: 0 0 0 10px rgba(254, 254, 254, 0.07);
  }
}

@-moz-keyframes pulsate {
  from {
    box-shadow: 0 0 0 0px rgba(254, 254, 254, 0.07);
  }

  to {
    box-shadow: 0 0 0 10px rgba(254, 254, 254, 0.07);
  }
}

@-o-keyframes pulsate {
  from {
    box-shadow: 0 0 0 0px rgba(254, 254, 254, 0.07);
  }

  to {
    box-shadow: 0 0 0 10px rgba(254, 254, 254, 0.07);
  }
}

@keyframes pulsate {
  from {
    box-shadow: 0 0 0 0px rgba(254, 254, 254, 0.07);
  }

  to {
    box-shadow: 0 0 0 10px rgba(254, 254, 254, 0.07);
  }
}

@-webkit-keyframes pulsate-big {
  from {
    box-shadow: 0 0 0 0px rgba(254, 254, 254, 0.07);
  }

  to {
    box-shadow: 0 0 0 20px rgba(254, 254, 254, 0.07);
  }
}

@-moz-keyframes pulsate-big {
  from {
    box-shadow: 0 0 0 0px rgba(254, 254, 254, 0.07);
  }

  to {
    box-shadow: 0 0 0 20px rgba(254, 254, 254, 0.07);
  }
}

@-o-keyframes pulsate-big {
  from {
    box-shadow: 0 0 0 0px rgba(254, 254, 254, 0.07);
  }

  to {
    box-shadow: 0 0 0 20px rgba(254, 254, 254, 0.07);
  }
}

@keyframes pulsate-big {
  from {
    box-shadow: 0 0 0 0px rgba(254, 254, 254, 0.07);
  }

  to {
    box-shadow: 0 0 0 20px rgba(254, 254, 254, 0.07);
  }
}

.flip-container {
  -moz-backface-visibility: hidden;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
}

.flip-container:hover {
  -moz-backface-visibility: hidden;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
}

.flip-container:hover .flipper {
  -moz-backface-visibility: hidden;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
}

.flip-container:hover .flipper .front {
  -moz-backface-visibility: hidden;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  -moz-transform: rotateX(180deg);
  -ms-transform: rotateX(180deg);
  -webkit-transform: rotateX(180deg);
  transform: rotateX(180deg);
  z-index: 1;
}

.flip-container:hover .flipper .back {
  -moz-backface-visibility: hidden;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  z-index: 2;
  -moz-transform: rotateX(0);
  -ms-transform: rotateX(0);
  -webkit-transform: rotateX(0);
  transform: rotateX(0);
}

.flipper {
  position: relative;
  -moz-backface-visibility: hidden;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
}

.front,
.back {
  -moz-transition: 0.6s;
  -o-transition: 0.6s;
  -webkit-transition: 0.6s;
  transition: 0.6s;
  -moz-transform-style: preserve-3d;
  -webkit-transform-style: preserve-3d;
  transform-style: preserve-3d;
  -moz-backface-visibility: hidden;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  position: absolute;
  top: -3px;
  left: -1px;
}

.front {
  z-index: 2;
}

.back {
  z-index: 1;
  -moz-transform: rotateX(-180deg);
  -ms-transform: rotateX(-180deg);
  -webkit-transform: rotateX(-180deg);
  transform: rotateX(-180deg);
}

.front-content {
  display: table-cell;
  width: 250px;
  height: 250px;
  vertical-align: middle;
}

@media (max-width: 1340px) {
  .front-content {
    display: table-cell;
    width: 220px;
    height: 220px;
    vertical-align: middle;
  }
}

.back {
  background-color: #fff;
}

.back-content {
  -moz-backface-visibility: hidden;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  display: table-cell;
  width: 250px;
  height: 250px;
  vertical-align: middle;
  -moz-transform: rotate(-45deg) translate3d(0, 0, 0);
  -ms-transform: rotate(-45deg) translate3d(0, 0, 0);
  -webkit-transform: rotate(-45deg) translate3d(0, 0, 0);
  transform: rotate(-45deg) translate3d(0, 0, 0);
  text-align: center;
}

.back-content .color {
  color: #00c6ff;
  font-size: 20px;
  font-family: 'PT Sans', Arial, sans-serif;
  font-weight: bold;
}

.back-content .big {
  display: block;
  font-size: 30px;
  line-height: 30px;
  padding: 10px 0;
}

.back-content .text,
.back-content .text-small,
.back-content .modules .info-full p,
.modules .info-full .back-content p,
.back-content .modules .info-short,
.modules .back-content .info-short,
.back-content .modules .info-full li,
.modules .info-full .back-content li,
.back-content .planet-3-area .plus span,
.planet-3-area .plus .back-content span,
.back-content .block-bottom-content .questions p,
.block-bottom-content .questions .back-content p,
.back-content .block-bottom-content .questions a,
.block-bottom-content .questions .back-content a {
  width: 180px;
  margin: 0 auto;
  color: #8a8a8a;
  font-size: 18px;
  line-height: 24px;
}

@media (max-width: 1340px) {
  .back-content {
    display: table-cell;
    width: 220px;
    height: 220px;
    vertical-align: middle;
  }

  .back-content .big {
    font-size: 24px;
    line-height: 35px;
  }

  .back-content .text,
  .back-content .text-small,
  .back-content .modules .info-full p,
  .modules .info-full .back-content p,
  .back-content .modules .info-short,
  .modules .back-content .info-short,
  .back-content .modules .info-full li,
  .modules .info-full .back-content li,
  .back-content .planet-3-area .plus span,
  .planet-3-area .plus .back-content span,
  .back-content .block-bottom-content .questions p,
  .block-bottom-content .questions .back-content p,
  .back-content .block-bottom-content .questions a,
  .block-bottom-content .questions .back-content a {
    width: 120px;
    font-size: 14px;
    line-height: 20px;
  }
}

.start {
  margin: 30px auto 0;
}

.rocket {
  display: inline-block;
  vertical-align: top;
  width: 150px;
  margin-left: 60px;
  text-align: center;
}

.rocket img {
  display: block;
  margin: 0 auto;
}

.rocket .text-top {
  margin-bottom: 30px;
  color: #ccc;
  font-size: 18px;
  font-family: 'Open Sans', Arial, sans-serif;
  font-weight: bold;
  text-transform: uppercase;
}

.rocket .text-bottom {
  margin-top: 25px;
  color: #fff;
}

.rocket .rocket-container {
  margin: 30px auto 50px;
  font-size: 14px;
  font-family: 'Open Sans', Arial, sans-serif;
}

.rocket:first-of-type {
  margin-left: 0;
}

.rocket-1 {
  margin-top: 210px;
}

.rocket-2 {
  margin-top: 180px;
}

.rocket-3 {
  margin-top: 130px;
}

.rocket-4 {
  margin-top: 105px;
}

.rocket-5 {
  margin-top: 10px;
}

.rocket-5 .text-top {
  color: #00c6ff;
  font-size: 28px;
}

.wrapper-nebula {
  position: absolute;
  top: 3100px;
  z-index: 1;
  width: 100%;
  height: 1000px;
}

@media (max-width: 1440px) {
  .wrapper-nebula {
    top: 3000px;
  }
}

.container-nebula {
  width: 100%;
  height: 100%;
}

.container-nebula canvas {
  opacity: 0.3;
}

.steps li {
  display: inline-block;
  vertical-align: baseline;
  width: 300px;
  height: 270px;
  margin-left: 1%;
  text-align: center;
}

.steps li img {
  margin: 0 auto 30px;
}

.steps li span {
  display: inline-block;
  vertical-align: top;
}

.steps li p {
  text-align: center;
}

.steps li .number {
  width: 40px;
  height: 40px;
  line-height: 40px;
  -moz-border-radius: 50%;
  -webkit-border-radius: 50%;
  border-radius: 50%;
  background-color: #041527;
  text-align: center;
  font-size: 20px;
  font-weight: bold;
  color: #00c6ff;
}

.steps li .step-text {
  display: inline-block;
  margin: 6px 0 0 6px;
  color: white;
  font-size: 16px;
  line-height: 28px;
  font-family: 'PT Sans', Arial, sans-serif;
  text-align: left;
}

@media (max-width: 1440px) {
  .steps li img {
    height: 36%;
    width: auto;
  }
}

.steps li:first-child {
  margin-left: 0;
}

.planet-2-area {
  position: relative;
  width: 600px;
  height: 560px;
  overflow: visible;
}

.planet-2-area .text-layer {
  position: absolute;
  top: 200px;
  left: -110px;
  z-index: 10;
}

.planet-2-area .text-layer h3 {
  display: block;
  width: 826px;
  margin: 20px 0;
  text-align: center;
}

.planet-2-area .text-layer p {
  text-align: left;
  color: #fff;
  font-size: 22px;
  font-family: 'PT Sans', Arial, sans-serif;
}

.planet-2-area .text-layer .offset {
  width: 900px;
  padding-left: 310px;
}

.planet-2-orbit {
  position: absolute;
  top: 0;
  left: 20px;
  width: 560px;
  height: 560px;
  -moz-border-radius: 50%;
  -webkit-border-radius: 50%;
  border-radius: 50%;
  border: 2px dashed #fff;
}

.planet-2 {
  position: absolute;
  top: 50%;
  left: 50%;
  margin: -244px 0 0 -244px;
}

.inline * {
  display: inline-block;
  vertical-align: middle;
}

.orbit-rocket {
  z-index: 9;
  position: absolute;
  top: 50%;
  left: 50%;
  margin: -19px 0 0 -17px;
  -webkit-animation: rot-rocket 5s infinite linear;
  -moz-animation: rot-rocket 5s infinite linear;
  -o-animation: rot-rocket 5s infinite linear;
  animation: rot-rocket 5s infinite linear;
}

.modules {
  position: relative;
  z-index: 1000;
  width: 100%;
  height: 640px;
}

.modules .module {
  float: left;
  width: 20%;
  cursor: inherit;
}

.modules .thumb {
  position: relative;
  width: 100%;
  height: 360px;
  padding: 25px 0;
  background-color: #112132;
  overflow: hidden;
  -moz-transition: all 0.3s;
  -o-transition: all 0.3s;
  -webkit-transition: all 0.3s;
  transition: all 0.3s;
}

.modules .thumb img {
  -webkit-filter: grayscale(1);
  filter: grayscale(1);
  -moz-transform: translate(-50%, -50%) scale(0.7);
  -ms-transform: translate(-50%, -50%) scale(0.7);
  -webkit-transform: translate(-50%, -50%) scale(0.7);
  transform: translate(-50%, -50%) scale(0.7);
  -moz-transition: all 0.3s;
  -o-transition: all 0.3s;
  -webkit-transition: all 0.3s;
  transition: all 0.3s;
  display: block;
  margin: 0 auto;
  position: absolute;
  top: 50%;
  left: 50%;
}

.modules .info {
  position: relative;
  color: #fff;
  text-align: center;
}

.modules .info-short {
  position: absolute;
  top: 25px;
  left: 0;
  width: 100%;
  font-size: 18px;
}

.modules .info-full {
  display: none;
  width: 100%;
  padding: 0 25px 25px;
  position: absolute;
  top: 25px;
  left: 0;
}

.modules .info-full li {
  color: #02bb71;
  font-size: 18px;
  line-height: 26px;
}

.modules .module:hover {
  background-color: #041527;
}

.modules .module:hover .thumb {
  background-color: #041527;
}

.modules .module:hover img {
  -webkit-filter: grayscale(0);
  filter: grayscale(0);
  -moz-transform: translate(-50%, -50%) scale(1);
  -ms-transform: translate(-50%, -50%) scale(1);
  -webkit-transform: translate(-50%, -50%) scale(1);
  transform: translate(-50%, -50%) scale(1);
}

.planet-3-orbit {
  margin-left: -400px;
  z-index: 10000;
}

.planet-3-area {
  position: relative;
  width: 100%;
  height: 610px;
}

.planet-3-area .plus {
  position: absolute;
  top: 160px;
  width: 220px;
  padding-top: 145px;
  background-repeat: no-repeat;
  background-position: center top;
}

.planet-3-area .plus span {
  font-size: 18px;
  color: #fff;
  text-transform: uppercase;
}

.planet-3-area .plus-1 {
  background-image: url(../../assets/img/plus-1.png);
  left: 140px;
}

.planet-3-area .plus-2 {
  background-image: url(../../assets/img/plus-2.png);
  right: 140px;
}

.planet-3-area .block-bordered {
  position: absolute;
  bottom: 0;
  left: 50%;
  width: 590px;
  margin-left: -295px;
  padding: 15px;
  border: 1px solid #58838f;
  background-color: #041527;
}

.planet-3-obits {
  position: absolute;
  top: 0;
  left: 50%;
  margin-left: -230px;
  width: 459px;
  height: 459px;
  padding-top: 145px;
  background: url(../../assets/img/orbits.png);
  text-align: center;
  color: #fff;
}

.planet-3-obits .text-huge {
  font-size: 100px;
  line-height: 110px;
  font-weight: bold;
  font-family: 'PT Sans', Arial, sans-serif;
}

.planet-3-obits p {
  width: 165px;
  margin: 0 auto;
}

.magneto {
  position: absolute;
  left: 50%;
  z-index: 3;
  margin-left: -350px;
  width: 700px;
  height: 500px;
}

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
