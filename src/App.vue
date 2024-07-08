<template>
  <Menu />
  <div class="main">
    <transition name="slide">
      <router-view v-slot="{ Component, route }">
        <!-- <router-view /> -->
        <component :is="Component" :key="route.path" />
      </router-view>
    </transition>
  </div>
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
@import "@/assets/scss/main.scss";

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
.slide-enter-active,
.slide-leave-active {
  transition: transform 0.5s ease;
}

.slide-enter-from {
  transform: translateX(100%);
}

.slide-enter-to {
  transform: translateX(0);
}

.slide-leave-from {
  transform: translateX(0);
}

.slide-leave-to {
  transform: translateX(-100%);
}
</style>
