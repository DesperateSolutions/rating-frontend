import Vue from 'vue';
import Vuex from 'vuex';
import moment from 'moment';
import { addGame, addLeague, addPlayer, getAllGames, getAllLeagues, getAllPlayers, getPlayerStats } from './util/api';
import { getName } from './util/helpers';

Vue.use(Vuex);

moment.locale('nb');

const debug = process.env.NODE_ENV !== 'production';

const actions = {
  fetchAllGames({ commit }, { league }) {
    getAllGames(league)
      .then((response) => {
        commit('SET_GAMES', { games: response });
      })
      .catch((error) => {
        commit('GET_FAILED', { error });
        commit('SHOW_SNACKBAR', {
          error,
          message: 'Failed to retrieve games',
          info: ` -- ${error.status} - ${error.statusText}`,
          color: 'red',
        });
      });
  },

  fetchAllPlayers({ commit }, { league }) {
    getAllPlayers(league)
      .then((response) => {
        commit('SET_PLAYERS', { players: response });
      })
      .catch((error) => {
        commit('GET_FAILED', { error });
        commit('SHOW_SNACKBAR', {
          error,
          message: 'Failed to retrieve all players',
          info: ` -- ${error.status} - ${error.statusText}`,
          color: 'red',
        });
      });
  },

  addGame({ commit }, { league, whiteId, blackId, result, date }) {
    addGame(league, whiteId, blackId, result, date)
      .then((response) => {
        commit('POST_SUCCESS', { response });
        commit('SHOW_SNACKBAR', {
          message: 'Successfully added a game',
          info: '',
          color: 'success',
        });
      })
      .catch((error) => {
        commit('POST_FAILED', { error });
        commit('SHOW_SNACKBAR', {
          error,
          message: 'Failed to add game',
          info: ` -- ${error.status} - ${error.statusText}`,
          color: 'red',
        });
      });
  },

  addLeague({ commit }, { name, settings }) {
    addLeague(name, settings)
      .then((response) => {
        commit('POST_SUCCESS', { response });
        commit('SHOW_SNACKBAR', {
          message: 'Successfully added a league',
          info: '',
          color: 'success',
        });
      })
      .catch((error) => {
        commit('POST_FAILED', { error });
        commit('SHOW_SNACKBAR', {
          error,
          message: 'Failed to add new league',
          info: ` -- ${error.status} - ${error.statusText}`,
          color: 'red',
        });
      });
  },

  addPlayer({ commit }, { league, name }) {
    addPlayer(league, name)
      .then((response) => {
        commit('POST_SUCCESS', { response });
        commit('SHOW_SNACKBAR', {
          message: 'Successfully added a new player',
          info: '',
          color: 'success',
        });
      })
      .catch((error) => {
        commit('POST_FAILED', { error });
        commit('SHOW_SNACKBAR', {
          message: 'Failed to add a new player',
          info: ` -- ${error.status} - ${error.statusText}`,
          color: 'red',
        });
      });
  },

  async fetchAllLeagues({ commit }) {
    await getAllLeagues()
      .then((response) => {
        commit('SET_LEAGUES', { leagues: response });
      })
      .catch((error) => {
        commit('GET_FAILED', { error });
        commit('SHOW_SNACKBAR', {
          error,
          message: 'Failed to retrieve leagues',
          info: ` -- ${error.status} - ${error.statusText}`,
          color: 'red',
        });
      });
  },

  selectLeague({ commit }, selectedLeague) {
    commit('SELECT_LEAGUE', { selectedLeague });
  },

  fetchPlayerStats({ commit }, { league, player }) {
    getPlayerStats(league, player)
      .then((response) => {
        commit('SET_PLAYER_STATS', { player: response });
      })
      .catch((error) => {
        commit('GET_FAILED', { error });
        commit('SHOW_SNACKBAR', {
          error,
          message: 'Failed to retrieve selected player stats',
          info: ` -- ${error.status} - ${error.statusText}`,
          color: 'red',
        });
      });
  },
};

const mutations = {
  SET_GAMES: (state, { games }) => {
    const newState = state;
    newState.games = games.map((game) => ({
      blackId: getName(state.players, game.blackId),
      whiteId: getName(state.players, game.whiteId),
      result: game.result,
      id: game.id,
      timestamp: game.timestamp,
    }));
    newState.games.reverse();
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

  CLOSE_SNACKBAR: (state) => {
    const newState = state;
    newState.snack.visible = false;
    newState.snack.multiline = false;
    newState.snack.timeout = 6000;
    newState.snack.message = null;
    newState.snack.info = null;
    newState.snack.color = undefined;
  },

  SET_PLAYER_STATS: (state, { player }) => {
    const newState = state;
    newState.selectedPlayer = player;
  },
};

const getters = {
  visible: (state) => state.snack.visible,

  playerStats: (state) => {
    if (state.selectedPlayer.wins === 0 && state.selectedPlayer.losses === 0) return null;

    return [
      {
        label: 'wins',
        value: state.selectedPlayer.wins,
      },
      {
        label: 'losses',
        value: state.selectedPlayer.losses,
      },
    ];
  },
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
  selectedPlayer: {},
};

export default new Vuex.Store({
  state,
  debug,
  actions,
  mutations,
  getters,
  strict: true,
});
