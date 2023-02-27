<template>
  <div class="scroll-wrapper data-scroll-container" ref="scrollContainer">
    <div class="sec1 data-scroll-section">
      <h1 class="data-scroll data-scroll-speed='1'">
        Hi there! <br />
        I’m
        <span class="outlined"> Kuo</span>, <br />how can I help you today?
      </h1>
      <div
        class="data-scroll backdrop"
        style="transform: translate(-22vw, -11vw)"
      ></div>
      <div
        class="data-scroll backdrop"
        style="transform: translate(-18vw, -3vw)"
      ></div>
      <div
        class="data-scroll backdrop"
        style="transform: translate(-5vw, 5vw)"
      ></div>
      <div
        class="data-scroll backdrop"
        style="transform: translate(-16vw, 13vw)"
      ></div>
    </div>
    <div class="sec1 data-scroll-section">
      <h1 class="data-scroll data-scroll-speed='1'">
        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo
        ligula eget dolor.
      </h1>
    </div>
    <div class="spacer"></div>
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
        getDirection: function () {
          return scroll.instance.scroll.y > 0 ? "down" : "up";
        },
        getSpeed: function () {
          return Math.max(
            0.5,
            Math.min(1.5, Math.abs(scroll.instance.scroll.y / 500))
          );
        },
      });

      return scroll;
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
  //width: 100vw;
  //pointer-events: none;
}
.backdrop {
  position: absolute;
  //top: 0;
  //left: 0;
  width: 50vw;
  height: 6vw;
  background-color: #8bcedd;
  opacity: 1;
  z-index: -1;
  transform: translate(-5vw, 1vw);
  transform-origin: top left;
}

.sec1 {
  //width: 40vw;
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
  font-size: 7vw;
  line-height: 1;
  margin: auto 0.5em;
  text-align: left;
  width: 50vw;
  font-weight: 500;
  .outlined {
    font-size: 10vw;
    font-weight: 800;
    color: rgba(255, 228, 196, 0);
    -webkit-text-stroke: 5px #14364c;
    transition: all 0.3s ease;
  }
  .outlined:hover {
    color: #14364c;
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
