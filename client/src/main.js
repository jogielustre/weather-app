import { createApp } from 'vue'
import App from './App.vue'

createApp(App).mount('#app')

/*
import VueRouter from 'vue-router';
import HelloWorld from './components/HelloWorld.vue'
import Home from './components/Home.vue'

createApp.config.productionTip = false;

createApp.use(VueRouter);

const routes = [
    { path: '/', component: HelloWorld },
    { path: '/home', component: Home },
];

const router = new VueRouter({
  mode: 'history', // Use history mode for cleaner URLs
  base: process.env.BASE_URL,
  routes,
});

new createApp({
  render: (h) => h(App),
  router, // Inject the router into the Vue instance
}).$mount('#app');
*/
