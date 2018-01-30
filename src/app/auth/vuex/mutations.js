import * as types from './mutation-types'

export default {
  [types.SET_AUTHENTICATED] (state, auth) {
    state.user.authenticated = auth
  },

  [types.SET_USER_DATA] (state, user) {
    state.user.data = user
  }
}
