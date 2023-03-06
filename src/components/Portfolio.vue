<template>
  <div
    :class="{
      'scroll-wrapper': true,
      'smooth-scroll-active': !this.mobileTrue,
    }"
    data-scroll-container
    ref="scrollContainer"
  >
    <div class="sec1">
      <div class="sec1-text">
        <h1 data-scroll-speed="4" data-scroll>
          Hi there :) <br />
          I’m
          <span class="outlined"> Kuo</span>, <br />how can I help you today?
        </h1>
        <div
          class="backdrop"
          data-scroll
          data-scroll-speed="4"
          data-scroll-delay="0.1"
          style="top: calc(50vh - 12vw); width: 31vw"
        ></div>
        <div
          class="backdrop"
          data-scroll
          data-scroll-speed="4"
          data-scroll-delay="0.15"
          style="top: calc(50vh - 6vw); width: 30vw"
        ></div>
        <div
          class="backdrop"
          data-scroll
          data-scroll-speed="4"
          data-scroll-delay="0.20"
          style="top: calc(50vh); width: 43vw"
        ></div>
        <div
          class="backdrop"
          data-scroll
          data-scroll-speed="4"
          data-scroll-delay="0.25"
          style="top: calc(50vh + 6vw); width: 32vw"
        ></div>
      </div>
      <div class="sec1-selections">
        <h1>I’m looking for:</h1>
        <div class="buttons-wrap">
          <ButtonComp
            v-for="(item, index) in datas"
            :key="index"
            :id="item.source + '_wrap'"
            :item="item"
            data-scroll
            data-scroll-speed="4"
            :data-scroll-delay="(index + 1) * 0.04 + 0.1"
            @jumpTo="jumpToSection"
          />
        </div>
      </div>
    </div>
    <div class="sec1">
      <h1 data-scroll>
        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo
        ligula eget dolor.
      </h1>
    </div>
    <div
      class="spacer"
      data-scroll
      data-scroll-repeat
      data-scroll-call="triggerFunction"
    ></div>
    <div
      class="main-sec-wrap"
      v-for="(item, index) in datas"
      :key="index"
      :id="item.id + '_wrap'"
    >
      <MainSection
        :id="item.id"
        :data-scroll-id="item.source"
        :item="item"
        data-scroll-call="catViewing"
        data-scroll-offset="60%"
        data-scroll-position="top"
        class="cat_wrapper"
      />
    </div>
  </div>

  <div class="fix-wrapper">
    <p class="t1"><b>Or scroll down to explore my workspace</b></p>
  </div>
</template>

<script>
import LocomotiveScroll from "locomotive-scroll";
import "locomotive-scroll/dist/locomotive-scroll.css";
import anime from "animejs/lib/anime.es.js";

//import VueTypedJs from "vue-typed-js";

import tippy, { followCursor, roundArrow } from "tippy.js";
import "tippy.js/dist/tippy.css";
import "tippy.js/dist/svg-arrow.css";
import "tippy.js/animations/shift-away.css";
import "tippy.js/dist/border.css";

import MainSection from "@/components/layout/MainSection.vue";
import ButtonComp from "@/components/layout/ButtonComp.vue";
import mainIcons from "@/datas/mainIcons.json";

export default {
  components: { ButtonComp, MainSection },
  data() {
    return {
      datas: mainIcons,
      scroll: null,
      secViewing: false,
      spacerViewing: false,
    };
  },
  props: { warningClosed: Boolean, mobileTrue: Boolean },
  emits: ["jumpTo", "secZoom", "blurred"],
  methods: {
    catViewing(value) {
      this.$emit("secZoom", value);
    },
    secZoomBackground(value) {
      console.log("comp portfolio emitted " + value);
      this.$emit("secZoom", value);
    },
    jumpToSection(value) {
      let e = document.getElementById(value);
      this.scroll.scrollTo(e);
    },
    initLocomotiveScroll() {
      this.scroll = new LocomotiveScroll({
        el: this.$refs.scrollContainer,
        smooth: true,
        scrollFromAnywhere: true,
        lerp: 0.07,
      });

      this.scroll.on("call", (func, state, obj) => {
        switch (func) {
          case "catViewing":
            if (state === "enter") {
              this.secViewing = true;
              this.$emit("blurred", false);
              this.$emit("secZoom", obj.id);
            } else {
              if (obj.id == "des" && !this.spacerViewing) {
                this.$emit("secZoom", "RESET");
                this.secViewing = false;
              }
            }
            //console.log(obj.id);
            break;
          case "triggerFunction":
            if (state === "enter") {
              this.spacerViewing = false;
              this.$emit("blurred", false);
            } else {
              this.spacerViewing = true;
              if (!this.secViewing) {
                this.$emit("blurred", true);
              }
            }
            break;
        }
      });
    },
    animeBackdrop() {
      anime({
        targets: ".backdrop",
        scaleX: [0, 1],
        easing: "easeOutQuart",
        loop: false,
        delay: anime.stagger(500),
      });
    },
    //emit when spacer was scrolled to remove blur
  },
  mounted() {
    if (!this.mobileTrue) {
      this.initLocomotiveScroll();
    }
    this.animeBackdrop();
    tippy(".outlined", {
      theme: "glossary",
      content:
        "<span class='glosTitle'><b>Kuo Tang</b></span> <br>/kwoʊ ˈtæŋ/<br><br>Your Jill of all trade on learning material design - from adult eLearning development to children's book illustration.",
      followCursor: true,
      trigger: "mouseenter",
      hideOnClick: false,
      placement: "top-start",
      allowHTML: true,
      arrow: roundArrow + roundArrow,
      plugins: [followCursor],
      animation: "shift-away",
    });
  },
};
</script>

<style lang="scss">
.scroll-wrapper {
  z-index: 100;
  perspective: 1px;
  display: block;
  //pointer-events: none;
  width: 0;
  //overflow-y: visible;
  &.smooth-scroll-active {
    position: fixed;
  }
}
.spacer {
  height: 100vh;
  width: 0;
  //background-color: red;
  //width: 100vw;
  //pointer-events: none;
}
.backdrop-wrapper {
  position: absolute;
  transform: translate(3vw, 43vh);
  z-index: -1;
  height: 100vh;
}
.backdrop {
  position: absolute;
  left: 3vw;
  top: 43vh;
  height: 6vw;
  //transform: translate(3vw, 43vh);
  z-index: -1;
  background-color: #8bcedd;
  transform-origin: top left;
}
//h1 global here
h1 {
  font-size: 7vw;
  line-height: 1;
  margin: auto 0.5em;
  font-weight: 500;
}

.sec1 {
  width: 100vw;
  //z-index: 100;
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100vh;
  position: relative;
  //overflow: hidden;
}

.main-sec-wrap {
  height: 130vh;
  position: relative;
  //display: initial;
  //overflow: scroll;
}
.cat_wrapper {
  width: 100vw;
  //z-index: 100;
  //display: flex;
  //flex-direction: column;
  //justify-content: center;
  height: 80vh;
  position: sticky;
  top: 0;
  //bottom: 0;

  border: 3px solid #000000;
  //overflow: hidden;
}
.sec1-text > h1 {
  transform: translateY(-3vh);
  text-align: left;
  width: 50vw;
  .outlined {
    font-size: 10vw;
    font-weight: 600;
    color: rgba(255, 228, 196, 0);
    -webkit-text-stroke: 0.35vw #14364c;
    transition: all 0.3s ease;
  }
  .outlined:hover {
    cursor: pointer;
    color: #14364c;
    font-size: 12vw;
  }
}

.sec1-selections {
  //background-color: #12526e;
  display: flex;
  flex-direction: column;
  justify-content: center;
  right: 0;
  width: 50vw;
  height: 50vh;
  position: absolute;
  > h1 {
    color: #14364c;
    font-size: 5vw;
    margin: 0.2em 0;
    //background-color: #14364c;
  }
}

p {
  &.t1 {
    position: fixed;
    bottom: 2%;
    right: 0;
    left: 0;
    z-index: 100;
  }
}

//button class here
.buttons-wrap {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  padding: 0 2vw;
}

//tippy
.tippy-box[data-theme~="glossary"] {
  background-color: #b3d8dc;
  color: #14364c;
  font-family: Avenir;
  font-size: 1em;
  border: 1px solid white;
  padding: 0.5em;
  > .tippy-svg-arrow {
    > svg:first-child {
      fill: white;
    }
    > svg:last-child {
      fill: #b3d8dc;
    }
  }
}
.glosTitle {
  font-size: 2em;
}
</style>
