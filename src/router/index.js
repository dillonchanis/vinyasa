import Vue from 'vue'
import Router from 'vue-router'
import beforeEach from './beforeEach'
import { routes } from '../app/index'

Vue.use(Router)

const router = new Router({
  routes
})

router.beforeEach(beforeEach)

export default router
