<template>
  <div class="hotspot" :style="cssProps" />
</template>

<script>
import mainVisual from "@/datas/mainVisual.json";

export default {
  name: "Hotspot",
  props: {
    name: String,
    indexZ: Number,
  },
  data() {
    return {
      datas: mainVisual[this.name],
    };
  },
  computed: {
    cssProps() {
      return {
        "--relative-pos-X": this.datas.relativePos[0] + "%",
        "--relative-pos-Y": this.datas.relativePos[1] + "%",

        "--relative-pos-Z": this.indexZ,

        "--relative-W": this.datas.relativeSize[0] + "%",
        "--relative-H": this.datas.relativeSize[1] + "%",
      };
    },
  },
};
</script>

<style scoped lang="scss">
div {
  background: chartreuses;
  width: var(--relative-W);
  height: var(--relative-H);
  position: absolute;
  z-index: var(--relative-pos-Z);
  top: var(--relative-pos-Y);
  left: var(--relative-pos-X);
  &:hover {
    cursor: pointer;
  }
}
</style>
