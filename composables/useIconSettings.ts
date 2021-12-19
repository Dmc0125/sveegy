const useIconSettings = () => {
  const settingsOpened = ref(false)
  const toggleSettings = () => {
    settingsOpened.value = !settingsOpened.value
  }

  return {
    settingsOpened,
    toggleSettings,
  }
}

export default useIconSettings
