/*=========================================================================================
  File Name: router.js
  Description: Routes for vue-router. Lazy loading is enabled.
  ----------------------------------------------------------------------------------------
  Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template
  Author: Pixinvent
  Author URL: http://www.themeforest.net/user/pixinvent
==========================================================================================*/


import Vue from 'vue'
import Router from 'vue-router'
import VeeValidate from 'vee-validate'

Vue.use(VeeValidate)
Vue.use(Router)

const router = new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    scrollBehavior () {
        return { x: 0, y: 0 }
    },
    routes: [

        {
    // =============================================================================
    // MAIN LAYOUT ROUTES
    // =============================================================================
     
              path: '/dashboard',
              name: 'Dashboard',
              component: () => import('./views/Dashboard.vue')
            
        //     path: '',
        //     component: () => import('./layouts/main/Main.vue'),
        //     children: [
        // // =============================================================================
        // // Theme Routes
        // // =============================================================================
        //       {
        //         path: '/dashboard',
        //         name: 'Dashboard',
        //         component: () => import('./views/Dashboard.vue')
        //       },
        //       {
        //         path: '/',
        //         name: 'UserLogin',
        //         component: () => import('./views/UserLogin.vue')
        //       },
        //       {
        //         path: '/createNewAccount',
        //         name: 'CreateNewAccount',
        //         component: () => import('./views/CreateNewAccount.vue')
        //       },
        //       {
        //         path: '/linkPhysicalCard',
        //         name: 'LinkPhysicalCard',
        //         component: () => import('./views/LinkPhysicalCard.vue')
        //       },
        //       {
        //         path: '/viewExistingAccount',
        //         name: 'ViewExistingAccount',
        //         component: () => import('./views/ViewExistingAccount.vue')
        //       },
            // ],
        },
    // =============================================================================
    // FULL PAGE LAYOUTS
    // =============================================================================
        // {
        //     path: '',
        //     component: () => import('@/layouts/full-page/FullPage.vue'),
        //     children: [
        // // =============================================================================
        // // PAGES
        // // =============================================================================
        //       {
        //         path: '/pages/login',
        //         name: 'page-login',
        //         component: () => import('@/views/pages/Login.vue')
        //       },
        //       {
        //         path: '/pages/error-404',
        //         name: 'page-error-404',
        //         component: () => import('@/views/pages/Error404.vue')
        //       },
        //     ]
        // },
        // // Redirect to 404 page, if no match found
        // {
        //     path: '*',
        //     redirect: '/pages/error-404'
        // }
    ],
})

router.afterEach(() => {
  // Remove initial loading
  const appLoading = document.getElementById('loading-bg')
    if (appLoading) {
        appLoading.style.display = "none";
    }
})

export default router
