<template>
  <div class="vue-horizontal-timeline" :style="setTimelineStyles">
    <section class="timeline">
      <ol>
        <li
          v-if="itemList"
          v-for="(item, i) in itemList"
          :key="i"
          :style="setLineColor"
          :class="[
            { 'add-step': hasSlot || item[titleAttr] || item[contentAttr] },
            item.stepCssClass,
          ]"
        >
          <div
            v-if="hasSlot || item[titleAttr] || item[contentAttr]"
            class="time"
            :class="[getTimeClass(item), item.boxCssClass]"
            :style="getTimeStyles"
            @click="cardClicked(item)"
          >
            <slot v-if="hasSlot" v-bind:item="item" v-bind:index="i" />
            <span
              class="title"
              v-if="!hasSlot && item[titleAttr]"
              :class="getTitleClasses"
            >
              {{ textSubstr(item[titleAttr], titleSubstr) }}
            </span>
            <span
              class="content"
              v-if="!hasSlot && item[contentAttr]"
              :class="getContentClasses"
            >
              {{ textSubstr(item[contentAttr], contentSubstr) }}
            </span>
          </div>
        </li>
        <li :style="setLineColor"></li>
      </ol>
    </section>
  </div>
</template>

<script lang="ts">
import $bus from '@/libs/eventBus'
import { nextTick } from 'process'

export default {
  name: 'VueHorizontalTimeline',
  props: {
    items: {
      type: Array,
      required: true,
    },
    itemSelected: {
      type: Object,
      default: () => ({}),
    },
    itemUniqueKey: {
      type: String,
      default: '',
    },
    titleAttr: {
      type: String,
      default: 'title',
    },
    titleCentered: {
      type: Boolean,
      default: false,
    },
    titleClass: {
      type: String,
      default: '',
    },
    titleSubstr: {
      type: Number,
      default: 38,
    },
    contentAttr: {
      type: String,
      default: 'content',
    },
    contentCentered: {
      type: Boolean,
      default: false,
    },
    contentClass: {
      type: String,
      default: '',
    },
    contentSubstr: {
      type: Number,
      default: 250,
    },
    minWidth: {
      type: String,
      default: '200px',
    },
    minHeight: {
      type: String,
      default: '',
    },
    timelinePadding: {
      type: String,
      default: '',
    },
    timelineBackground: {
      type: String,
      default: '',
    },
    lineColor: {
      type: String,
      default: '#03A9F4',
    },
    clickable: {
      type: [String, Boolean],
      default: true,
    },
  },
  data() {
    let itemList: any
    return {
      itemList,
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.itemList = this.items
      // console.log(this.items)
    })
  },
  emits: ['click', 'update:itemSelected'],
  computed: {
    hasSlot() {
      // return '$scopedSlots' in this && this.$scopedSlots?.default
      return '$scopedSlots' in this && this.$scopedSlots
        ? true
        : !!this.$slots?.default
    },
    setTimelineStyles() {
      const { timelineBackground, timelinePadding } = this
      const styleObj = {
        padding: '',
        background: '',
      }

      if (timelinePadding) {
        styleObj.padding = timelinePadding
      }

      if (timelineBackground) {
        styleObj.background = timelineBackground
      }

      return styleObj
    },
    setLineColor() {
      const { lineColor } = this

      return lineColor ? `background: ${lineColor}` : ''
    },
    getTimeStyles() {
      const { minWidth, minHeight, clickable } = this
      const styleObj = {
        minWidth,
        minHeight,
        cursor: '',
      }

      if (!clickable) {
        styleObj.cursor = 'default'
      }

      return styleObj
    },
    getTitleClasses() {
      const { titleClass, titleCentered } = this

      return titleClass || { 'text-center': titleCentered }
    },
    getContentClasses() {
      const { contentClass, contentCentered } = this

      return contentClass || { 'text-center': contentCentered }
    },
  },
  methods: {
    textSubstr(value: string, qtd = 250, mask = '...') {
      return value && value.length > qtd
        ? `${value.substring(0, qtd)}${mask}`
        : value
    },
    cardClicked(item: any) {
      if (!this.clickable) {
        return
      }

      this.$emit('update:itemSelected', { ...item })
      this.$emit('click', item)
    },
    getTimeClass(item: any) {
      const { itemUniqueKey, itemSelected } = this

      if (itemUniqueKey && itemSelected) {
        return {
          'border-blue': item[itemUniqueKey] === itemSelected[itemUniqueKey],
        }
      }

      return {}
    },
    // 点击方法
  },
}
</script>

<style scoped>
@-webkit-keyframes triangle-odd {
  100% {
    -webkit-filter: drop-shadow(4px 2px 1px rgba(0, 0, 0, 0.2))
      drop-shadow(2px 4px 0px rgba(0, 0, 0, 0.14));
    filter: drop-shadow(4px 2px 1px rgba(0, 0, 0, 0.2))
      drop-shadow(2px 4px 0px rgba(0, 0, 0, 0.14));
  }
}

@keyframes triangle-odd {
  100% {
    -webkit-filter: drop-shadow(4px 2px 1px rgba(0, 0, 0, 0.2))
      drop-shadow(2px 4px 0px rgba(0, 0, 0, 0.14));
    filter: drop-shadow(4px 2px 1px rgba(0, 0, 0, 0.2))
      drop-shadow(2px 4px 0px rgba(0, 0, 0, 0.14));
  }
}

@-webkit-keyframes triangle-even {
  100% {
    -webkit-filter: drop-shadow(4px -1px 1px rgba(0, 0, 0, 0.2));
    filter: drop-shadow(4px -1px 1px rgba(0, 0, 0, 0.2));
  }
}

@keyframes triangle-even {
  100% {
    -webkit-filter: drop-shadow(4px -1px 1px rgba(0, 0, 0, 0.2));
    filter: drop-shadow(4px -1px 1px rgba(0, 0, 0, 0.2));
  }
}

.vue-horizontal-timeline {
  position: relative;
  background: #e9e9e9;
  width: 100%;
  -webkit-box-shadow: 0 4px 10px 0 rgba(0, 0, 0, 0.3);
  box-shadow: 0 4px 10px 0 rgba(0, 0, 0, 0.3);
}

.vue-horizontal-timeline .text-center {
  text-align: center;
}

.vue-horizontal-timeline .timeline {
  white-space: nowrap;
  overflow-x: auto;
  padding: 9em 0;
  height: inherit;
}

.vue-horizontal-timeline .timeline .title {
  display: block;
  font-size: 1.4rem;
  font-weight: 700;
  margin-bottom: 8px;
}

.vue-horizontal-timeline .timeline .content {
  display: block;
  font-size: 1rem;
  margin-bottom: 4px;
  overflow: hidden;
  text-align: left;
}

.vue-horizontal-timeline .timeline ol {
  font-size: 0;
  width: 100%;
  padding: 100px 0 120px 0;
  -webkit-transition: all 0.5s;
  transition: all 0.5s;
}

.vue-horizontal-timeline .timeline ol li {
  position: relative;
  display: inline-block;
  list-style-type: none;
  width: 180px;
  height: 3px;
  background: #03a9f4;
}

.vue-horizontal-timeline .timeline ol li:last-child {
  width: 330px;
}

.vue-horizontal-timeline .timeline ol li.add-step:not(:last-child) {
  padding-right: 0;
  margin-right: 0;
}

.vue-horizontal-timeline .timeline ol li.add-step:not(:last-child)::after {
  content: '';
  position: absolute;
  top: 50%;
  left: calc(100% - 140px);
  bottom: 0;
  width: 14px;
  height: 14px;
  -webkit-transform: translateY(-50%);
  transform: translateY(-50%);
  border-radius: 50%;
  background: #e91e63;
  border: 1px solid #fff;
}

.vue-horizontal-timeline .timeline ol li .time {
  position: absolute;
  left: 3em;
  padding: 10px;
  font-size: 1rem;
  white-space: normal;
  color: #000;
  background: #fff;
  -webkit-box-shadow: 3px 3px 1px -2px rgba(0, 0, 0, 0.2),
    0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12);
  box-shadow: 3px 3px 1px -2px rgba(0, 0, 0, 0.2),
    0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12);
  -webkit-transition: 0.2s all ease-out;
  transition: 0.2s all ease-out;
  cursor: pointer;
}

.vue-horizontal-timeline .timeline ol li .time:hover {
  -webkit-box-shadow: 6.5px 8px 3px -2px rgba(0, 0, 0, 0.2),
    0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12);
  box-shadow: 6.5px 8px 3px -2px rgba(0, 0, 0, 0.2),
    0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12);
}

.vue-horizontal-timeline .timeline ol li .time::before {
  content: '';
  position: absolute;
  top: 100%;
  left: 0;
  width: 0;
  height: 0;
  border-style: solid;
}

.vue-horizontal-timeline .timeline ol li:nth-child(even) .time {
  top: calc(100% + 16px);
  border-top-right-radius: 3px;
  border-bottom-right-radius: 3px;
  border-bottom-left-radius: 3px;
}

.vue-horizontal-timeline .timeline ol li:nth-child(even) .time::before {
  top: -8px;
  border-width: 8px 0 0 8px;
  border-color: transparent transparent transparent #fff;
  -webkit-filter: drop-shadow(1px -1px 1px rgba(0, 0, 0, 0.2));
  filter: drop-shadow(1px -1px 1px rgba(0, 0, 0, 0.2));
}

.vue-horizontal-timeline .timeline ol li:nth-child(even) .time:hover::before {
  -webkit-animation: triangle-even 0.2s both;
  animation: triangle-even 0.2s both;
}

.vue-horizontal-timeline .timeline ol li:nth-child(even) .time.border-blue {
  -webkit-filter: drop-shadow(-1px 0px 0 #03a9f4) drop-shadow(1px 1px 0 #03a9f4)
    drop-shadow(0px -1px 0 #03a9f4);
  filter: drop-shadow(-1px 0px 0 #03a9f4) drop-shadow(1px 1px 0 #03a9f4)
    drop-shadow(0px -1px 0 #03a9f4);
}

.vue-horizontal-timeline .timeline ol li:nth-child(odd) .time {
  top: -16px;
  -webkit-transform: translateY(-100%);
  transform: translateY(-100%);
  border-top-right-radius: 3px;
  border-bottom-right-radius: 3px;
  border-top-left-radius: 3px;
}

.vue-horizontal-timeline .timeline ol li:nth-child(odd) .time::before {
  top: 100%;
  border-width: 8px 8px 0 0;
  border-color: #fff transparent transparent transparent;
  -webkit-filter: drop-shadow(1px 1px 1px rgba(0, 0, 0, 0.2))
    drop-shadow(1px 1px 0px rgba(0, 0, 0, 0.14));
  filter: drop-shadow(1px 1px 1px rgba(0, 0, 0, 0.2))
    drop-shadow(1px 1px 0px rgba(0, 0, 0, 0.14));
}

.vue-horizontal-timeline .timeline ol li:nth-child(odd) .time:hover::before {
  -webkit-animation: triangle-odd 0.2s both;
  animation: triangle-odd 0.2s both;
}

.vue-horizontal-timeline .timeline ol li:nth-child(odd) .time.border-blue {
  -webkit-filter: drop-shadow(-1px 0px 0 #03a9f4) drop-shadow(1px 1px 0 #03a9f4)
    drop-shadow(0px -1px 0 #03a9f4);
  filter: drop-shadow(-1px 0px 0 #03a9f4) drop-shadow(1px 1px 0 #03a9f4)
    drop-shadow(0px -1px 0 #03a9f4);
}
/*# sourceMappingURL=style.min.css.map */
</style>
