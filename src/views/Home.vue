<template>
  <div class="home">
    <!-- <div :class="{ 'background-wrapper': !warningClicked }"> -->
    <MainVisual />
    <!-- </div>
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
    </Transition> -->
  </div>
</template>

<script>
// @ is an alias to /src
import MainVisual from "@/components/MainVisual.vue";

// import ContructionPage from "@/components/ContructionPage.vue";
// import WarningHeader from "@/components/layout/WarningHeader.vue";

export default {
  name: "Home",
  components: {
    MainVisual,
    // ContructionPage,
    // WarningHeader,
  },
  data() {
    return { warningClicked: false };
  },
  methods: {
    toggle(el) {
      this[el] = !this[el];
    },
  },
};
</script>
<style scoped lang="scss">
.home {
  width: 100vw;
  height: 100vh;
  background: #f2e2d2;
  position: relative;
  overflow: hidden;
}
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
