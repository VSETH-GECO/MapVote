const vm = require('./votemanager');

class WSHandler {
  static initialise(socket) {

    // Join lobby event. Checks if the requested lobby exists
    // and if so joins that socket to a room with the same id
    // as the vote
    socket.on('join lobby', msg => {
      if (vm.getLobbyByID(msg.id)) {
        socket.emit('join lobby', true);
        socket.join(msg.id);

      } else {
        socket.emit('join lobby', false)
      }
    });

    // Responds to the question if a vote with a specific id exists
    socket.on('vote exists', msg => {
      socket.emit('vote exists', (vm.getLobbyByID(msg.id) !== null));
    });
  }
}

module.exports = WSHandler;
