<template>
  <div class="scroll-wrapper" data-scroll-container ref="scrollContainer">
    <div class="sec1">
      <h1 data-scroll-speed="1" data-scroll>
        Hi there! <br />
        I’m
        <span class="outlined"> Kuo</span>, <br />how can I help you today?
      </h1>
      <div
        class="backdrop"
        data-scroll
        data-scroll-speed="3"
        data-scroll-delay="0.1"
        style="top: calc(50vh - 16vw); width: 26vw"
      ></div>
      <div
        class="backdrop"
        data-scroll
        data-scroll-speed="3"
        data-scroll-delay="0.14"
        style="top: calc(50vh - 8vw); width: 30vw"
      ></div>
      <div
        class="backdrop"
        data-scroll
        data-scroll-speed="3"
        data-scroll-delay="0.18"
        style="top: calc(50vh); width: 43vw"
      ></div>
      <div
        class="backdrop"
        data-scroll
        data-scroll-speed="3"
        data-scroll-delay="0.22"
        style="top: calc(50vh + 8vw); width: 32vw"
      ></div>
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

import tippy, { roundArrow } from "tippy.js";
import "tippy.js/dist/tippy.css";
import "tippy.js/dist/svg-arrow.css";
import "tippy.js/animations/shift-away.css";
import "tippy.js/dist/border.css";

export default {
  methods: {
    initLocomotiveScroll() {
      const scroll = new LocomotiveScroll({
        el: this.$refs.scrollContainer,
        smooth: true,
        scrollFromAnywhere: true,
        lerp: 0.07,
      });

      scroll.on("call", (func, state) => {
        switch (func) {
          case "triggerFunction":
            if (state === "enter") {
              this.$emit("triggered", true);
            } else {
              this.$emit("triggered", false);
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
  components: {},
  mounted() {
    this.initLocomotiveScroll();
    this.animeBackdrop();
    tippy(".outlined", {
      theme: "glossary",
      content:
        "<span class='glosTitle'><b>Kuo Tang</b></span> <br>/kwoʊ ˈtæŋ/<br><br>Your Jill of all trade on learning material design - from adult eLearning development to children's book illustration.",
      followCursor: true,
      trigger: "mouseenter",
      hideOnClick: false,
      //placement: "right-start",
      allowHTML: true,
      arrow: roundArrow + roundArrow,
      animation: "shift-away",
    });
  },
};
</script>

<style lang="scss">
.scroll-wrapper {
  z-index: 100;
  position: static;
  display: block;
  //pointer-events: none;
  width: 0;
  overflow-y: visible;
}
.spacer {
  height: 100vh;
  width: 5vw;
  background-color: red;
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
h1 {
  position: relative;
  transform: translateY(-3vh);
  font-size: 7vw;
  line-height: 1;
  margin: auto 0.5em;
  text-align: left;
  width: 50vw;
  font-weight: 500;
  .outlined {
    font-size: 10vw;
    font-weight: 600;
    color: rgba(255, 228, 196, 0);
    -webkit-text-stroke: 5px #14364c;
    transition: all 0.3s ease;
  }
  .outlined:hover {
    color: #14364c;
    font-size: 12vw;
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
