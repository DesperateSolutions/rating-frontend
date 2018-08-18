import Vue from 'vue';
import VueAuth from '@websanova/vue-auth';
import VueAuthBearer from '@websanova/vue-auth/drivers/auth/bearer';
import VueAuthHttp from '@websanova/vue-auth/drivers/http/axios.1.x';
import VueAuthRouter from '@websanova/vue-auth/drivers/router/vue-router.2.x';
import router from '../router';

Vue.router = router;

Vue.use(VueAuth, {
  auth: VueAuthBearer,
  http: VueAuthHttp,
  router: VueAuthRouter,
});
