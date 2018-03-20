import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

const debug = process.env.NODE_ENV !== 'production';

const actions = {
  GET_ALL_GAMES({ commit }) {
    axios.get('https://clj-glicko.desperate.no/AulonsLeague/games').then((response) => {
      commit('SET_GAMES', { games: response.data });
    }, (err) => {
      console.log(err);
    });
  },
  GET_ALL_PLAYERS({ commit }) {
    axios.get('https://clj-glicko.desperate.no/AulonsLeague/players').then((response) => {
      commit('SET_PLAYERS', { players: response.data });
    }, (err) => {
      console.log(err);
    });
  },
};

const mutations = {
  SET_GAMES: (state, { games }) => {
    console.log(games);
    state.games = games;
  },
  SET_PLAYERS: (state, { players }) => {
    console.log(players);
    state.players = players;
  },
};

const getters = {

};

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

export default new Vuex.Store({
  state,
  debug,
  actions,
  mutations,
  getters,
  strict: true,
});
