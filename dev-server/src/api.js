import { transaction } from 'objection';
import Game from './models/Game';

export default router => {
  router.get('/testing', async (req, res) => {
    res.send('testing response');
   });

  router.get('/api/games', async (req, res) => {
    const games = await Game.query()
      .skipUndefined()
      .orderBy('id');

    res.send(games);
  });

  router.get('/api/games/:id', async (req, res) => {
    try {
      const game = await Game.query().findById(req.params.id);
      if (!game) {
        createStatusCodeError(404);
      }

      res.send(game);
    } catch (err) {
      console.log(err);
    }
  });
}

// The error returned by this function is handled in the error handler middleware in app.js.
const createStatusCodeError = statusCode => {
  return Object.assign(new Error(), {
    statusCode
  });
}
