// Get dependencies
const express = require('express');
const path = require('path');
const http = require('http');
const bodyParser = require('body-parser');
const socket = require('socket.io');
const vm = require('./server/lobbymanager');
const wsh = require('./server/ws-handler');

// Get our API routes
const api = require('./server/routes/api');
const app = express();

const server = http.createServer(app);

/**
 * listen for ws connections on /socket
 */
const io = socket(server, {
  path: '/socket'
});

// Parsers for POST data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Point static path to dist
app.use(express.static(path.join(__dirname, 'dist')));

// Set our api routes
app.use('/api', api);

// Catch all other routes and return the index file
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/index.html'));
});

app.get('*', req => req.json());

/**
 * Get port from environment and store in Express.
 */
const port = process.env.PORT || '3000';
app.set('port', port);

/**
 * WebSocket implementation
 */
io.on('connection', socket => {
  // Get information about (dis-)connects
  const addr = socket.request.connection.remoteAddress;
  console.log('Connected:', addr);
  socket.on('disconnect', () => {
    console.log('Disconnected:', addr);
  });

  // Give the handling of connected sockets to the handler
  wsh.initialise(socket);
});

vm.initialise();

/**
 * Listen on provided port, on all network interfaces.
 */
server.listen(port, () => console.log(`API running on localhost:${port}`));
