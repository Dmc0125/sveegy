import { Module } from 'vuex';

import icons from '@/svg-icons/svg-icons';

import { Icon } from '@/types/svg-icons';

interface IconsState {
  icons: Icon[];
  iconSize: string;
  iconColor: string | null;
}

const store: Module<IconsState, {}> = {
  state: () => ({
    icons,
    iconSize: '2rem',
    iconColor: 'currentColor',
  }),
  getters: {
    getIcons: state => state.icons,
    getIcon: state => (iconId: string) => state.icons.find(({ id }) => id === iconId),
    getSearchedIcons: state => (searchTerm: string) => {
      if (!searchTerm.length) {
        return state.icons;
      }

      const regexp = new RegExp(searchTerm.toLowerCase());

      const searchedIcons = state.icons.filter(({ id, variations, type }) => (
        id.match(regexp)
        || variations.some(variation => variation.match(regexp)
        || type.match(regexp))
      ));

      return searchedIcons;
    },

    getIconSize: state => state.iconSize,

    getIconColor: state => state.iconColor,
  },
  actions: {
    setIconSize: ({ state }, size) => {
      state.iconSize = size;
    },

    setIconColor: ({ state }, color) => {
      state.iconColor = color;
    },
  },
};

export default store;
