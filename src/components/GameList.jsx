import React from 'react';

const games = [
  {
    id: 1,
    name: 'game 1'
  },
  {
    id: 2,
    name: 'game 2'
  },
  {
    id: 3,
    name: 'game 3'
  }
];

const GameList = () => (
  <div className="GameList">
    <h3>GameList</h3>
    {games.map(game => (
      <div className="game-container" key={game.id}>
        {game.name}
      </div>
    ))}
  </div>
);

export default GameList;
