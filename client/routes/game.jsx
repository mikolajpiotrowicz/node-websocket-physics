import React from 'react';
import Game from '../helpers/Game';
import { Link } from 'react-router-dom';

export default class GameWrapper extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <div className='game-menu__quit'>
          <Link onClick={Game.stopGame} className='' to='/'>quit</Link>
          <canvas id="GAME"></canvas>
        </div>
      </div>
    )
  }
}
