class Lobby {
  constructor() {
    this.teamA = [];
    this.teamB = [];
  }

  joinTeamA(id) {
    if (this.teamA.indexOf(id) > -1) {
      this.teamA.push(id);
    }
    if (this.teamB.contains(id)) {
      this.teamB.remove(id);
    }
  }

  joinTeamB(id) {
    if (!this.teamB.contains(id)) {
      this.teamB.push(id);
    }
    if (this.teamA.contains(id)) {
      this.teamA.remove(id);
    }
  }


}

class LobbyManager {
  /**
   * Will setup all the static variables needed for this class to function
   * like a real class and not the js bs that calls itself that...
   *
   * Only invoke once or all data stored will be lost!!!
   */
  static initialise() {
    LobbyManager.lobbies = [];
  }

  static createNewLobby(game, mode) {
    let lobby = new Lobby();

    lobby.id = require('crypto').randomBytes(8).toString('hex');
    lobby.game = game;
    lobby.mode = mode;

    this.lobbies.push(lobby);

    return lobby.id;
  }

  static getLobbyByID(id) {
    let found = null;
    LobbyManager.lobbies.forEach(lobby => {
      if (lobby.id === id) {
        found = lobby;
      }
    });

    return found;
  }
}

module.exports = LobbyManager;
