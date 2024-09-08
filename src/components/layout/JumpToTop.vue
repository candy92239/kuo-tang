<template>
  <div
    class="jump-to-top"
    @mouseover="showText = true"
    @mouseenter="playLottie"
    @mouseleave="reverseLottie"
  >
    <div class="top-icon" ref="lottie"></div>
    <div class="text" :class="{ visible: showText }">JUMP TO TOP</div>
  </div>
</template>

<script>
import lottie from "lottie-web";
export default {
  data() {
    return {
      showText: false,
      animation: null,
    };
  },
  methods: {
    playLottie() {
      this.animation.setDirection(1);
      this.animation.play();
    },
    reverseLottie() {
      this.animation.setDirection(-1);
      this.animation.play();
      this.showText = false;
    },
  },
  mounted() {
    import(`@/assets/UI/lottie/jumpToTop.json`).then((animationData) => {
      this.animation = lottie.loadAnimation({
        container: this.$refs.lottie,
        renderer: "svg",
        loop: false,
        autoplay: false,
        animationData,
      });
    });
  },
};
</script>

<style scoped>
.jump-to-top {
  display: flex;
  align-items: center;
  position: fixed;
  bottom: 0;
  right: 0;
  margin: 1.2em;
  padding: 0.2em 0em 0.2em 0.2em; /* Adjusted padding */
  background: #84c0c6a9;
  border-radius: 1em;
  font-size: 1em;
  font-weight: 500;
  z-index: 999;
  cursor: pointer;
  width: 2.4em; /* Set width to fit the icon perfectly */
  overflow: hidden;
  transition: width 0.5s ease;
  height: 2em;
}

.jump-to-top:hover {
  background: #84c0c6;
  width: 10em; /* Adjust to fit the text */
}

.text {
  display: inline-block;
  white-space: nowrap;
  overflow: hidden;
  opacity: 0;
  transform: translateX(100%);
  transition: transform 0.5s ease, opacity 0.5s ease;
  margin-left: 0.5em;
}

.text.visible {
  opacity: 1;
  transform: translateX(0);
}

.top-icon {
  height: 100%;
  width: 2em; /* Fixed width for the icon */
  flex-shrink: 0; /* Prevents the icon from shrinking */
}
</style>
