import { defineStore } from 'pinia'

type MainState = {
  darkMode: boolean
  isNavOpen: boolean
}

const useMainStore = defineStore('main', {
  state: (): MainState => ({
    darkMode: false,
    isNavOpen: false,
  }),
  actions: {
    toggleDarkMode() {
      this.darkMode = !this.darkMode

      localStorage.setItem('dark-mode', JSON.stringify(this.darkMode))
    },
    initDarkMode() {
      const darkMode = localStorage.getItem('dark-mode')

      if (!darkMode) {
        localStorage.setItem('dark-mode', JSON.stringify(this.darkMode))
        return
      }

      this.darkMode = JSON.parse(darkMode)
    },
    toggleNav() {
      this.isNavOpen = !this.isNavOpen
    },
  },
})

export default useMainStore
