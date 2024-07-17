<template>
  <div data-scroll data-scroll-repeat class="sec-wrapper">
    <div class="title-wrapper" data-scroll>
      <h1 data-scroll data-scroll-repeat>
        <b>{{ datas.name }}</b>
      </h1>
    </div>
    <div class="content-wrap">
      <!-- <div class="content-box"></div> -->
      <MainBoxes :item="datas.block" :category="datas.source" />
      <div class="back-fill"></div>
    </div>
  </div>
</template>

<script>
import MainBoxes from "@/components/layout/MainBoxes.vue";

export default {
  emits: [],
  name: "MainSection",
  components: {
    MainBoxes,
    //InlineSvg
  },
  props: {
    item: {
      type: Object,
      required: true,
    },
    index: {
      type: Number,
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
.sec-wrapper {
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
}

.title-wrapper {
  position: relative;
  width: 100%;
  display: flex;
  justify-content: center;
  transform: translate(0, 3vw);
  color: #14364c;
  font-family: "Aaux Next", aaux-next, Arial, Helvetica, sans-serif;
}

.content-wrap {
  position: relative;
  height: 100%;
  //padding: 5%;
}

.back-fill {
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: #f7ede462;
  border-radius: 1em;
  flex: 1;
  z-index: -10;
  top: 0;
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
}
</style>
