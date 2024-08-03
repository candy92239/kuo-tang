<template>
  <div class="content-box">
    <div
      class="content-row"
      v-for="(item, index) in datas"
      :key="index"
      :category="item.source"
      :id="`row${index}`"
      :style="{
        '--height': item[0].height,
      }"
    >
      <div
        class="individual-block"
        v-for="(subItem, i) in datas[index]"
        :key="i"
        :id="`${subItem.name}_wrap`"
        data-scroll
        data-scroll-repeat
        :style="{ '--height': item[0].height, '--width': subItem.width }"
        @mouseenter="hoverIn($event, subItem.description)"
        @mouseleave="hoverOut($event)"
        @click="handleClick(subItem.link)"
      >
        <div class="text-wrap">
          <div class="block-name">{{ subItem.name }}</div>
          <div class="block-sub">{{ subItem.sub }}</div>
        </div>
        <div class="bg-image"></div>
        <img
          :src="
            require(`@/assets/box_img/${this.category}/${index + 1}-${i + 1}${
              this.category === 'animate' ? '.gif' : '.jpg'
            }`)
          "
        />
      </div>
    </div>
    <!-- <div class="content-row">
      this.category === 'animate' ? 'gif' : 'jpg'
    </div> -->
  </div>
</template>
<script>
import svgIcon from "@/assets/UI/linkTo.svg";
import tippy, { followCursor } from "tippy.js";
import "tippy.js/dist/svg-arrow.css";
import "tippy.js/dist/tippy.css";

export default {
  emits: [],
  name: "MainBoxes",
  components: {
    //InlineSvg
  },
  props: {
    category: String,
    item: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      hoverZoom: false,
      datas: this.item,
      popup: null,
    };
  },
  methods: {
    hoverIn(event, description) {
      event.currentTarget.classList.add("c-hovered");
      this.createPopup(description, event.currentTarget);
    },
    hoverOut(event) {
      event.currentTarget.classList.remove("c-hovered");
      if (this.popup) {
        this.popup.destroy();
        this.popup = null;
      }
    },
    createPopup(description, ref) {
      if (description) {
        this.popup = tippy(ref, {
          theme: "box_description",
          content:
            description +
            ` <span><img class="svg-icon" src="${svgIcon}" /></span>`,
          followCursor: true,
          trigger: "mouseenter",
          hideOnClick: false,
          plugins: [followCursor],
          allowHTML: true,
          arrow: false,
          //delay: 0,
        });
      }
      this.popup.show();
    },
    handleClick(link) {
      if (this.popup) {
        this.popup.destroy();
        this.popup = null;
      }
      if (link.startsWith("http")) {
        window.open(link, "_blank");
      } else {
        this.$router.push(link);
      }
    },
  },
  mounted() {},
};
</script>
<style lang="scss">
.content-box {
  display: flex;
  position: absolute;
  bottom: 0;
  flex-direction: column;
  aspect-ratio: 1 / 1;
  width: 100%;
  box-sizing: border-box;
  padding: 2%;
}
.content-row {
  height: calc(100% / 3 * var(--height));
  display: flex;
  flex-direction: row;
}
.individual-block {
  // User selection properties
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;

  // Flexbox and sizing properties
  width: calc(100% / 3 * var(--width) - 2%);
  margin: 1%;
  padding: 1%;
  background-color: #14364c;
  border-radius: 1em;
  display: inline-block;
  position: relative;
  overflow: hidden;
  transition: transform 0.3s ease, box-shadow 0.3s ease,
    background-color 0.3s ease;
  transform-origin: center;
  cursor: pointer;

  > img {
    width: 110%;
    height: 110%;
    object-fit: cover;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    opacity: 0.3;
    filter: blur(2px);
    transition: filter 0.3s ease, opacity 0.3s ease;
  }

  &.c-hovered {
    transform: scale(1.02) !important;
    box-shadow: -5px 5px 10px rgba(0, 0, 0, 0.5);
    background-color: #173f58;

    > img {
      filter: blur(0px);
      opacity: 0.8;
    }

    .block-name {
      font-size: 6.5vw;
      //background-blend-mode: color-dodge !important;
      //transition: font-size 0.3s ease;
    }

    .block-sub {
      font-size: 0;
      transition: font-size 0.3s ease;
    }
  }
}

.text-wrap {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  box-sizing: border-box;
  overflow: hidden;
  color: beige;
  line-height: 0.9;
  position: relative;
  z-index: 1;
  position: absolute;
  bottom: 0;
  right: 0;
  padding: 0.8em;
}
.block-name {
  display: table-caption;
  width: 100%;
  text-align: right;
  box-sizing: border-box;
  overflow-wrap: anywhere;

  font-size: 2vw;
  font-weight: 700;
  text-transform: uppercase;
}
.block-sub {
  font-size: 1.5vw;
  transition: all 0.3s ease;
  display: table-caption;
  width: 100%;
  text-align: right;
  box-sizing: border-box;
  overflow-wrap: anywhere;
}

.bg-image {
  position: absolute;
}

//tippybox styling
.tippy-box[data-theme~="box_description"] {
  background-color: #f2e2d2f3;
  color: #1c2022;
  border: 3px solid #ffffff;
  font-family: Avenir;
  font-size: 1.2em;
  padding: 0.5em;
}
.svg-icon {
  width: 0.8em;
}
span {
  display: inline-block;
}
.individual-block > img {
  overflow: hidden;
  object-fit: cover;
  flex-shrink: 1;
}
//responsiviness: row flex change, width to 100%, height set to smaller? Parent blue box disappear, leaving border
</style>
