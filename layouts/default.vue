<template>
  <div :style="inputColorVar">
    <Header />
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
      <img class="default-img-bucket" src="../static/bucket.svg" alt="bucket" />
    </button>
  </div>
</template>

<style lang="scss">
@import url(../static/reset.css);
@import "../assets/base";
body {
  font-family: Arial, Helvetica, sans-serif;
  font-weight: bold;
  text-align: center;
  margin: 0 auto 0 auto;
  color: var(--color);
  @include pc {
    p {
      font-size: 20px;
    }
    h1 {
      font-size: 60px;
    }
    h2 {
      font-size: 55px;
    }
    h3 {
      font-size: 35px;
    }
    h4 {
      font-size: 25px;
    }
  }
}
button:focus {
  outline: 0;
}
.default-button-bucket {
  position: fixed;
  left: auto;
  border: 0px;
  box-shadow: 0px;
  border-radius: 50%;
  cursor: pointer;
  @include larger-pc {
    width: 118px;
    height: 118px;
    top: 882px;
    right: 99px;
  }
  @include pc {
    width: 80px;
    height: 80px;
    top: 640px;
    right: 56px;
    .default-img-bucket {
      width: 34px;
      height: 26px;
    }
  }
}
.default-div-picker {
  position: fixed;
  z-index: 3000;
  @include larger-pc {
    top: 700px;
    right: 50px;
  }
  @include pc {
    top: 480px;
    right: 10px;
    .vc-chrome {
      width: 180px;
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
    },
    inputColorVar() {
      return {
        "--color": this.colors.hex
      };
    }
  },
  mounted() {
    document.addEventListener("click", e => {
      if (
        !e.target.closest(".default-button-bucket") &&
        !e.target.closest(".default-div-picker")
      ) {
        this.pickerView = 0;
      }
    });
  },
  methods: {
    updateValue(e) {
      actions.colorsUpdate(e);
    }
  }
};
</script>
