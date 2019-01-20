import '@babel/polyfill';
import Vue from 'vue';
import * as Sentry from '@sentry/browser'

import './plugins/vuetify';

import App from './App.vue';
import router from './router';
import store from './store';

import './plugins/axios';
import './plugins/moment';

Vue.config.productionTip = false;

Vue.axios.defaults.baseURL = 'https://glickorater.desperate.solutions/';
// Vue.axios.defaults.baseURL = 'http://localhost:3000/';

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');

Sentry.init({
  dsn: 'https://a3317439554d4fbb9692436df573fbb2@sentry.io/1375287',
  integrations: [new Sentry.Integrations.Vue({ Vue })]
});
