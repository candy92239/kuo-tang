<template>
  <div
    class="menu-wrapper"
    @mouseenter="menuActive = true"
    @mouseleave="menuActive = false"
  >
    <div class="menu-button">
      <div v-if="!menuActive">Menu</div>
      <div v-else>Close</div>
    </div>
    <transition name="menu">
      <div class="menu-list-wrapper" v-if="menuActive">
        <div
          class="menu-item-wrapper"
          v-for="item in listItems"
          :key="item.name"
        >
          <router-link :to="item.path">
            {{ item.name }}
          </router-link>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
import Routes from "@/datas/routes.js";

export default {
  name: "Menu",
  data() {
    return {
      menuActive: false,
      listItems: Routes.filter((route) => route.meta.showInMenu),
    };
  },
};
</script>

<style scoped lang="scss">
.menu-wrapper {
  margin: 2em;
  z-index: 998;
  position: fixed;
  right: 0;
  .menu-button {
    margin: 0em 1.5em;
    padding: 2em;
    cursor: pointer;
    border-radius: 3em;
    transition: 0.25s;
    &:hover {
      color: #173f58;
      background: white;
    }
  }
  .menu-list-wrapper {
    background: rgba(255, 255, 255, 0.721);
    padding: 0.5em 0;
    display: flex;
    flex-direction: column;
    transform-origin: top center;
    border-radius: 1em;
    .menu-item-wrapper {
      width: 100%;
    }
  }
}

a {
  padding: 0.5em 0;
  margin: 0.25em 0.5em;
  display: inline-block;
  width: calc(100% - 1em);
  color: #2c3e50;
  border-radius: 0.75em;
  transition: background 0.5s, color 0.5s;
  text-decoration: none;
  &:hover {
    background: #5cbbd0;
    color: white;
  }
  &.router-link-exact-active {
    color: #2e899d;
    font-weight: bold;
    &:hover {
      color: white;
    }
  }
}

.menu-enter-active,
.menu-leave-active {
  transition: all 0.25s ease;
}

.menu-enter-from,
.menu-leave-to {
  transform: scale(1, 0);
  opacity: 0;
}
</style>
