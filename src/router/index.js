import Vue from 'vue';
import Router from 'vue-router';
import HelloWorld from '@/components/HelloWorld';
import AddGame from '@/components/AddGame';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld,
    },
    {
      path: '/game',
      name: 'AddGame',
      component: AddGame,
    },
  /*
    {
      path: 'games',
      name: 'Games',
    },
    {
      path: 'addPlayer',
      name: 'Add Player',
    },
    {
      paht: 'rankings',
      name: 'Rankings',
    },
    {
      path: 'leagues',
      name: 'Leagues',
    },*/
  ],
});
