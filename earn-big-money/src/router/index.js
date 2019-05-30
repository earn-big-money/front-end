import Vue from 'vue'
import Router from 'vue-router'
import VueCookies from 'vue-cookies'
import MainPage from '@/components/MainPage/MainPage'
import Login from '@/components/Login/Login'
import Register from '@/components/Register/Register'
import RegisterSuccess from'@/components/Register/RegisterSuccess'
import CreateTask from '@/components/CreateTask/CreateTask'
import TaskDetail from '@/components/TaskDetail/TaskDetail'
import Information from '@/components/Information/Information'
import SurveyCreator from '@/components/Survey/CreatorMain'
import SurveyViewer from '@/components/Survey/ViewerMain'
import Survey from '@/components/Survey/SurveyViewer'
Vue.use(Router)
Vue.use(VueCookies)
var router = new Router({
  routes: [
    {
      path: '/',
      name: 'MainPage',
      component: MainPage
    },
    {
      path: '/Login',
      name: 'Login',
      component: Login,
      meta: { notNeedAuth: true }
    },

    {
      path: '/Register',
      name: 'Register',
      component: Register,
      meta: { notNeedAuth: true }
    },

    {
      path: '/RegisterSuccess',
      name: 'RegisterSuccess',
      component: RegisterSuccess
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
    },
	
	{
      path: '/CreateSurvey',
      name: 'SurveyCreator',
      component: SurveyCreator
    },
	{
      path: '/ViewSurvey',
      name: 'SurveyViewer',
      component: SurveyViewer
    },
	{
      path: '/Survey',
      name: 'Survey',
      component: Survey
    }
  ]
})

// router.beforeEach((to, from, next) => {
//   if (to.matched.some(record => record.meta.notNeedAuth)) {
//     console.log("jump");
//     // this route requires auth, check if logged in
//     // if not, redirect to login page.

//     if (Vue.cookies.isKey("id")) {
//       console.log("is login")
//       next({
//         name: 'MainPage',
//         //params: { id: Vue.cookies.get("id")}
//       })
//     } else {
//       next()
//     }
//   } else {
//     next() // 确保一定要调用 next()
//   }
// })

export default router