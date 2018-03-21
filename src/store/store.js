import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

const debug = process.env.NODE_ENV !== 'production';

const actions = {
  GET_ALL_GAMES({ commit }, { league }) {
    axios.get(`https://clj-glicko.desperate.no/${league}/games`).then((response) => {
      commit('SET_GAMES', { games: response.data });
    }, (err) => {
      commit('GET_FAILED', err);
    });
  },
  GET_ALL_PLAYERS({ commit }, { league }) {
    axios.get(`https://clj-glicko.desperate.no/${league}/players`).then((response) => {
      commit('SET_PLAYERS', { players: response.data });
    }, (err) => {
      commit('GET_FAILED', err);
    });
  },
  ADD_A_GAME({ commit }, {
    league, whiteId, blackId, result,
  }) {
    axios({
      method: 'post',
      url: `https://clj-glicko.desperate.no/${league}/games`,
      data: `whiteId=${encodeURIComponent(whiteId)}&blackId=${encodeURIComponent(blackId)}&result=${encodeURIComponent(result)}`,
      config: {
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/x-www-form-urlencoded',
        },
      },
    }).then((response) => {
      commit('POST_SUCCESS', response);
    }, (err) => {
      commit('POST_FAILED', err);
    });
  },
};

const mutations = {
  SET_GAMES: (state, { games }) => {
    state.games = games;
  },
  SET_PLAYERS: (state, { players }) => {
    state.players = players;
  },
  GET_FAILED: (state, { error }) => {
    state.error = error;
  },
  POST_FAILED: (state, { error }) => {
    state.error = error;
  },
  POST_SUCCESS: (state, { response }) => {
    state.success = true;
    state.successInfo = response;
  },
};

const getters = {

};

const state = {
  successInfo: {},
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
