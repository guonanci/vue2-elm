import { ADD_ADDRESS, SAVE_ADDRESS, RECORD_ADDRESS, CHOOSE_ADDRESS, CONFIRM_ADDRESS,
  ADD_CART, BUY_CART, CLEAR_CART, REDUCE_CART, INIT_BUYCART, SAVE_CART_ID_SIG,
  RECORD_SHOPDETAIL,
  RECORD_USERINFO,
  CONFIRM_REMARK,
  CONFIRM_INVOICE,
  CHOOSE_SEARCH_ADDRESS,
  SAVE_GEOHASH,
  NEED_VALIDATION,
  GET_USERINFO,
  SAVE_SHOPID,
  SAVE_ORDER, ORDER_SUCCESS, SAVE_ORDER_PARAM, CHANGE_ORDER_PARAM,
  OUT_LOGIN,
  RESET_NAME,
  SAVE_AVATAR,
  SAVE_ADDDETAIL,
  SAVE_QUESTION
} from './mutation-types'

import { getStore, setStore } from 'common/mUtils'

export default {
  [RECORD_ADDRESS] (state, { latitude, longtitude }) {
    state.latitude = latitude
    state.longtitude = longtitude
  },

  [RECORD_SHOPDETAIL] (state, detail) {
    state.shopDetail = detail
  },
  // add into shopcart
  [ADD_CART] (state, { shopid, category_id, item_id, food_id, name, price, specs, packing_fee, sku_id, stock }) {
    const cart = state.cartList
    const shop = cart[shopid] = (cart[shopid] || {})
    const category = shop[category_id] = (shop[category_id] || {})
    const item = category[item_id] = (category[item_id] || {})
    if (item[food_id]) {
      item[food_id].num++
    } else {
      item[food_id] = { num: 1, id: food_id, name, price, specs, packing_fee, sku_id, stock }
    }
    state.cartList = { ...cart }

    setStore('buyCart', state.cartList)
  },
  [REDUCE_CART] (state, { shopid, category_id, item_id, food_id, name, price, specs }) {
    const cart = state.cartList
    const shop = (cart[shopid] || {})
    const category = shop[category_id] || {}
    const item = category[item_id] || {}
    if (item && item[food_id]) {
      if (item[food_id].num) {
        item[food_id].num--
        state.cartList = { ...cart }
        setStore('buyCart', state.cartList)
      } else {
        // 商品数量为0，则清空当前商品的信息
        item[food_id] = null
      }
    }
  },
  // 网页初始化时从本地缓存获取购物车数据
  [INIT_BUYCART] (state) {
    const initCart = getStore('buyCart')
    if (initCart) {
      state.cartList = JSON.parse(initCart)
    }
  },
  [CLEAR_CART] (state, shopid) {
    state.cartList[shopid] = null
    state.cartList = { ...state.cartList }
    setStore('buyCart', state.cartList)
  },
  [RECORD_USERINFO] (state, info) {
    state.userInfo = info
    state.login = true
    setStore('user_id', info.user_id)
  },
  [GET_USERINFO] (state, info) {
    if (state.userInfo && (state.userInfo.username !== info.username)) {
      return
    }
    if (!state.login) {
      return
    }
    if (!info.message) {
      state.userInfo = { ...info }
    } else {
      state.userInfo = null
    }
  },
  [RESET_NAME] (state, username) {
    state.userInfo = Object.assign({}, state.userInfo, { username })
  },
  [SAVE_SHOPID] (state, shopid) {
    state.shopid = shopid
  },
  // 记录订单页面用户选择的备注，传递给订单确认页面
  [CONFIRM_REMARK] (state, { remarkText, inputText }) {
    state.remarkText = remarkText
    state.inputText = inputText
  },
  [CONFIRM_INVOICE] (state, invoice) {
    state.searchAddress = invoice
  },
  [CHOOSE_SEARCH_ADDRESS] (state, place) {
    state.searchAddress = place
  },
  [SAVE_GEOHASH] (state, geohash) {
    state.geohash = geohash
  },
  [CONFIRM_ADDRESS] (state, newAddress) {
    state.newAddress.push(newAddress)
  },
  [CHOOSE_ADDRESS] (state, { address, index }) {
    state.chooseAddress = address
    state.addressIndex = index
  },
  // 保存下单需要验证的返回值
  [NEED_VALIDATION] (state, needValidation) {
    state.needValidation = needValidation
  },
  // 保存下单后购物id和sig
  [SAVE_CART_ID_SIG] (state, { cartid, sig }) {
    state.cartid = cartid
    state.sig = sig
  },
  // 保存下单参数，用户验证页面调用
  [SAVE_ORDER_PARAM] (state, orderParam) {
    state.orderParam = orderParam
  },
  [CHANGE_ORDER_PARAM] (state, newParam) {
    state.orderParam = Object.assign({}, state.orderParam, newParam)
  },
  [ORDER_SUCCESS] (state, order) {
    state.cartPrice = null
    state.orderMessage = order
  },
  [SAVE_ORDER] (state, orderDetail) {
    state.orderDetail = orderDetail
  },
  [OUT_LOGIN] (state) {
    state.userInfo = {}
    state.login = false
  },
  [SAVE_AVATAR] (state, imgPath) {
    state.imgPath = imgPath
  },
  [SAVE_ADDRESS] (state, newAddress) {
    state.removeAddress = newAddress
  },
  [SAVE_ADDDETAIL] (state, addAddress) {
    state.addAddress = addAddress
  },
  [SAVE_QUESTION] (state, question) {
    state.question = { ...question }
  },
  [ADD_ADDRESS] (state, obj) {
    state.removeAddress = [obj, ...state.removeAddress]
  },
  [BUY_CART] (state, price) {
    state.cartPrice = price
  },

}
