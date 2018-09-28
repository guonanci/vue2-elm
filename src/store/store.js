import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
import actions from './actions'
import getters from './getters'

Vue.use(Vuex)

const state = {
  latitude: '',
  longtitude: '',
  catdList: {},
  shopDetail: null,
  userInfo: null,
  shopid: null,
  remarkText: null, // 可选备注内容
  inputText: '', // 输入备注内容
  invoice: false, // 开发票
  newAddress: [], // 确认订单页面新的地址
  searchAddress: null, //搜索并选择的地址
}
