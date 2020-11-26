import Vue from "vue";
/* Create a reactive store */
const store = Vue.observable({ colors: { hex: "#212121" } });

/* Create centralized actions for updating the store */
const actions = {
  colorsUpdate(colors) {
    return (store.colors = colors);
  }
};
export { store, actions };
