<template>
  <div>
    <Header/>
    <nuxt/>
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
</style>

<script>
import Header from "../components/Header"

export default {
  components: {
    Header,
  }
}
</script>

