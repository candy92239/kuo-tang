<template>
  <div data-scroll data-scroll-repeat class="sec-wrapper">
    <h1>
      <b>{{ this.datas.name }}</b>
    </h1>
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
  },
  data() {
    return {
      datas: this.item,
      backdrops: [
        { style: { top: "calc(50vh - 12vw)", width: "31vw" }, delay: "0.1" },
        { style: { top: "calc(50vh - 6vw)", width: "30vw" }, delay: "0.15" },
        { style: { top: "calc(50vh)", width: "43vw" }, delay: "0.20" },
        { style: { top: "calc(50vh + 6vw)", width: "32vw" }, delay: "0.25" },
      ],
    };
  },
  methods: {},
  mounted() {},
  computed: {},
};
</script>

<style lang="scss">
.sec-wrapper {
  display: flex;
  flex-direction: column; /* Adjust the direction based on your layout */
  width: 100%;
  height: 100%;
}
.back-fill {
  background-color: azure;
  flex: 1;
  //width: 100%;
  margin: 3%;
}
</style>
