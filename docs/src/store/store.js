'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _vue = require('vue');

var _vue2 = _interopRequireDefault(_vue);

var _vuex = require('vuex');

var _vuex2 = _interopRequireDefault(_vuex);

var _axios = require('axios');

var _axios2 = _interopRequireDefault(_axios);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_vue2.default.use(_vuex2.default);

var debug = process.env.NODE_ENV !== 'production';

var actions = {
  GET_ALL_GAMES: function GET_ALL_GAMES(_ref, _ref2) {
    var commit = _ref.commit;
    var league = _ref2.league;

    _axios2.default.get('https://clj-glicko.desperate.no/' + league + '/games').then(function (response) {
      commit('SET_GAMES', { games: response.data });
    }, function (err) {
      commit('GET_FAILED', err);
    });
  },
  GET_ALL_PLAYERS: function GET_ALL_PLAYERS(_ref3, _ref4) {
    var commit = _ref3.commit;
    var league = _ref4.league;

    _axios2.default.get('https://clj-glicko.desperate.no/' + league + '/players').then(function (response) {
      commit('SET_PLAYERS', { players: response.data });
    }, function (err) {
      commit('GET_FAILED', err);
    });
  },
  ADD_A_GAME: function ADD_A_GAME(_ref5, _ref6) {
    var commit = _ref5.commit;
    var league = _ref6.league,
        whiteId = _ref6.whiteId,
        blackId = _ref6.blackId,
        result = _ref6.result;

    (0, _axios2.default)({
      method: 'post',
      url: 'https://clj-glicko.desperate.no/' + league + '/games',
      data: 'whiteId=' + encodeURIComponent(whiteId) + '&blackId=' + encodeURIComponent(blackId) + '&result=' + encodeURIComponent(result),
      config: {
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      }
    }).then(function (response) {
      commit('POST_SUCCESS', response);
    }, function (err) {
      commit('POST_FAILED', err);
    });
  },
  GET_ALL_LEAGUES: function GET_ALL_LEAGUES(_ref7) {
    var commit = _ref7.commit;

    _axios2.default.get('https://clj-glicko.desperate.no/leagues').then(function (response) {
      commit('SET_GAMES', { leagues: response.data });
    }, function (err) {
      commit('GET_FAILED', err);
    });
  }
};

var mutations = {
  SET_GAMES: function SET_GAMES(state, _ref8) {
    var games = _ref8.games;

    state.games = games;
  },
  SET_PLAYERS: function SET_PLAYERS(state, _ref9) {
    var players = _ref9.players;

    state.players = players;
  },
  SET_LEAGUES: function SET_LEAGUES(state, _ref10) {
    var leagues = _ref10.leagues;

    state.leagues = leagues;
  },
  GET_FAILED: function GET_FAILED(state, _ref11) {
    var error = _ref11.error;

    state.error = error;
  },
  POST_FAILED: function POST_FAILED(state, _ref12) {
    var error = _ref12.error;

    state.error = error;
  },
  POST_SUCCESS: function POST_SUCCESS(state, _ref13) {
    var response = _ref13.response;

    state.success = true;
    state.successInfo = response;
  }
};

var getters = {};

var state = {
  successInfo: {},
  success: false,
  loading: false,
  error: false,
  selectedWhitePlayer: { name: 'Player One' },
  selectedBlackPlayer: { name: 'Player Two' },
  games: [],
  leagues: [],
  players: [],
  selectedLeague: {}
};

exports.default = new _vuex2.default.Store({
  state: state,
  debug: debug,
  actions: actions,
  mutations: mutations,
  getters: getters,
  strict: true
});
//# sourceMappingURL=store.js.map