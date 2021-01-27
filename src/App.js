import React from 'react';
import Pusher from 'pusher-js'
import './App.css';

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      messages: []
    }
  }
  componentDidMount() {
    const pusher = new Pusher('bed53111627effd33580', {
      cluster: 'us2',
      forceTLS: true
    })
    const channel = pusher.subscribe('chat')
    channel.bind('message', (message) => {
      this.setState({ messages: [...this.state.messages, message] })
    });
  }
  render() {
    return (
      <div className="App">
        <h1>My Pusher Chat Room</h1>
      </div>
    );
  }
}

export default App;
