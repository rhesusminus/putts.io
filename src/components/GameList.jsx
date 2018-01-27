import React from 'react';
import { GameInfo } from './';

const games = [
  {
    id: 1,
    title: 'game 1',
    desc: 'this is game 1'
  },
  {
    id: 2,
    title: 'game 2',
    desc: 'this is game 2'
  },
  {
    id: 3,
    title: 'game 3',
    desc: 'this is game 3'
  }
];

const GameList = () => (
  <div className="GameList">
    <h3>GameList</h3>
    {games.map(game => (
      <div className="GameList-item" key={game.id}>
        <GameInfo {...game} />
      </div>
    ))}
  </div>
);

export default GameList;
