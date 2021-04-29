import { createRouter, createWebHistory } from 'vue-router';
import About from './components/About';
import Home from './components/Home';
import Login from './components/auth/Login';
import Logout from './components/auth/Logout';

const routes = [
  { path: '/', component: Home },
  { path: '/about', component: About },
  { path: '/login', component: Login },
  { path: '/logout', component: Logout },
];

export default createRouter({
  history: createWebHistory(),
  routes,
});
