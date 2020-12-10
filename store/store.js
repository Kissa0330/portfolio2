import Vue from "vue";
const store = Vue.observable({ colors: { hex: "#212121" } });

const actions = {
  colorsUpdate(colors) {
    return (store.colors = colors);
  }
};
export { store, actions };
