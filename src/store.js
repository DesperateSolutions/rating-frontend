import Vue from 'vue';
import Vuex from 'vuex';
import {
  getAllGames,
  getAllLeagues,
  getAllPlayers,
  addGame,
  addPlayer,
} from './util/api';

Vue.use(Vuex);

const debug = process.env.NODE_ENV !== 'production';

const actions = {
  GET_ALL_GAMES({ commit }, { league }) {
    getAllGames(league)
      .then(response => {
        commit('SET_GAMES', { games: response });
      })
      .catch(error => {
        commit('GET_FAILED', { error });
      });
  },
  GET_ALL_PLAYERS({ commit }, { league }) {
    getAllPlayers(league)
      .then(response => {
        commit('SET_PLAYERS', { players: response });
      })
      .catch(error => {
        commit('GET_FAILED', { error });
      });
  },
  ADD_A_GAME({ commit }, { league, whiteId, blackId, result }) {
    addGame(league, whiteId, blackId, result)
      .then(response => {
        commit('POST_SUCCESS', {
          response,
          message: 'Successfully added a game',
        });
      })
      .catch(error => {
        commit('POST_FAILED', { error, message: 'Failed to add game' });
      });
  },
  ADD_PLAYER({ commit }, { league, name }) {
    addPlayer(league, name)
      .then(response => {
        commit('POST_SUCCESS', {
          response,
          snack: {
            color: 'success',
            message: 'Game added',
          },
        });
      })
      .catch(error => {
        commit('POST_FAILED', { error });
      });
  },
  GET_ALL_LEAGUES({ commit }) {
    getAllLeagues()
      .then(response => {
        commit('SET_LEAGUES', { leagues: response });
      })
      .catch(error => {
        commit('GET_FAILED', { error });
      });
  },
  SELECT_LEAGUE({ commit }, { selectedLeague }) {
    commit('SELECT_LEAGUE', { selectedLeague });
    commit('SET_SNACK', { snackName: 'Valgt league' });
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
  POST_FAILED: (state, { error, message }) => {
    const newState = state;
    newState.snack = {
      color: 'failed',
      message,
      info: `${error.status} - ${error.statusText}`,
      show: true,
    };
    newState.error = error;
  },
  POST_SUCCESS: (state, { response, message }) => {
    const newState = state;
    newState.snack = {
      color: 'success',
      message,
      info: '',
      show: true,
    };
    newState.successInfo = response;
  },
  SELECT_LEAGUE: (state, { selectedLeague }) => {
    const newState = state;
    newState.selectedLeague = selectedLeague;
  },
  SET_SNACK: (state, snack) => {
    const newState = state;
    newState.snack = snack;
  },
};

const getters = {};

const state = {
  successInfo: {},
  loading: false,
  error: false,
  selectedWhitePlayer: { name: 'Player One' },
  selectedBlackPlayer: { name: 'Player Two' },
  games: [],
  leagues: [],
  players: [],
  selectedLeague: {},
  snack: '',
};

export default new Vuex.Store({
  state,
  debug,
  actions,
  mutations,
  getters,
  strict: true,
});
