import {createRouter,createWebHashHistory} from 'vue-router';
import About from './components/About';
import Home from './components/Home';

const routes = [
  { path: '/', component: Home },
  { path: '/about', component: About },
];

export default createRouter({
  history: createWebHashHistory(),
  routes,
});
