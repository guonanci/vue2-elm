const App = () => import('./App').then(m => m.default)
const home = () => import('./pages/home/home').then(m => m.default)
const login = () => import('./pages/login/login').then(m => m.default)
const profile = () => import('./pages/profile/profile').then(m => m.default)
const info = () => import('./pages/profile/children/info').then(m => m.default)
const setusername = () => import('./pages/profile/children/children/setusername').then(m => m.default)
const address = () => import('./pages/profile/children/children/address').then(m => m.default)
const add = () => import('./pages/profile/children/children/children/add').then(m => m.default)
const addDetail = () => import('./pages/profile/children/children/children/children/addDetail').then(m => m.default)


export default [{
  path: '/',
  component: App, // top route corresponding to index.html
  children: [ // the second layer route corresponding to App.vue
    // emmpty address, turning to homepage
    {
      path: '',
      redirect: '/home'
    },
    // home, cities-list-age
    {
      path: '/home',
      component: home
    },
    // signinUP-page
    {
      path: '/login',
      component: login
    },
    // 个人信息页
    {
        path: '/profile',
        component: profile,
        children: [{
          path: 'info', //个人信息详情页
          component: info,
          children: [{
              path: 'setusername',
              component: setusername,
          }, {
            path: 'address',
            component: address,     //编辑地址
            children:[{
                path:'add',
                component:add,
                children:[{
                    path:'addDetail',
                    component:addDetail
                }]
            }]
          }]
        }, {
          path: 'service', //服务中心
          component: service,
        }]
    },
  ]
}]
