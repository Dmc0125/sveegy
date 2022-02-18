export default [
  {
    path: '/',
    matcher: /(\/)$/,
    name: 'Home',
    icon: 'home',
  },
  {
    path: '/icons',
    matcher: /(\/icons)$/,
    name: 'Icons',
    icon: 'assets',
  },
  {
    path: '/docs/no-package',
    matcher: /(\/docs\/)(([a-z]|-)+)$/,
    name: 'Docs',
    icon: 'book',
  },
  {
    path: '/license',
    matcher: /(\/license)$/,
    name: 'License',
    icon: 'license',
  },
]
