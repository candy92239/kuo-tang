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
          <div>
            <VisualComp
              v-for="(item, index) in datas"
              :key="index"
              :item="item"
              :name="item.source"
              @VCmouse="test"
            />
          </div>
        </div>
      </Transition>
    </div>
  </div>
</template>

<script>
//JSON template
// {
//   "source": "template",
//   "relativePos": [null, null, null],
//   "relativeSize": [null, null],
//   "zoomOrigin": null,
//   "layerGroup": "null",
//   "description": "null"
// },

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
      //only zoom if there's zoom value
      if (e.type == "click" && this.datas[e.id].zoomOrigin) {
        this.VCClicked = true;
        this.currentOrigin = {
          x: this.datas[e.id].zoomOrigin[0],
          y: this.datas[e.id].zoomOrigin[1],
        };
        //if not zoomed in already
        if (!this.zoomOrigin) {
          this.zoomOrigin = this.currentOrigin;
          this.previousZoomOrigin = this.zoomOrigin;
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
          this.zoomOrigin = undefined;
          this.previousZoomOrigin = {};
        }
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
  width: 100vh;
  height: 100vh;
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
