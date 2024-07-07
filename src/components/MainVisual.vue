<template>
  <div :class="{ blurred: blurred, zoomed: zoom }">
    <div class="main-visual-wrapper">
      <div
        class="visual-wrapper"
        :class="{ zoomed: VCClicked }"
        :style="cssProps"
      >
        <div
          v-for="(item, index) in datas"
          :key="index"
          :group="item.layerGroup"
          :id="item.source + '_wrap'"
        >
          <VisualComp
            :item="item"
            :name="item.source"
            :mousePos="mousePos"
            :class="{
              fadeout: item.layerGroup === 'Front' && tableHovered,
              disappear: item.layerGroup === 'Front' && zoomOrigin,
            }"
            @VCmouse="handleVCmouse"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import VisualComp from "@/components/layout/VisualComp.vue";
import mainVisual from "@/datas/mainVisual.json";

export default {
  name: "MainVisual",
  components: { VisualComp },
  props: { warningClosed: Boolean, scrollZoom: String },
  data() {
    return {
      tableHovered: false,
      VCClicked: false,
      zoomOrigin: undefined,
      currentZoom: undefined,
      previousZoomOrigin: {},
      currentOrigin: {},
      datas: mainVisual,
      timeoutId: null,
      cartClick: 0,
      chairClick: 0,
      mousePos: { x: 0, y: 0 },
    };
  },
  watch: {
    warningClosed(newValue) {
      newValue ? this.enableMouseTracking() : this.disableMouseTracking();
    },
    scrollZoom(newValue) {
      if (newValue !== "RESET") {
        const obj = this.findObj("interactive", newValue);
        this.currentZoom = obj?.zoomOrigin;
        this.zoomToObj();
      } else {
        this.resetZoom();
      }
    },
  },
  methods: {
    handleMouseMove(e) {
      this.mousePos = {
        x: (e.clientX / window.innerWidth) * 2 - 1,
        y: 1 - (e.clientY / window.innerHeight) * 2,
      };
    },
    toggle(el) {
      this[el] = !this[el];
    },
    zoomToObj() {
      window.removeEventListener("mousemove", this.handleMouseMove);
      this.VCClicked = true;
      this.currentOrigin = { x: this.currentZoom[0], y: this.currentZoom[1] };
      if (!this.zoomOrigin) {
        this.zoomOrigin = this.currentOrigin;
        this.previousZoomOrigin = this.zoomOrigin;
      } else if (
        this.zoomOrigin.x !== this.currentOrigin.x ||
        this.zoomOrigin.y !== this.currentOrigin.y
      ) {
        this.previousZoomOrigin = this.zoomOrigin;
        this.zoomOrigin = this.currentOrigin;
      } else {
        this.resetZoom();
      }
    },
    resetZoom() {
      this.VCClicked = false;
      this.zoomOrigin = undefined;
      this.previousZoomOrigin = {};
      window.addEventListener("mousemove", this.handleMouseMove);
    },
    handleVCmouse(e) {
      const obj = this.findObj("source", e.id);
      this.currentZoom = e.id ? obj?.zoomOrigin : e.zoomOrigin;

      if (e.type === "click" && this.currentZoom) {
        this.zoomToObj();
      }

      if (obj?.layerGroup === "Table") {
        if (e.type === "mouseenter") {
          clearTimeout(this.timeoutId);
          this.tableHovered = true;
        } else if (e.type === "mouseleave") {
          this.timeoutId = setTimeout(() => {
            this.tableHovered = false;
          }, 300);
        }
      }

      if (e.type === "click" && e.id) {
        this.handleItemClick(e.id);
      }
    },
    findObj(key, value) {
      return this.datas.find((obj) => obj[key] === value);
    },
    handleItemClick(id) {
      const element = document.getElementById(id);
      if (id === "cart") {
        this.cartClick = this.toggleTranslate(element, this.cartClick, [
          "-12vw -5vh",
          "-21vw -3vh",
          "0vw 0vh",
        ]);
      } else if (id === "chair") {
        this.chairClick = this.toggleTranslate(element, this.chairClick, [
          "-12vw 7vh",
          "0vw 0vh",
        ]);
      }
    },
    toggleTranslate(element, clickCount, positions) {
      element.style.translate = positions[clickCount % positions.length];
      return clickCount + 1;
    },
    enableMouseTracking() {
      window.addEventListener("mousemove", this.handleMouseMove);
    },
    disableMouseTracking() {
      window.removeEventListener("mousemove", this.handleMouseMove);
    },
  },
  mounted() {
    if (this.warningClosed) {
      this.enableMouseTracking();
    }
  },
  computed: {
    cssProps() {
      const x = this.zoomOrigin ? this.zoomOrigin.x : this.previousZoomOrigin.x;
      const y = this.zoomOrigin ? this.zoomOrigin.y : this.previousZoomOrigin.y;
      return { "--zoom-X": `${x}%`, "--zoom-Y": `${y}%` };
    },
  },
};
</script>

<style scoped lang="scss">
.main-visual-wrapper {
  height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  left: auto;
  right: auto;
  pointer-events: auto;
}

.visual-wrapper {
  position: relative;
  display: flex;
  transition: 1s;
}

@media screen and (orientation: landscape),
  screen and (min-aspect-ratio: 1.5/1) {
  .visual-wrapper {
    width: 150vh;
    height: 150vh;
    transform-origin: var(--zoom-X) var(--zoom-Y);
    &.zoomed {
      transform: scale(2.5);
    }
  }
}

@media screen and (min-aspect-ratio: 1/1) and (max-aspect-ratio: 1.5/1) {
  .main-visual-wrapper {
    left: 50%;
    translate: -50% 0;
  }
  .visual-wrapper {
    width: 100vh;
    height: 100vh;
    transform-origin: var(--zoom-X) var(--zoom-Y);
    &.zoomed {
      transform: scale(4);
    }
  }
}

@media screen and (orientation: portrait), screen and (max-aspect-ratio: 1/1) {
  .main-visual-wrapper {
    transition: left 0.5s, translate 0.5s;
    width: 100vh;
    left: 40%;
    translate: -60% 0;
  }
  .visual-wrapper {
    width: 100vh;
    height: 100vh;
    transform-origin: var(--zoom-X) var(--zoom-Y);
    &.zoomed {
      transform: scale(4);
    }
  }
}

.disappear {
  transition: opacity 0.5s ease;
  opacity: 0;
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
