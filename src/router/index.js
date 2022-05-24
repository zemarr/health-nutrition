import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import SignUp from '../views/auth/SignUp.vue'
import DashboardLayout from '../components/layouts/DashboardLayout.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/dashboard',
    redirect: { name: 'Dashboard' },
    name: 'DashboardLayout',
    component: DashboardLayout,
    children: [
      {
        path: 'home',
        name: 'Dashboard',
        component: () => import('../views/dashboard/DashboardHome')
      },
      {
        path: 'order-history',
        name: 'Order History',
        component: () => import('../views/dashboard/OrderHistory')
      },
      {
        path: 'account',
        name: 'Account',
        component: () => import('../views/dashboard/AccountView')
      }
    ]
  },
  {
    path: '/sign-up',
    name: 'Sign Up',
    component: SignUp
  },
  {
    path: '/onboarding',
    name: 'Onboarding',
    component: () => import('../views/auth/OnboardingView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
