import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const debug = process.env.NODE_ENV !== 'production'

const state = {
  success: false,
  loading: false,
  error: false,
  selectedWhitePlayer: { name: 'Player One' },
  selectedBlackPlayer: { name: 'Player Two' },
  games: [],
  leagues: [],
  players: [],
};

export default new Vuex.Store({
  state,
  debug,
});
