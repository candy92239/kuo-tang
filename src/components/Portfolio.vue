<template>
  <AnimateText>Here is some text that will be animated.</AnimateText>
  <p class="t1"><b>Or scroll down to explore my workspace</b></p>
</template>

<script>
import AnimateText from "./layout/AnimateText.vue";

export default {
  methods: {},
  components: {
    AnimateText,
  },
  mounted() {
    // //h1 animation
    // var textWrapper = document.querySelector(".sec1");
    // textWrapper.innerHTML = textWrapper.textContent.replace(
    //   /\S/g,
    //   "<span class='letter'>$&</span>"
    // );
    // anime.timeline({ loop: false }).add({
    //   targets: ".sec1 .letter",
    //   //scale: [4, 1],
    //   opacity: [0, 1],
    //   translateZ: 0,
    //   translateY: [100, 0],
    //   easing: "easeOutExpo",
    //   duration: 950,
    //   delay: (el, i) => 70 * i,
    // });
  },
};
</script>

<style lang="scss">
h1 {
  &.sec1 {
    width: 43vw;
    margin: calc((100vh - 21vw) / 2) 0.5em;
    font-size: 7vw;
    text-align: left;
    line-height: 1;
    z-index: 100;
    position: relative;
    overflow: hidden;
    .letter {
      display: inline-block;
    }
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
</style>
