import Vue from 'vue';
import Router from 'vue-router';
import HelloWorld from '@/components/HelloWorld';
import AddGame from '@/components/AddGame';
import Leagues from '@/components/Leagues';
import SpecificLeague from '@/components/SpecificLeague';
import Games from '@/components/Games';
import Ranking from '@/components/Ranking';
import AddPlayer from '@/components/AddPlayer';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld,
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
