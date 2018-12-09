import React from 'react'
import setUpControls from "../helpers/Controls";
import { Link } from 'react-router-dom';
import MessageFactory from '../helpers/WebSocketMessageFactory';
import { MESSAGES_TYPES } from "../helpers/Constants";

export default class Menu extends React.Component {
  constructor() {
    super();
    this.sendUsername = this.sendUsername.bind(this);
    this.setUsername = this.setUsername.bind(this);
    this.state = {
      username: '',
    };
  }

  async componentDidMount() {
    setUpControls();
  }

  sendUsername() {
    const { username } = this.state;
    MessageFactory.createMessage(MESSAGES_TYPES.SEND.HANDSHAKE, {
      username
    });
  }

  setUsername(e) {
    this.setState({
      username: e.target.value
    })
  }

  render() {
    return (
      <div>
        <div className='login'>
          <input onChange={this.setUsername} className='login__name-input' type="text" spellCheck="false"/>
          <div className='login__btn-wrapper'>
            <Link onClick={this.sendUsername} className='login__start-button' to='/game'>Start</Link>
          </div>
        </div>
      </div>
    )
  }
}
