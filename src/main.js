import Vue from 'vue';
import Vuetify from 'vuetify/lib';

import App from './App.vue';
import router from './router';
import store from './store';

import './plugins/axios';
import './plugins/moment';

Vue.config.productionTip = false;

Vue.axios.defaults.baseURL = 'https://glickorater.desperate.solutions/';
// Vue.axios.defaults.baseURL = 'http://localhost:3000/';

const opts = {
  theme: {
    dark: true,
  },
};
Vue.use(Vuetify);

new Vue({
  router,
  store,
  vuetify: new Vuetify(opts),
  render: h => h(App),
}).$mount('#app');
