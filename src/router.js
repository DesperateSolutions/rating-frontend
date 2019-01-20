import Vue from 'vue';
import Router from 'vue-router';

const AddGame = () => import('./components/AddGame.vue');
const Leagues = () => import('./views/Leagues.vue');
const SpecificLeague = () => import('./views/SpecificLeague.vue');
const Games = () => import('./components/Games.vue');
const Ranking = () => import('./components/Ranking.vue');
const AddPlayer = () => import('./components/AddPlayer.vue');
const Login = () => import('./views/Login.vue');
const AddLeague = () => import('./views/AddLeague.vue');
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
