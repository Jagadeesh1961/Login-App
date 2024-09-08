import {Component} from 'react'
import Logout from '../Logout'

import './index.css'

import Login from '../Login'
import Message from '../Message'

class Home extends Component {
  state = {
    isLogin: false,
  }

  onButtonClick = () => {
    this.setState(prevState => ({isLogin: !prevState.isLogin}))
  }

  render() {
    const {isLogin} = this.state
    return (
      <div className="app-container">
        <div className="login-container">
          <Message isLogin={isLogin} />

          {!isLogin && <Login onButtonClick={this.onButtonClick} />}

          {isLogin && <Logout onButtonClick={this.onButtonClick} />}
        </div>
      </div>
    )
  }
}

export default Home
