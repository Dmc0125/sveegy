import { defineStore } from 'pinia'

type CssVariables = {
  primaryClr: string
  secondaryClr: string
  thirdClr: string

  callToActionRgb: string

  fontPrimaryClr: string
  fontSecondaryClr: string
  fontInverseClr: string

  modalBgClr: string
}

type MainState = {
  darkMode: boolean
  isNavOpen: boolean
  cssVariables: CssVariables
}

const variables: { light: CssVariables; dark: CssVariables; } = {
  light: {
    primaryClr: '#fff',
    secondaryClr: '#f3f5ff',
    thirdClr: '#e0e0e0',
    callToActionRgb: '61,90,241',
    fontPrimaryClr: '#000',
    fontSecondaryClr: '#484848',
    fontInverseClr: '#f2f2f2',
    modalBgClr: 'rgba(0, 0, 0, .1)',
  },
  dark: {
    primaryClr: '#1c1c1f',
    secondaryClr: '#785ada88',
    thirdClr: '#3e3e42',
    callToActionRgb: '119,90,218',
    fontPrimaryClr: '#f2f2f2',
    fontSecondaryClr: '#b9b9b9',
    fontInverseClr: '#000',
    modalBgClr: 'rgba(250, 250, 250, .025)',
  },
}

const useMainStore = defineStore('main', {
  state: (): MainState => ({
    darkMode: false,
    isNavOpen: false,
    cssVariables: variables.light,
  }),
  actions: {
    toggleDarkMode() {
      this.darkMode = !this.darkMode

      this.cssVariables = variables[this.darkMode ? 'dark' : 'light']
      localStorage.setItem('dark-mode', JSON.stringify(this.darkMode))
    },
    initDarkMode() {
      const darkMode = localStorage.getItem('dark-mode')

      if (!darkMode) {
        localStorage.setItem('dark-mode', JSON.stringify(this.darkMode))
        return
      }

      this.darkMode = JSON.parse(darkMode)
      this.cssVariables = variables[this.darkMode ? 'dark' : 'light']
    },
    toggleNav() {
      this.isNavOpen = !this.isNavOpen
    },
  },
})

export default useMainStore
