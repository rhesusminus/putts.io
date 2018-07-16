const { Game } = require('./models/Game')
const { all } = require('./db')

/*
module.exports = app => {
  app.get('/games', (req, res) =>
    all(Game, {})
      .run()
      .listen({
        onResolved: result => res.send(result),
        onRejected: error => res.send(error)
      })
  )
}
*/
