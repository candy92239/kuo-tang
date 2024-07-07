<template>
  <div
    class="backdrop"
    data-scroll
    data-scroll-speed="4"
    :data-scroll-delay="dataScrollDelay"
    :style="style"
  ></div>
</template>

<script>
export default {
  props: {
    style: Object,
    dataScrollDelay: String,
  },
};
</script>

<style scoped>
.backdrop {
  position: absolute;
  left: 3vw;
  height: 6vw;
  z-index: -1;
  background-color: #8bcedd;
  transform-origin: top left;
}
</style>
