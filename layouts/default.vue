<template>
  <div>
    <Header/>
    <nuxt/>
    <button class="default-button-bucket"><img src="../static/bucket.svg" alt="bucket"></button>
  </div>
</template>

<style lang="scss">
@import url(../static/reset.css);
@import "../assets/base";
body{
  font-family: Arial, Helvetica, sans-serif;
  font-weight: bold;
  color: $basecolor;
}
.default-button-bucket{
  position: fixed;
  background-color: $basecolor;
  width: 118px;
  height: 118px;
  border-radius: 50%;
  top: 882px;
  right: 99px;
  left: auto;
}
</style>

<script>
import Header from "../components/Header"

export default {
  components: {
    Header,
  }
}
</script>

