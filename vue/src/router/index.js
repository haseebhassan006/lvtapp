import {createRouter, createWebHistory} from 'vue-router';
import DefaultLayout from '../components/DefaultLayout.vue'
import AuthLayout from '../components/AuthLayout.vue'
import Dashboard from '../views/Dashboard.vue'
import Login from '../views/Login.vue'
import Registeration from '../views/Registeration.vue'
import Serveys from '../views/Serveys.vue'
import ServeyView from '../views/ServeyView.vue'
import store from '../store'

const routes = [
  { path: '/',
    redirect:'/dashboard',
    meta:{requireAuth: true},
    component: DefaultLayout,
    children:[

      { path:'/dashboard', name:'Dashboard', component:Dashboard},
      { path:'/serveys', name:'Serveys', component:Serveys},
      { path:'/create/servey', name:'CreateServey', component:ServeyView},
      { path:'/servey/:id', name:'ViewServey', component:ServeyView},
    ]
    },
    {
      path:'/auth',
      redirect:'Login',
      name:'Auth',
      meta:{isGuest: true},
      component:AuthLayout,
      children:[

          { path: '/login',name:'Login', component: Login },
          { path: '/register',name:'Register', component: Registeration },

      ]
    }

]

const router = createRouter({

	history:createWebHistory(),
	routes

})

router.beforeEach((to, from, next) =>{
  if(to.meta.requireAuth && !store.state.user.token){
    next({name: 'Login'})
  }else if(store.state.user.token && (to.meta.isGuest)){
    next({name: 'Dashboard'})
  }else{
    next()
  }

})

export default router