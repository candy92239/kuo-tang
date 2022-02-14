<template>
  <div class="visual-wrapper" :class="{ zoomed: tableClicked }">
    <VisualComp name="bed_back" />
    <!-- <div
      @mouseenter="toggle('tableHovered')"
      @mouseleave="toggle('tableHovered')"
      @click="toggle('tableClicked')"
    >
      <Hotspot name="bed_back" indexZ="3" />
    </div> -->
    <VisualComp name="table" />
    <VisualComp name="bed_front" />
    <!-- <Transition>
      <div
        :class="{ normalclass: true, disappear: tableHovered }"
        v-if="!tableClicked"
      >
        <VisualComp name="bed_front" />
      </div>
    </Transition> -->
  </div>
</template>

<script>
import VisualComp from "@/components/layout/VisualComp.vue";
// import Hotspot from "@/components/layout/Hotspot.vue";

export default {
  name: "MainVisual",
  components: {
    VisualComp,
    // Hotspot,
  },
  data() {
    return { tableHovered: false, tableClicked: false };
  },
  methods: {
    toggle(el) {
      this[el] = !this[el];
    },
  },
};
</script>

<style scoped lang="scss">
.visual-wrapper {
  position: absolute;
  top: 0%;
  left: 50%;
  transform: translate(-50%, 10%);
  width: 80vh;
  height: 80vh;
  display: flex;
  align-items: center;
  transition: width 1s, height 1s, top 1s, left 1s;
  &.zoomed {
    top: -65%;
    left: 50%;
    transform: translate(-50%, 10%);
    width: 175vh;
    height: 175vh;
  }
}
.normalclass {
  transition: opacity 0.5s;
}
.disappear {
  opacity: 0.2;
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
