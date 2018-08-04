# 前言
[README in English](README-en.md)

采用最新的 vue2 技术栈，webpack4搭建而成。对于深究 vue，webpack 的前端开发人员具有很大得参考意义。实际工作中，你可能会经常碰到购物车页面（因为涉及到money，所以逻辑严密），登录，注册， 用户个人主页（个人信息资料页）等等，特别常见的页面。

本项目功能性很强，但是没有音乐播放器这类展示性项目那么绚丽，但是其实还是很有意思，有足够的复杂度和挑战性。由于模仿饿了么这样的外卖平台，所以有很多美食，带来了食欲。

另外本项目的色调，布局也很漂亮，柔顺，舒服~

本项目共45个页面，涉及注册， 登录，商品展示，购物车，下单等等。是一个完整流程，足够具有挑战性。

目前项目正在进行一些性能的优化，也会增加必要，简洁的注释。

本项目不涉及任何实质性商业活动，大家如果想要中午点外卖的话请前往正版饿了么！

## 技术栈
vue2 + vuex + vue-router + webpack + es7，8，9 + fetch + sass + flex + svg

## 项目运行
### 注意： 由于涉及到 ES7，8，9新特性，node 需要8.0+

```bash
$ git clone https://github.com/guonanci/vue2-elm.git
$ cd vue2-elm
$ # recommend
$ yarn
$ # or
$ npm install
$ yarn dev (npm run dev)
```

## 另外
此项目有配套的后台系统，如果想体验后台同时开发，可以参考[这里](https://github.com/guonanci/node-elm)。
项目启动命令： npm run local（not npm run dev）。

## 说明
> 如果对你有帮助，右上角 `star`一下的话甚是欣慰，谢谢~~
> 或者 follow 一下我，互粉~
> 开发环境 MacOS10.13.5 VSCode1.25.1 Chrome68 Node.js10.7.0 npm6.2.0 yarn1.9.2
> 如果有问题，欢迎提 Issues，有好的PR 也随时欢迎~~
> 本人 邮箱 yiminanci@gmail.com 微信 gnc18709268394 QQ 1403326560
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
- [x] 战士所选地址附近商家列表 -- 完成
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
- [] 付款 -- 做不到。。。


#
