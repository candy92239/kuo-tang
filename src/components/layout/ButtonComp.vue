<template>
  <div class="button-wrap">
    <div class="icon">
      <svg>
        <InlineSvg :src="require(`@/assets/UI/${datas.source}L2.svg`)" />
      </svg>
    </div>
    <div class="text">
      <p>{{ datas.name }}</p>
    </div>
  </div>
</template>
å

<script>
import InlineSvg from "vue-inline-svg";
export default {
  emits: ["VCmouse"],
  name: "ButtonComp",
  components: { InlineSvg },
  props: {
    item: {
      type: Object,
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
.button-wrap {
  //position: relative;
  max-width: calc(50vw / 4);
  //padding: 0 2vw;
  flex-shrink: 0;
  flex-grow: 0;
}
.icon {
  //position: relative;
  display: flex;
  //flex: 1 0 100%;
  //width: 100%;
  svg {
    //position: absolute;
    height: 100%;
    width: 100%;
  }
}

.text {
  // display: flex;
  // flex-direction: column;
  // justify-content: center;
  white-space: nowrap;
  margin: 0;
  p {
    color: white;
  }
}
</style>
