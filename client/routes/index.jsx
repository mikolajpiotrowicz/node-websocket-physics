import React from 'react'
import { getInitialData} from "../helpers/initialData";
import setUpControls from "../helpers/Controls";
import {Stage, Layer, Circle} from 'react-konva';

import {emitter} from "../helpers/WebSocketMessageHandler";

export default class Index extends React.Component {
  constructor() {
    super();

    this.state = {
      ...getInitialData(),
      x: 100,
      y: 100,
      color: '#375E97',
      players: [],
    };
  }

  async componentDidMount() {
    setUpControls();
    emitter.on('ENTITIES_POSITION', (e) => this.setState({ players: e }));
  }


  render() {
    const width = document.documentElement.clientWidth;
    const height = document.documentElement.scrollHeight;
    let players = null;
    if (this.state.players.length > 0) {
      players = this.state.players.map(p => (
        <Circle
          x={p.x}
          y={p.y}
          radius={15}
          fill={this.state.color}
          onClick={this.handleClick}
        />
      ))
    }
    return (
      <Stage width={width} height={height}>
        <Layer>
          {players}
        </Layer>
      </Stage>
    )
  }
}
