<template>
  <div>
    <Header :style="{ color: colors.hex }" />
    <nuxt />
    <client-only>
      <div class="default-div-picker">
        <transition>
          <chrome-picker
            :value="colors"
            @input="updateValue"
            v-if="pickerView"
          ></chrome-picker>
        </transition>
      </div>
    </client-only>
    <button
      class="default-button-bucket"
      @click="pickerView = !pickerView"
      :style="{ backgroundColor: colors.hex }"
    >
      <img src="../static/bucket.svg" alt="bucket" />
    </button>
  </div>
</template>

<style lang="scss">
@import url(../static/reset.css);
body {
  font-family: Arial, Helvetica, sans-serif;
  font-weight: bold;
}
.default-button-bucket {
  position: fixed;
  width: 118px;
  height: 118px;
  border-radius: 50%;
  top: 882px;
  right: 99px;
  left: auto;
  border: 0px;
  box-shadow: 0px;
}
.default-div-picker {
  position: fixed;
  top: 700px;
  right: 50px;
  z-index: 3000;
}

/* 表示アニメーションをする前のスタイル */
.v-enter {
  opacity: 0;
}

/* 表示アニメーション後のスタイル */
.v-enter-to {
  opacity: 1;
}

/* 表示アニメーション動作中のスタイル */
.v-enter-active {
  transition: all 350ms;
}

/* 非表示アニメーション動作前のスタイル */
.v-leave {
  opacity: 1;
}

/* 非表示アニメーション動作後のスタイル */
.v-leave-to {
  opacity: 0;
}

/* 非表示アニメーション動作中のスタイル */
.v-leave-active {
  transition: all 350ms;
}
</style>

<script>
import Header from "../components/Header";
import { Chrome } from "vue-color";
import { store, actions } from "../store/store";

export default {
  components: {
    Header,
    "chrome-picker": Chrome
  },
  data: function() {
    return {
      pickerView: 0
    };
  },
  computed: {
    colors() {
      return store.colors;
    }
  },
  mounted() {
    // console.log(store.colors);
    document.addEventListener("click", e => {
      if (!e.target.closest(".default-button-bucket")) {
        this.pickerView = 0;
      }
    });
  },
  methods: {
    updateValue(e) {
      actions.colorsUpdate(e)
    }
  }
};
</script>
