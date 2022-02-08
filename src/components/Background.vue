<template>
  <img :src="require(`../assets/${this.source}`)" />
  <div class="FPO" ref="div1" />
  <div class="FPO" ref="div2" />
  <div class="FPO" ref="div3" />
</template>

<script>
export default {
  data() {
    return {
      source: "FPO1.jpg",
      sources: ["FPO1.jpg", "FPO2.jpg", "FPO3.jpg"],
    };
  },
  created() {
    window.addEventListener("scroll", this.handleScroll);
  },
  unmounted() {
    window.removeEventListener("scroll", this.handleScroll);
  },
  methods: {
    handleScroll() {
      let div1h = this.$refs.div1.clientHeight;
      let div2h = this.$refs.div2.clientHeight;
      let div3h = this.$refs.div3.clientHeight;
      let currentScrollPos =
        window.scrollY + document.documentElement.clientHeight * 0.1;
      if (currentScrollPos < div1h) {
        return (this.source = this.sources[0]);
      } else if (currentScrollPos < div1h + div2h) {
        return (this.source = this.sources[1]);
      } else if (currentScrollPos < div1h + div2h + div3h) {
        return (this.source = this.sources[2]);
      }
    },
  },
};
</script>

<style scoped lang="scss">
.FPO {
  height: 100vh;
  //background: #7890bd;
  outline: 2px dashed blue;
  z-index: 3;
}
img {
  width: 50%;
  position: fixed;
  top: 50%;
  left: 50%;
  margin-top: -25%;
  margin-left: -25%;
  z-index: -1;
}
</style>
