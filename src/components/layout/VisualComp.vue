<template>
  <!-- <div class="visual_comp" :style="cssProps"> -->
  <object
    :onload="addClickE"
    class="visual_comp"
    :style="cssProps"
    :id="name"
    :data="require(`@/assets/${datas.source}`)"
    type="image/svg+xml"
  />
  <div v-if="showDescription" class="description">
    {{ datas.description }}
  </div>
</template>

<script>
import mainVisual from "@/datas/mainVisual.json";

export default {
  name: "VisualComp",
  props: {
    name: String,
    //showD: { default: false, type: Boolean },
  },
  data() {
    return {
      datas: mainVisual[this.name],
      showDescription: false,
    };
  },
  methods: {
    toggle(el) {
      this[el] = !this[el];
    },
    addClickE() {
      let el = this.name;
      let ele = document.getElementById(el);
      let paths = ele.contentDocument.querySelectorAll("g");

      (function () {
        paths[1].addEventListener("click", function () {
          console.log(el);
        });
      })();
      console.log(paths);
    },
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
object {
  width: var(--relative-W);
  height: var(--relative-H);
  position: absolute;
  z-index: var(--relative-pos-Z);
  top: var(--relative-pos-Y);
  left: var(--relative-pos-X);
}
#bed_front {
  pointer-events: none;
}
//TODO: maybe remove pointer even when hovering???
svg {
  @extend object;
  //pointer-events: none;
}
.description {
  width: 40%;
  position: fixed;
  background: gray;
}
</style>
