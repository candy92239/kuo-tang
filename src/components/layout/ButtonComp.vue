<template>
  <div
    class="button-wrap"
    @mouseenter="playLottie"
    @mouseleave="reverseLottie"
    @click="emitJumpSection"
  >
    <div class="icon" :class="{ zoomed: hoverZoom }" ref="lottie"></div>
    <div class="text" :class="{ zoomed: hoverZoom }">
      <p>{{ datas.name }}</p>
    </div>
    <div class="bacbackdrop_button" :class="{ zoomed: hoverZoom }"></div>
  </div>
</template>

<script>
//import InlineSvg from "vue-inline-svg";
import lottie from "lottie-web";
export default {
  emits: [],
  name: "ButtonComp",
  components: {
    //InlineSvg
  },
  props: {
    item: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      datas: this.item,
      hoverZoom: false,
      animationData: null,
    };
  },
  methods: {
    playLottie() {
      this.animation.setDirection(1);
      this.animation.play();
      this.hoverZoom = true;
    },
    reverseLottie() {
      this.animation.setDirection(-1);
      this.animation.play();
      this.hoverZoom = false;
    },
    emitJumpSection() {
      //console.log(this.datas.source);
      this.$emit("jumpTo", this.datas.source);
      //console.log("emitted!");
    },
  },
  mounted() {
    import(`@/assets/UI/lottie/${this.item.source}_trans_L.json`).then(
      (animationData) => {
        const options = {
          container: this.$refs.lottie,
          renderer: "svg",
          loop: false,
          autoplay: false,
          animationData,
        };
        this.animation = lottie.loadAnimation(options);
      }
    );
  },
  computed: {},
};
</script>

<style lang="scss">
.button-wrap {
  //position: relative;
  max-width: calc(50vw / 4);
  //padding: 0 2vw;
  flex-shrink: 0;
  flex-grow: 0;
  cursor: pointer;
  //background-color: #14364c;
}
.icon {
  //position: relative;
  display: flex;
  //flex: 1 0 100%;
  //width: 100%;
  margin: 1vw;
  transition: transform 0.3s ease;
  svg {
    //position: absolute;
    height: 100%;
    width: 100%;
  }
  &.zoomed {
    transform: scale(1.2);
  }
}

.text {
  // display: flex;
  // flex-direction: column;
  // justify-content: center;
  white-space: nowrap;
  margin: 0;
  transition: all 0.3s ease;
  p {
    color: white;
  }
  &.zoomed {
    font-weight: bold;
    transform: scale(1.2);
  }
}

.bacbackdrop_button {
  position: absolute;
  background-color: #14364c;
  width: 100%;
  height: 100%;
  top: 3%;
  left: 3%;
  z-index: -1;
  transform: scale(0.95);
  border-radius: 1em;
  transition: all 0.3s ease;
  &.zoomed {
    transform: scale(1.1);
    // border: 3px solid #ffffff;
  }
}
</style>
