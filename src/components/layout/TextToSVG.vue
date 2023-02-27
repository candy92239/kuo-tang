<template>
  <div class="svg-text">
    <svg viewBox="0 0 1000 1000" :width="width" :height="height">
      <path :d="path" />
    </svg>
  </div>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      required: true,
    },
    width: {
      type: String,
      default: "100%",
    },
    height: {
      type: String,
      default: "100%",
    },
    strokeWidth: {
      type: Number,
      default: 2,
    },
    strokeColor: {
      type: String,
      default: "#000",
    },
  },
  computed: {
    path() {
      const path = document.createElementNS(
        "http://www.w3.org/2000/svg",
        "path"
      );
      const text = document.createTextNode(this.text);
      path.appendChild(text);
      const pathLength = path.getTotalLength();
      path.setAttribute("stroke-dasharray", pathLength);
      path.setAttribute("stroke-dashoffset", pathLength);
      path.setAttribute("stroke-width", this.strokeWidth);
      path.setAttribute("stroke", this.strokeColor);
      path.setAttribute("fill", "none");
      return path.getAttribute("d");
    },
  },
};
</script>

<style scoped>
.svg-text {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
