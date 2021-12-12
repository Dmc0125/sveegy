import { useRoute } from 'vue-router'

import useIconsStore from '@/store/icons'

const setIconSizeFromQuery = () => {
  const route = useRoute()
  const iconSize = route.query.size as string | string[] | undefined

  if (!iconSize || Array.isArray(iconSize)) return

  const iconsStore = useIconsStore()
  iconsStore.iconSize = iconSize
}

export default setIconSizeFromQuery
