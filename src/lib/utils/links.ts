export default [
  {
    title: 'Home',
    href: '/',
    matcher: /^\/$/,
    iconId: 'home',
  },
  {
    title: 'Icons',
    href: '/icons',
    matcher: '/icons',
    iconId: 'assets',
  },
  {
    title: 'Docs',
    href: '/docs/sprites',
    matcher: /\/docs\/(.)*/,
    iconId: 'license',
  },
  {
    title: 'License',
    href: '/license',
    matcher: '/license',
    iconId: 'scale',
  },
]

export const docs = [
  {
    title: 'Sprites',
    href: '/docs/sprites',
    matcher: /\/docs\/sprites/,
    children: [
      'Usage',
    ],
  },
  {
    title: 'Svelte',
    href: '/docs/svelte',
    matcher: /\/docs\/svelte/,
    children: [
      'Installation',
      'Usage',
      'Props',
    ],
  },
  {
    title: 'Vue',
    href: '/docs/vue',
    matcher: /\/docs\/vue/,
    children: [
      'Installation',
      'Usage',
      'Props',
    ],
  },
]
