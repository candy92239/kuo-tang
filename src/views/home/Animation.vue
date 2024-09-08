<template>
  <transition name="slide-fade" mode="out-in">
    <div class="animation-page">
      <h1>Animation Page</h1>
      <p>This is the content of the Animation page.</p>
      <button @click="navigateBack">Go Back to Home</button>
    </div>
  </transition>
</template>

<script>
export default {
  methods: {
    navigateBack() {
      this.$router.push("/"); // Navigate back to Home
    },
  },
};
</script>

<style scoped>
.animation-page {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: white;
  z-index: 1000;
  padding: 2em;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
  overflow-y: auto; /* To handle scrolling if the content is long */
}

.slide-fade-enter-active {
  transition: all 0.5s ease;
}

.slide-fade-leave-active {
  transition: all 0.5s ease;
}

.slide-fade-enter, .slide-fade-leave-to /* .slide-fade-leave-active in <2.1.8 */ {
  transform: translateX(100%);
  opacity: 0;
}
</style>
