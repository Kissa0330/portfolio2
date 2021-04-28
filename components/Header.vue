<template>
  <header>
    <div class="header-div-wrap">
      <div class="header-div-wrap_right">
        <h1 class="header-h1-title">RAIKA'S PORTFOLIO</h1>
      </div>
      <div class="header-div-wrap_left">
        <transition>
        <Nuxt-link to="/">
          <div class="header-div-textwrap">
            <h2 class="header-h2-subtitle">TOP</h2>
            <div
              class="header-div-top_line top"
              :class="{ active: headerLineView === 1 }"
            />
          </div>
        </Nuxt-link>
        </transition>
        <transition>
        <Nuxt-link to="/about">
          <div class="header-div-textwrap">
            <h2 class="header-h2-subtitle">ABOUT</h2>
            <div
              class="header-div-top_line about"
              :class="{ active: headerLineView === 2 }"
            />
          </div>
        </Nuxt-link>
        </transition>
        <transition>
        <Nuxt-link to="/works">
          <div class="header-div-textwrap">
            <h2 class="header-h2-subtitle">WORKS</h2>
            <div
              class="header-div-top_line works"
              :class="{ active: headerLineView === 3 }"
            />
          </div>
        </Nuxt-link>
        </transition>
      </div>
    </div>
  </header>
</template>

<style lang="scss" scoped>
@import "../assets/base";

header {
  color: var(--color);
  width: 100%;
  .header-div-wrap {
    display: flex;
    @include larger-pc {
      height: 140px;
      justify-content: space-between;
      .header-div-wrap_right {
        margin: 42px 0 0 80px;
        .header-h1-title {
          font-size: 50px;
        }
      }
      .header-div-wrap_left {
        display: flex;
        margin: 55px;
        .header-h2-subtitle {
          font-size: 35px;
          margin: 0 75px 0 0;
        }
      }
    }


    @include pc {
      height: 120px;
      justify-content: space-between;
      .header-div-wrap_right {
        margin: 38px 0 0 50px;
        .header-h1-title {
          font-size: 40px;
        }
      }
      .header-div-wrap_left {
        display: flex;
        margin: 45px;

        a {
          text-decoration: none;
          &:visited {
            color: var(--color);
          }
        }
        .header-h2-subtitle {
          font-size: 28px;
          margin: 0 40.5px 0 0;
        }
        .header-div-top_line {
          background-color: var(--color);
          height: 3px;
          margin: 8px 0 0 -4px;
          width: 0px;
          &.active {
            &.top {
              width: 65px;
            }
            &.about {
              width: 118px;
              margin-left: -8px;
            }
            &.works {
              width: 125px;
              margin-left: -8px;
            }
          }
        }
      }
      // .header-div-wrap_left:hover {
      //   .header-div-top_line {
      //     // hover時のアニメーション記述
      //   }
      // }
    }
  }
}
.v-enter {
  opacity: 0;
}
.v-enter-to {
  opacity: 1;
}
.v-enter-active {
  transition: all 350ms;
}
.v-leave {
  opacity: 1;
}
.v-leave-to {
  opacity: 0;
}
.v-leave-active {
  transition: all 350ms;
}

</style>
<script>
import { store } from "../store/store";
export default {
  name: "Header",
  computed: {
    colors() {
      return store.colors;
    },
    headerLineView() {
      if (this.$route.path === "/") {
        return 1;
      } else if (this.$route.path === "/about") {
        return 2;
      } else {
        return 3;
      }
    }
  }
};
</script>
