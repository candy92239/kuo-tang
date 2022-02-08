<template>
  <div class="home">
    <ThreeTestPage />
  </div>
</template>

<script>
// @ is an alias to /src
import ThreeTestPage from "@/components/Background.vue";

export default {
  name: "Home",
  components: {
    ThreeTestPage,
  },
};
</script>
<style scoped lang="scss"></style>
