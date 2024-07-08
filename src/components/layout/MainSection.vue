<template>
  <div data-scroll data-scroll-repeat class="sec-wrapper">
    <div class="title-wrapper" data-scroll>
      <h1
        data-scroll
        data-scroll-repeat
        data-scroll-position="top"
        :data-scroll-speed="(-0.15 + index * 0.03) * 1.1"
        style="color: #84c0c6"
      >
        <b>{{ datas.name }}</b>
      </h1>
    </div>
    <div class="content-wrap">
      <!-- <div class="content-box"></div> -->
      <MainBoxes :item="datas.block" />
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
}

.title-text {
  position: relative;
  z-index: 2;
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
  background-color: #173f58;
  border-radius: 1em;
  flex: 1;
  z-index: -10;
  top: 0;
}
</style>
