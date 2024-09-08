<template>
  <div>
    <div
      :style="{
        position: 'fixed',
        top: `${elementPosition.top}px`,
        left: `${elementPosition.left}px`,
        width: `${elementPosition.width}px`,
        height: `${elementPosition.height}px`,
        border: '2px solid red' /* Optional styling */,
        pointerEvents: 'none',
      }"
    ></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      elementPosition: {
        top: 0,
        left: 0,
        width: 0,
        height: 0,
      },
    };
  },
  methods: {
    // This method calculates the position of the DOM element relative to the viewport
    calculatePosition() {
      // Assuming you want to target a specific DOM element via its id, ref, or another means
      const targetElement = document.getElementById("target-element"); // replace with the actual target element selector

      if (targetElement) {
        const rect = targetElement.getBoundingClientRect();

        // Update the position and size of the overlay div
        this.elementPosition = {
          top: rect.top,
          left: rect.left,
          width: rect.width,
          height: rect.height,
        };

        // Show the overlay div
        this.showOverlay = true;
      } else {
        console.error("Target element not found.");
      }
    },
  },
};
</script>

<style scoped>
/* Optional CSS for styling purposes */
</style>
