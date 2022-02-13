<template>
  <div class="home">
    <ThreeTestPage />
  </div>
</template>

<script>
// @ is an alias to /src
import ThreeTestPage from "@/components/MainVisual.vue";

export default {
  name: "Home",
  components: {
    ThreeTestPage,
  },
};
</script>
<style scoped lang="scss">
.home {
  width: 100%;
  height: 100vh;
  background: #f2e2d2;
}
</style>
