import Vue from 'vue';
import Vuetify from 'vuetify/lib';
import VueResize from 'vue-resize';

import App from './App.vue';
import router from './router';
import store from './store';

import './style/ds-global.scss';
import 'vue-resize/dist/vue-resize.css';
import '@fortawesome/fontawesome-free/css/all.css';

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
