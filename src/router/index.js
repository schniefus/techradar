import Vue from 'vue'
import Router from 'vue-router'
import Radar from '@/components/Radar'
import History from '@/components/History'
import Deprecated from '@/components/Deprecated'
import Login from '@/components/Login'
import Logout from '@/components/Logout'
import Users from '@/components/Users'
import AuthGuard from './auth-guard'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'radar',
      component: Radar
    },
    {
      path: '/history/:search?',
      name: 'history',
      component: History,
      props: true,
      beforeEnter: AuthGuard(user => user.uid)
    },
    {
      path: '/deprecated',
      name: 'deprecated',
      component: Deprecated,
      beforeEnter: AuthGuard(user => user.uid)
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/logout',
      name: 'logout',
      component: Logout
    },
    {
      path: '/users',
      name: 'users',
      component: Users,
      beforeEnter: AuthGuard(user => user.uid && user.roles.admin)
    }
  ]
})
