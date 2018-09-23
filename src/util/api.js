import axios from 'axios';

const BASE_URL = 'https://glickorater.desperate.solutions/';

function handleError(error) {
  console.log(error);
}

function logout() {
  localStorage.removeItem('user');
}

function getAllGames(league) {
  const url = `${BASE_URL}${league}/game`;
  return axios.get(url).then(response => response.data);
}

function getAllPlayers(league) {
  const url = `${BASE_URL}${league}/player`;
  return axios.get(url).then(response => response.data);
}

function addGame(league, whiteId, blackId, result) {
  const url = `${BASE_URL}${league}/game`;
  return axios({
    method: 'post',
    url,
    data: {
      whiteId,
      blackId,
      result,
    },
    config: {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: `Bearer ${localStorage.token}`,
      },
    },
  }).then(() => 'Game added')
    .catch(() => {
      logout();
    });
}

function getAllLeagues() {
  const url = `${BASE_URL}league`;
  return axios({
    method: 'GET',
    url,
  }).then(response => response.data);
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
    .catch(error => handleError(error));
}


export { getAllGames, getAllPlayers, getAllLeagues, addGame, login };
