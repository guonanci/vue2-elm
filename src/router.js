const App = () => import('./App').then(m => m.default)
const home = () => import('./pages/home/home').then(m => m.default)
const login = () => import('./pages/login/login').then(m => m.default)
// const home = r => require.ensure([], () => r(require('./pages/home/home')), 'home')
// const login = r => require.ensure([], () => r(require('./pages/login/login')), 'login')

export default [{
  path: '/',
  component: App, // top route corresponding to index.html
  children: [ // the second layer route corresponding to App.vue
    // emmpty address, turning to homepage
    // {
    //   path: '',
    //   redirect: '/home'
    // },
    // // home, cities-list-age
    // {
    //   path: '/home',
    //   component: home
    // },
    // // signinUP-page
    // {
    //   path: '/login',
    //   component: login
    // },
  ]
}]
