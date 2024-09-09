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
          :warningClosed="warningClicked"
          :scrollZoom="this.scrollZoom"
          @clickToSection="handleClicktoSec"
        />
        <Portfolio
          @blurred="onBlurTripped"
          @secZoom="secZoom"
          :warningClosed="warningClicked"
          :mobileTrue="mobileTrue"
          :initialBlur="false"
          :data="sharedData"
          :key="sharedDataKey"
        />
      </div>
    </div>
  </div>
</template>

<script>
import ContructionPage from "@/components/ContructionPage.vue";
import WarningHeader from "@/components/layout/WarningHeader.vue";
import MainVisual from "@/components/MainVisual.vue";
import Portfolio from "@/components/Portfolio.vue";

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
      mainBlurred: false,
      mobileTrue: null,
      scrollZoom: null,
      sharedData: null,
      sharedDataKey: 0,
    };
  },
  mounted() {
    setTimeout(() => {
      this.warningClicked = true;
    }, 0);

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
  methods: {
    handleClicktoSec(data) {
      this.sharedData = data;
      this.$nextTick(() => {
        this.sharedData = "";
      });
    },
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
      this.scrollZoom = value;
    },
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
  position: relative;
  z-index: 0;
  will-change: transform;
}

.portfolio-wrapper {
  height: 100vh;
  width: 100vw;
  position: relative;
  z-index: 100;
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
