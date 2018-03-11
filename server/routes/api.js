const express = require('express');
const router = express.Router();
var io = require('socket.io')(http);

/* GET api listing. */
router.get('/', (req, res) => {
  res.send('api works');
});

io.on('connection', function(socket){
  console.log('a user connected');
});

module.exports = router;
