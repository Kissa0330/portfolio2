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
  @include larger-pc {
    .top-div-Hello {
      margin: 190px 0 0 80px;
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
  @include pc {
    .top-div-Hello {
      margin: 157px 0 0 53px;
      width: 403px;
      height: 220px;
      text-align: left;
      position: relative;
      .top-h1-Hello_text {
        position: absolute;
        left: 17.5px;
        bottom: 17.5px;
        font-size: 100px;
        color: white;
      }
    }
    .top-img-me {
      margin: 60px 56px 0 0;
      width: 596px;
      height: 353px;
    }
  }
}

.top-div-introduction {
  @include larger-pc {
    margin: 0 0 0 80px;
    width: 877px;
    height: 131px;
    text-align: center;
    .top-h3-introduction {
      padding: 37.5px 0 0 0;
      color: white;
      font-size: 50px;
    }
  }
  @include pc {
    margin: 40px 0 0 53px;
    width: 575px;
    height: 92px;
    text-align: center;
    .top-h3-introduction {
      padding: 28px 0 0 0;
      color: white;
      font-size: 32px;
    }
  }
}
</style>
