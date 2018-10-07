import Vue from 'vue';
import Vuex from 'vuex';
import {
  addGame,
  addPlayer,
  getAllGames,
  getAllLeagues,
  getAllPlayers,
} from './util/api';
import { getName } from './util/helpers';

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
        commit('SHOW_SNACKBAR', {
          error,
          message: 'Failed to retrieve games',
          info: ` -- ${error.status} - ${error.statusText}`,
          color: 'red',
        });
      });
  },
  GET_ALL_PLAYERS({ commit }, { league }) {
    getAllPlayers(league)
      .then(response => {
        commit('SET_PLAYERS', { players: response });
      })
      .catch(error => {
        commit('GET_FAILED', { error });
        commit('SHOW_SNACKBAR', {
          error,
          message: 'Failed to retrieve all players',
          info: ` -- ${error.status} - ${error.statusText}`,
          color: 'red',
        });
      });
  },
  ADD_A_GAME({ commit }, { league, whiteId, blackId, result }) {
    addGame(league, whiteId, blackId, result)
      .then(response => {
        commit('POST_SUCCESS', { response });
        commit('SHOW_SNACKBAR', {
          message: 'Successfully added a game',
          info: '',
          color: 'success',
        });
      })
      .catch(error => {
        commit('POST_FAILED', { error });
        commit('SHOW_SNACKBAR', {
          error,
          message: 'Failed to add game',
          info: ` -- ${error.status} - ${error.statusText}`,
          color: 'red',
        });
      });
  },
  ADD_PLAYER({ commit }, { league, name }) {
    addPlayer(league, name)
      .then(response => {
        commit('POST_SUCCESS', { response });
        commit('SHOW_SNACKBAR', {
          message: 'Successfully added a new player',
          info: '',
          color: 'success',
        });
      })
      .catch(error => {
        commit('POST_FAILED', { error });
        commit('SHOW_SNACKBAR', {
          message: 'Failed to add a new player',
          info: ` -- ${error.status} - ${error.statusText}`,
          color: 'red',
        });
      });
  },
  GET_ALL_LEAGUES({ commit }) {
    getAllLeagues()
      .then(response => {
        commit('SET_LEAGUES', { leagues: response });
      })
      .catch(error => {
        commit('GET_FAILED', { error });
        commit('SHOW_SNACKBAR', {
          error,
          message: 'Failed to retrieve leagues',
          info: ` -- ${error.status} - ${error.statusText}`,
          color: 'red',
        });
      });
  },
  SELECT_LEAGUE({ commit }, { selectedLeague }) {
    commit('SELECT_LEAGUE', { selectedLeague });
  },
};

const mutations = {
  SET_GAMES: (state, { games }) => {
    const newState = state;
    newState.games = games.map(game => ({
      blackId: getName(state.players, game.blackId),
      whiteId: getName(state.players, game.blackId),
      result: game.result,
      id: game.id,
    }));
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
    newState.successInfo = response;
  },
  SELECT_LEAGUE: (state, { selectedLeague }) => {
    const newState = state;
    newState.selectedLeague = selectedLeague;
  },
  SHOW_SNACKBAR: (state, payload) => {
    const newState = state;
    newState.snack = {
      ...state.snack,
      ...payload,
      visible: true,
    };
  },
  CLOSE_SNACKBAR: state => {
    const newState = state;
    newState.snack.visible = false;
    newState.snack.multiline = false;
    newState.snack.timeout = 6000;
    newState.snack.message = null;
    newState.snack.info = null;
    newState.snack.color = undefined;
  },
};

const getters = {
  visible: state => state.snack.visible,
};

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
  snack: {
    visible: false,
    message: null,
    info: null,
    timeout: 6000,
    multiline: false,
    color: undefined,
  },
};

export default new Vuex.Store({
  state,
  debug,
  actions,
  mutations,
  getters,
  strict: true,
});
