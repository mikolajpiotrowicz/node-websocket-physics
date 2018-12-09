import React from 'react'
import { Link } from 'react-router-dom';
import isNode from 'detect-node';

let world;
if(!isNode) {
  world = require('../helpers/World');
}


export default class Game extends React.Component {
  constructor() {
    super();

    this.state = {

    };
  }

  render() {
    return (
      <div>
        <div className='game-menu__quit'>
          <Link className='login__start-button' to='/'>quit</Link>
          <canvas id="GAME"></canvas>
        </div>
      </div>
    )
  }
}
