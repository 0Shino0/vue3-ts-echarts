<script lang="ts">
// 这是一个基于 TypeScript 的 Vue 组件
import { defineComponent, onMounted, ref } from 'vue'
// import type { EChartsOption, ECharts, SetOptionOpts } from 'echarts'
// EChartsType

// 标签类
import { Tag } from '@/hooks'

export interface TagsMember {
  ele: HTMLElement
  x: number
  y: number
  z: number
  move: (RADIUS: number, fallLength: number, CX: number, CY: number) => void // 继承自Tag类上的方法, 通过挂载在原型上
}

export default defineComponent({
  setup(props, context) {
    // 在这里声明数据，或者编写函数并在这里执行它
    // 在使用 setup 的情况下，请牢记一点：不能再用 this 来获取 Vue 实例
    const tagEle = ref<HTMLElement[]>([])

    const tagHtml = (el: HTMLElement) => {
      tagEle.value!.push(el)
    }
    var paper = ref<HTMLElement>()

    var RADIUS: number
    var fallLength: number
    var tags: TagsMember[]
    var angleX: number
    var angleY: number
    var CX: number
    var CY: number
    var EX: number
    var EY: number

    const wordCloudData = {
      h1: [
        `中国现代化`,
        `可持续发展`,
        `节能`,
        `减排`,
        `三个务必`,
        `三个件大事`,
        `从严治党`,
        `绿色发展`,
        `绿色发展`,
        `人民民主`,
      ],
      h2: [`计算`, `能源`, `系统`, `半导体`, `芯片`],
      h3: [
        `科教兴国`,
        `人才强国`,
        `反腐`,
        `共同富裕`,
        `为民造福`,
        `依法治国`,
        `分配制度`,
        `疫情`,
      ],
      h4: [`一国两制`, `港人治港`, `澳人治澳`, `生命至上`],
      h5: [`测试5`],
      h6: [`测试6`],
    }

    // 生命周期钩子
    onMounted(() => {
      if (paper.value) {
        RADIUS = 300
        fallLength = 500
        tags = [] // 存储
        angleX = Math.PI / 500
        angleY = Math.PI / 500
        CX = paper.value.offsetWidth / 2
        CY = paper.value.offsetHeight / 2
        EX =
          paper.value.offsetLeft +
          document.body.scrollLeft +
          document.documentElement.scrollLeft
        EY =
          paper.value.offsetTop +
          document.body.scrollTop +
          document.documentElement.scrollTop
      }

      innit()
      animate()
      //
      if ('addEventListener' in window) {
        paper.value!.addEventListener('mousemove', function (event) {
          var x = event.clientX - EX - CX
          var y = event.clientY - EY - CY
          // angleY = -x* (Math.sqrt(Math.pow(x , 2) + Math.pow(y , 2)) > RADIUS/4 ? 0.0002 : 0.0001);
          // angleX = -y* (Math.sqrt(Math.pow(x , 2) + Math.pow(y , 2)) > RADIUS/4 ? 0.0002 : 0.0001);
          angleY = x * 0.0001
          angleX = y * 0.0001
        })
      }
      // else {
      //   paper.value!.attachEvent('onmousemove', function (event) {
      //     var x = event.clientX - EX - CX
      //     var y = event.clientY - EY - CY
      //     angleY = x * 0.0001
      //     angleX = y * 0.0001
      //   })
      // }
    })

    // 方法 methods
    function forEachTags(
      tags: TagsMember[],
      callback: (that: TagsMember) => void
    ) {
      for (var i = 0; i < tags.length; i++) {
        // console.log(tags[i])
        callback(tags[i])
      }
    }

    function innit() {
      for (var i = 0; i < tagEle.value!.length; i++) {
        var a, b
        var k = (2 * (i + 1) - 1) / tagEle.value!.length - 1
        a = Math.acos(k)
        b = a * Math.sqrt(tagEle.value!.length * Math.PI)
        // var a = Math.random()*2*Math.PI;
        // var b = Math.random()*2*Math.PI;
        var x = RADIUS * Math.sin(a) * Math.cos(b)
        var y = RADIUS * Math.sin(a) * Math.sin(b)
        var z = RADIUS * Math.cos(a)
        var t = new Tag(tagEle.value[i], x, y, z)
        tagEle.value![i].style.color =
          'rgb(' +
          parseInt(Math.random() * 255 + '') +
          ',' +
          parseInt(Math.random() * 255 + '') +
          ',' +
          parseInt(Math.random() * 255 + '') +
          ')'
        tags.push(t)
        t.move(RADIUS, fallLength, CX, CY)
      }
    }

    function rotateX() {
      var cos = Math.cos(angleX)
      var sin = Math.sin(angleX)
      forEachTags(tags, function (that) {
        var y1 = that.y * cos - that.z * sin
        var z1 = that.z * cos + that.y * sin
        that.y = y1
        that.z = z1
      })
    }
    function rotateY() {
      var cos = Math.cos(angleY)
      var sin = Math.sin(angleY)

      forEachTags(tags, function (that) {
        var x1 = that.x * cos - that.z * sin
        var z1 = that.z * cos + that.x * sin
        that.x = x1
        that.z = z1
      })
    }

    function animate() {
      setInterval(function () {
        rotateX()
        rotateY()
        forEachTags(tags, function (that) {
          // console.log(that)
          that.move(RADIUS, fallLength, CX, CY)
        })
      }, 17)
    }

    // 计算方法 computed

    // 监听 watch

    return {
      // 需要给 `<template />` 用的数据或函数，在这里 `return` 出去
      tagEle,
      paper,
      wordCloudData,
      tagHtml,
    }
  },
})
</script>

<template>
  <div class="wrap">
    <div class="wid_1820">
      <!-- <div class="header">
        <p class="tmtext"></p>
        <p>
          <span class="hefont">碳排放网络舆情词云展示</span>
        </p>
      </div> -->
      <h1>
        <a href="CarbonDioxide.html"
          >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;返回</a
        >
      </h1>
      <div class="content" style="overflow: auto">
        <img class="guang" src="@/assets/img/title.png" />
        <div class="tagBall" ref="paper">
          <!-- <h1> -->
          <a
            v-for="item1 in wordCloudData.h1"
            :key="item1"
            class="tag"
            :ref="tagHtml"
            target="_blank"
            href=""
            rel="external nofollow"
          >
            <h1>{{ item1 }}</h1>
          </a>

          <a
            v-for="item2 in wordCloudData.h2"
            :key="item2"
            class="tag"
            :ref="tagHtml"
            target="_blank"
            href=""
            rel="external nofollow"
          >
            <h2>{{ item2 }}</h2>
          </a>

          <a
            v-for="item3 in wordCloudData.h3"
            :key="item3"
            class="tag"
            :ref="tagHtml"
            target="_blank"
            href=""
            rel="external nofollow"
          >
            <h3>{{ item3 }}</h3>
          </a>

          <a
            v-for="item4 in wordCloudData.h4"
            :key="item4"
            class="tag"
            :ref="tagHtml"
            target="_blank"
            href=""
            rel="external nofollow"
          >
            <h4>{{ item4 }}</h4>
          </a>

          <a
            v-for="item5 in wordCloudData.h5"
            :key="item5"
            class="tag"
            :ref="tagHtml"
            target="_blank"
            href=""
            rel="external nofollow"
          >
            <h5>{{ item5 }}</h5>
          </a>

          <a
            v-for="item6 in wordCloudData.h6"
            :key="item6"
            class="tag"
            :ref="tagHtml"
            target="_blank"
            href=""
            rel="external nofollow"
          >
            <h6>{{ item6 }}</h6>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="less">
* {
  margin: 0;
  padding: 0;
}

.tagBall {
  width: 1800px;
  height: 800px;
  margin: 50px auto;
  position: relative;
}

.tag {
  display: block;
  position: absolute;
  left: 0px;
  top: 0px;
  color: #000;
  text-decoration: none;
  font-size: 20px;
  font-family: '微软雅黑';
  font-weight: bold;
}

.tag:hover {
  border: 1px solid #666;
}

// 测试
/*重置默认的外边距和内边距*/
* {
  margin: 10;
  padding: 10;
}
::-webkit-scrollbar {
  width: 6px;
  height: 6px;
}
::-webkit-scrollbar-track-piece {
  background-color: #cccccc;
  -webkit-border-radius: 6px;
}
::-webkit-scrollbar-thumb:vertical {
  height: 5px;
  background-color: #999999;
  -webkit-border-radius: 6px;
}
::-webkit-scrollbar-thumb:horizontal {
  width: 5px;
  background-color: #cccccc;
  -webkit-border-radius: 6px;
}
/*常用标签的样式重置*/
i {
  font-style: normal;
}
a {
  text-decoration: none;
}
input {
  outline: none;
  border: none;
}
li {
  list-style: none;
}
/*设定html和body的宽度为100%*/
html,
body {
  width: 100%;
  font: 14px/150% tahoma, arial, Microsoft YaHei, Hiragino Sans GB,
    '\u5b8b\u4f53', sans-serif;
  -webkit-font-smoothing: antialiased;
  color: #666;
  height: 100%;
}
body {
  overflow: auto;
}
.wrap {
  background: url(@/assets/img/bg.png) no-repeat;
  height: 1080px;
  background-size: cover;
  width: 1920px;
}
.wid_1820 {
  width: 1820px;
  height: 100%;
  margin: 0 auto;
}

.header {
  height: 60px;
  padding-top: 0px;
  font-size: 24px;
  color: #fff;
  display: flex;
  align-items: center;
  flex-direction: center;
}
.header p {
  width: 33.33%;
  display: block;
}
.header p:nth-child(1) > span {
  background: rgba(255, 255, 255, 0.1);
  width: 238px;
  /*    height:52px;
 line-height: 52px; */
  padding: 15px 15px;
  border-radius: 5px;
  display: inline-block;
  margin-top: 10px;
}
.header p:nth-child(2) {
  text-align: center;
  font-size: 34px;
}
.header p:nth-child(3) {
  text-align: right;
}
.header p:nth-child(3) span {
  background: url(@/assets/img/user.png) left center no-repeat;
  padding-left: 20px;
  color: #487bff;
  font-size: 16px;
}
.header p:nth-child(3) span a {
  margin-left: 23px;
  cursor: pointer;
}
.wid_1820 .title {
  margin-bottom: 25px;
}
.title {
  text-indent: 35px;
  margin-top: 20px;
  color: #fff;
  font-size: 24px;
  height: 33px;
  line-height: 33px;
  margin-bottom: 80px;
}
.hefont {
  cursor: pointer;
}
.title span {
  font-size: 18px;
  line-height: 35px;
  text-indent: 35px;
  font-weight: 100;
  display: inline-block;
}
.ttbg {
  background: url(@/assets/img/btbg.png) left center no-repeat / 100% 100%;
  position: absolute;
  left: 0;
  top: 61px;
  width: 502px;
  height: 64px;
  line-height: 22px;
  padding-top: 33px;
  text-indent: 75px;
}
.ttbg span {
  text-indent: 75px;
}
.ctitle {
  position: relative;
  top: -38px;
  left: 35px;
  font-weight: 500;
  color: #fff;
  font-size: 18px;
}
.content {
  border: 1px solid #081f5a;
  min-height: 860px;
  position: relative;
}
div.content1 {
  margin-top: 152px;
  min-height: 810px;
}
div.content1 .guang {
  left: -25px;
}
.guang {
  position: absolute;
  left: 70px;
  top: -13px;
  width: 269px;
  display: block;
}
.tb {
  width: 880px;
  height: 397px;

  /*  background:#0c0f2b url(../img/tb_bg.png) left center no-repeat;*/
  background: linear-gradient(to left, #003bcf, #003bcf) left top no-repeat,
    linear-gradient(to bottom, #003bcf, #003bcf) left top no-repeat,
    linear-gradient(to left, #003bcf, #003bcf) right top no-repeat,
    linear-gradient(to bottom, #003bcf, #003bcf) right top no-repeat,
    linear-gradient(to left, #003bcf, #003bcf) left bottom no-repeat,
    linear-gradient(to bottom, #003bcf, #003bcf) left bottom no-repeat,
    linear-gradient(to left, #003bcf, #003bcf) right bottom no-repeat,
    linear-gradient(to left, #003bcf, #003bcf) right bottom no-repeat;
  background-size: 2px 10px, 10px 2px, 2px 10px, 10px 2px;
  background-color: #0b0f2a;
  margin-top: 12px;
  margin-bottom: 12px;
  margin-left: 10px;
  position: relative;
}
.tb_left {
  float: left;
}
.tb_right {
  float: right;
  margin-right: 10px;
}
div.tb1 {
  width: 525px;
  /*margin-right: 10px;*/
  margin-top: 50px;
  background: none;
}
td {
  /*text-align: left !important;*/
}
.heji {
  text-align: right;
}
div.tb2 {
  width: 609px;
  /*margin-right: 10px;*/
  margin-top: 50px;
  background: none;
}

div.tb3 {
  width: 621px;
  margin-top: 50px;
  background: none;
}
.tb1 table,
.tb2 table,
.tb3 table {
  margin-top: 20px;
  /*background:#0c0f2b url(../img/tb_bg.png) left center no-repeat;*/
  background: linear-gradient(to left, #003bcf, #003bcf) left top no-repeat,
    linear-gradient(to bottom, #003bcf, #003bcf) left top no-repeat,
    linear-gradient(to left, #003bcf, #003bcf) right top no-repeat,
    linear-gradient(to bottom, #003bcf, #003bcf) right top no-repeat,
    linear-gradient(to left, #003bcf, #003bcf) left bottom no-repeat,
    linear-gradient(to bottom, #003bcf, #003bcf) left bottom no-repeat,
    linear-gradient(to left, #003bcf, #003bcf) right bottom no-repeat,
    linear-gradient(to left, #003bcf, #003bcf) right bottom no-repeat;
  background-size: 2px 10px, 10px 2px, 2px 10px, 10px 2px;
  background-color: #0b0f2a;
  padding: 12px;
}
.tb .h3title {
  position: absolute;
  top: -50px;
  left: 0px;
  background-color: transparent;
}
.tb > h3 {
  background: url(@/assets/img/titleioc.png) left center no-repeat;
  text-indent: 27px;
  margin-left: 20px;
  margin-top: 15px;
  height: 33px;
  line-height: 33px;
  font-size: 24px;
  width: 90%;
  color: #fff;
  font-weight: 100;
}

.tb > table {
  width: 98%;
  margin-left: 2%;
  color: #fff;
  text-align: center;
  border: none;
  border-spacing: 0;
}
.tb > table td {
  border: none;
  height: 30px;
}
.tb > table tr:nth-child(odd) {
  background: #1f223c;
}
.tb_title {
  background: #1f223c;
  color: #487bff;
  height: 35px;
  line-height: 35px;
  font-size: 16px;
}

.baner {
  height: 30px;
  position: absolute;
  right: 0px;
  top: 110px;
  width: 950px;
  height: 56px;
  text-align: center;
}
.baner a {
  float: left;
  color: #596da2;
  display: block;
  padding: 0 15px;
  height: 43px;
  text-align: center;
  margin-right: 55px;
  cursor: pointer;
  line-height: 42px;
}
.baner a:hover,
.baner .ahover {
  color: #fff;
  background: url(@/assets/img/bthover.png) left center no-repeat / 100% 100%;
}
.fxzt {
  float: left;
  width: 492px;
  height: 220px;
  background: #0c0f2b url(@/assets/img/border2.png) left center no-repeat / 100%
    100%;
}
.fxzt > div {
  width: 95%;
  margin: 0 auto;
  height: 90%;
  margin-top: 2%;
}
.fxzt > div > span {
  margin-left: 295px;
  display: inline-block;
  color: #71ddf9;
  font-size: 18px;
}
.div1 {
  float: left;
  width: 675px;
  height: 238px;
}
.cznl {
  width: 100%;
  clear: both;
}
.cznl > div {
  display: none;
}
.echart_div {
  width: 800px;
  height: 750px;
  top: 0;
  float: left;
}

.czl {
  width: 100%;
  float: left;
  min-height: 400px;
  display: none;
  margin-left: 10px;
}
.fxztul {
  width: 380px;
  margin-top: 15px;
}
.fxztul li {
  float: left;
  width: 170px;
  color: #fff;
  height: 57px;
  margin-top: 15px;
}
.fxztul li span {
  height: 15px;
  width: 3px;
  display: inline-block;
  background: #00b7f0;
  margin-right: 5px;
  margin-left: 15px;
}
.litime p {
  line-height: 33px;
  color: #72ddff;
  font-size: 24px;
  text-indent: 22px;
}
.listate {
  text-align: center;
}
.listate p {
  color: #3aff57;
  line-height: 36px;
  text-align: center;
}
.linumber p {
  color: #fcb300;
  font-weight: 800;
  line-height: 36px;
  text-indent: 22px;
  font-size: 24px;
}
.tb_pos {
  position: absolute;
  right: 10px;
  top: 15px;
  width: 525px;
  height: 290px;
}
div.tb_pos2 {
  top: 321px;
}

.sheng {
  display: inline-block;
  margin-left: 5px;
  color: red;
  font-size: 18px;
  font-weight: 800;
}
.jiang {
  display: inline-block;
  margin-left: 5px;
  color: green;
  font-weight: 800;
  font-size: 18px;
}

.lins1 {
  float: left;
  width: 1800px;
  height: 750px;
}
.lines1tb {
  float: right;
  width: 960px;
  height: 406px;
}
.lines1tb .tb {
  width: 97%;
}
.content1 > div {
  display: none;
}
.lins2,
.lins3,
.lins4 {
  width: 405px;
  height: 260px;
  float: left;
  margin-left: 10px;
  margin-top: 50px;
  background: #0c0f2b url(@/assets/img/border2.png) left center no-repeat / 100%
    100%;
}
.linsdiv {
  width: 100%;
  height: 218px;
  margin-top: 36px;
}
.lins_t {
  width: 164px;
  margin-right: 15px;
  height: 32px;
  margin-top: 8px;
  line-height: 32px;
  float: right;
  color: #fff;
  clear: both;
  text-align: right;
}
.lines4tb .tb {
  width: 541px;
  float: left;
  height: 260px;
  margin-top: 50px;
}
.baojing {
  width: 64px;
  height: 57px;
  margin: 0 auto;
  background: url(@/assets/img/state1.png) center center no-repeat;
  background-size: 100% 100%;
}
td.baojing {
  background-size: 15px 15px;
}
td.baojing1 {
  background-size: 15px 15px;
}
li.yellowl {
  background: #0c0f2b url(@/assets/img/state2.png) left center no-repeat / 100%
    100%;
}
.baojing1 {
  background: url(@/assets/img/state.png) center center no-repeat;
  background-size: 100% 100%;
  width: 64px;
  height: 57px;
  margin: 0 auto;
}
.baojing2 {
  background: #0c0f2b url(@/assets/img/state2.png) left center no-repeat;
  background-size: 100% 100%;
  width: 64px;
  height: 57px;
  margin: 0 auto;
}

.pie2,
.pie1 {
  width: 900px;
  height: 800px;
}
.piebt {
  width: 900px;
  text-align: center;
  color: #fff;
  font-size: 24px;
  top: 30px;
}
.piebt1 {
  position: absolute;
  left: 0;
}
.piebt2 {
  position: absolute;
  left: 900px;
}
.gxlist {
  float: right;
  width: 500px;
  height: 730px;
  margin-right: 15px;
  background: rgba(12, 16, 54, 0.7);
  position: static;
}
.gxlist ul {
  margin-top: 20px;
}
.gxlist ul li {
  width: 400px;
  height: 44px;
  line-height: 44px;
  font-size: 18px;
  color: #fff;
  text-align: 3px;
  border-bottom: 1px dashed #4b4f6c;
  margin: 0 auto;
}
.gxlist ul li span {
  float: right;
  padding-right: 10px;
  color: green;
}
.gxlist ul li .zx {
  color: yellow;
}
.gxlist ul li .fm {
  color: red;
}
.sanlianbt {
  width: 120px;
  height: 40px;
  line-height: 37px;
  text-align: center;
  border-radius: 5px;
  background: #009dd0;
  color: #fff;
  position: absolute;
  right: 530px;
  bottom: 60px;
  cursor: pointer;
}
.sanlianbt a {
  color: #fff;
}
div.guanxi {
  width: 1200px;
}
</style>
