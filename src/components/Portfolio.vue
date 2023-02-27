<template>
  <div class="scroll-wrapper data-scroll-container" ref="scrollContainer">
    <div class="sec1 data-scroll-section">
      <h1 class="data-scroll data-scroll-speed='1'">
        Hi there! I am Kuo, how can I help you today?
      </h1>
    </div>
    <div class="sec1 data-scroll-section">
      <h1 class="data-scroll data-scroll-speed='20'">
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
  },
  components: {},
  mounted() {
    this.initLocomotiveScroll();
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

.sec1 {
  width: 60vw;
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
  width: 60vw;
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
</style>
