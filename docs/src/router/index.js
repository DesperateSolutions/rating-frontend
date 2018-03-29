'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _vue = require('vue');

var _vue2 = _interopRequireDefault(_vue);

var _vueRouter = require('vue-router');

var _vueRouter2 = _interopRequireDefault(_vueRouter);

var _HelloWorld = require('@/components/HelloWorld');

var _HelloWorld2 = _interopRequireDefault(_HelloWorld);

var _AddGame = require('@/components/AddGame');

var _AddGame2 = _interopRequireDefault(_AddGame);

var _Leagues = require('@/components/Leagues');

var _Leagues2 = _interopRequireDefault(_Leagues);

var _SpecificLeague = require('@/components/SpecificLeague');

var _SpecificLeague2 = _interopRequireDefault(_SpecificLeague);

var _Games = require('@/components/Games');

var _Games2 = _interopRequireDefault(_Games);

var _Ranking = require('@/components/Ranking');

var _Ranking2 = _interopRequireDefault(_Ranking);

var _AddPlayer = require('@/components/AddPlayer');

var _AddPlayer2 = _interopRequireDefault(_AddPlayer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_vue2.default.use(_vueRouter2.default);

exports.default = new _vueRouter2.default({
  routes: [{
    path: '/',
    name: 'HelloWorld',
    component: _HelloWorld2.default
  }, {
    path: '/leagues',
    component: _Leagues2.default
  }, {
    path: '/league/:name',
    component: _SpecificLeague2.default,
    props: true,
    children: [{
      path: 'addGame',
      component: _AddGame2.default
    }, {
      path: 'ranking',
      component: _Ranking2.default
    }, {
      path: 'games',
      component: _Games2.default
    }, {
      path: 'addPlayer',
      component: _AddPlayer2.default
    }]
  }]
});
//# sourceMappingURL=index.js.map