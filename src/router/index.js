import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import World from '@/components/World'
import Panda from '@/components/Panda'
import Person from '@/components/Person'

Vue.use(Router)
Vue.use(Hello)
Vue.use(World)
Vue.use(Panda)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/world',
      name: 'World',
      component: World
    },
    {
      path: '/panda',
      name: 'Panda',
      component: Panda
    },
    {
      path: '/person',
      name: 'Person',
      component: Person
    }
  ]
})
