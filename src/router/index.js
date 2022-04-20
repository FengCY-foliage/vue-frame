import { createRouter, createWebHistory } from 'vue-router'
import menu from "../views/menu/menu.vue"
import login from "../views/login/login"
import account from "../views/login/account"
import home from "../views/home/home"
import contactUs from "../views/me/contactUs"
import userInformation from "../views/user/userInformation"

const routes = [

  {
    path: '/menu',
    name: 'menu',
    component: menu,
    children:[

      {
        path:'home',
        name:'home',
        component:home
      },{
        path:'contactUs',
        name:'contactUs',
        component:contactUs
      }, {
        path: 'userInformation',
        name: 'userInformation',
        component: userInformation,
      }
    ]
  },
  {
    path: '/',
    name: 'login',

    component: login
  },
  {
    path: '/account',
    name: 'accont',

    component: account
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
