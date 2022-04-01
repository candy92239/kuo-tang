<template>
  <div
    class="comp-description"
    v-if="VCDes"
    v-html="VCDes"
    :style="cssProps"
  ></div>
  <div class="main-visual-wrapper" @mousemove="mouseMove">
    <div
      class="visual-wrapper"
      :class="{ zoomed: VCClicked }"
      :style="cssProps"
    >
      <Transition>
        <div :class="{ normalclass: true, disappear: tableHovered }">
          <VisualComp name="bed_front" @VCmouse="test" />
          <VisualComp name="bed_back" @VCmouse="test" />
          <VisualComp name="table" @VCmouse="test" />
        </div>
      </Transition>
    </div>
  </div>
</template>

<script>
import VisualComp from "@/components/layout/VisualComp.vue";
import mainVisual from "@/datas/mainVisual.json";

export default {
  name: "MainVisual",
  components: {
    VisualComp,
  },
  data() {
    return {
      tableHovered: false,
      VCClicked: false,
      VCDes: "",
      zoomOrigin: undefined,
      previousZoomOrigin: {},
      currentOrigin: {},
      datas: mainVisual,
      moved: false,
      clientPos: { x: 0, y: 0 },
    };
  },
  methods: {
    toggle(el) {
      this[el] = !this[el];
    },
    test(e) {
      if (e.type == "click") {
        this.VCClicked = true;
        this.currentOrigin = {
          x: this.datas[e.id].zoomOrigin[0],
          y: this.datas[e.id].zoomOrigin[1],
        };
        //if not zoomed in already
        if (!this.zoomOrigin) {
          this.zoomOrigin = this.currentOrigin;
          this.previousZoomOrigin = this.zoomOrigin;
          this.VCDes = this.datas[e.id].description;
          //hide any object in front
        } else if (
          //if moved
          this.zoomOrigin.x != this.currentOrigin.x ||
          this.zoomOrigin.y != this.currentOrigin.y
        ) {
          this.previousZoomOrigin = this.zoomOrigin;
          this.zoomOrigin = this.currentOrigin;
        } else {
          //if clicked on same thing
          this.VCClicked = false;
          this.VCDes = "";
          this.zoomOrigin = undefined;
          this.previousZoomOrigin = {};
        }

        //show description div
        this.VCDes = this.datas[e.id].description;
      } else if (e.type == "mouseenter" && this.VCClicked) {
        //only change when really moved on it
        setTimeout(() => {
          this.VCDes = this.datas[e.id].description;
        }, 100);
      } else if (e.type == "mouseleave") {
        setTimeout(() => {
          this.VCDes = "";
        }, 500);
      }
    },
    mouseMove(e) {
      //update only if des is shown
      if (this.VCDes) {
        this.clientPos = {
          x: e.clientX + 20,
          y: e.clientY + 20,
        };
      }
    },
    //wirte separate function to update description
    showDescription(e) {
      if (e.type == "click") {
        this.VCClicked = true;
        //if not zoomed in already
        if (!this.zoomOrigin) {
          this.VCDes = this.datas[e.id].description;
        } else if (
          //if moved
          this.zoomOrigin.x != this.currentOrigin.x ||
          this.zoomOrigin.y != this.currentOrigin.y
        ) {
          this.previousZoomOrigin = this.zoomOrigin;
          this.zoomOrigin = this.currentOrigin;
        } else {
          //if clicked on same thing
          this.VCClicked = false;
          this.VCDes = "";
          this.zoomOrigin = undefined;
          this.previousZoomOrigin = {};
        }

        //show description div
        this.VCDes = this.datas[e.id].description;
      } else if (e.type == "mouseenter" && this.VCClicked) {
        //only change when really moved on it
        setTimeout(() => {
          this.VCDes = this.datas[e.id].description;
        }, 100);
      } else if (e.type == "mouseleave") {
        setTimeout(() => {
          this.VCDes = "";
        }, 500);
      }
    },

    //decide to update of not after timout sec
    updateZoom(e) {
      if (!this.zoomOrigin) {
        this.previousZoomOrigin = e;
        this.zoomOrigin = e;
      } else if (this.previousZoomOrigin != this.zoomOrigin) {
        this.zoomOrigin = e;
      } else {
        this.zoomOrigin = undefined;
      }
    },
    resetZoom() {
      this.zoomOrigin = undefined;
    },
  },
  computed: {
    cssProps() {
      return {
        "--zoom-X": this.zoomOrigin
          ? this.zoomOrigin.x + "%"
          : this.previousZoomOrigin.x + "%",
        "--zoom-Y": this.zoomOrigin
          ? this.zoomOrigin.y + "%"
          : this.previousZoomOrigin.y + "%",
        "--client-X": this.clientPos.x + "px",
        "--client-Y": this.clientPos.y + "px",
      };
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
  top: 0%;
  left: auto;
  right: auto;
  //z-index: 10;
  pointer-events: auto;
}
.visual-wrapper {
  position: relative;

  transform: translate(0%, 0%);
  width: 80vh;
  height: 80vh;
  display: flex;
  //align-items: center;
  transform-origin: var(--zoom-X) var(--zoom-Y);
  transition: 1s;
  &.zoomed {
    transform: scale(2);
  }
}
.normalclass {
  transition: opacity 0.5s;
}
.disappear {
  opacity: 0.2;
}

.comp-description {
  display: inline-flexbox;
  position: fixed;
  top: var(--client-Y);
  left: var(--client-X);
  z-index: 9999;
  background-color: #25648a;
  color: #ffff;
  padding: 0.5em;
  transition: 0.1s;
  pointer-events: none;
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
