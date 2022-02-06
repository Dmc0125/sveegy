import { notification } from '$lib/store'

const copySvg = async (svgText: string, name: string) => {
  try {
    await navigator.clipboard.writeText(svgText)
    notification.showNotification(`Icon '${name}' was copied to you clipboard`, false)
  } catch (error) {
    notification.showNotification('Sveegy does not have access to you clipboard', true)
  }
}

export default copySvg
