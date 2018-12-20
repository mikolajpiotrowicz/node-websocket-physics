import React from 'react'
import setUpControls from "../helpers/Controls";
import { Link } from 'react-router-dom';
import MessageFactory from '../helpers/WebSocketMessageFactory';
import { MESSAGES_TYPES } from "../helpers/Constants";

export default class Menu extends React.Component {
  constructor() {
    super();
    this.startGame = this.startGame.bind(this);
    this.setUsername = this.setUsername.bind(this);
    this.state = {
      username: '',
    };
  }

  async componentDidMount() {
    window.addEventListener('start-game', this.startGame);
    setUpControls();
  }

  startGame(ev) {
    const { username } = this.state;
    MessageFactory.createMessage(MESSAGES_TYPES.SEND.HANDSHAKE, {
      username
    });
    if(ev) {
      this.props.history.push('/game');
    }
  }

  setUsername(e) {
    this.setState({
      username: e.target.value
    })
  }

  render() {
    return (
      <div>
        <div className='login '>
          <div className='login__content-wrapper'>
            <input onChange={this.setUsername} className='login__name-input bounceIn' type="text" spellCheck="false"/>
            <div className='login__btn-wrapper'>
              <Link onClick={this.startGame} className='login__start-button bounceIn' to='/game'>Start</Link>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
