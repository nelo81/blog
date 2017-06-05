import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/components/Main'
import Home from '@/components/Home'
import About from '@/components/About'
import Tag from '@/components/Tag'
import TagPage from '@/components/TagPage'
import Table from '@/components/Table'
import Article from '@/components/Article'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Main',
      component: Main,
      children: [
        {
          path: '/',
          name: 'Home',
          component: Home,
        },
        {
          path: '/about',
          name: 'About',
          component: About,
        },
        {
          path: '/tag',
          name: 'Tag',
          component: Tag,
        },
        {
          path: '/tag/:id',
          name: 'TagPage',
          component: TagPage,
        },
        {
          path: '/table',
          name: 'Table',
          component: Table,
        },
        {
          path: '/article/:id',
          name: 'Article',
          component: Article,
        },
      ]
    }
  ]
})
