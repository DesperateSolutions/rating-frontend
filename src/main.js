// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vuetify from 'vuetify';
import 'vuetify/dist/vuetify.min.css';
import axios from 'axios';
import Vue from 'vue';
import Moment from 'vue-moment';
import App from './App';
import router from './router';
import store from './store/store';

Vue.use(Vuetify);
Vue.use(Moment);

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>',
});
