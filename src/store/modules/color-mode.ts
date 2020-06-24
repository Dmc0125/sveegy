import { Module } from 'vuex';

interface ColorModeState {
  darkMode: boolean;
}

const store: Module<ColorModeState, {}> = {
  state: () => ({
    darkMode: false,
  }),
  getters: {
    isDarkMode: state => state.darkMode,
  },
  actions: {
    toggleDarkMode: ({ state }) => {
      state.darkMode = !state.darkMode;
    },
  },
};

export default store;
