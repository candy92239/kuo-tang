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
        :data-scroll-speed="0"
        :data-scroll-delay="0.05 * (index + 1) + 0.2 * (i + 1)"
        :style="{
          '--width': subItem.width,
        }"
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
    <!-- <div class="content-row">
      this.category === 'animate' ? 'gif' : 'jpg'
    </div> -->
  </div>
</template>
<script>
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
      datas: this.item,
    };
  },
  methods: {},
  mounted() {},
  computed: {},
};
</script>
<style lang="scss">
.content-box {
  display: flex;
  position: absolute;
  bottom: 0;
  flex-direction: column;
  height: calc(100% - 6vw);
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
  //flex-grow: var(--width);
  width: calc(100% / 3 * var(--width) - 2%);
  margin: 1%;
  padding: 1%;
  background-color: #14364c;
  border-radius: 1em;
  display: flex;
  flex-direction: column;
  align-items: bottom;
  justify-content: flex-start;
  box-sizing: border-box;
  overflow: hidden;
  color: beige;
  line-height: 0.9;
}
.block-name {
  display: table-caption;
  width: 100%;
  font-size: 4vh;
  text-align: left;
  box-sizing: border-box;

  overflow-wrap: anywhere;
  text-transform: uppercase;
}
.block-sub {
  display: table-caption;
  width: 100%;
  font-size: 3vh;
  text-align: left;
  box-sizing: border-box;
  overflow-wrap: anywhere;
}
.bg-image {
  position: absolute;
}
.individual-block > img {
  overflow: hidden;
  object-fit: cover;
  flex-shrink: 1;
}
//responsiviness: row flex change, width to 100%, height set to smaller? Parent blue box disappear, leaving border
</style>
