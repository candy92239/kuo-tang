<template>
  <div class="content-box" :class="{ zoomed: hoverZoom }">
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
        :data-scroll-delay="0.1 * Math.abs(index - 2 + 1) + 0.2 * (i + 1)"
        :style="{ '--height': item[0].height, '--width': subItem.width }"
        @mouseenter="hoverIn"
        @mouseleave="hoverOut"
      >
        <div class="text-wrap">
          <div class="block-name">{{ subItem.name }}</div>
          <div class="block-sub">{{ subItem.sub }}</div>
        </div>
        <div class="bg-image"></div>
        <img
          :src="
            require(`@/assets/box_img/${this.category}/${index + 1}-${
              i + 1
            }.jpg`)
          "
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MainBoxes",
  props: {
    category: String,
    item: {
      type: Array,
      required: true,
    },
  },
  methods: {
    hoverIn(event) {
      event.currentTarget.classList.add("c-hovered");
    },
    hoverOut(event) {
      event.currentTarget.classList.remove("c-hovered");
    },
  },
  data() {
    return { hoverZoom: false, datas: this.item };
  },
};
</script>

<style lang="scss">
.content-box {
  display: flex;
  position: absolute;
  bottom: 0;
  flex-direction: column;
  aspect-ratio: 1 / 1;
  //height: calc(100% - 6vw);
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
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  width: calc(100% / 3 * var(--width) - 4%);
  margin: 1%;
  padding: 1%;
  background-color: #14364c;
  border-radius: 1em;
  display: inline-block;
  position: relative;
  overflow: hidden;
  transition: all 0.3s ease;
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
      font-size: 7vw;
      filter: sepia(100%);
      //color: #14364c !important;
    }
    .block-sub {
      font-size: 0;
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
  font-size: 2vw;
  text-align: right;
  box-sizing: border-box;
  font-weight: 700;
  overflow-wrap: anywhere;
  text-transform: uppercase;
  //transition: all 0.3s ease;
}

.block-sub {
  display: table-caption;
  width: 100%;
  font-size: 1.5vw;
  text-align: right;
  box-sizing: border-box;
  overflow-wrap: anywhere;
  transition: all 0.3s ease;
}
.bg-image {
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
  opacity: 0.2;
  filter: blur(5px);
}
</style>
