const lm = require('./lobbymanager');

class WSHandler {
  static initialise(socket) {

    // Join lobby event. Checks if the requested lobby exists
    // and if so joins that socket to a room with the same id
    // as the lobby
    socket.on('join lobby', msg => {
      if (lm.getLobbyByID(msg.id)) {
        socket.emit('join lobby', true);
        socket.join(msg.id);

      } else {
        socket.emit('join lobby', false)
      }
    });

    // Responds to the question if a lobby with a specific id exists
    socket.on('lobby exists', msg => {
      socket.emit('lobby exists', (lm.getLobbyByID(msg.id) !== null));
    });

    socket.on('join team', msg => {
      console.log(Object.keys(socket.adapter.rooms)[1], msg.team);
      if (lm.getLobbyByID(msg.id) == null) {
        socket.emit(false);
        return;
      }
      if (msg.team === 'a') {
        lm.getLobbyByID(msg.id).joinTeamA(socket.id);
      } else if (msg.team === 'b') {
        lm.getLobbyByID(msg.id).joinTeamB(socket.id);
      }
    });

    socket.on('disconnect', () => {
      //lm.getLobbyByID(msg.id)
    });
  }
}

module.exports = WSHandler;
