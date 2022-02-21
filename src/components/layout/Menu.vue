<template>
  <div
    class="menu-wrapper"
    @mouseenter="menuActive - true"
    @mouseover="menuActive = true"
    @mouseleave="menuActive = false"
  >
    <KinesisContainer>
      <KinesisElement :strength="10" :type="depth">
        <div class="menu-button">
          <div v-if="!menuActive">Menu</div>
          <div v-if="menuActive">Close</div>
        </div>
      </KinesisElement>
      <Transition>
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
      </Transition>
    </KinesisContainer>
  </div>
</template>

<script>
import { KinesisContainer, KinesisElement } from "vue-kinesis";
import Routes from "@/datas/routes.js";

export default {
  name: "Menu",
  components: { KinesisContainer, KinesisElement },
  data() {
    return { menuActive: false, listItems: Routes };
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
    background: rgba(255, 255, 255, 0.721);
    padding: 0.5em 0em;
    //margin: 1em 0em;
    display: flex;
    flex-direction: column;
    transform-origin: top center;
    border-radius: 1em;
    &.menu-item-wrapper {
      width: 100%;
    }
  }
}

a {
  padding: 0.5em 0em;
  margin: 0.25em 0.5em;
  display: inline-block;
  width: calc(100% - 1em);

  color: #2c3e50;
  border-radius: 0.75em;
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
