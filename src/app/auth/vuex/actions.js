import axios from 'axios'
import * as types from './mutation-types'
const BASE_URL = '/api/v1'

export const register = async ({ commit }, { payload, context }) => {
  try {
    const user = await axios.post(`${BASE_URL}/register`, payload)
    commit(types.SET_AUTHENTICATED, true)
    commit(types.SET_USER_DATA, user)
  } catch (error) {
    context.errors = error.response.data[0]
  }
}

export const login = async ({ commit }, { payload, context }) => {
  try {
    const user = await axios.post(`${BASE_URL}/login`, payload)
    commit(types.SET_AUTHENTICATED, true)
    commit(types.SET_USER_DATA, user)
  } catch (err) {
    context.errors = err.response.data[0]
  }
}

export const logout = async ({ dispatch }) => {
  await axios.post(`${BASE_URL}/logout`)
  dispatch(types.CLEAR_AUTH)
}

export const fetchUser = async ({ commit }, id) => {
  const user = await axios.get(`${BASE_URL}/user/${id}`)
  commit(types.SET_AUTHENTICATED, true)
  commit(types.SET_USER_DATA, user)
}

export const clearAuth = ({ commit }) => {
  commit(types.SET_AUTHENTICATED, false)
  commit(types.SET_USER_DATA, null)
}
