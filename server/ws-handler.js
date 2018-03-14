const vm = require('./votemanager');

class WSHandler {
  static initialise(socket) {

    socket.on('join lobby', msg => {
      if (vm.getLobbyByID(msg.id)) {
        socket.emit('join lobby', true);
        socket.join(msg.id);

        //vm.addSocketToLobby(socket, msg.id);
      } else {
        socket.emit('join lobby', false)
      }
    });

    socket.on('vote state', msg => {
      socket.emit('vote exists', (vm.getLobbyByID(msg.id) !== null));
    });
  }
}

module.exports = WSHandler;
