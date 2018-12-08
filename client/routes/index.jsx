import React from 'react'
import {fetchInitialData, getInitialData} from "../helpers/initialData";
import { Stage, Layer, Rect, Text } from 'react-konva';
import Konva from 'konva';
const busyBraile = ['⠙', '⠸', '⢰', '⣠', '⣄', '⡆', '⠇', '⠋'];

export default class Index extends React.Component {
	constructor() {
		super();
		
		this.state = {
			...getInitialData(),
			counter: 0,
		};
	}
	
	async componentDidMount() {

	}
	

	
	render() {
        const width = document.documentElement.clientWidth;
        const height = document.documentElement.scrollHeight;
        console.log(width, height);
		return (
            <Stage width={width} height={height}>
                <Layer>
                    <Rect
                        x={20}
                        y={20}
                        width={50}
                        height={50}
                        fill={Konva.Util.getRandomColor()}
                        onClick={this.handleClick}
                    />
                </Layer>
            </Stage>
		)
	}
}
