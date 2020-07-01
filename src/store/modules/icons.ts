import { Module } from 'vuex';

import icons from '@/svg-icons/svg-icons';

import { Icon } from '@/types/svg-icons';

interface IconsState {
  icons: Icon[];
  iconSize: string;
}

const store: Module<IconsState, {}> = {
  state: () => ({
    icons,
    iconSize: '2rem',
  }),
  getters: {
    getIcons: state => state.icons,
    getIcon: state => (iconId: string) => state.icons.find(({ id }) => id === iconId),
    getSearchedIcons: state => (searchTerm: string) => {
      if (!searchTerm.length) {
        return state.icons;
      }

      const regexp = new RegExp(searchTerm);

      const searchedIcons = state.icons.filter(({ id, variations }) => (
        id.match(regexp) || variations.some(variation => variation.match(regexp))
      ));

      return searchedIcons;
    },

    getIconSize: state => state.iconSize,
  },
  actions: {
    setIconSize: ({ state }, size) => {
      state.iconSize = size;
    },
  },
};

export default store;
