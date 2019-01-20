export const getName = (players, id) => players.find(player => player.id === id).name;

export const isObjectEmpty = obj => Object.keys(obj).length === 0;
