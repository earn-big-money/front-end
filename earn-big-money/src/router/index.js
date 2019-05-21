import Vue from 'vue'
import Router from 'vue-router'
import MainPage from '@/components/MainPage/MainPage'
import Login from '@/components/Login/Login'
import Register from '@/components/Register/Register'
import CreateTask from '@/components/CreateTask/CreateTask'
import TaskDetail from '@/components/TaskDetail/TaskDetail'
import Information from '@/components/Information/Information'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'MainPage',
      component: MainPage
    },
    {
      path: '/Login',
      name: 'Login',
      component: Login
    },

    {
      path: '/Register',
      name: 'Register',
      component: Register
    },

    {
      path: '/Information',
      name: 'Information',
      component: Information
    },

    {
      path: '/CreateTask',
      name: 'CreateTask',
      component: CreateTask
    },
	{
      path: '/TaskDetail',
      name: 'TaskDetail',
      component: TaskDetail
    }
  ]
})
