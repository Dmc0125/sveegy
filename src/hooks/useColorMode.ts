import { Ref, ref } from 'vue'

const colorModes = ['light', 'dark'] as const

const initColorMode = (colorMode: Ref<typeof colorModes[number]>) => {
  const colorModeSaved = localStorage.getItem('colorMode')
  // @ts-ignore
  if (colorModes.includes(colorModeSaved)) {
    // eslint-disable-next-line no-param-reassign
    colorMode.value = colorModeSaved as typeof colorModes[number]
  }
}

const composeUseColorMode = () => {
  const colorMode = ref<typeof colorModes[number]>('dark')
  initColorMode(colorMode)

  const useColorMode = () => {
    const toggleColorMode = () => {
      const currentIndex = colorModes.indexOf(colorMode.value)
      colorMode.value = colorModes[(currentIndex + 1) % 2]
      localStorage.setItem('colorMode', colorMode.value)
    }

    return {
      colorMode,
      toggleColorMode,
    }
  }

  return useColorMode
}

export default composeUseColorMode()
