import { getUser, getAddressList } from 'common/requests'
import { GET_USERINFO, SAVE_ADDRESS } from './mutation-types'

export default {
  async getUserInfo ({ commit, state }) {
    const res = await getUser()
    commit(GET_USERINFO, res)
  },
  async saveAddress ({ commit, state }) {
    if (state.removeAddress.length) return
    const address = await getAddressList(state.userInfo.user_id)
    commit(SAVE_ADDRESS, address)
  }
}
