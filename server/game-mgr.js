const games = require('./data/games');

class GameManager {
  static initialise() {
    GameManager.onlyGames = Object.keys(games);
  }

  static getGames() {
    return GameManager.onlyGames;
  }

  static getMapsForGame(game) {
    return games[game].maps;
  }

  static getCompleteInfo() {
    return games;
  }
}

GameManager.initialise();

module.exports = GameManager;
