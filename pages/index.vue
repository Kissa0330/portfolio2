<template>
  <div>
    <div class="top-div-wrap">
      <div class="top-div-Hello" :style="{ backgroundColor: colors.hex }">
        <h1 class="top-h1-Hello_text">Hello</h1>
      </div>
      <img class="top-img-me" src="../static/me1.svg" alt="It's me" />
    </div>
    <div class="top-div-introduction" :style="{ backgroundColor: colors.hex }">
      <h3 class="top-h3-introduction">I'm frontend engineer and designer</h3>
    </div>
  </div>
</template>

<script>
import { store } from "../store/store";
export default {
  name: "top",
  computed: {
    colors() {
      return store.colors;
    }
  }
};
</script>

<style lang="scss">
@import "../assets/base";

.top-div-wrap {
  display: flex;
  justify-content: space-between;
  .top-div-Hello {
    margin: 190px 0 0 80px;
    // background-color: $basecolor;
    width: 614px;
    height: 306px;
    text-align: left;
    position: relative;
    .top-h1-Hello_text {
      position: absolute;
      left: 20px;
      bottom: 25px;
      font-size: 150px;
      color: white;
    }
  }
  .top-img-me {
    margin: 80px 99px 0 0;
  }
}

.top-div-introduction {
  margin: 0 0 0 80px;
  width: 877px;
  height: 131px;
  // background-color: $basecolor;
  text-align: center;
  .top-h3-introduction {
    padding: 37.5px 0 0 0;
    color: white;
    font-size: 50px;
  }
}
</style>
