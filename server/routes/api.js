const express = require('express');
const router = express.Router();
const vm = require('../votemanager');
const gmgr = require('../game-mgr');

gmgr.initialise();

/* GET api listing. */
router.get('/', (req, res) => {
  res.send('api works');
});

router.post('/vote', (req, res) => {
  const id = vm.createNewVote('ow', 'ping-pong');
  res.status(200).json({id: id});
});

router.get('/vote/:id', (req, res) => {
  const exists = (vm.getLobbyByID(req.params.id) !== null);
  res.status(200).json({exists: exists});
});

router.get('/games', (req, res) => {
  const games = gmgr.getGames();
  res.status(200).json(games);
});

router.get('/game/:game', (req, res) => {
  let maps;
  if (req.params.game === 'all') {
    maps = gmgr.getCompletInfo();
  } else {
    maps = gmgr.getMapsForGame(req.params.game);
  }

  res.status(200).json(maps);
});

module.exports = router;
