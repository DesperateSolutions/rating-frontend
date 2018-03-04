import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

const debug = process.env.NODE_ENV !== 'production';

const state = {
  success: false,
  loading: false,
  error: false,
  selectedWhitePlayer: { name: 'Player One' },
  selectedBlackPlayer: { name: 'Player Two' },
  games: [],
  leagues: [],
  players: [],
  selectedLeague: {},
};

const actions = {
  GET_ALL_GAMES({ commit }) {
    axios.get('https://clj-glicko.desperate.no/AulonsLeague/games').then((response) => {
      console.log(response.data);
      commit('SET_GAMES', { games: response.data });
    }, (err) => {
      console.log(err);
    });
  },
};

const mutations = {
  SET_GAMES: (states, { games }) => {
    console.log(games);
    state.games = games;
  },
};

const getters = {

};

export default new Vuex.Store({
  state,
  debug,
  actions,
  mutations,
  getters,
  strict: true,
});
