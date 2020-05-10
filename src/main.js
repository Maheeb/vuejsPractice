import Vue from 'vue'
import App from './App.vue'
import Home from './Home'
import VueResource from 'vue-resource';
import VueRouter from 'vue-router';
import {routes} from "../routes";


Vue.use(VueRouter);
const router = new VueRouter({
    routes,
    mode: 'history'
});

Vue.use(VueResource)
Vue.component('app-server', Home)

Vue.http.options.root='https://vuejs-azmaeen.firebaseio.com/';

new Vue({
    el: '#app',
    router: router,
    render: h => h(App)
})
