<template>
  <div class="main-visual-wrapper" @mousemove="mouseMove">
    <div
      class="visual-wrapper"
      :class="{ zoomed: VCClicked }"
      :style="cssProps"
    >
      <Transition>
        <div>
          <div
            v-for="(item, index) in datas"
            :key="index"
            :group="item.layerGroup"
          >
            <Transition>
              <VisualComp
                :item="item"
                :name="item.source"
                :class="{
                  fadeout: item.layerGroup == 'Front' ? tableHovered : '',
                  disappear: item.layerGroup == 'Front' ? zoomOrigin : '',
                }"
                @VCmouse="test"
            /></Transition>
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
      tableGroup: [],
      timeoutId: null,
    };
  },
  methods: {
    toggle(el) {
      this[el] = !this[el];
    },
    test(e) {
      //find obj based on name
      const findObj = (array, key, value) => {
        return array.find((obj) => obj[key] === value);
      };
      const currentZoom = findObj(this.datas, "source", e.id).zoomOrigin;
      //only zoom if there's zoom value
      if (e.type == "click" && currentZoom) {
        this.VCClicked = true;
        this.currentOrigin = {
          x: currentZoom[0],
          y: currentZoom[1],
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
      const currentGroup = findObj(this.datas, "source", e.id).layerGroup;
      //Hover in and hide front
      if (e.type == "mouseenter" && currentGroup == "Table") {
        clearTimeout(this.timeoutId);
        this.tableHovered = true;
      } else if (e.type == "mouseleave" && currentGroup == "Table") {
        this.timeoutId = setTimeout(() => {
          this.tableHovered = false;
        }, 300);
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
      };
    },
  },
};
</script>

<style scoped lang="scss">
@media screen and (orientation: landscape), screen and (min-width: 1200px) {
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
    width: 150vh;
    height: 150vh;
    display: flex;
    //align-items: center;
    transform-origin: var(--zoom-X) var(--zoom-Y);
    transition: 1s;
    &.zoomed {
      transform: scale(2.4);
    }
  }
}
@media screen and (orientation: portrait), screen and (max-height: 600px) {
  .main-visual-wrapper {
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    position: fixed;
    top: 0%;
    left: 50%;
    transform: translateX(-60%);
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
}

.disappear {
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
