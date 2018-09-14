import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'

Vue.use(Router)

export default new Router({
  model: 'history',
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index
    },
    /*
    {
      path: '/home',
      name: 'home',
      component: ''
    },
    {
      path: '/users',
      name: 'users',
      component: ''
    },
    {
      path: '/product',
      name: 'product',
      children: [
        {path: 'pengding', name: '', component: ''},
        {path: 'published', name: '', component: ''},
        {path: 'removed', name: '', component: ''}
      ]
    },
    {
      path: '/attendance',
      name: 'attendance',
      children: [
        {
          path: 'exception', 
          name: 'exception', 
          component: ''
        },
        {
          path: 'holiday',
          name: 'holiday',
          component: ''
        }
      ]
    },
    {
      path: '/supervision',
      name: 'supervision',
      children: [
        {
          path: 'report',
          name: 'report',
          component: ''
        },
        {
          path: 'progress',
          name: 'progress',
          component: ''
        },
        {
          path: 'violators',
          name: 'violators',
          component: ''
        },
        {
          path: 'violation',
          name: 'violation',
          component: ''
        }
      ]
    },
    {
      path: '/operation',
      name: 'operation',
      component: ''
    },
    {
      path: '/feedback',
      name: 'feedback',
      component: ''
    },
    {
      path: '/helpCenter',
      name: 'helpCenter',
      component: ''
    },
    {
      path: '/system',
      name: 'system',
      component: '',
      children: [
        {
          path: 'edtion',
          name: 'edtion',
          component: ''
        },
        {
          path: 'release',
          name: 'release',
          component: ''
        },
        {
          path: 'operationlog',
          name: 'operationlog',
          component: ''
        }
      ]
    } */
  ]
})
