import { createRouter, createWebHistory, Router, RouteRecordRaw, RouterOptions } from 'vue-router'
import Login from '../components/Login.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/Login.html'
  },
  {
    path: '/Login.html',
    name: 'login',
    component: Login
  },
  {
    path: '/Home',
    name: 'home',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "home" */ '/src/components/Home.vue'),
    children: [
      {
        path: 'TODO.html',
        name: 'TODO',
        component: () => import('/src/components/learn/TODO.vue'),
      },
      {
        path: 'Feedback.html',
        name: 'Feedback',
        component:()=>import('/src/components/Feedback.vue')
      },
      {
        path: 'YouShouldKnow.html',
        name: 'YouShouldKnow',
        component: () => import('/src/components/learn/YouShouldKnow.vue')
      },
      {
        path: 'InternalAndExternalSort.html',
        name: 'InternalAndExternalSort',
        component: () => import('/src/components/learn/InternalAndExternalSort.vue')
      },
      {
        path: 'InternalSortTypes',
        name: 'InternalSortTypes',
        component: () => import('/src/components/learn/Empty.vue'),
        children: [
          {
            path: 'Types.html',
            name: 'Types',
            component: () => import('/src/components/learn/SortTypes.vue')
          },
          {
            path: 'Insertion',
            name: 'Insertion',
            component: ()=>import('/src/components/learn/Empty.vue'),
            children: [
              {
                path: 'BasicInfo.html',
                name: 'BasicInfo',
                component:() => import('/src/components/learn/insertion/Description.vue')
              },
              {
                path: 'SingleInsertionSorting.html',
                name: 'SingleInsertionSorting',
                component: ()=>import('/src/components/learn/insertion/SingleInsertionSorting.vue')
              },
              {
                path: 'BinaryInsertionSorting.html',
                name: 'BinaryInsertionSorting',
                component: ()=>import('/src/components/learn/insertion/BinaryInsertionSorting.vue')
              },
              {
                path: 'ShellsSorting.html',
                name: 'ShellsSorting',
                component: ()=>import('/src/components/learn/insertion/ShellsSorting.vue')
              },
              {
                path: 'DoBetter.html',
                name: 'DoBetter',
                component: ()=>import('/src/components/learn/insertion/DoBetter.vue')
              },
              {
                path: 'Try.html',
                name: 'Try',
                component: ()=>import('/src/components/learn/insertion/Try.vue')
              }
            ]
          },
        ]
      },
      {
        path: 'ComplexityAndStability.html',
        name: 'ComplexityAndStability',
        component: () => import('/src/components/learn/ComplexityAndStability.vue')
      }
    ]
  },
  {
    path: '/404.html',
    name: '404',
    component: ()=>import('/src/components/404.vue')
  },
  {
    path:  '/:pathMatch(.*)',
    redirect: {name: '404'},
  }
]
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes: routes,
  scrollBehavior(to: any, from: any, savedPosition) {
    // console.log('from scrollBehavior:------------------------------------');

    // console.log('to ==== from');
    // console.log(to);
    // console.log(from);
    // console.log('to.hash = ' + to.hash + " from.hash = " + from.hash);


    if (to.name == from.name) {
      if (to.params.source == "scroll") {
        // console.log('scroll          scroll');
        return {};
      }
      if (to.hash) {
        return { el: to.hash };
      }
      return {};
    }
    else {
      if (to.hash) {
        return {
          el: to.hash,
          behavior: 'smooth'
        }
      }
      else {
        return {
          behavior: 'smooth',
          top: 0
        }
      }
    }
  }
})
export default router
