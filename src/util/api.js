import axios from 'axios';

const BASE_URL = 'https://clj-glicko.desperate.no';

function getAllGames(league) {
  const url = `${BASE_URL}/${league}/games`;
  return axios.get(url).then(response => response.data);
}

function getAllPlayers(league) {
  const url = `${BASE_URL}/${league}/players`;
  return axios.get(url).then(response => response.data);
}

function addAGame(league, whiteId, blackId, result) {
  const url = `${BASE_URL}/${league}/games`;
  return axios({
    method: 'post',
    url,
    data: `whiteId=${encodeURIComponent(whiteId)}&blackId=${encodeURIComponent(
      blackId,
    )}&result=${encodeURIComponent(result)}`,
    config: {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/x-www-form-urlencoded',
      },
    },
  }).then(response => response.data);
}

function getAllLeagues() {
  const url = `${BASE_URL}/leagues`;
  return axios.get(url).then(response => response.data);
}

export { getAllGames, getAllPlayers, getAllLeagues, addAGame };
