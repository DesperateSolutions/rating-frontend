// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vuetify from 'vuetify';
import colors from 'vuetify/es5/util/colors';
import 'vuetify/dist/vuetify.min.css';
import Vue from 'vue';
import App from './App';
import router from './router';

Vue.use(Vuetify, {
  theme: {
    primary: colors.blue.base,
    secondary: colors.grey.darken1,
    accent: colors.shades.black,
    error: colors.red.accent3,
  },
});

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
});
