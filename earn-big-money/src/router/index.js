import Vue from 'vue'
import Router from 'vue-router'
import MainPage from '@/components/MainPage/MainPage'
import Login from '@/components/Login/Login'
import Register from '@/components/Register/Register'
import SubmitForm from '@/components/SubmitForm/SubmitForm'
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
      path: '/SubmitForm',
      name: 'SubmitForm',
      component: SubmitForm
    }
  ]
})