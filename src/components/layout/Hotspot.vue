<template>
  <div class="hotspot" :style="cssProps" />
</template>

<script>
export default {
  name: "Hotspot",
  props: {
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
