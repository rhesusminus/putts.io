require('dotenv').config();
import { transaction } from 'objection';
import Game from '../models/Game';

const prefix = `${process.env.API_BASE}/games`;

export default router => {
  router.get(`${prefix}`, async (req, res) => {
    try {
      const games = await Game.query()
        .skipUndefined()
        .orderBy('id');

      res.send(games);
    } catch (e) {
      console.log(e);
    }
  });

  router.get(`${prefix}/:id`, async (req, res) => {
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
