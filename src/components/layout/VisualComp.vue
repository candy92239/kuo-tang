<template>
  <svg class="visual_comp" :style="cssProps" @click="test" :id="name">
    <InlineSvg :src="require(`@/assets/${datas.source}`)" />
  </svg>

  <div v-if="showDescription" class="description">
    {{ datas.description }}
  </div>
</template>

<script>
import mainVisual from "@/datas/mainVisual.json";
import InlineSvg from "vue-inline-svg";

export default {
  name: "VisualComp",
  components: {
    InlineSvg,
  },
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
    test(event) {
      console.log(event.currentTarget.id);
      this.$emit(event.currentTarget.id);
    },
    addClickE() {
      let nm = this.name;
      //let el = document.getElementById(this.name).parentNode;

      //var wrap = document.createElement("svg");
      //wrap.setAttribute("xmlns", "http://www.w3.org/2000/svg");
      (function () {
        let e = document.getElementById(nm);
        e.addEventListener("click", function () {
          console.log("yeah" + nm);
        });
      })();

      //el.insertBefore(wrap, e).appendChild(e);
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

<style lang="scss">
.visual_comp {
  width: var(--relative-W);
  height: var(--relative-H);
  position: absolute;
  z-index: var(--relative-pos-Z);
  top: var(--relative-pos-Y);
  left: var(--relative-pos-X);
}
svg {
  pointer-events: none;
  cursor: pointer;
}
path {
  pointer-events: fill;
}

polygon {
  pointer-events: fill;
}

rect {
  pointer-events: fill;
}

//TODO: maybe remove pointer even when hovering???
.description {
  width: 40%;
  position: fixed;
  background: gray;
}
</style>
