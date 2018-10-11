import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getters'
import actions from './actions'
import mutations from './mutations'

Vue.use(Vuex)

const state = {
  latitude: '',
  longtitude: '',
  cartList: {},
  shopDetail: null,
  userInfo: null,
  shopid: null,
  remarkText: null, // 可选备注内容
  inputText: '', // 输入备注内容
  invoice: false, // 开发票
  newAddress: [], // 确认订单页面新的地址
  searchAddress: null, // 搜索并选择的地址
  geohash: '31.22299,121.36025', // 地址gohash值
  chooseAddress: null,
  adressIndex: null,
  needValidation: null, // 确认订单时是够需要验证
  cartId: null,
  sig: null,
  orderParam: null,
  orderMessage: null, // 订单返回的信息
  orderDetail: null,
  login: true, // 是否登录
  imgPath: null, // 头像地址
  removeAddress: [],
  addAddress: '',
  question: null, // 问题详情
  cartPrice: null, // 会员卡价格
}

export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations,
})
