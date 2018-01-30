import { Login, Register } from '../components'

export default [
  {
    path: '/login',
    component: Login,
    name: 'login',
    meta: {
      needsAuth: false
    }
  },
  {
    path: '/register',
    component: Register,
    name: 'register',
    meta: {
      needsAuth: false
    }
  }
]
