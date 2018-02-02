import axios from 'axios'
import localforage from 'localforage'
import * as types from './mutation-types'
const BASE_URL = '/api/v1'

const setHttpToken = (token) => {
  if (!token) {
    window.axios.defaults.headers.common['Authorization'] = null
  } else {
    window.axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
  }
}

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

export const setToken = async ({ commit, dispatch }, token) => {
  if (!token) {
    await dispatch('checkTokenExists')
    setHttpToken(token)
    return
  }

  commit(types.SET_TOKEN, token)
  setHttpToken(token)
}

export const checkTokenExists = async ({ commit, dispatch }, token) => {
  const token = await localforage.getItem('authtoken')

  if (!token) {
    return Promise.reject('NO_STORAGE_TOKEN')
  }

  return Promise.resolve(token)
}

export const clearAuth = ({ commit }) => {
  commit(types.SET_AUTHENTICATED, false)
  commit(types.SET_USER_DATA, null)
  commit(types.SET_TOKEN, null)
  setHttpToken(null)
}
