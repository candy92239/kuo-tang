<template>
  <div class="visual-wrapper" :class="{ zoomed: tableClicked }">
    <VisualComp
      source="main_visual/bed_back.svg"
      :relativePos="[14.864, 1.471, -2]"
      :relativeSize="[75.274, 70.398]"
    />
    <div @mouseenter="tableHover" @mouseleave="tableHover" @click="tableClick">
      <Hotspot
        :relativePos="[29.314, 33.335, 3]"
        :relativeSize="[59.895, 41.384]"
      />
    </div>
    <VisualComp
      source="main_visual/table.svg"
      :relativePos="[29.314, 33.335, -1]"
      :relativeSize="[59.895, 41.384]"
    />
    <Transition>
      <div
        :class="{ normalclass: true, disappear: tableHovered }"
        v-if="!tableClicked"
      >
        <VisualComp
          source="main_visual/bed_front.svg"
          :relativePos="[15.052, 3.222, 2]"
          :relativeSize="[74.8224, 95.563]"
        />
      </div>
    </Transition>
  </div>
</template>

<script>
import VisualComp from "@/components/layout/VisualComp.vue";
import Hotspot from "@/components/layout/Hotspot.vue";

export default {
  name: "MainVisual",
  components: {
    VisualComp,
    Hotspot,
  },
  data() {
    return { tableHovered: false, tableClicked: false };
  },
  methods: {
    tableHover() {
      this.tableHovered = !this.tableHovered;
    },
    tableClick() {
      this.tableClicked = !this.tableClicked;
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
