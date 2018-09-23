function getName(players, id) {
  players.forEach(player => {
    if (player.id === id) {
      return player.name;
    }
    return player.id;
  })
}

export default { getName };
