import Vue from 'vue'
import VueRouter from 'vue-router'
import Layout from '../views/Layout'
import Home from '../components/Home'
import Login from '../views/Login'
import KeyinUser from '../components/KeyinUser'



Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Layout',
    component: Layout,
    redirect:{name:'Home'},
    children:[
      {
        path: '/',
        name: 'Home',
        component: Home
      },
      {
        path:'/login',
        component:Login,
        name:'Login',
        redirect:{name:'KeyinUser'},
        children:[
          {
            path:'keyinUser',
            component:KeyinUser,
            name:'KeyinUser'
          },
        ]
      },
    ]
  },
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
