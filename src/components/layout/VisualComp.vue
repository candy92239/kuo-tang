<template>
  <div class="comp_wrap" :id="name" ref="div">
    <svg class="visual_comp" :style="cssProps" v-on="events" :id="name">
      <InlineSvg :src="require(`@/assets/main_visual/${datas.source}.svg`)" />
    </svg>
  </div>
</template>

<script>
//import mainVisual from "@/datas/mainVisual.json";
import InlineSvg from "vue-inline-svg";
import tippy, { followCursor, roundArrow } from "tippy.js";
import "tippy.js/dist/tippy.css";
import "tippy.js/dist/svg-arrow.css";

export default {
  emits: ["VCmouse"],
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
        var themeName;
        if (!this.datas.interactive) {
          themeName = "normal";
        } else {
          themeName = "interactive";
        }
        this.popup = tippy(this.$refs.div, {
          theme: themeName,
          content: this.datas.description,
          followCursor: true,
          trigger: "mouseenter",
          hideOnClick: false,
          plugins: [followCursor],
          allowHTML: true,
          arrow: roundArrow,
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
.comp_wrap {
  svg {
    transition: opacity 0.5s;
    opacity: 1;
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
}
.comp_wrap.fadeout {
  svg {
    pointer-events: none;
    opacity: 0.3;
  }
  path {
    pointer-events: none;
  }
  line {
    pointer-events: none;
  }
  polygon {
    pointer-events: none;
  }
  rect {
    pointer-events: none;
  }
}
.tippy-box[data-theme~="normal"] {
  background-color: #353d41;
  color: #ffffff;
  font-family: Avenir;
  > .tippy-svg-arrow {
    fill: #353d41;
  }
}
.tippy-box[data-theme~="interactive"] {
  background-color: #94c9ce;
  color: #030404;
  font-family: Avenir;
  font-weight: bold;
  > .tippy-svg-arrow {
    fill: #94c9ce;
  }
}
</style>
