import Vue from 'vue'
import VueRouter from '../vue-router'

import Home from '../views/Home'
import About from '../views/About'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: Home
  },
  {
    path: '/about',
    component: About,
    children: [
      {
        path: 'a',
        component: {
          render: (h) => {
            console.log(h)
            return <h1>about a</h1>
          }
        }
      },
      {
        path: 'b',
        component: {
          render: (h) => {
            console.log(h)
            return <h1>about b</h1>
          }
        }
      }
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
