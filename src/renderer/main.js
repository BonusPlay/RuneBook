import Vue from 'vue';
import App from './App';
import router from './router';
import store from './store';

import VueElectron from 'vue-electron';
Vue.use(VueElectron);

import axios from 'axios';
Vue.http = Vue.prototype.$http = axios;

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI);

Vue.config.productionTip = false;
new Vue({
	components: {App},
	router,
	store,
	template: '<App/>'
}).$mount('#app');
