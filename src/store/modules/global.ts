import { Module } from 'vuex';

interface GlobalState {
  darkMode: boolean;
  openNav: boolean;
}

const store: Module<GlobalState, {}> = {
  state: () => ({
    darkMode: false,
    openNav: false,
  }),
  getters: {
    isDarkMode: state => state.darkMode,
    isNavOpened: state => state.openNav,
  },
  actions: {
    toggleDarkMode: ({ state }) => {
      state.darkMode = !state.darkMode;
    },
    toggleNav: ({ state }) => {
      state.openNav = !state.openNav;
    },
  },
};

export default store;
