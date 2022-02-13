<template>
  <div class="visual-wrapper">
    <VisualComp
      source="main_visual/bed_back.svg"
      :relativePos="[14.864, 1.471, -2]"
      :relativeSize="[75.274, 70.398]"
    />
    <div v-on:mouseenter="tableHover" v-on:mouseleave="tableHover">
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
    <div :class="{ normalclass: true, disappear: tableHovered }">
      <VisualComp
        source="main_visual/bed_front.svg"
        :relativePos="[15.052, 3.222, 2]"
        :relativeSize="[74.8224, 95.563]"
      />
    </div>
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
    return { tableHovered: false };
  },
  methods: {
    tableHover() {
      this.tableHovered = !this.tableHovered;
    },
  },
};
</script>

<style scoped lang="scss">
.visual-wrapper {
  position: absolute;
  //top: 50%;
  left: 50%;
  transform: translate(-50%, 10%);
  width: 80vh;
  height: 80vh;
  display: flex;
  align-items: center;
}
.normalclass {
  transition: opacity 0.5s;
}
.disappear {
  opacity: 20%;
}
</style>
