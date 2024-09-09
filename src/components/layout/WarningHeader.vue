<template>
  <div
    class="warning-header"
    v-if="elementVisible"
    @click="$emit('wasClicked')"
  >
    Hi again! This page is under construction. <b>Click me</b> to see the
    information page.
  </div>
</template>

<script>
export default {
  data() {
    return {
      elementVisible: false,
    };
  },
  created() {
    setTimeout(() => (this.elementVisible = true), 3000);
  },
};
</script>

<style scoped lang="scss">
div {
  position: fixed;
  height: auto;
  width: 20em;
  padding: 1em;
  margin: 1em;
  background: #84c0c6;
  z-index: 999;
  cursor: pointer;
  opacity: 0.75;
  transition: opacity 0.25s;
  border-radius: 1em;
  &:hover {
    opacity: 1;
  }
}
</style>
