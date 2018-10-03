import Vue from 'vue';
import Router from 'vue-router';
import AddGame from './components/AddGame.vue';
import Leagues from './components/Leagues.vue';
import SpecificLeague from './components/SpecificLeague.vue';
import Games from './components/Games.vue';
import Ranking from './components/Ranking.vue';
import AddPlayer from './components/AddPlayer.vue';
import Login from './views/Login.vue';

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
      component: () =>
        import(/* webpackChunkName: "about" */ './views/About.vue'),
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
      ],
    },
    {
      path: '/login',
      name: 'login',
      component: Login,
    },
  ],
});

router.beforeEach((to, form, next) => {
  // redirect to login page if not logged in and trying to access a restricted page
  const publicPages = ['/login'];
  const authRequired = !publicPages.includes(to.path);
  const loggedIn = localStorage.getItem('token');

  if (authRequired && !loggedIn) {
    const loginpath = window.location.pathname;
    return next({ name: 'login', query: { redirect: loginpath }});
  }

  return next();
});

export default router;
