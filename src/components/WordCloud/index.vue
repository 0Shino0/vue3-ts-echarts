<script lang="ts">
// 这是一个基于 TypeScript 的 Vue 组件
import { VNodeRef, defineComponent, onMounted, ref } from 'vue'

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

    const tagHtml = (el: HTMLElement): VNodeRef | undefined => {
      tagEle.value!.push(el)

      return
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
  <div class="wordcloud-wrap">
    <div class="wid_1820">
      <div class="content" style="overflow: auto">
        <img class="guang" src="@/assets/img/title.png" />
        <div class="tagBall" ref="paper">
          <div class="wordcloud-tag-title">
            <h1>二十大报告——3D词云</h1>
          </div>
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

<style lang="less" scoped>
* {
  margin: 0;
  padding: 0;
}

// 词云主要 容器
.tagBall {
  // width: 1800px;
  max-width: 1080px;
  height: 800px;
  margin: 50px auto;
  position: relative;
}

// 标题
.wordcloud-tag-title {
  h1 {
    text-align: center;
    color: #fff;
  }
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
// html,
// body {
//   width: 100%;
//   font: 14px/150% tahoma, arial, Microsoft YaHei, Hiragino Sans GB,
//     '\u5b8b\u4f53', sans-serif;
//   -webkit-font-smoothing: antialiased;
//   color: #666;
//   height: 100%;
// }
body {
  overflow: auto;
}
.wordcloud-wrap {
  // background: url(@/assets/img/bg.png) no-repeat;
  // margin-top: 64px;
  // height: 1080px;
  margin-bottom: 50px;
  background-size: cover;
  width: 100%;
}

.wid_1820 {
  // width: 1820px;
  width: 100%;
  // height: 100%;
  margin: 0 auto;
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

.title span {
  font-size: 18px;
  line-height: 35px;
  text-indent: 35px;
  font-weight: 100;
  display: inline-block;
}
// .ttbg {
//   background: url(@/assets/img/btbg.png) left center no-repeat / 100% 100%;
//   position: absolute;
//   left: 0;
//   top: 61px;
//   width: 502px;
//   height: 64px;
//   line-height: 22px;
//   padding-top: 33px;
//   text-indent: 75px;
// }
// .ttbg span {
//   text-indent: 75px;
// }
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

//
</style>
