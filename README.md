## 前言
[English README](README-en.md)

采用最新的 vue2 技术栈，webpack4搭建而成。对于深究 vue，webpack 的前端开发人员具有很大得参考意义。实际工作中，你可能会经常碰到购物车页面（因为涉及到money，所以逻辑严密），登录，注册， 用户个人主页（个人信息资料页）等等，特别常见的页面。

本项目功能性很强，但是没有音乐播放器这类展示性项目那么绚丽，但是其实还是很有意思，有足够的复杂度和挑战性。由于模仿饿了么这样的外卖平台，所以有很多美食，带来了食欲。

另外本项目的色调，布局也很漂亮，柔顺，舒服~

本项目共45个页面，涉及注册， 登录，商品展示，购物车，下单等等。是一个完整流程，足够具有挑战性。

目前项目正在进行一些性能的优化，也会增加必要，简洁的注释。

本项目不涉及任何实质性商业活动，大家如果想要中午点外卖的话请前往正版饿了么！

## 技术栈
vue2 + vuex + vue-router + webpack4 + es8，9 + fetch + sass + flex, grid + svg

## 项目运行
### 注意： 由于涉及到 ES8，9新特性，node 需要8.0+

```bash
$ git clone https://github.com/guonanci/vue2-elm.git&&cd vue2-elm
$ # recommend
$ yarn
$ # or
$ npm install
$ yarn dev (npm run dev)
```

## 另外
此项目有配套的后台系统，如果想体验后台同时开发，可以参考[这里](https://github.com/guonanci/elm-node)。
项目启动命令： `npm run local（not npm run dev）`。

## 说明
> 如果对你有帮助，右上角 `star`一下的话甚是欣慰，谢谢~
> 或者 [follow 一下我](https://github.com/guonanci)，互粉~
> 开发环境: MacOS10.13.5, VSCode1.25.1, Chrome68, Node.js10.7.0, npm6.2.0, yarn1.9.2
> 如果有问题，欢迎提 Issues，有好的PR 也随时欢迎~~
> 本人 邮箱:[yiminanci@gmail.com](mailto:yiminanci@gmail.com)， 微信：gnc18709268394， QQ：1403326560
> 推荐一个 [React 图片预览开源项目](https://github.com/guonanci/react-images-viewer), 体验流畅，设计优美的一个开源组件。

## 关于数据接口的说明

[Node.js 构建的后台系统](https://github.com/guonanci/elm-node)提供的数据接口保持了和官网的一致。同时提供了[后台管理系统](https://github.com/guonanci/elm-manage)。

## 效果演示

[查看 demo](https://guonanci.github.io/vue2-elm)

### 移动端扫描下方二维码

<img src="https://github.com/guonanci/vue2-elm/blob/master/screenshots/ewm.png" width="250" height="250">

## 目标功能
- [x] 定位功能 -- 完成
- [x] 选择城市 -- 完成
- [x] 搜索地址 -- 完成
- [x] 展示所选地址附近商家列表 -- 完成
- [x] 搜索美食：餐馆 -- 完成
- [x] 根据距离，销量，评分，特色菜，配送方式等进行排序和筛选 -- 完成
- [x] 餐馆食品列表页 -- 完成
- [x] 购物车功能 -- 完成
- [x] 店铺评价页面 -- 完成
- [x] 单个食品详情页 -- 完成
- [x] 商家详情页 -- 完成
- [x] 登录、注册 -- 完成
- [x] 修改密码 -- 完成
- [x] 个人中心 -- 完成
- [x] 发送短信，语音验证 -- 完成
- [x] 下单功能 -- 完成
- [x] 订单列表 -- 完成
- [x] 订单详情 -- 完成
- [x] 下载 app -- 完成
- [x] 添加，删除，修改收货地址 -- 完成
- [x] 账户信息 -- 完成
- [x] 服务中心 -- 完成
- [x] 红包 -- 完成
- [x] 上传头像 -- 完成
- [ ] 付款 -- 做不到。。。

## 总结
1. 因为不是 elm官方， 而且因为要开代理，必须在 pc 端打开，最多只能做到下单这一步，下单成功后可以在手机客户端查看并付款。

2. 一般涉及到钱的网页逻辑都比较复杂，尤其像饿了么这样一个开放的平台，商家和食品种类繁多，页面和页面之间交互复杂，在写到购物车和下单功能时众多的数据和逻辑一度让人很头疼，又没有设计和接口 API 文档，只能一步步摸索。

3. vue 因其轻量级的框架在中小型项目中表现亮眼，在大型单页面应用中因为 vuex 的存在，表现依然出色，在处理复杂交互逻辑的时候，vuex 的存在是不可或缺的，所以说利用 vue+vuex 完全可以去做大型的单页面应用.

4. 从登录注册，首页，搜索，商家列表，购物车，下单，订单列表，个人中心 这些流程走完之后，不但对 vue 的理解更深一层，而且对以后掌控大型项目的时候也有非常多的帮助，做一个实际的项目才能对自己有很大的提升。

5. 曾一度怀疑，花几个月的时间做这样一个项目到底有没有意义，本来只是想做一个小项目练练手，没想到后来越写越多，不过坚持下来后我相信一切都是值得的。

6. 项目已经完成，共45个页面

## 最终目标

1. 用 Node.js 构建一个模拟外卖平台的后台系统。[地址在这里](https://github.com/guonanci/elm-node)

2. 利用 react-native 写出跨 Android 和 iOS 的[原生 app 版本](https://github.com/guonanci/elm-rn)

3. 如果时间来得及，会出一卖家版本

4. 所以我的目的是构建一个横跨前后端，移动 iOS，Android 的完整生态圈。


### 商铺列表页
<img src="https://github.com/guonanci/vue2-elm/blob/master/screenshots/msite.png" width="365" height="619"/> <img src="https://github.com/guonanci/vue2-elm/blob/master/screenshots/msite.gif" width="365" height="619"/>


### 商铺筛选页

<img src="https://github.com/guonanci/vue2-elm/blob/master/screenshots/food.png" width="365" height="619"/> <img src="https://github.com/guonanci/vue2-elm/blob/master/screenshots/food.gif" width="365" height="619"/>



### 餐馆食品列表与购物车

<img src="https://github.com/guonanci/vue2-elm/blob/master/screenshots/shop_cart.png" width="365" height="619"/> <img src="https://github.com/guonanci/vue2-elm/blob/master/screenshots/shop_cart.gif" width="365" height="619"/>

### 确认订单页

<img src="https://github.com/guonanci/vue2-elm/blob/master/screenshots/confirm1.png" width="365" height="619"/> <img src="https://github.com/guonanci/vue2-elm/blob/master/screenshots/confirmOrder.gif" width="365" height="619"/>


### 搜索页

<img src="https://github.com/guonanci/vue2-elm/blob/master/screenshots/search.png" width="365" height="619"/> <img src="https://github.com/guonanci/vue2-elm/blob/master/screenshots/search.gif" width="365" height="619"/>


### 登录页

<img src="https://github.com/guonanci/vue2-elm/blob/master/screenshots/login1.png" width="365" height="619"/> <img src="https://github.com/guonanci/vue2-elm/blob/master/screenshots/login.gif" width="365" height="619"/>


### 个人中心

<img src="https://github.com/guonanci/vue2-elm/blob/master/screenshots/profile.png" width="365" height="619"/> <img src="https://github.com/guonanci/vue2-elm/blob/master/screenshots/profile.gif" width="365" height="619"/>

## 项目布局

```
.
├── build                                  // webpack配置文件
├── config                                 // 项目打包目录
├── elm                                    // 上线项目文件，放在服务器即可正常访问
├── screenshots                            // 项目截图
├── src                                    // 源码目录
| ├── components                           // 组件
| | ├── common                             // 公共组件
| | |   ├── alert.vue                      // 弹出框组件
| | |   ├── buyCart.vue                    // 购物车组件
| | |   ├── countdown.vue                  // 倒计时组件
| | |   └── loading.vue                    // 页面初始化加载数据的动画组件
| | | ├── mixin.js                         // 组件混合（包括：指令-下拉加载更多, 处理图片地址）
| | | ├── ratingStar.vue                   // 五颗星评论组件
| | | └── shopList.vue                     // msite 和 shop 页面的餐馆列表公共组件
| | ├── footer
| |     └── footGuide.vue                  // 底部公共组件
| | └── header
| |     └── head.vue                       // 头部公共组件
| ├── config                               // 基本配置
| |   ├── env.js                           // 环境切换配置
| |   ├── fetch.js                         // 获取数据
| |   ├── mUtils.js                        // 常用的 js 方法
| |   └── vm.js                            // px 转换成 vm
| ├── imgs                                 // 公共图片
| ├── page
| | ├── balance
| | ├── index.vue                          // 余额页
| | └── children
| | |   ├── detail.vue                     // 余额说明
| | ├── benefit
| | |   ├── index.vue                      // 红包页
| | |   └── children
| | |   |   ├── commend.vue                // 推荐有奖
| | |   |   ├── coupon.vue                 // 代金券说明
| | |   |   ├── exchange.vue               // 兑换红包
| | |   |   ├── redPacketDesc.vue          // 红包说明
| | |   |   └── redPacketHistory.vue       // 红包历史
| | ├── city
| | |   └── index.vue                      // 当前城市页
| | ├── confirmOrder
| | |   ├── children
| | |   |   ├── children
| | |   |   |   ├── addAddress.vue         // 添加地址页
| | |   |   |   └── children
| | |   |   |       └── searchAddress.vue  // 搜索地址页
| | |   |   |   ├── chooseAddress.vue      // 选择地址页
| | |   |   |   ├── invoice.vue            // 选择发票页
| | |   |   |   ├── payment.vue            // 付款页
| | |   |   |   ├── remark.vue             // 订单备注页
| | |   |   |   └── userValidation.vue     // 用户验证页
| | |   |   └── index.vue                  // 确认订单页
| | ├── download
| | |   └── index.vue                      // 下载 app
| | ├── find
| | |   └── index.vue                      // 发现页
| | ├── food
| | |   └── index.vue                      // 食品筛选排序页
| | ├── forgetPwd
| | |   └── index.vue                      // 忘记密码页
| | ├── home
| | |   └── index.vue                      // 首页
| | ├── login
| | |   └── index.vue                      // 登录注册页
| | ├── msite
| | |   └── index.vue                      // 商铺列表页
| | ├── order
| | |   ├── children
| | |   |   └── detail.vue                 // 订单详情页
| | |   └── index.vue                      // 订单列表页
| | ├── profile
| | |   ├── children
| | |   |   ├── children
| | |   |   |   ├── address.vue            // 地址
| | |   |   |   └── children
| | |   |   |   |   ├── add.vue            // 新增地址
| | |   |   |   |   └── children
| | |   |   |   |   |   └── addDetail.vue  // 搜索地址
| | |   |   ├── info.vue                   // 账户信息
| | |   |   └── resetUsername.vue          // 重置用户名
| | |   └── profile.vue                    // 个人中心
| | ├── search
| | |   └── index.vue                      // 搜索页
| | ├── service
| | |   ├── children
| | |   |   └── questionDetail.vue         // 问题详情
| | |   └── index.vue                      // 服务中心
| | ├── shop
| | |   ├── children
| | |   |   ├── children
| | |   |   |   └── safe.vue               // 商铺认证信息页
| | |   |   ├── allShops.vue               // 商铺信息页
| | |   |   └── singleShop.vue             // 单个商铺信息页
| | |   └── index.vue                      // 商铺筛选页
| | └── vipcard
| | |   ├── children
| | |   |   ├── purchaseRecord.vue         // 购买记录
| | |   |   ├── useCart.vue                // 使用卡号购买
| | |   |   ├── vipDesc.vue                // 会员说明
| | |   └── index.vue                      // 会员卡办理页
| ├── plugins                              // 引用的插件
| ├── router
| |   └── index.js                         // 路由配置
| ├── service                              // 数据交互统一调配
| |   ├── getData.js                       // 获取数据的统一调配文件，对接口进行统一管理
| |   └── tempdata                         // 开发状态的临时数据
| |   ├── store                            // vuex 的状态管理
| |   |   ├── index.js                     // 引用 vuex，创建 Store，包含所有 modules
| |   |   └── global.js                    // 全局模块
| |   └── style
| |   |   ├── common.scss                  // 公共样式文件
| |   |   ├── mixin.scss                   // 样式配置文件
| |   |   └── swiper.min.css
| ├── App.vue                             // 页面入口文件
| ├── main.js                             // 程序入口文件，加载各种公共组件
| ├── favicon.ico                         // app logo
| ├── index.html                          // 入口 HTML 文件


56 个目录，203个文件
```

## 证书
[GPL](https://github.com/guonanci/vue2-elm/blob/master/COPYING)

