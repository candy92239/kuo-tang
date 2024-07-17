<template>
  <div
    :class="['scroll-wrapper', { 'smooth-scroll-active': !mobileTrue }]"
    data-scroll-container
    ref="scrollContainer"
  >
    <div class="sec1 glass">
      <div class="sec1-text">
        <h1 data-scroll-speed="4" data-scroll>
          Hi there :) <br />
          I’m
          <router-link
            to="/about"
            style="text-decoration: none"
            @click="hideTooltip"
          >
            <span class="outlined"> Kuo</span> </router-link
          >, <br />how can I help you today?
        </h1>
        <div
          v-for="(width, index) in backdropWidths"
          :key="index"
          class="backdrop"
          :style="{ top: `calc(50vh - ${(2 - index) * 6}vw)`, width: width }"
          data-scroll
          data-scroll-speed="4"
          :data-scroll-delay="(index + 1) * 0.05"
        ></div>
      </div>
      <div class="sec1-selections">
        <h1>I’m looking for:</h1>
        <div class="buttons-wrap">
          <ButtonComp
            v-for="(item, index) in datas"
            :key="index"
            :id="`${item.source}_wrap`"
            :item="item"
            data-scroll
            data-scroll-speed="4"
            :data-scroll-delay="(index + 1) * 0.04 + 0.1"
            @jumpTo="jumpToSection"
            class="button"
          />
        </div>
      </div>
      <div class="float-text">Or scroll down to explore my workspace</div>
    </div>
    <div style="height: 15vh; background-color: #f7ede462"></div>
    <div
      class="spacer"
      data-scroll
      data-scroll-repeat
      data-scroll-call="triggerFunction"
    ></div>
    <div
      v-for="(item, index) in datas"
      :key="index"
      :id="`${item.id}_wrap`"
      class="main-sec-wrap"
    >
      <MainSection
        :id="item.id"
        :data-scroll-id="item.source"
        :item="item"
        :index="index"
        data-scroll-call="catViewing"
        data-scroll-offset="30%"
        data-scroll-position="top"
        class="cat_wrapper"
      />
    </div>
  </div>
</template>

<script>
import ButtonComp from "@/components/layout/ButtonComp.vue";
import MainSection from "@/components/layout/MainSection.vue";
import mainIcons from "@/datas/mainContents.json";
import anime from "animejs/lib/anime.es.js";
import LocomotiveScroll from "locomotive-scroll";
import "locomotive-scroll/dist/locomotive-scroll.css";
import tippy, { followCursor, roundArrow } from "tippy.js";
import "tippy.js/animations/shift-away.css";
import "tippy.js/dist/tippy.css";

export default {
  components: { ButtonComp, MainSection },
  watch: {
    data(newVal) {
      this.jumpToSection(newVal);
    },
  },
  data() {
    return {
      datas: mainIcons,
      scroll: null,
      secViewing: false,
      spacerViewing: false,
      backdropWidths: ["31vw", "30vw", "43vw", "32vw"],
      tippyInstances: [], // Define tippyInstances here
    };
  },
  props: { warningClosed: Boolean, mobileTrue: Boolean, data: String },
  emits: ["jumpTo", "secZoom", "blurred"],
  methods: {
    handleJumpToSection(sectionId) {
      // Logic to handle the jump to the specified section
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    },
    catViewing(value) {
      this.$emit("secZoom", value);
    },
    jumpToSection(value) {
      const element = document.getElementById(value);
      this.scroll.scrollTo(element);
    },
    initLocomotiveScroll() {
      this.scroll = new LocomotiveScroll({
        el: this.$refs.scrollContainer,
        smooth: true,
        scrollFromAnywhere: true,
        lerp: 0.07,
      });

      this.scroll.on("call", (func, state, obj) => {
        if (func === "catViewing") {
          if (state === "enter") {
            this.secViewing = true;
            this.$emit("blurred", false);
            this.$emit("secZoom", obj.id);
          } else if (obj.id == "des" && !this.spacerViewing) {
            this.$emit("secZoom", "RESET");
            this.secViewing = false;
          }
        } else if (func === "triggerFunction") {
          if (state === "enter") {
            this.spacerViewing = false;
            this.$emit("blurred", false);
          } else {
            this.spacerViewing = true;
            if (!this.secViewing) {
              this.$emit("blurred", true);
            }
          }
        }
      });
    },
    animeBackdrop() {
      anime({
        targets: ".backdrop",
        scaleX: [0, 1],
        easing: "easeOutQuart",
        loop: false,
        delay: anime.stagger(500),
      });
    },
    hideTooltip() {
      const tooltipInstance = this.tippyInstances.find((instance) =>
        instance.props.content.includes("Kuo Tang")
      );
      if (tooltipInstance) {
        tooltipInstance.hide();
      }
    },
  },
  mounted() {
    if (!this.mobileTrue) {
      this.initLocomotiveScroll();
    }
    this.animeBackdrop();
    this.tippyInstances = tippy(".outlined", {
      theme: "glossary",
      content:
        "<span class='glosTitle'><b>Kuo Tang</b></span> <br>/kwoʊ ˈtæŋ/<br><br>Your Jill of all trade on learning material design - from adult eLearning development to children's book illustration.",
      followCursor: true,
      trigger: "mouseenter",
      hideOnClick: false,
      placement: "top-start",
      allowHTML: true,
      arrow: roundArrow,
      plugins: [followCursor],
      animation: "shift-away",
    });
  },
};
</script>

<style lang="scss">
.scroll-wrapper {
  z-index: 100;
  perspective: 1px;
  display: block;
  width: 0;
  &.smooth-scroll-active {
    position: fixed;
  }
}
.spacer {
  height: 110vh;
  width: 0;
}
.backdrop {
  position: absolute;
  left: 3vw;
  top: 43vh;
  height: 6vw;
  z-index: -1;
  background-color: #8bcedd;
  transform-origin: top left;
}
h1 {
  font-size: 7vw;
  line-height: 1;
  margin: auto 0.5em;
  font-weight: 500;
}
.sec1 {
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100vh;
  position: relative;
  background-color: #f7ede462;
  z-index: -1;
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
  //border: 5px solid #000000;
}

.main-sec-wrap {
  height: 120vh;
  width: 100vw;
  position: relative;
  background-color: #00000000;
}

.sec1-text > h1 {
  transform: translateY(-3vh);
  text-align: left;
  width: 50vw;
  .outlined {
    font-size: 10vw;
    font-weight: 600;
    color: rgba(255, 228, 196, 0);
    -webkit-text-stroke: 0.35vw #14364c;
    transition: all 0.3s ease;
  }
  .outlined:hover {
    cursor: pointer;
    color: #14364c;
    font-size: 12vw;
  }
}
.sec1-selections {
  display: flex;
  flex-direction: column;
  justify-content: center;
  right: 0;
  width: 50vw;
  height: 50vh;
  padding: 3vw;
  position: absolute;
  > h1 {
    color: #14364c;
    font-size: 5vw;
    margin: 0.2em 0;
  }
}
p.t1 {
  position: fixed;
  bottom: 2%;
  right: 0;
  left: 0;
  z-index: 100;
}
.buttons-wrap {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  padding: 0 2vw;
}
.tippy-box[data-theme~="glossary"] {
  background-color: #b3d8dc;
  color: #14364c;
  font-family: Avenir;
  font-size: 1em;
  border: 1px solid white;
  padding: 0.5em;
  .tippy-svg-arrow > svg:first-child {
    fill: white;
  }
  .tippy-svg-arrow > svg:last-child {
    fill: #b3d8dc;
  }
}
.glosTitle {
  font-size: 2em;
}
.button:hover {
  z-index: 4;
}
.float-text {
  position: absolute;
  width: 100%;
  bottom: 0;
  display: flex;
  justify-content: center; /* Centers the text horizontally */
  align-items: center;
  margin: 2%;
  font-size: 1.3em;
  -webkit-text-stroke: 1px #ffffff20;
  font-weight: 600;
  //color: rgba(0, 0, 0, 0);
}

.cat_wrapper {
  height: 100vh;
  position: sticky;
  top: 0;
}

//responsive elements goes here:

@media screen and (orientation: landscape),
  screen and (min-aspect-ratio: 1.5/1) {
  .cat_wrapper {
    width: 65vw;
    padding: 0 0 3% 3%;
  }
}
@media screen and (min-aspect-ratio: 1/1) and (max-aspect-ratio: 1.5/1) {
  .cat_wrapper {
    width: 65vw;
    padding: 0 0 3% 3%;
  }
}
@media screen and (orientation: portrait), screen and (max-aspect-ratio: 1/1) {
  .cat_wrapper {
    width: auto;
    padding: 3%;
  }
}
</style>
