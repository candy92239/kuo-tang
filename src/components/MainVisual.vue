<template>
  <div class="visual-wrapper" :class="{ zoomed: VCClicked }" :style="cssProps">
    <Transition>
      <div
        :class="{ normalclass: true, disappear: tableHovered }"
        v-if="!zoomOrigin"
      >
        <VisualComp name="bed_front" @VCmouse="test" />
      </div>
    </Transition>
    <VisualComp name="bed_back" @VCmouse="test" />
    <VisualComp name="table" @VCmouse="test" />
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
      zoomOrigin: undefined,
      previousZoomOrigin: {},
      currentOrigin: {},
      datas: mainVisual,
      moved: false,
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
      } else {
        //this.tableHovered = !this.tableHovered;
      }
    },
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
.visual-wrapper {
  position: relative;

  transform: translate(0%, 0%);
  width: 80vh;
  height: 80vh;
  display: flex;
  align-items: center;
  transform-origin: var(--zoom-X) var(--zoom-Y);
  transition: transform-origin 1s, width 1s, height 1s, top 1s, left 1s,
    transform 1s;
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

.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
