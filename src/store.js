import Vue from 'vue';
import Vuex from 'vuex';
import moment from 'moment';
import { addGame, addLeague, addPlayer, getAllGames, getAllLeagues, getAllPlayers, getPlayerStats } from './util/api';
import { getName } from './util/helpers';

Vue.use(Vuex);

moment.locale('nb');

const debug = process.env.NODE_ENV !== 'production';

const actions = {
  async fetchAllGames({ commit }, { leagueId }) {
    try {
      const res = await getAllGames(leagueId);
      commit('SET_GAMES', { games: res });
    } catch (e) {
      commit('GET_FAILED', { e });
      commit('SHOW_SNACKBAR', {
        e,
        message: 'Failed to retrieve games',
        info: ` -- ${e.status} - ${e.statusText}`,
        color: 'red',
      });
    }
  },

  async fetchAllPlayers({ commit }, { leagueId }) {
    try {
      const res = await getAllPlayers(leagueId);
      commit('SET_PLAYERS', { players: res });
    } catch (e) {
      commit('GET_FAILED', { e });
      commit('SHOW_SNACKBAR', {
        e,
        message: 'Failed to retrieve all players',
        info: ` -- ${e.status} - ${e.statusText}`,
        color: 'red',
      });
    }
  },

  async addGame({ commit }, { leagueId, whiteId, blackId, result, date }) {
    try {
      const res = await addGame(leagueId, whiteId, blackId, result, date);
      commit('POST_SUCCESS', { res });
      commit('SHOW_SNACKBAR', {
        message: 'Successfully added a game',
        info: '',
        color: 'success',
      });
    } catch (e) {
      commit('POST_FAILED', { e });
      commit('SHOW_SNACKBAR', {
        e,
        message: 'Failed to add game',
        info: ` -- ${e.status} - ${e.statusText}`,
        color: 'red',
      });
    }
  },

  async addLeague({ commit }, { name, settings }) {
    try {
      const res = await addLeague(name, settings);
      commit('POST_SUCCESS', { res });
      commit('SHOW_SNACKBAR', {
        message: 'Successfully added a league',
        info: '',
        color: 'success',
      });
    } catch (e) {
      commit('POST_FAILED', { e });
      commit('SHOW_SNACKBAR', {
        e,
        message: 'Failed to add new league',
        info: ` -- ${e.status} - ${e.statusText}`,
        color: 'red',
      });
    }
  },

  async addPlayer({ commit }, { leagueId, name }) {
    try {
      const res = await addPlayer(leagueId, name);
      commit('POST_SUCCESS', { res });
      commit('SHOW_SNACKBAR', {
        message: 'Successfully added a new player',
        info: '',
        color: 'success',
      });
    } catch (e) {
      commit('POST_FAILED', { e });
      commit('SHOW_SNACKBAR', {
        message: 'Failed to add a new player',
        info: ` -- ${e.status} - ${e.statusText}`,
        color: 'red',
      });
    }
  },

  async fetchAllLeagues({ commit }) {
    try {
      const res = await getAllLeagues();
      commit('SET_LEAGUES', { leagues: res });
    } catch (e) {
      commit('GET_FAILED', { e });
      commit('SHOW_SNACKBAR', {
        e,
        message: 'Failed to retrieve leagues',
        info: ` -- ${e.status} - ${e.statusText}`,
        color: 'red',
      });
    }
  },

  selectLeague({ commit }, { league }) {
    commit('SELECT_LEAGUE', { league });
  },

  fetchPlayerStats({ commit }, { leagueId, player }) {
    getPlayerStats(leagueId, player)
      .then((response) => {
        commit('SET_PLAYER_STATS', { player: response });
      })
      .catch((e) => {
        commit('GET_FAILED', { e });
        commit('SHOW_SNACKBAR', {
          e,
          message: 'Failed to retrieve selected player stats',
          info: ` -- ${e.status} - ${e.statusText}`,
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
    state.leagues = leagues;
  },

  GET_FAILED: (state, { e }) => {
    state.error = e;
  },

  POST_FAILED: (state, { e }) => {
    state.error = e;
  },

  POST_SUCCESS: (state, { res }) => {
    state.successInfo = res;
  },

  SELECT_LEAGUE: (state, { league }) => {
    state.selectedLeague = league;
  },

  SHOW_SNACKBAR: (state, payload) => {
    state.snack = {
      ...state.snack,
      ...payload,
      visible: true,
    };
  },

  CLOSE_SNACKBAR: (state) => {
    state.snack = {
      visible: false,
      multiline: false,
      timeout: 6000,
      message: null,
      info: null,
      color: undefined,
    };
  },

  SET_PLAYER_STATS: (state, { player }) => {
    state.selectedPlayer = player;
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
