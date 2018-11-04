import axios from 'axios';
import router from '../router';

const BASE_URL = 'https://glickorater.desperate.solutions/';
// const BASE_URL = 'http://localhost:3000/';

function getAllGames(league) {
  const url = `${BASE_URL}${league}/game`;
  return axios.get(url).then(response => response.data);
}

function getAllPlayers(league) {
  const url = `${BASE_URL}${league}/player`;
  return axios
    .get(url)
    .then(response => response.data)
    .catch(error => {
      router.push({ path: '/leagues' });
      return Promise.reject(error.response);
    });
}

function addPlayer(league, name) {
  const url = `${BASE_URL}${league}/player`;
  return axios({
    method: 'post',
    url,
    data: {
      name,
    },
    config: {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: `Bearer ${localStorage.token}`,
      },
    },
  })
    .then(response => response)
    .catch(error => Promise.reject(error.response));
}

function addGame(league, whiteId, blackId, result, date) {
  const url = `${BASE_URL}${league}/game`;
  return axios({
    method: 'post',
    url,
    data: {
      whiteId,
      blackId,
      result,
      timestamp: date,
    },
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: `Bearer ${localStorage.token}`,
    },
  })
    .then(response => response)
    .catch(error => Promise.reject(error.response));
}

const addLeague = (name, settings) => {
  const url = `${BASE_URL}league`;
  return axios({
    method: 'post',
    url,
    data: {
      name,
      settings,
    },
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: `Bearer ${localStorage.token}`,
    },
  })
    .then(response => response)
    .catch(error => Promise.reject(error.response));
};

function getAllLeagues() {
  const url = `${BASE_URL}league`;
  return axios({
    method: 'GET',
    url,
  })
    .then(response => response.data)
    .catch(error => Promise.reject(error.response));
}

function login(username, password) {
  const url = `${BASE_URL}token`;
  return axios({
    method: 'post',
    url,
    data: `grant_type=password&username=${username}&password=${password}`,
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      'Cache-Control': 'no-cache',
    },
  })
    .then(response => {
      const token = response.data;

      if (token.access_token) {
        localStorage.setItem('token', token.access_token);
      }
      Promise.resolve();
    })
    .catch(error => Promise.reject(error.response));
}

export { getAllGames, getAllPlayers, getAllLeagues, addGame, addPlayer, login, addLeague };
