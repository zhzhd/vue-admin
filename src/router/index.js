import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/login/Login'
import Index from '@/components/Index'
import Company from '@/components/companyInfo/Company'
import ManagerUsers from '@/components/users/ManagerUsers'
import Product from '@/components/product/Product'
import PengdingProduct from '@/components/product/PengdingProduct'
import PublishedProduct from '@/components/product/PublishedProduct'
import RemovedProduct from '@/components/product/RemovedProduct'
import Attendance from '@/components/attendance/Attendance'
import Exception from '@/components/attendance/Exception'
import Holiday from '@/components/attendance/Holiday'
import Supervision from '@/components/supervision/Supervision'
import Report from '@/components/supervision/Report'
import Progress from '@/components/supervision/Progress'
import Violators from '@/components/supervision/Violators'
import Violation from '@/components/supervision/Violation'
import Operation from '@/components/operation/Operation'
import Feedback from '@/components/feedback/Feedback'
import HelpCenter from '@/components/help/HelpCenter'
import System from '@/components/system/System'
import MenuMaintenance from '@/components/system/MenuMaintenance'
import Release from '@/components/system/Release'
import OperationLog from '@/components/system/OperationLog'

Vue.use(Router)

export default new Router({
  model: 'history',
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index,
       
      children: [
        {
          path: '/company',
          name: 'company',
          component: Company
        },
        {
          path: '/users',
          name: 'users',
          component: ManagerUsers
        },
        {
          path: '/product',
          name: 'product',
          component: Product,
          children: [
            {path: 'pengding', component: PengdingProduct},
            {path: 'published', component: PublishedProduct},
            {path: 'removed', component: RemovedProduct}
          ]
        },
        {
          path: '/attendance',
          name: 'attendance',
          component: Attendance,
          children: [
            {
              path: 'exception', 
              component: Exception
            },
            {
              path: 'holiday',
              component: Holiday
            }
          ]
        },
        {
          path: '/supervision',
          name: 'supervision',
          component: Supervision,
          children: [
            {
              path: 'report',
              name: 'report',
              component: Report
            },
            {
              path: 'progress',
              name: 'progress',
              component: Progress
            },
            {
              path: 'violators',
              name: 'violators',
              component: Violators
            },
            {
              path: 'violation',
              name: 'violation',
              component: Violation
            }
          ]
        },
        {
          path: '/operation',
          name: 'operation',
          component: Operation
        },
        {
          path: '/feedback',
          name: 'feedback',
          component: Feedback
        },
        {
          path: '/helpCenter',
          name: 'helpCenter',
          component: HelpCenter
        },
        {
          path: '/system',
          name: 'system',
          component: System,
          children: [
            {
              path: 'edit',
              name: 'edit',
              component: MenuMaintenance
            },
            {
              path: 'release',
              name: 'release',
              component: Release
            },
            {
              path: 'operationlog',
              name: 'operationlog',
              component: OperationLog
            }
          ]
        }
      ]
      
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    // {
    //   path: '/company',
    //   component: Company
    // }
  ]
})
