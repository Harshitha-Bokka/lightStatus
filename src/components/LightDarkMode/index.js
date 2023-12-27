// Write your code here

import Component from 'react'

import './index.css'

class LightDarkMode extends Component {
  state = {lightStatus: 'on'}

  toggleMode = () => {
    this.setState(prevState => ({
      lightStatus: prevState.lightStatus === 'on' ? 'off' : 'on',
    }))
  }

  setup = () => {
    if (this.state.lightStatus === 'on') {
      return (
        <div className="card1">
          <h1 className="head1">Click To Change Mode</h1>
          <button className="but1" onClick={this.toggleMode}>
            Dark Mode
          </button>
        </div>
      )
    } else {
      return (
        <div className="card2">
          <h1 className="head2">Click To Change Mode</h1>
          <button className="but2" onClick={this.toggleMode}>
            Light Mode
          </button>
        </div>
      )
    }
  }

  render() {
    const {lightStatus} = this.state
    return <div className="container">{this.setup()}</div>
  }
}

export default LightDarkMode
