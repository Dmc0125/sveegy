import { Module } from 'vuex';

import icons from '@/svg-icons/svg-icons';

import { Icon } from '@/types/svg-icons';

interface IconsState {
  icons: Icon[];
}

const store: Module<IconsState, {}> = {
  state: () => ({
    icons,
  }),
  getters: {
    getIcons: state => state.icons,
    getIcon: state => (iconId: string) => state.icons.find(({ id }) => id === iconId),
  },
};

export default store;
