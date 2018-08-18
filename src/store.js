import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';
// import { getAllGames, getAllLeagues, getAllPlayers, addAGame } from "../util/api";

Vue.use(Vuex);

const debug = process.env.NODE_ENV !== 'production';

const actions = {
  GET_ALL_GAMES({ commit }, { league }) {
    axios.get(`https://clj-glicko.desperate.no/${league}/games`).then(
      (response) => {
        commit('SET_GAMES', { games: response.data });
      },
      (err) => {
        commit('GET_FAILED', err);
      },
    );
  },
  GET_ALL_PLAYERS({ commit }, { league }) {
    axios.get(`https://clj-glicko.desperate.no/${league}/players`).then(
      (response) => {
        commit('SET_PLAYERS', { players: response.data });
      },
      (err) => {
        commit('GET_FAILED', err);
      },
    );
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
    }).then(
      (response) => {
        commit('POST_SUCCESS', response);
      },
      (err) => {
        commit('POST_FAILED', err);
      },
    );
  },
  GET_ALL_LEAGUES({ commit }) {
    axios.get('https://clj-glicko.desperate.no/leagues').then(
      (response) => {
        commit('SET_LEAGUES', { leagues: response.data });
      },
      (err) => {
        commit('GET_FAILED', err);
      },
    );
  },
};

const mutations = {
  SET_GAMES: (state, { games }) => {
    const newState = state;
    newState.games = games;
  },
  SET_PLAYERS: (state, { players }) => {
    const newState = state;
    newState.players = players;
  },
  SET_LEAGUES: (state, { leagues }) => {
    const newState = state;
    newState.leagues = leagues;
  },
  GET_FAILED: (state, { error }) => {
    const newState = state;
    newState.error = error;
  },
  POST_FAILED: (state, { error }) => {
    const newState = state;
    newState.error = error;
  },
  POST_SUCCESS: (state, { response }) => {
    const newState = state;
    newState.success = true;
    newState.successInfo = response;
  },
};

const getters = {};

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
