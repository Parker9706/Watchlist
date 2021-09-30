const db = require('../models/models.js');

const controller = {};

controller.getWatchlist = async (req, res, next) => {
  //Query to pull all items from watchlist
  const findWatchlist =
  `SELECT *
   FROM "drama_list"
   LIMIT 100;`;


   try {
     const result = await db.query(findWatchlist);
     res.locals.watchlist = result.rows;
     return next();
   } catch (error) {
     return next({
       log: `Error in findWatchlist middleware: ${error}`,
       status: 500,
       message: { error: 'An error occured. Could not get watchlist'}
     });
   }
};



controller.addDrama = async (req, res, next) => {

  const dramaInfo = [
    req.body.title,
    req.body.air_date,
    req.body.synopsis,
    req.body.current_episode,
    req.body.total_episodes,
  ];
  const dramaQuery =
  `INSERT INTO drama_list (
    title,
    air_date,
    synopsis,
    current_episode,
    total_episodes
  )
  VALUES ($1, $2, $3, $4, $5)
  RETURNING _id;`;
  try {
    const result = await db.query(dramaQuery, dramaInfo);
    res.locals.newDramaId = result.rows[0]._id;
    next();
  } catch (error) {
    return next({
      log: `Error in addDramaCard middleware: ${error}`,
      status: 500,
      message: { error: `An error occured. Could not add the drama to watchlist.`}
    });
  }
};

controller.deleteDrama = async (req, res, next) => {
  console.log('Body of request: ', req.body)
  const deleteQuery =
  `DELETE FROM drama_list WHERE title='${req.body.title}';`;
  console.log('Query: ', deleteQuery)
  try {
    const result = await db.query(deleteQuery);
    next();
  } catch (error) {
    return next({
      log: `Error in deleteDrama middleware: ${error}`,
      status: 500,
      message: { error: `An error occured. Could not delete the drama from the watchlist`}
    });
  }
};

module.exports = controller;