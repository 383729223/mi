import React, { Component } from 'react';
import { Link } from 'react-router-dom';
class Com extends Component {

  // goPageFn (type) {
  //   console.log(this)
  //   this.props.history.push('/userapp/' + type)
  // }

  render () {
    return (
      <div className = "container">
        <header className="header kindHeader">用户中心头部</header>
        <div className="content kindContent">
          <Link to="/registerapp/register">注册</Link>
          <Link to="/registerapp/login">登录</Link>
        </div>
      </div>
    )
  }

}

export default Com
