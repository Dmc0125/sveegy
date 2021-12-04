import { defineStore } from 'pinia'

import { Icon } from '@/types/svg-icons'
import icons from '../svg-icons/svg-icons'

type IconsState = {
  icons: Icon[];
  iconSize: string;
  iconColor: string;
}

const useIconsStore = defineStore('icons', {
  state: (): IconsState => ({
    icons,
    iconSize: '2rem',
    iconColor: 'currentColor',
  }),
  getters: {
    getIcon: (state) => (iconId: string) => state.icons.find(({ id }) => id === iconId),
    getSearchedIcons: (state) => (searchTerm: string) => {
      if (!searchTerm.length) {
        return state.icons
      }

      const regexp = new RegExp(searchTerm.toLowerCase())

      const searchedIcons = state.icons.filter(({ id, variations, type }) => (
        id.match(regexp)
        || variations.some((variation) => variation.match(regexp)
        || type.match(regexp))
      ))

      return searchedIcons
    },
  },
  actions: {
    setIconSize(size: string) {
      this.iconSize = size
    },

    setIconColor(color: string) {
      this.iconColor = color
    },
  },
})

export default useIconsStore
