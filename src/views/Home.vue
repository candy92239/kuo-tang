<template>
  <Transition>
    <div class="construction-wrapper" v-if="!warningClicked">
      <ContructionPage @wasClicked="toggle('warningClicked')" />
    </div>
  </Transition>
  <Transition>
    <WarningHeader
      v-if="warningClicked"
      @wasClicked="toggle('warningClicked')"
    />
  </Transition>
  <div :class="{ 'background-wrapper': !warningClicked }">
    <div class="pointer-event-wrap">
      <div class="portfolio-wrapper">
        <MainVisual
          :class="{
            blurred: mainBlurred || !warningClicked,
          }"
          :warningClosed="warningClicked"
          :scrollZoom="this.scrollZoom"
          @jumpTo="handleJumpTo"
        />
        <Portfolio
          @blurred="onBlurTripped"
          @secZoom="secZoom"
          :warningClosed="warningClicked"
          :mobileTrue="mobileTrue"
          :initialBlur="warningClicked"
        />
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import ContructionPage from "@/components/ContructionPage.vue";
import WarningHeader from "@/components/layout/WarningHeader.vue";
import MainVisual from "@/components/MainVisual.vue";
import Portfolio from "@/components/Portfolio.vue";
//import Atropos from "atropos";

export default {
  name: "Home",
  components: {
    MainVisual,
    Portfolio,
    ContructionPage,
    WarningHeader,
  },
  data() {
    return {
      warningClicked: false,
      mainBlurred: true,
      mobileTrue: null,
      scrollZoom: null,
    };
  },
  methods: {
    toggle(el) {
      this[el] = !this[el];
    },
    onBlurTripped(value) {
      clearTimeout(this.blurDebounceTimer);
      this.blurDebounceTimer = setTimeout(() => {
        this.mainBlurred = value;
      }, 50);
    },
    secZoom(value) {
      console.log("parent received! " + value);
      this.scrollZoom = value;
    },
  },
  mounted() {
    if (
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
      )
    ) {
      this.mobileTrue = true;
    } else {
      this.mobileTrue = false;
    }
  },
};
</script>
<style scoped lang="scss">
.construction-wrapper {
  width: 100vw;
  height: 100vh;
  position: fixed;
  display: flex;
  z-index: 1000;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}
.background-wrapper {
  filter: blur(5px);
  position: relative;
  z-index: 0;
  //add this css for blurring to enforce GPU!!
  // transform: translate3d(0, 0, 0);
  // -ms-transform: translate3d(0, 0, 0);
  will-change: transform;
}

.blurred {
  //TODO: remove before deploy
  filter: blur(10px);
}

.portfolio-wrapper {
  height: 100vh;
  width: 100vw;
  position: relative;
  z-index: 100;
  //overflow: visible;
}

.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
