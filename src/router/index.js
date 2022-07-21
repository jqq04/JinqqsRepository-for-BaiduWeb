import Vue from 'vue'
import Router from 'vue-router'
import Employee from '@/employee/Employee'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Employee',
      component: Employee
    }
  ]
})
