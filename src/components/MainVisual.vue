<template>
  <div class="visual-wrapper" :class="{ zoomed: tableClicked }">
    <Transition>
      <div
        :class="{ normalclass: true, disappear: tableHovered }"
        v-if="!tableClicked"
      >
        <VisualComp name="bed_front" @VCclicked="test" />
      </div>
    </Transition>
    <VisualComp name="bed_back" @VCclicked="test" />
    <!-- TODO: all assets fpo -->
    <VisualComp name="table" @VCclicked="test" />
  </div>
</template>

<script>
import VisualComp from "@/components/layout/VisualComp.vue";

export default {
  name: "MainVisual",
  components: {
    VisualComp,
  },
  data() {
    return { tableHovered: false, tableClicked: false };
  },
  methods: {
    toggle(el) {
      this[el] = !this[el];
    },
    test(event) {
      if (event.id == "table") {
        if (event.type == "click") {
          this.tableClicked = !this.tableClicked;
        } else if (event.type == ("mouseleave" | "mouseenter")) {
          this.tableHovered = !this.tableHovered;
        }
      }
    },
  },
};
</script>

<style scoped lang="scss">
.visual-wrapper {
  position: absolute;
  top: 0%;
  left: 50%;
  transform: translate(-50%, 10%);
  width: 80vh;
  height: 80vh;
  display: flex;
  align-items: center;
  transition: transform-origin 1s, width 1s, height 1s, top 1s, left 1s,
    transform 1s;
  &.zoomed {
    transform-origin: 59.895% 41.384%;
    transform: scale(1.5);
    //TODO: transfor origin to clicked item's position + 50% width/height < do it in visual comp, emit the value
  }
}
.normalclass {
  transition: opacity 0.5s;
}
.disappear {
  opacity: 0.2;
}

.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
