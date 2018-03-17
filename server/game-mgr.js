const games = require('./data/games');

class GameManager {
  static initialise() {
    GameManager.onlyGames = Object.keys(games);
  }

  static getGames() {
    return GameManager.onlyGames;
  }

  static getInfoForGame(game) {
    return games[game];
  }
  static getAllGamesInfo() {
    return games;
  }
}

GameManager.initialise();

module.exports = GameManager;
