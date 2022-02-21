<template>
  <Menu />
  <router-view />
</template>
<script>
import Menu from "@/components/layout/Menu.vue";

export default {
  components: {
    Menu,
  },
};
</script>
<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  position: fixed;
  height: 4em;
  margin: auto;
  z-index: 1000;

  width: 100%;
  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
