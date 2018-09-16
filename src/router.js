import Vue from 'vue'
import Router from 'vue-router'
import Quiz from './views/Quiz.vue'
import Theory from './views/Theory.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'root',
      redirect: '/quiz', //this root was not necessary but I redirect the root to /quiz here
    },
    {
      path: '/quiz', 
      name: 'quiz',
      component: Quiz 
    },
    {
      path: '/theory',
      name: 'theory',
      component: Theory // the routes can be lazy loaded (which is the case fro the 2nd root by default, I took it off to make it simpler)

    }
  ]
})
