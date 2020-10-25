import Vue from 'vue';
import VueResize from 'vue-resize';

import App from './App.vue';
import router from './router';
import store from './store';

import './style/ds-global.scss';
import 'vue-resize/dist/vue-resize.css';
import '@fortawesome/fontawesome-free/css/all.css';

Vue.config.productionTip = false;

Vue.use(VueResize);


new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
