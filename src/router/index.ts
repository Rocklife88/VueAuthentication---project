import { createRouter, createWebHistory } from 'vue-router';
import Register from '../views/Register.vue';
import Login from '../views/Login.vue';
import Dashboard from '../views/Dashboard.vue';
import HomeView from '@/views/HomeView.vue';
import LoginContent from '../components/LoginContent.vue';
import RegisterContent from '../components/RegisterContent.vue';
import HomeContent from '@/components/HomeContent.vue';
import DashboardContent from '@/components/DashboardContent.vue';
import About from '@/views/About.vue';
import AboutContent from '@/components/AboutContent.vue';

const routes = [
{ path:'/', component: HomeView,
  children: [
    {
      path: '/', // Questo renderà LoginContent all'interno del Login
      component: HomeContent
    }
  ]
},

//
  { path: '/register', component: Register,
    children: [
      {
        path: '/register', 
        component: RegisterContent
      }
    ]
   },
   // home
  { path: '/', component: HomeView },
  {
    path: '/login',
    component: Login,
    children: [
      {
        path: '', 
        component: LoginContent
      }
    ]
  },
  { path: '/about', component: About,
    children: [
      {
        path: '', 
        component: AboutContent
      }
    ]
   },

  // dAshboard
  { path: '/dashboard', component: Dashboard,
    children: [
      {
        path: '', 
        component: DashboardContent
      }
    ]
   },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
