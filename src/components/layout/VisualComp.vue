<template>
  <img
    class="visual_comp"
    :style="cssProps"
    :src="require(`@/assets/${source}`)"
  />
</template>

<script>
export default {
  name: "VisualComp",
  props: {
    source: {
      type: String,
      required: true,
    },
    relativePos: Array,
    relativeSize: Array,
  },
  computed: {
    cssProps() {
      return {
        //X Y position relative to parent
        "--relative-pos-X": this.relativePos[0] + "%",
        "--relative-pos-Y": this.relativePos[1] + "%",
        //Z-index
        "--relative-pos-Z": this.relativePos[2],
        //relative h and w
        "--relative-W": this.relativeSize[0] + "%",
        "--relative-H": this.relativeSize[1] + "%",
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
