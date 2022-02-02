<template>
  <img src="@/assets/Construction.png" />
  <div class="hello">
    <p>Hi there! This page is under construction</p>
    <p>
      In the meantime, please visit my
      <a href="https://candytang3.wixsite.com/candytang"
        ><strong> old portfolio page</strong></a
      >
    </p>
    <br /><br />
    <p>
      You can also download my
      <a href="2022 Feb Resume.pdf" target="_blank"><strong> resume</strong></a
      >,
    </p>
    <p>
      check out my
      <a href="https://www.linkedin.com/in/candytang92239/" target="_blank"
        ><strong> LinkedIn page</strong></a
      >,
    </p>
    <p>
      or give me a shout at
      <a><strong> candy.tang@mail.utoronto.ca</strong></a
      >, thank you : )!
    </p>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String,
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
  color: #46b1c9;
}
img {
  //padding: 30% 0;
  max-width: 40%;
}
</style>
