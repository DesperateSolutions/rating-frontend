// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vuetify from 'vuetify';
import 'vuetify/dist/vuetify.min.css';
import Vue from 'vue';
import VueAuth from '@websanova/vue-auth';
import VueAuthBearer from '@websanova/vue-auth/drivers/auth/bearer';
import VueAuthHttp from '@websanova/vue-auth/drivers/http/axios.1.x';
import VueAuthRouter from '@websanova/vue-auth/drivers/router/vue-router.2.x';
import Moment from 'vue-moment';

import App from './App';
import router from './router';
import store from './store/store';

Vue.use(Vuetify);
Vue.use(Moment);
Vue.use(VueAuth, {
  auth: VueAuthBearer,
  http: VueAuthHttp,
  router: VueAuthRouter,
});

Vue.config.productionTip = false;

Vue.axios.defaults.baseURL = 'https://glickorater.desperate.solutions/';

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>',
});
