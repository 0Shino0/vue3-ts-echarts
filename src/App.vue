<template>
  <div class="go-back" @click="goBack()"><button class="bn">返回</button></div>
  <Header></Header>
  <router-view :key="key" />
  <!-- <Footer></Footer> -->
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { isMobile, watchResize } from '@bassist/utils'
import Header from './layout/Header.vue'
// import Footer from './layout/Footer.vue'

const route = useRoute()
const router = useRouter()
const key = computed(() => `${String(route.name || route.path)}-${new Date()}`)

watchResize(() => {
  document.body.className = `platform-${isMobile() ? 'mobile' : 'desktop'}`
})

const goBack = () => {
  router.back()
}
</script>

<style lang="less">
#app {
  position: relative;
  width: 100%;
  min-height: 800px;
  // background: url(../../assets/img/bg-main.png);
  // background: url(../../assets/img/endless-constellation.png);
  background-color: #330033;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200' viewBox='0 0 800 800'%3E%3Cg fill='none' stroke='%23404' stroke-width='5.6'%3E%3Cpath d='M769 229L1037 260.9M927 880L731 737 520 660 309 538 40 599 295 764 126.5 879.5 40 599-197 493 102 382-31 229 126.5 79.5-69-63'/%3E%3Cpath d='M-31 229L237 261 390 382 603 493 308.5 537.5 101.5 381.5M370 905L295 764'/%3E%3Cpath d='M520 660L578 842 731 737 840 599 603 493 520 660 295 764 309 538 390 382 539 269 769 229 577.5 41.5 370 105 295 -36 126.5 79.5 237 261 102 382 40 599 -69 737 127 880'/%3E%3Cpath d='M520-140L578.5 42.5 731-63M603 493L539 269 237 261 370 105M902 382L539 269M390 382L102 382'/%3E%3Cpath d='M-222 42L126.5 79.5 370 105 539 269 577.5 41.5 927 80 769 229 902 382 603 493 731 737M295-36L577.5 41.5M578 842L295 764M40-201L127 80M102 382L-261 269'/%3E%3C/g%3E%3Cg fill='%23505'%3E%3Ccircle cx='769' cy='229' r='11'/%3E%3Ccircle cx='539' cy='269' r='11'/%3E%3Ccircle cx='603' cy='493' r='11'/%3E%3Ccircle cx='731' cy='737' r='11'/%3E%3Ccircle cx='520' cy='660' r='11'/%3E%3Ccircle cx='309' cy='538' r='11'/%3E%3Ccircle cx='295' cy='764' r='11'/%3E%3Ccircle cx='40' cy='599' r='11'/%3E%3Ccircle cx='102' cy='382' r='11'/%3E%3Ccircle cx='127' cy='80' r='11'/%3E%3Ccircle cx='370' cy='105' r='11'/%3E%3Ccircle cx='578' cy='42' r='11'/%3E%3Ccircle cx='237' cy='261' r='11'/%3E%3Ccircle cx='390' cy='382' r='11'/%3E%3C/g%3E%3C/svg%3E");

  overflow: hidden;
  z-index: 2;
}

.go-back {
  position: absolute;
  left: 20px;
  top: 5px;
  /* this button is inspired from this -- https://www.newline.co/pricing */
  z-index: 10;

  button {
    cursor: pointer;
    --border-radius: 25px;
    --border-width: 7px;
    appearance: none;
    position: relative;
    padding: 1em 2em;
    border: 0;
    background-color: #212121;
    font-family: 'Roboto', Arial, 'Segoe UI', sans-serif;
    font-size: 18px;
    font-weight: bold;
    // color: #ffff;
    color: #00c6ff;
    z-index: 2;
  }

  button::after {
    --m-i: linear-gradient(#000, #000);
    --m-o: content-box, padding-box;
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    padding: var(--border-width);
    background-image: conic-gradient(
      #ff0080,
      #ff0080,
      #ff0080,
      #ff0080,
      #ff0080,
      #ff0080,
      #ff0080
    );
    -webkit-mask-image: var(--m-i), var(--m-i);
    mask-image: var(--m-i), var(--m-i);
    -webkit-mask-origin: var(--m-o);
    mask-origin: var(--m-o);
    mask-clip: var(--m-o);
    mask-composite: exclude;
    -webkit-mask-composite: destination-out;
    filter: hue-rotate(0);
    animation: rotate-hue634 linear 500ms infinite;
    animation-play-state: paused;
    border-radius: 20px;
    border-color: #000;
  }

  button:hover::after {
    animation-play-state: running;
    border-radius: 10px;
  }

  @keyframes rotate-hue634 {
    to {
      filter: hue-rotate(1turn);
    }
  }

  button,
  button::after {
    box-sizing: border-box;
    border-radius: 20px;
  }

  button:active {
    --border-width: 5px;
  }

  .bn {
    padding: 0.9em 1.6em;
    border: none;
    outline: none;
    // color: #fff;
    color: #00c6ff;
    font-family: inherit;
    font-weight: bold;
    font-size: 17px;
    cursor: pointer;
    position: relative;
    z-index: 0;
    border-radius: 32px;
  }

  .bn::after {
    content: '';
    z-index: -1;
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: rgb(46, 46, 46);
    left: 0;
    top: 0;
    border-radius: 10px;
  }

  .bn::before {
    content: '';
    background: linear-gradient(
      45deg,
      #07d888,
      #e40851,
      #2f00ff,
      #00ff37,
      #ec0808,
      #2600ff,
      #0bd157,
      #2f00ff
    );
    position: absolute;
    top: -2px;
    left: -2px;
    background-size: 600%;
    z-index: -1;
    width: calc(100% + 4px);
    height: calc(100% + 4px);
    filter: blur(8px);
    animation: glowing345 20s linear infinite;
    transition: opacity 0.3s ease-in-out;
    border-radius: 20px;
    opacity: 0;
  }

  @keyframes glowing345 {
    0% {
      background-position: 0 0;
    }

    50% {
      background-position: 400% 0;
    }

    100% {
      background-position: 0 0;
    }
  }

  .bn:hover::before {
    opacity: 1;
  }

  .bn:active:after {
    background: transparent;
  }

  .bn:active {
    color: #000;
    font-weight: bold;
  }
}
</style>
