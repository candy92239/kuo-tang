<template>
  <div class="msg">
    <p>Hi there! This page is under construction!</p>
    <p>
      In the meantime, please visit my
      <a href="https://candytang3.wixsite.com/candytang"
        ><strong> old portfolio page</strong></a
      >.
    </p>
    <p>
      You can also download my
      <a href="2024 Mar Resume.pdf" target="_blank"><strong> resume</strong></a
      >,<br />
      take a look at my
      <router-link to="/devl"><strong> eLearning demo</strong></router-link
      >,<br />
      check out my
      <a href="https://www.linkedin.com/in/candytang92239/" target="_blank"
        ><strong> LinkedIn page</strong></a
      >,<br />
      or give me a shout at
      <a href="mailto:candy.tang@mail.utoronto.ca"
        ><strong> candy.tang@mail.utoronto.ca</strong></a
      >, thank you : )!
    </p>
  </div>
  <div class="progress" @click="$emit('wasClicked')">
    <p>
      If you're curious on how I'm doing, <b>click this box</b> to peek on my
      developement process.
      <br />
      <b>Warning:</b> Expect broken stuffs here and there.
    </p>
    <div class="progress-bar">
      <div class="progress-bar-fill" />
    </div>
    <p>Current progress: <b>20%</b></p>
  </div>
  <img class="bg-image" src="@/assets/Construction.png" />
</template>

<script>
export default {
  data() {
    return { windowTooSmall: false };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #1b4965;
}
.msg {
  position: relative;
  padding: 3em;
  margin: 1em;
  background-color: rgba(255, 255, 255, 0.9);
  border-radius: 1em;
  //pointer-events: none;
}
.progress {
  position: relative;
  padding: 2em;
  margin: 1em;
  background-color: #1b4965;
  color: #ffffff;
  border-radius: 1em;
  display: flex;
  flex-direction: column;
  justify-content: center;

  transition: background-color 0.25s;
  &:hover {
    cursor: pointer;
    background-color: #285672;
  }
}
.progress-bar {
  display: block;
  //background: #f2e2d2;
  height: 1em;
  width: 100%;
  border: 1.5px dashed white;
  border-radius: 5px;
}
.progress-bar-fill {
  background: #f2e2d2;
  width: 20%;
  height: inherit;
}
.bg-image {
  position: absolute;
  min-width: 110%;
  min-height: 100%;
  opacity: 0.85;
  filter: blur(5px);
  z-index: -1;
  //will-change: transform;
  //backdrop-filter: blur(5px);
}
</style>
