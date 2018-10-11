const App = () => import('./App').then(m => m.default)
const city = () => import('./pages/city/city').then(m => m.default)
const msite = () => import('./pages/msite/msite').then(m => m.default)
const search = () => import('./pages/search/search').then(m => m.default)
const balance = () => import('./pages/balance/balance').then(m => m.default)
const balanceDetail = () => import('./pages/balance/children/detail').then(m => m.default)
const benefit = () => import('./pages/benefit/benefit').then(m => m.default)
const coupon = () => import('./pages/benefit/children/coupon').then(m => m.default)
const hbDescription = () => import('./pages/benefit/children/hbDescription').then(m => m.default)
const hbHistory = () => import('./pages/benefit/children/hbHistory').then(m => m.default)
const exchange = () => import('./pages/benefit/children/exchange').then(m => m.default)
const commend = () => import('./pages/benefit/children/commend').then(m => m.default)
const points = () => import('./pages/points/points').then(m => m.default)
const pointsDetail = () => import('./pages/points/children/detail').then(m => m.default)
const find = () => import('./pages/find/find').then(m => m.default)
const download = () => import('./pages/download/download').then(m => m.default)
const shopDetail = () => import('./pages/shop/children/shopDetail').then(m => m.default)
const foodDetail = () => import('./pages/shop/children/foodDetail').then(m => m.default)
const shopSafe = () => import('./pages/shop/children/children/shopSafe').then(m => m.default)
const shop = () => import('./pages/shop/shop').then(m => m.default)
const order = () => import('./pages/order/order').then(m => m.default)
const orderDetail = () => import('./pages/order/children/orderDetail').then(m => m.default)
const vipcard = () => import('./pages/vipcard/vipcard').then(m => m.default)
const useCart = () => import('./pages/vipcard/children/useCart').then(m => m.default)
const invoiceRecord = () => import('./pages/vipcard/children/invoiceRecord').then(m => m.default)
const vipDescription = () => import('./pages/vipcard/children/vipDescription').then(m => m.default)
const food = () => import('./pages/food/food').then(m => m.default)
const confirmOrder = () => import('./pages/confirmOrder/confirmOrder').then(m => m.default)
const remark = () => import('./pages/confirmOrder/children/remark').then(m => m.default)
const payment = () => import('./pages/confirmOrder/children/payment').then(m => m.default)
const userValidation = () => import('./pages/confirmOrder/children/userValidation').then(m => m.default)
const invoice = () => import('./pages/confirmOrder/children/invoice').then(m => m.default)
const chooseAddress = () => import('./pages/confirmOrder/children/chooseAddress').then(m => m.default)
const addAddress = () => import('./pages/confirmOrder/children/children/addAddress').then(m => m.default)
const searchAddress = () => import('./pages/confirmOrder/children/children/children/searchAddress').then(m => m.default)
const home = () => import('./pages/home/home').then(m => m.default)
const login = () => import('./pages/login/login').then(m => m.default)
const forget = () => import('./pages/forget/forget').then(m => m.default)
const profile = () => import('./pages/profile/profile').then(m => m.default)
const info = () => import('./pages/profile/children/info').then(m => m.default)
const address = () => import('./pages/profile/children/children/address').then(m => m.default)
const add = () => import('./pages/profile/children/children/children/add').then(m => m.default)
const setusername = () => import('./pages/profile/children/children/setusername').then(m => m.default)
const addDetail = () => import('./pages/profile/children/children/children/children/addDetail').then(m => m.default)
const service = () => import('./pages/service/service').then(m => m.default)
const questionDetail = () => import('./pages/service/children/questionDetail').then(m => m.default)

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
    {
      path: '/forget',
      component: forget
    },
    // 订单列表页
    {
      path: '/order',
      component: order,
      children: [{
        path: 'orderDetail', // 订单详情页
        component: orderDetail,
      }]
    },
    // 个人信息页
    {
      path: '/profile',
      component: profile,
      children: [{
        path: 'info', // 个人信息详情页
        component: info,
        children: [{
          path: 'setusername',
          component: setusername,
        }, {
          path: 'address',
          component: address, // 编辑地址
          children: [{
            path: 'add',
            component: add,
            children: [{
              path: 'addDetail',
              component: addDetail
            }]
          }]
        }]
      }]
    },
    {
      path: 'service', // 服务中心
      component: service,
      children: [{
        path: 'questionDetail', // 订单详情页
        component: questionDetail,
      }]
    },
    // 当前选择城市页
    {
      path: '/city/:cityid',
      component: city
    },
    // 所有商铺列表页
    {
      path: '/msite',
      component: msite,
      meta: { keepAlive: true },
    },
    // 特色商铺列表页
    {
      path: '/food',
      component: food
    },
    // 搜索页
    {
      path: '/search/:geohash',
      component: search
    },
    // 商铺详情页
    {
      path: '/shop',
      component: shop,
      children: [{
        path: 'foodDetail', // 食品详情页
        component: foodDetail,
      }, {
        path: 'shopDetail', // 商铺详情页
        component: shopDetail,
        children: [{
          path: 'shopSafe', // 商铺安全认证页
          component: shopSafe,
        }]
      }]
    },
    // 确认订单页
    {
      path: '/confirmOrder',
      component: confirmOrder,
      children: [{
        path: 'remark', // 订单备注
        component: remark,
      }, {
        path: 'invoice', // 发票抬头
        component: invoice,
      }, {
        path: 'payment', // 付款页面
        component: payment,
      }, {
        path: 'userValidation', // 用户验证
        component: userValidation,
      }, {
        path: 'chooseAddress', // 选择地址
        component: chooseAddress,
        children: [{
          path: 'addAddress', // 添加地址
          component: addAddress,
          children: [{
            path: 'searchAddress', // 搜索地址
            component: searchAddress,
          }]
        }]
      }]
    },
    // vip卡页
    {
      path: '/vipcard',
      component: vipcard,
      children: [{
        path: 'invoiceRecord', // 开发票
        component: invoiceRecord,
      }, {
        path: 'useCart', // 购买会员卡
        component: useCart,
      }, {
        path: 'vipDescription', // 会员说明
        component: vipDescription,
      }]
    },
    // 发现页
    {
      path: '/find',
      component: find
    },
    // 下载页
    {
      path: '/download',
      component: download
    },
    // 余额
    {
      path: 'balance',
      component: balance,
      children: [{
        path: 'detail', // 余额说明
        component: balanceDetail,
      }]
    },
    // 我的优惠页
    {
      path: 'benefit',
      component: benefit,
      children: [{
        path: 'coupon', // 代金券说明
        component: coupon,
      }, {
        path: 'hbDescription', // 红包说明
        component: hbDescription,
      }, {
        path: 'hbHistory', // 历史红包
        component: hbHistory,
      }, {
        path: 'exchange', // 兑换红包
        component: exchange,
      }, {
        path: 'commend', // 推荐有奖
        component: commend,
      }]
    },
    // 我的积分页
    {
      path: 'points',
      component: points,
      children: [{
        path: 'detail', // 积分说明
        component: pointsDetail,
      }]
    },
  ]
}]
