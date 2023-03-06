<template>
  <div data-scroll data-scroll-repeat>
    <h1>
      <b>{{ this.datas.name }}</b> Lorem ipsum dolor sit asmet, consectetuer
      adipiscing elit. Aenean commodo ligula eget dolor.
    </h1>
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
    return { datas: this.item };
  },
  methods: {},
  mounted() {},
  computed: {},
};
</script>

<style lang="scss"></style>
