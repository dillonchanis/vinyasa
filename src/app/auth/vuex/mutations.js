import localforage from 'localforage'
import * as types from './mutation-types'

export default {
  [types.SET_AUTHENTICATED] (state, auth) {
    state.user.authenticated = auth
  },

  [types.SET_USER_DATA] (state, user) {
    state.user.data = user
  },

  [types.SET_TOKEN] (state, token) {
    if (!token) {
      localforage.removeItem('authtoken')
      return
    }

    localforage.setItem('authtoken', token)
  }
}
