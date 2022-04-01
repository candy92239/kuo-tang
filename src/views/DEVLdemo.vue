<template>
  <div class="container">
    <iframe :src="`demo/demoindex.html`" width="100%" height="100%" frameborder="0">
    </iframe>
  </div>
</template>
<script>
export default {
  mounted() {
    document.getElementsByClassName("menu-wrapper")[0].style.display = "none";
  },
};
</script>

<style scoped lang="scss">
.container {
  height: 100vh;
}

.menu-wrapper {
  display: none;
}
</style>
