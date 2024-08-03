<template>
  <div
    class="jump-to-top"
    @mouseover="showText = true"
    @mouseleave="showText = false"
  >
    <div class="icon">⇑</div>
    <div class="text" :class="{ visible: showText }">JUMP TO TOP</div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      showText: false,
    };
  },
};
</script>
<style scoped>
.jump-to-top {
  display: flex;
  align-items: center;
  position: fixed;
  bottom: 0;
  right: 0;
  margin: 1em;
  padding: 0.5em;
  background: #84c0c6;
  border-radius: 1em;
  font-size: 1em;
  font-weight: 500;
  z-index: 999;
  cursor: pointer;
  width: 3em;
  overflow: hidden;
  transition: width 0.5s ease;
}

.jump-to-top:hover {
  width: 10em; /* Adjust to fit the text */
}

.text {
  display: inline-block;
  white-space: nowrap;
  overflow: hidden;
  opacity: 0;
  transform: translateX(100%);
  transition: transform 0.5s ease, opacity 0.5s ease;
}

.text.visible {
  opacity: 1;
  transform: translateX(0);
}

.icon {
  font-size: 1.5em;
}
</style>
