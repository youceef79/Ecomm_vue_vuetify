import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../components/Home/Home'
import ProductDetails from '../components/Details/ProductDetails'
import Cart from '../components/Cart/Cart'
import NotFound from '../components/error/NotFound'
import Login from '../components/User/Login'
import Register from '../components/User/Register'



Vue.use(VueRouter);
const routes = [
      { 
       path: '/',
       name: 'home',
       component: Home 
       },
       { 
        path: '/product-details',
        name: 'product-details',
        component: ProductDetails
       },
       { 
        path: '/cart',
        name: 'cart',
        component: Cart
       },
       { 
        path: '/404', component: NotFound 
        },
        { 
        path: '/user/login',
        name: 'user-login',
        component: Login
       },
       { 
        path: '/user/register',
        name: 'user-register',
        component: Register
       },
       { 
        path: '/user/register',
        name: 'user-register',
        component: Cart
       },
       { 
        path: '*', redirect: '/404' 
        }
       /*
       { 
       path: '/',
       component: allProductsItems
       },
       { 
        path: '/product-details/:id',
        name: 'product-details',
        component: productDetails
       },
       { 
        path: '/user/login',
        name: 'user-login',
        component: Login
       },
       { 
        path: '/user/register',
        name: 'user-register',
        component: Register
       }
       */
   ]; 

export default new VueRouter({
   mode: 'history',
   scrollBehavior: () => ({ y: 0 }),
   routes: routes
});