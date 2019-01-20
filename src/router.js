import Vue from 'vue';
import Router from 'vue-router';

const AddGame = () => import('./components/AddGame.vue');
const Leagues = () => import('./components/Leagues.vue');
const SpecificLeague = () => import('./components/SpecificLeague.vue');
const Games = () => import('./components/Games.vue');
const Ranking = () => import('./components/Ranking.vue');
const AddPlayer = () => import('./components/AddPlayer.vue');
const Login = () => import('./views/Login.vue');
const AddLeague = () => import('./components/AddLeague.vue');
const Statistics = () => import('./components/Statistics.vue');

Vue.use(Router);

const router = new Router({
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'root',
      component: Leagues,
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue'),
    },
    {
      path: '/leagues',
      name: 'leagues',
      component: Leagues,
    },
    {
      path: '/league/:name',
      name: 'specificleague',
      component: SpecificLeague,
      props: true,
      children: [
        {
          path: 'addGame',
          name: 'addgame',
          component: AddGame,
        },
        {
          path: 'ranking',
          name: 'ranking',
          component: Ranking,
        },
        {
          path: 'games',
          name: 'games',
          component: Games,
        },
        {
          path: 'addPlayer',
          name: 'addplayer',
          component: AddPlayer,
        },
        {
          path: 'statistics',
          name: 'statistics',
          component: Statistics,
        },
      ],
    },
    {
      path: '/login',
      name: 'login',
      component: Login,
    },
    {
      path: '/addLeague',
      name: 'newLeague',
      component: AddLeague,
    },
  ],
});

router.beforeEach((to, from, next) => {
  // redirect to login page if not logged in and trying to access a restricted page
  const publicPages = ['/login', '/leagues', '/'];
  const authRequired = !publicPages.includes(to.path);
  const loggedIn = localStorage.getItem('token');

  if (authRequired && !loggedIn) {
    const loginpath = to.path;
    return next({ name: 'login', query: { redirect: loginpath } });
  }

  return next();
});

export default router;
