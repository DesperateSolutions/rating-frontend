import '@babel/polyfill';
import Vue from 'vue';

import './plugins/vuetify';

import App from './App.vue';
import router from './router';
import store from './store';
import './registerServiceWorker';

import './plugins/axios';
import './plugins/moment';

Vue.config.productionTip = false;

Vue.axios.defaults.baseURL = 'https://glickorater.desperate.solutions/';

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
