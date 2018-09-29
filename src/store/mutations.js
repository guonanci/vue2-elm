import { ADD_RESS, SAVE_ADDRESS, RECORD_ADDRESS, CHOOSE_ADDRESS, CONFIRM_ADDRESS,
ADD_CART, BUY_CART, CLEAR_CART, REDUCE_CART, INIT_BUYCART, SAVE_CART_ID_SIG,
RECORD_SHOPDETAIL,
RECORD_USERINFO,
CONFIRM_REMARK,
CONFIRM_INVOICE,
CHOOSE_SEARCH_ADDRESS,
SAVE_GEOHASH,
NEED_VALIDATION,
SAVE_SHOPID,
SAVE_ORDER, ORDER_SUCCESS, SAVE_ORDER_PARAM, CHANGE_ORDER_PARAM,
OUT_LOGIN,
RESET_NAME,
SAVE_AVADAR,
SAVE_ADDDETAIL,
SAVE_QUESTION,
} from './mutation-types'

import { getStore, setStore } from 'common/mUtils'

export default {
  [RECORD_ADDRESS](state, { latitude, longtitude }) {
    state.latitude = latitude
    state.longtitude = longtitude
  },

  [RECORD_SHOPDETAIL](state, detail) {
    state.shopDetail = detail
  },
  // add into shopcart
  [ADD_CART](state, { shopid, category_id, item_id, food_id, name, price, specs, packing_fee, sku_id, stock }) {
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
  }
  [REDUCE_CART](state, { shopid, category_id, item_id, food_id, name, price, specs }) {
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
  [INIT_BUYCART](state) {
    const initCart = getStore('buyCart')
    if (initCart) {
      state.cartList = JSON.parse(initCart)
    }
  },
  [CLEAR_CART](state, shopid) {
    state.cartList[shopid] = null
    state.cartList = { ...state.cartList }
    setStore('buyCart', state.cartList)

  }

}
