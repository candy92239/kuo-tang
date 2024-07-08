<template>
  <div class="content-box">
    <div
      class="content-row"
      v-for="(item, index) in datas"
      :key="index"
      :id="`row${index}`"
      :style="{
        '--height': item[0].height,
      }"
    >
      <div
        class="individual-block"
        v-for="(item, i) in datas[index]"
        :key="i"
        :id="`${item.name}_wrap`"
        :style="{
          '--width': item.width,
        }"
      >
        <div class="block-name">{{ item.name }}</div>
        <div class="block-sub">{{ item.sub }}</div>
      </div>
    </div>
    <!-- <div class="content-row"></div> -->
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
  //flex-grow: var(--width);
  width: calc(100% / 3 * var(--width) - 2%);
  margin: 1%;
  padding: 1%;
  background-color: #f2e2d2;
  border-radius: 1em;
  display: flex;
  flex-direction: column;
  align-items: bottom;
  justify-content: flex-start;
  box-sizing: border-box;
  overflow: hidden;
}
.block-name {
  display: table-caption;
  width: 100%;
  font-size: 4vh;
  text-align: left;
  box-sizing: border-box;
  line-height: 0.9;
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

//responsiviness: row flex change, width to 100%, height set to smaller? Parent blue box disappear, leaving border
</style>
