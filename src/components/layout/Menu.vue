<template>
  <div
    class="menu-wrapper"
    @mouseenter="menuActive - true"
    @mouseover="menuActive = true"
    @mouseleave="menuActive = false"
  >
    <KinesisContainer>
      <KinesisElement :strength="10" :maxX="50">
        <div class="menu-button">
          <div v-if="!menuActive">Menu</div>
          <div v-if="menuActive">Close</div>
        </div>
      </KinesisElement>
      <Transition>
        <div class="menu-list-wrapper" v-if="menuActive">
          <router-link to="/">Home</router-link>
          <router-link to="/about">About</router-link>
        </div>
      </Transition>
    </KinesisContainer>
  </div>
</template>

<script>
import { KinesisContainer, KinesisElement } from "vue-kinesis";
export default {
  name: "Menu",
  components: { KinesisContainer, KinesisElement },
  data() {
    return { menuActive: false };
  },
  methods: {
    toggle(el) {
      this[el] = !this[el];
      console.log(this.menuActive);
    },
  },
};
</script>

<style scoped lang="scss">
div {
  padding: 0.5em;
}
.menu-wrapper {
  margin: 2em;
  z-index: 999;
  position: fixed;
  right: 0;
}
.menu-button {
  margin: 0em 1.5em;
  cursor: pointer;
  border-radius: 3em;
  transition: background 0.25s, color 0.25s;
  &:hover {
    color: #173f58;
    background: white;
  }
}
.menu-list-wrapper {
  background: oldlace;
  margin: 1em 0em;
  display: flex;
  flex-direction: column;
  transform-origin: top center;
}
a {
  padding: 0.5em;
  margin: 0.25em 0.5em;

  color: #2c3e50;
  border-radius: 0.5em;
  transition: background 0.5s, color 0.5s;
  text-decoration-line: none;
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

.v-enter-active,
.v-leave-active {
  transition: all 0.25s ease;
}

.v-enter-from,
.v-leave-to {
  transform: scale(1, 0);
}
</style>
