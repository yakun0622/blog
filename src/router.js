import Vue from 'vue'
import Router from 'vue-router'
import Main from './views/Main.vue'
import Home from './views/Home.vue'
import ArticleList from './views/ArticleList.vue'
import ArticleContent from './views/ArticleContent.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'main',
      component: Main,
      redirect: 'home',
      children: [
        {
          name: 'home',
          path: '/home',
          component: ArticleList
        },
        {
          name: 'article',
          path: '/article',
          component: ArticleContent
        }
      ]
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    }
  ]
})
