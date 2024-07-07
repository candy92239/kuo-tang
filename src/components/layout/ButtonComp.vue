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
import lottie from "lottie-web";

export default {
  name: "ButtonComp",
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
      animation: null,
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
      this.$emit("jumpTo", this.datas.id);
    },
  },
  mounted() {
    import(`@/assets/UI/lottie/${this.item.source}_trans_L.json`).then(
      (animationData) => {
        this.animation = lottie.loadAnimation({
          container: this.$refs.lottie,
          renderer: "svg",
          loop: false,
          autoplay: false,
          animationData,
        });
      }
    );
  },
  computed: {
    contentStyle() {
      return {
        zIndex: this.hoverZoom ? this.originalZIndex + 2 : this.originalZIndex,
      };
    },
  },
};
</script>
<style lang="scss">
.button-wrap {
  max-width: calc(48vw / 4);
  flex-shrink: 0;
  flex-grow: 0;
  cursor: pointer;
}

.icon {
  display: flex;
  margin: 1vw;
  transition: transform 0.3s ease;

  svg {
    height: 100%;
    width: 100%;
  }

  &.zoomed {
    transform: scale(1.2);
  }
}

.text {
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
  left: -3%;
  z-index: -1;
  transform: scale(0.95);
  border-radius: 1em;
  transition: all 0.3s ease;

  &.zoomed {
    transform: scale(1.1);
    box-shadow: -5px 5px 10px rgba(0, 0, 0, 0.5);
    background-color: #173f58;
    //border: 2px solid #ffffff;
  }
}
</style>
