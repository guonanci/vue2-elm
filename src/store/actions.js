import { getUser, getAddressList } from 'common/requests'
import { GET_USERINFO, SAVE_ADDRESS } from './mutation-types'

export default {
  async getUserInfo({ commit, state }) {
    const res = await getUser()
    commit(GET_USERINFO, res)
  }
}
