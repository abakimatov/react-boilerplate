import React, { Component } from 'react'
import { hot } from 'react-hot-loader'

class App extends Component {
  state = {
    count: 0
  }

  render() {
    return (
      <div>
        <h1>Count: {this.state.count}</h1>
        <button
          style={{
            width: 100,
            padding: '5px 0',
            border: 0,
            background: '#333',
            color: '#fff',
            borderRadius: 3
          }}
          onClick={() => this.setState({ count: this.state.count + 2 })}
        >
          Increment + 1
        </button>
      </div>
    )
  }
}

export default hot(module)(App)
