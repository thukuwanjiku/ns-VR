import Vue from 'nativescript-vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import App from '@/components/App.vue'
import SideDrawerApp from '@/components/SideDrawerApp.vue'

const router = new VueRouter({
  routes: [
      {
          path: '/',
          name: 'home',
          component: App,
      },
      {
          path: '/sda',
          name: 'sda',
          component: () => import('@/components/pages/ThirdPage.vue'),
          canReuse: false,

      },
      {
          path: '/second',
          name: 'second',
          component: () => import('@/components/pages/SecondPage.vue'),
          canReuse: false,
      },
      {
          path: '/another',
          name: 'another',
          component: () => import('@/components/pages/FirstPage.vue'),
          canReuse: false,
      },
      {
          path: '*', redirect: '/'
      }
  ]
})

router.beforeEach((to, from, next) => {
    console.log(to.path);
    console.log(from.path);

    next();
})

export default router;