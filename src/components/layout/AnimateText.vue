<template>
  <div ref="text">{{ displayText }}</div>
</template>

<script>
import anime from "animejs";

export default {
  data() {
    return {
      displayText: "",
      targetText: "Here is some text that will be animated.",
    };
  },

  mounted() {
    this.animateText();
  },

  methods: {
    animateText() {
      const text = this.$refs.text;

      anime({
        targets: this,
        displayText: this.targetText,
        easing: "linear",
        duration: 2000,
        update: () => {
          text.scrollTop = text.scrollHeight;
        },
      });
    },
  },
};
</script>
