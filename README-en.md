# Introduction

[Chine README](README.md)

I use the latest vue2 tech stack, and webpack4 to build this app. It matters a lot if you want to research vue and webpack. In practice, you may often see shopping cart page(because its relative to money, and its logically tight), sign in, sign up, personal page(personal infomation page) and so on, often used.

The project is strongly functional, though not beautiful as a music player, but also with enough complexity and challengeable. And it imitates the elm app, so there are lots of food, and appetizing.

And also, its tone, layout is very nice, suple, and comfortable.

This project includes 45 pages, involving sign up, sign in, commodity displaying, shopping cart, order and so on. This is an entire process, and full of challenges!

Currently, this project is doing some performance optimization, and will so add some neccessary, brief code comments.

The project does not involve any commercial activity, so if you want to have a takeaway, please go to elm channel in taobao app~

## Tech Stack
vue2 + vuex + vue-router + webpack4 + es6, 7 + fetch + sass + flex, grid + svg

## Run Project
### References: we need Node 6+ to support ES6, 7

```bash
$ git clone https://github.com/guonanci/vue2-elm.git&&cd vue2-elm
$ # recommend
$ yarn
$ # or
$ npm install
$ yarn dev(npm run dev)
```

## Other
This project has a corresponding backend system, if you want to experience backend developing, reference [this](https://github.com/guonanci/elm-node).

Then run: `npm run local (not npm run dev)`.

## Remark
> If it helps you, `star` this project is welcome, thanks~~
> or [follw me](https://github.com/guonanci)
> Developing environment: MacOS10.13.5, VSCode1.25.1, Chrome68, Node.js10.7.0, npm6.2.0, yarn1.9.2
> If you have questioins, give me a Issue, or a wonderful PR~~
> Contacts: Email: yiminanci@gmail.com, Wechat: gnc18709268394, QQ: 1403326560
> recommend an [React open source project](https://github.com/guonanci/react-images-viewer) about magnifying and viewing images detail.

## About API
[Node backend system](htttps://github.com/guonanci/elm-node) supports the same API with official elm app. In the meantime, we support a [pc manage system](https://github.com/guonanci/elm-manage) based on elment-ui.

## Demo

[Here](https://guonanci.github.io/vue2-elm)

### mobile qrcode

<img src="https://github.com/guonanci/vue2-elm/blob/master/screenshots/ewm.png" width="250" height="250">

### target function

- [x] positioning -- finished
- [x] choose city -- finished
- [x] search address -- finised
- [x] display the nearby merchant list -- finished
- [x] search food: restaurant -- finished
- [x] according to distance, sales volume, score, featured dishes, delivery method and so on to sort and select -- finisded
- [x] restaurant food list -- finished
- [x] shopping cart function -- finished
- [x] shop evaluation page -- finished
- [x] single food detail page -- finished
- [x] merchant detail page -- finished
- [x] sign in, sign up -- finished
- [x] modify password -- finished
- [x] person center -- finished
- [x] send message, voice verification -- finished
- [x] order function -- finished
- [x] order list -- finished
- [x] order detail -- finished
- [x] download app -- fnished
- [x] add, remove, modify address -- finished
- [x] account info -- finished
- [x] service center -- finished
- [x] red packet -- finished
- [x] upload avatar -- finished
- [x] payment -- unfinished

## Summary

1. Because this is not official elm, we have to open proxy in PC, and we cant do more after ordering step.After ordering successfully, we can pay on mobile.

2. Logic with money in webpages will get complex, especially like elm, such a open platform that merchants, food are of varity. Interactions between pages is intricate, and I have to step by step without UI designer and API documents help.

3. Because of Vues lightweight, it standsout. And also in big applications, it still performs perfectly, vuex is neccessary when dealing with complex interact logic, so Vue + Vuex holds huge app well.

4. Sign up, sign in, homepage, search function, merchants list, shopping cart, ordering, orders list, personal center and so on - once all of these finished, you can understand vue deeperly, and help you master scaleable project.

5. I doubted for a long time that spent several months to finish such a project is meaningful or not, I just want to practice a while, but more and more I need to code, I believe these time I spent is worth.

6. The App has been finished, including 45 pages.


## Final goal

1. Use Node.js to build a [takeaway backend system](https://github.com/guonanci/elm-node).

2. Use react-native to build [an app](https://github.com/guonanci/elm-rn) crossing Android and iOS.

3. If I have enough time, I will push a merchant app.

4. All I want to do is to build a takeaway ecosystem.


## Merchants list page

<img src="https://github.com/guonanci/vue2-elm/blob/master/screenshots/msite.png" width="365" height="619"/> <img src="https://github.com/guonanci/vue2-elm/blob/master/screenshots/msite.gif" width="365" height="619"/>


### Merchants filter page

<img src="https://github.com/guonanci/vue2-elm/blob/master/screenshots/food.png" width="365" height="619"/> <img src="https://github.com/guonanci/vue2-elm/blob/master/screenshots/food.gif" width="365" height="619"/>



### restaurant food list and shopping cart

<img src="https://github.com/guonanci/vue2-elm/blob/master/screenshots/shop_cart.png" width="365" height="619"/> <img src="https://github.com/guonanci/vue2-elm/blob/master/screenshots/shop_cart.gif" width="365" height="619"/>

### order certify page

<img src="https://github.com/guonanci/vue2-elm/blob/master/screenshots/confirm1.png" width="365" height="619"/> <img src="https://github.com/guonanci/vue2-elm/blob/master/screenshots/confirmOrder.gif" width="365" height="619"/>


### search page

<img src="https://github.com/guonanci/vue2-elm/blob/master/screenshots/search.png" width="365" height="619"/> <img src="https://github.com/guonanci/vue2-elm/blob/master/screenshots/search.gif" width="365" height="619"/>


### sign in page

<img src="https://github.com/guonanci/vue2-elm/blob/master/screenshots/login1.png" width="365" height="619"/> <img src="https://github.com/guonanci/vue2-elm/blob/master/screenshots/login.gif" width="365" height="619"/>


### personal center

<img src="https://github.com/guonanci/vue2-elm/blob/master/screenshots/profile.png" width="365" height="619"/> <img src="https://github.com/guonanci/vue2-elm/blob/master/screenshots/profile.gif" width="365" height="619"/>

## project directories

```
.
├── build                                  // webpack config file
├── config                                 // project build directory
├── elm                                    // production directory, put on server to visit
├── screenshots                            // project screenshots
├── src                                    // src directory
| ├── components                           // components
| | ├── common                             // common components
| | |   ├── alertTip.vue                      // alert component
| | |   ├── buyCart.vue                    // shopping cart component
| | |   ├── countdown.vue                  // countdown component
| | |   └── loading.vue                    // page initial renderings animation
| | | ├── mixin.js                         // components mixin(includes directives: pull to load more and handle imgs src)
| | | ├── ratingStar.vue                   // five ratingStar
| | | └── shopList.vue                     // msite and shop pages restaurants list common components
| | ├── footer
| |     └── footGuide.vue                  // foot common component
| | └── header
| |     └── head.vue                       // head common component
| ├── config                               // basic config
| |   ├── env.js                           // switch environtment config
| |   ├── fetch.js                         // fetch data
| |   ├── mUtils.js                        // usual js util methods
| |   └── vm.js                            // px transform to vm
| ├── imgs                                 // common imgs
| ├── page
| | ├── balance
| | ├── balance.vue                          // balance page
| | └── children
| | |   ├── detail.vue                     // balance description
| | ├── benefit
| | |   ├── benefit.vue                      // red packet page
| | |   └── children
| | |   |   ├── commend.vue                // recommend prize
| | |   |   ├── coupon.vue                 // voucher description
| | |   |   ├── exchange.vue               // exchange red packet
| | |   |   ├── redPacketDesc.vue          // red packet description
| | |   |   └── redPacketHistory.vue       // red packet history
| | ├── city
| | |   └── city.vue                      // current city page
| | ├── confirmOrder
| | |   ├── children
| | |   |   ├── children
| | |   |   |   ├── addAddress.vue         // add address page
| | |   |   |   └── children
| | |   |   |       └── searchAddress.vue  // search address page
| | |   |   |   ├── chooseAddress.vue      // choose address page
| | |   |   |   ├── invoice.vue            // choose invoice page
| | |   |   |   ├── payment.vue            // payment page
| | |   |   |   ├── remark.vue             // order remark page
| | |   |   |   └── userValidation.vue     // user verification page
| | |   |   └── confirmOrder.vue                  // order certify page
| | ├── download
| | |   └── download.vue                      // download app
| | ├── find
| | |   └── find.vue                      // find page
| | ├── food
| | |   └── food.vue                      // foods filter page
| | ├── forgetPwd
| | |   └── forgetPwd.vue                      // forget password page
| | ├── home
| | |   └── home.vue                      // homepage
| | ├── login
| | |   └── login.vue                      // sign in, sign up page
| | ├── msite
| | |   └── msite.vue                      // merchants list page
| | ├── order
| | |   ├── children
| | |   |   └── detail.vue                 // order detail page
| | |   └── order.vue                      // order list page
| | ├── profile
| | |   ├── children
| | |   |   ├── children
| | |   |   |   ├── address.vue            // address
| | |   |   |   └── children
| | |   |   |   |   ├── add.vue            // add address
| | |   |   |   |   └── children
| | |   |   |   |   |   └── addDetail.vue  // search address
| | |   |   ├── info.vue                   // account information
| | |   |   └── resetUsername.vue          // reset username
| | |   └── profile.vue                    // personal center
| | ├── search
| | |   └── search.vue                      // search page
| | ├── service
| | |   ├── children
| | |   |   └── questionDetail.vue         // problem detail
| | |   └── service.vue                      // service center
| | ├── shop
| | |   ├── children
| | |   |   ├── children
| | |   |   |   └── safe.vue               // merchant authenticate information page
| | |   |   ├── allShops.vue               // merchants information page
| | |   |   └── singleShop.vue             // single merchant information page
| | |   └── shop.vue                      // merchants filter page
| | └── vipcard
| | |   ├── children
| | |   |   ├── purchaseRecord.vue         // purchase record
| | |   |   ├── useCart.vue                // use card no to purchase
| | |   |   ├── vipDesc.vue                // vip description
| | |   └── vipcard.vue                      // vip card handling page
| ├── plugins                              // plugins imported
| ├── router
| |   └── router.js                         // router config
| ├── service                              // fetch unified config
| |   ├── getData.js                       // unified file to fetch data, and unified management of interfaces
| |   └── tempdata                         // temperary data of development statement
| |   ├── store                            // vuex store management
| |   |   ├── store.js                     // import vuex to create, including all modules
| |   |   └── global.js                    // global module
| |   └── style
| |   |   ├── common.scss                  // common style file
| |   |   ├── mixin.scss                   // style config file
| |   |   └── swiper.min.css
| ├── App.vue                             // page entry
| ├── main.js                             // app entry, loading various common components
| ├── favicon.ico                         // app logo
| ├── index.html                          //  HTML entry file
.

56 directories，203 files
```

## License
[GPL](https://github.com/guonanci/vue2-elm/blob/master/COPYING)

