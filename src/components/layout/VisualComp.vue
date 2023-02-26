<template>
  <button :id="name" ref="button" @click="showPopup">
    <svg class="visual_comp" :style="cssProps" v-on="events" :id="name">
      <InlineSvg :src="require(`@/assets/main_visual/${datas.source}.svg`)" />
    </svg>
  </button>
</template>

<script>
//import mainVisual from "@/datas/mainVisual.json";
import InlineSvg from "vue-inline-svg";
import tippy, { followCursor } from "tippy.js";
import "tippy.js/dist/tippy.css";

export default {
  emits: ["VCmouse", "VCzoom"],
  name: "VisualComp",
  components: {
    InlineSvg,
  },
  props: {
    name: String,
    zoomOrigin: Array,
    item: {
      type: Object,
      required: true,
    },
    //showD: { default: false, type: Boolean },
  },
  data() {
    return {
      events: {
        ...Object.fromEntries(
          ["click", "mouseleave", "mouseenter"].map((key) => [
            key,
            this.returnEvent,
          ])
        ),
      },
      datas: this.item,
    };
  },
  methods: {
    toggle(el) {
      this[el] = !this[el];
    },
    createPopup() {
      if (this.datas.description) {
        this.popup = tippy(this.$refs.button, {
          content: this.datas.description,
          followCursor: true,
          trigger: "mouseenter",
          hideOnClick: false,
          plugins: [followCursor],
          allowHTML: true,
        });
      }
    },
    returnEvent(event) {
      this.$emit("VCmouse", {
        id: event.currentTarget.id,
        type: event.type,
      });
    },
  },
  mounted() {
    this.createPopup();
  },
  computed: {
    cssProps() {
      return {
        "--relative-pos-X": (this.datas.relativePos[0] / 236.07) * 100 + "%",
        "--relative-pos-Y": (this.datas.relativePos[1] / 236.07) * 100 + "%",

        "--relative-pos-Z": this.datas.relativePos[2],

        "--relative-W": (this.datas.relativeSize[0] / 236.07) * 100 + "%",
        "--relative-H": (this.datas.relativeSize[1] / 236.07) * 100 + "%",

        "--cursor": this.datas.locked ? "auto" : "pointer",
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
  cursor: var(--cursor);
}
path {
  pointer-events: fill;
}
line {
  pointer-events: visibleStroke;
}
polygon {
  pointer-events: fill;
}

rect {
  pointer-events: fill;
}

button {
  appearance: none;
  //display: flex;
  //width: 100%;
  background-color: transparent;
  border: none;
}
</style>
