export const getName = (players, id) => {
  players.forEach(player => {
    if (player.id === id) {
      return player.name;
    }
    return player.id;
  });
};

export const isObjectEmpty = obj =>
  Object.keys(obj).length === 0;
