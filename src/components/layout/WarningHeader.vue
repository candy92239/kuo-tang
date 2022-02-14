<template>
  <div
    class="warning-header"
    v-if="elementVisible"
    @click="$emit('wasClicked')"
  >
    Nothing much to see, eh? <b>Click me</b> to bring back the construction
    page.
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
  z-index: 100;
  cursor: pointer;
  opacity: 75%;
  transition: opacity 0.25s;
  border-radius: 1em;
  &:hover {
    opacity: 100%;
  }
}
</style>
