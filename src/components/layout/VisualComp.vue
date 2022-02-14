<template>
  <img
    class="visual_comp"
    :style="cssProps"
    :src="require(`@/assets/${datas.source}`)"
  />
</template>

<script>
import mainVisual from "@/datas/mainVisual.json";

export default {
  name: "VisualComp",
  props: {
    name: String,
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

        "--relative-pos-Z": this.datas.relativePos[2],

        "--relative-W": this.datas.relativeSize[0] + "%",
        "--relative-H": this.datas.relativeSize[1] + "%",
      };
    },
  },
};
</script>

<style scoped lang="scss">
img {
  width: var(--relative-W);
  height: var(--relative-H);
  position: absolute;
  z-index: var(--relative-pos-Z);
  top: var(--relative-pos-Y);
  left: var(--relative-pos-X);
}
</style>
