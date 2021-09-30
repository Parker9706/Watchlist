const express = require('express');
const controller = require('../controllers/controller');
const router = express.Router();

router.get('/', //was /api
  controller.getWatchlist,
  (req, res) => res.status(200).json(res.locals.watchlist)
);

router.post('/dramacard',
  controller.addDrama,
  (req, res) => res.status(200).json('Drama added to watchlist successfully')
);

router.post('/deleteDrama',
  controller.deleteDrama,
  (req, res) => res.status(200).json('Drama deleted from watchlist successfully')
);

router.post('/increment',
controller.increment,
(req, res) => res.status(200).json('Incremented Drama by 1 Digit!')
);

module.exports = router;