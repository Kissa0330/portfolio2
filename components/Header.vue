<template>
  <header>
    <div class="header-div-wrap_right">
      <h1 class="header-h1-title">RAIKA'S PORTFOLIO</h1>
    </div>
    <div class="header-div-wrap_left">
      <h2 class="header-h2-subtitle">TOP</h2>
      <h2 class="header-h2-subtitle">ABOUT</h2>
      <h2 class="header-h2-subtitle">WORKS</h2>
    </div>
  </header>
</template>

<style lang="scss">
@import "../assets/base";

header {
  display: flex;
  justify-content: space-between;
  .header-div-wrap_right {
    margin: 42px 0 0 80px;
  }
  .header-h1-title {
    font-size: 50px;
  }
  .header-div-wrap_left {
    display: flex;
    margin: 55px;
  }
  .header-h2-subtitle {
    font-size: 35px;
    margin: 0 75px 0 0;
  }
}
</style>
<script>
export default {
  name: "Header"
};
</script>
