class Lobby {
}

class VoteManager {
  /**
   * Will setup all the static variables needed for this class to function
   * like a real class and not the js bs that calls itself that...
   *
   * Only invoke once or all data stored will be lost!!!
   */
  static initialise() {
    VoteManager.lobbies = [];
  }

  static createNewVote(game, mode) {
    let lobby = new Lobby();

    lobby.id = require('crypto').randomBytes(8).toString('hex');
    lobby.game = game;
    lobby.mode = mode;

    this.lobbies.push(lobby);

    return lobby.id;
  }

  static getLobbyByID(id) {
    let found = null;
    VoteManager.lobbies.forEach(lobby => {
      if (lobby.id === id) {
        found = lobby;
      }
    });

    return found;
  }
}

module.exports = VoteManager;