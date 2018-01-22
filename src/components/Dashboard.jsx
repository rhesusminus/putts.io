import React from 'react';
import { Header } from './';
import '../css/Dashboard.css';

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

const Dashboard = () => (
  <div className="Dashboard">
    <Header />
    <div className="container">
      <h3>Dashboard</h3>
      {games.map(game => (
        <div className="game-container" key={game.id}>
          {game.name}
        </div>
      ))}
    </div>
  </div>
);

export default Dashboard;
