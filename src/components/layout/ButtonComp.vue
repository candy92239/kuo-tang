<template>
  <div class="button-wrap" @mouseenter="playLottie" @mouseleave="reverseLottie">
    <div class="icon" :class="{ zoomed: hoverZoom }" ref="lottie">
      <!-- <svg>
        <InlineSvg :src="require(`@/assets/UI/${datas.source}L2.svg`)" />
      </svg> -->
    </div>
    <div class="text">
      <p>{{ datas.name }}</p>
    </div>
  </div>
</template>

<script>
//import InlineSvg from "vue-inline-svg";
import lottie from "lottie-web";
//import animationData from '@/assets/UI//lottie/des_trans_L.json';

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
  },
  mounted() {
    const options = {
      container: this.$refs.lottie,
      renderer: "svg",
      loop: false,
      autoplay: false,
      path: "/lottie/des_trans_L.json",
    };
    this.animation = lottie.loadAnimation(options);
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
}
.icon {
  //position: relative;
  display: flex;
  //flex: 1 0 100%;
  //width: 100%;
  transition: transform 0.5s ease;
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
  p {
    color: white;
  }
}
</style>
