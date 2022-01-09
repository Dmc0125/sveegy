import icons from '$lib/assets/icons.json'

const getIcon = (icon: string) => icons.find(({ id }) => id === icon)

export { getIcon }
