<template>
  <div data-scroll data-scroll-repeat class="sec-wrapper">
    <div class="title-wrapper" data-scroll>
      <h1
        data-scroll
        data-scroll-repeat
        data-scroll-position="top"
        :data-scroll-speed="-0.15 + index * 0.03"
        style="color: #84c0c6"
      >
        <b>{{ datas.name }}</b>
      </h1>
      <!-- <div
        class="backdrop-cat"
        data-scroll
        data-scroll-repeat
        data-scroll-position="top"
        :data-scroll-speed="-0.2 + index * 0.03"
      >
        <h1 style="color: transparent; margin: 0">
          <b>{{ datas.name }}</b>
        </h1>
      </div> -->
    </div>
    <div class="back-fill"></div>
  </div>
</template>

<script>
export default {
  emits: [],
  name: "MainSection",
  components: {
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
  transform: translate(0, 50%);
}

.title-text {
  position: relative;
  z-index: 2; /* Ensure h1 is on top of backdrop-cat */
}

.back-fill {
  position: relative;
  background-color: #1b4965;
  flex: 1;
  z-index: -10; /* Ensure back-fill is behind everything */
  margin: 0 0 3% 3%;
  border-radius: 1em;
}

.backdrop-cat {
  position: absolute;
  height: 5vw;
  //width: 100%; /* Ensure it covers the width of the title-wrapper */
  z-index: -1; /* Ensure it is between title-text and back-fill */
  background-color: #ffffff37;
  bottom: -1vw;
}
</style>
