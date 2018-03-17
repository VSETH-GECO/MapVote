const express = require('express');
const router = express.Router();
const vm = require('../lobbymanager');
const gmgr = require('../game-mgr');

gmgr.initialise();

/* GET api listing. */
router.get('/', (req, res) => {
  res.status(200).send('api works');
});

router.post('/lobby', (req, res) => {
  const id = vm.createNewLobby(req.params.game, req.params.mode);
  res.status(200).json({id: id});
});

router.get('/lobby/:id', (req, res) => {
  const exists = (vm.getLobbyByID(req.params.id) !== null);
  res.status(200).json({exists: exists});
});

router.get('/games', (req, res) => {
  const games = gmgr.getGames();
  res.status(200).json(games);
});

router.get('/game/:game', (req, res) => {
  let game;

  if (req.params.game === 'all') {
    game = gmgr.getAllGamesInfo();
  } else {
    game = gmgr.getInfoForGame(req.params.game);
  }

  res.status(200).json(game);
});

module.exports = router;
