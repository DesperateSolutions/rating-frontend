import Vue from 'vue';
import Vuetify from 'vuetify/lib';

import App from './App.vue';
import router from './router';
import store from './store';

import './plugins/moment';

Vue.config.productionTip = false;

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
