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
    getDarkMode: state => state.darkMode,
    isNavOpened: state => state.openNav,
  },
  actions: {
    toggleDarkMode: ({ state }) => {
      state.darkMode = !state.darkMode;

      localStorage.setItem('dark-mode', JSON.stringify(state.darkMode));
    },
    initDarkMode: ({ state }) => {
      const darkMode = localStorage.getItem('dark-mode');

      if (!darkMode) {
        localStorage.setItem('dark-mode', JSON.stringify(state.darkMode));
        return;
      }

      state.darkMode = JSON.parse(darkMode);
    },
    toggleNav: ({ state }) => {
      state.openNav = !state.openNav;
    },
  },
};

export default store;
