import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import AddGame from './components/AddGame';
import Leagues from './components/Leagues';
import SpecificLeague from './components/SpecificLeague';
import Games from './components/Games';
import Ranking from './components/Ranking';
import AddPlayer from './components/AddPlayer';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
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
      component: Leagues,
    },
    {
      path: '/league/:name',
      component: SpecificLeague,
      props: true,
      children: [
        {
          path: 'addGame',
          component: AddGame,
        },
        {
          path: 'ranking',
          component: Ranking,
        },
        {
          path: 'games',
          component: Games,
        },
        {
          path: 'addPlayer',
          component: AddPlayer,
        },
      ],
    },
  ],
});
