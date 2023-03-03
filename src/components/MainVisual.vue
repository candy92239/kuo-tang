<template>
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
          :mousePos="this.mousePos"
          :class="{
            fadeout: item.layerGroup == 'Front' ? tableHovered : '',
            disappear: item.layerGroup == 'Front' ? zoomOrigin : '',
          }"
          @VCmouse="test"
        />
      </div>
    </div>
  </div>
</template>

<script>
//          :style="{ transform: parallax(item.parallax) }"

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
  props: { warningClosed: Boolean },
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
      cartClick: 0,
      chairClick: 0,

      //parallax stuffs
      mousePos: { x: 0, y: 0 },
    };
  },
  watch: {
    warningClosed(newValue) {
      if (newValue) {
        this.enableMouseTracking();
      } else {
        this.disableMouseTracking();
      }
    },
  },
  methods: {
    //parallax stuff
    handleMouseMove(e) {
      this.mousePos.x = (e.clientX / window.innerWidth) * 2 - 1;
      this.mousePos.y = 1 - (e.clientY / window.innerHeight) * 2;
    },

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
        //remove parallax
        window.removeEventListener("mousemove", this.handleMouseMove);
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
          window.addEventListener("mousemove", this.handleMouseMove);
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
      //push cart around
      if (e.type == "click" && e.id == "cart") {
        const cart = document.getElementById(e.id);
        switch (this.cartClick) {
          case 0:
            cart.style.translate = "-12vw -5vh";
            this.cartClick += 1;
            break;
          case 1:
            cart.style.translate = "-21vw -3vh";
            this.cartClick += 1;
            break;
          case 2:
            cart.style.translate = "0vw 0vh";
            this.cartClick = 0;
        }
      }
      if (e.type == "click" && e.id == "chair") {
        const chair = document.getElementById(e.id);
        switch (this.chairClick) {
          case 0:
            chair.style.translate = "-12vw 7vh";
            this.chairClick += 1;
            break;
          case 1:
            chair.style.translate = "0vw 0vh";
            this.chairClick = 0;
            break;
        }
      }
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
  display: flex;
  //align-items: center;
  //transform-origin: var(--zoom-X) var(--zoom-Y);
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
    //top: 0%;
    //right: auto;
    left: 50%;
    translate: -50% 0;
    //background-color: green;
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
    //background-color: red;
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
