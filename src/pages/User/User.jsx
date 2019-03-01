import React, { Component } from 'react';
import { Link } from 'react-router-dom';
class Com extends Component {

  // goPageFn (type) {
  //   console.log(this)
  //   this.props.history.push('/userapp/' + type)
  // }

  render () {
    return (
      <div className = "content">
        用户中心
        <Link to="/registerapp/register">注册</Link>
        <Link to="/registerapp/login">登录</Link>
        {/* <button onClick={ this.goPageFn.bind(this, 'register')}>注册</button>
        <button onClick={ this.goPageFn.bind(this, 'login')}>登录</button> */}
      </div>
    )
  }

}

export default Com
