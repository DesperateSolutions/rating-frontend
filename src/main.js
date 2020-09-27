import Vue from 'vue';
import Vuetify from 'vuetify/lib';
import VueResize from 'vue-resize';

import App from './App.vue';
import router from './router';
import store from './store';

import 'vue-resize/dist/vue-resize.css';

Vue.config.productionTip = false;

Vue.use(VueResize);

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
  render: (h) => h(App),
}).$mount('#app');
