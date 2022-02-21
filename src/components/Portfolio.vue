<template>
  <div class="sec-1">
    <h1>Hi there! How can I help you today?</h1>
  </div>
  <div class="sec-2">
    <h1>22</h1>
  </div>
</template>

<script>
export default {
  name: "MainVisual",
  data() {
    return { tableHovered: false, tableClicked: false };
  },
  methods: {
    toggle(el) {
      this[el] = !this[el];
    },
    test(event) {
      if (event.id == "table") {
        if (event.type == "click") {
          this.tableClicked = !this.tableClicked;
        } else if (event.type == ("mouseleave" | "mouseenter")) {
          this.tableHovered = !this.tableHovered;
        }
      }
    },
  },
};
</script>

<style scoped lang="scss">
div {
  height: 100vh;
}
</style>
