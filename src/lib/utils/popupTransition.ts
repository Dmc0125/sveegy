import { type TransitionConfig, fly, scale } from 'svelte/transition'

const transitionFn = (node: HTMLElement, windowWidth: number): TransitionConfig => (
  windowWidth < 401 ? fly(node, { duration: 200, y: 100 }) : scale(node, { duration: 200, start: 0.5 })
)

export default transitionFn
