<template>
  <div class="scroll-wrapper">
    ttest
    <AnimateText>Here is some text that will be animated.</AnimateText>
  </div>
  <div class="fix-wrapper">
    <p class="t1"><b>Or scroll down to explore my workspace</b></p>
  </div>
</template>

<script>
import AnimateText from "./layout/AnimateText.vue";

export default {
  methods: {},
  components: {
    AnimateText,
  },
  mounted() {},
};
</script>

<style lang="scss">
.scroll-wrapper {
  z-index: 100;
}
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
