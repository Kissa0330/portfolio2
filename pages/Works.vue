<template>
  <div
    class="works-div-worksContainer"
    :style="{ color: colors.hex, borderColor: colors.hex }"
  >
    <div
      class="works-div-captionContainer"
      :style="{ backgroundColor: colors.hex }"
    >
      <h1 class="works-h1-captionText">WORKS</h1>
    </div>
    <div class="works-div-works">
      <div
        class="works-div-work"
        v-for="(work, index) in works"
        :key="work"
        :class="{ active: index === 0 }"
      >
        <h2 class="works-div-workTitle">{{ work.name }}</h2>
        <h3 class="works-div-workTag">{{ work.category }}</h3>
        <svg
          class="works-svg-arrow"
          xmlns="http://www.w3.org/2000/svg"
          width="72.004"
          height="24.224"
          viewBox="0 0 72.004 24.224"
          :style="{ stroke: colors.hex }"
        >
          <g
            id="グループ_19"
            data-name="グループ 19"
            transform="translate(0 1.592)"
          >
            <line
              id="線_9"
              data-name="線 9"
              x2="72.004"
              transform="translate(0 20.633)"
              fill="none"
              stroke-width="4"
            />
            <line
              id="線_10"
              data-name="線 10"
              x2="20.582"
              y2="20.263"
              transform="translate(50.018 -0.167)"
              fill="none"
              stroke-width="4"
            />
          </g>
        </svg>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
@import "../assets/base";

.works-div-captionContainer {
  @include pc {
    margin: 60px 0 0 53px;
    width: 351px;
    height: 123px;
    & h1 {
      color: white;
      padding-top: 32px;
    }
  }
}

.works-div-work {
  display: flex;
  align-items: flex-end;
  @include pc {
    margin: 50px 0 0 57px;
    &.active {
      margin: 60px 0 0 57px;
    }
    .works-div-workTag {
      margin: 0 0 0 20px;
    }
    .works-svg-arrow {
      margin: 0 0 6px 57px;
    }
  }
}
</style>
<script>
import { store } from "../store/store";

export default {
  name: "Works",
  data: function() {
    return {
      works: [
        { name: "Noerr", category: "- UI design" },
        { name: "DisPlay", category: "- UI design / Frontend" },
        { name: "Gallery", category: "- Others works" }
      ],
      isActive: 1
    };
  },
  computed: {
    colors() {
      return store.colors;
    }
  }
};
</script>
