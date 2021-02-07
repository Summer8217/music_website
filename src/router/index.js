import Vue from 'vue'
import VueRouter from 'vue-router'
import Layout from '../views/Layout'



Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Layout',
    component: Layout,
    //redirect:{name:'HelloWorld'},
    /*children:[
      {
        path: '/',
        name: 'HelloWorld',
        component: HelloWorld
      }
    ]*/
  },
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
